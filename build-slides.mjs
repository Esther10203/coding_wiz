// Builds sessions/<session>/presentation.html from slides.md and practice.md.
// Usage: npm run build            (all session folders)
//        npm run build 9th-October
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

const root = import.meta.dirname;

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Injected at the end of every preview: default look, no navigation away, auto-height.
const PREVIEW_RUNTIME = `<style>:where(body){font-family:system-ui,sans-serif;margin:16px;color:#222;font-size:16px}</style>
<script>
addEventListener("submit", (e) => e.preventDefault());
addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (a && !a.getAttribute("href").startsWith("#")) { e.preventDefault(); window.open(a.href, "_blank"); }
});
const report = () => parent.postMessage({ previewHeight: document.body.scrollHeight + 32 }, "*");
new ResizeObserver(report).observe(document.body);
addEventListener("load", report);
addEventListener("message", (e) => e.data === "measure" && report());
</script>`;

// ```html preview  → code + live result.
// ```css preview   → CSS code + result; HTML after a `/* demo */` line is rendered but not shown.
// In html previews, anything after a `<!-- demo -->` line is rendered but not shown.
marked.use({
  renderer: {
    code({ text, lang = "" }) {
      const [language, mode] = lang.split(/\s+/);
      if (mode !== "preview") return false;
      const [shown, hidden = ""] = text.split(/^\s*(?:<!--\s*demo\s*-->|\/\*\s*demo\s*\*\/)\s*$/m);
      const doc = language === "css" ? `<style>${shown}</style>${hidden}` : shown + hidden;
      return `<div class="demo">
<pre><code class="language-${language}">${escapeHtml(shown.trim())}</code></pre>
<div class="result"><div class="result-bar"><i></i><i></i><i></i><span>Result</span></div>
<iframe class="preview" title="Live result" srcdoc="${escapeHtml(doc + PREVIEW_RUNTIME)}"></iframe></div>
</div>`;
    },
  },
});

function splitLesson(md) {
  md = md.replace(/^---\n[\s\S]*?\n---\n/, "");
  return md.split(/\n---\n/).map((s) => s.trim()).filter(Boolean);
}

function splitPractice(md) {
  const slides = [];
  let current = [];
  let inFence = false;
  const flush = () => {
    const text = current.join("\n").replace(/^\s*---\s*$/gm, "").trim();
    if (text) slides.push(text);
    current = [];
  };
  for (const line of md.split("\n")) {
    if (line.startsWith("```")) inFence = !inFence;
    if (!inFence && /^#{2,3} /.test(line)) flush();
    current.push(line);
  }
  flush();
  return slides;
}

function renderSlide(md, part) {
  const isTitle = md.split("\n").every((l) => !l.trim() || l.startsWith("#") || l.startsWith("<!--") || l.startsWith("!["));
  const minutes = md.match(/⏱️\s*(\d+)\s*min/)?.[1];
  const attrs = [`data-part="${part}"`];
  if (minutes) attrs.push(`data-minutes="${minutes}"`);
  return `<section class="slide${isTitle ? " title" : ""}" ${attrs.join(" ")}><div class="content">${marked.parse(md)}</div></section>`;
}

function build(dir) {
  const lessonPath = join(dir, "slides.md");
  const practicePath = join(dir, "practice.md");
  const lesson = splitLesson(readFileSync(lessonPath, "utf8"));
  const practice = existsSync(practicePath) ? splitPractice(readFileSync(practicePath, "utf8")) : [];
  const title = lesson[0].match(/^# (.+)$/m)?.[1] ?? "Presentation";

  const slides = [
    ...lesson.map((s) => renderSlide(s, "lesson")),
    ...practice.map((s) => renderSlide(s, "practice")),
  ].join("\n");

  const template = readFileSync(join(root, "presentation-template.html"), "utf8");
  const html = template.replace("{{TITLE}}", title).replace("{{SLIDES}}", () => slides);
  writeFileSync(join(dir, "presentation.html"), html);
  console.log(`✔ ${dir.replace(root + "/", "")}/presentation.html (${lesson.length} lesson + ${practice.length} practice slides)`);
}

const only = process.argv[2];
const sessionsDir = join(root, "sessions");
const dirs = readdirSync(sessionsDir)
  .map((name) => join(sessionsDir, name))
  .filter((p) => statSync(p).isDirectory() && existsSync(join(p, "slides.md")))
  .filter((p) => !only || p.endsWith(only));

if (!dirs.length) console.log("No session folders with slides.md found.");
dirs.forEach(build);
