# Coding Wizards: Agent instructions

Cross-tool rules for **Cursor**, **Antigravity**, **Claude Code**, **Gemini CLI**, and other coding agents.
Modular copies live in `.agents/rules/`. Keep this file and `.agents/` in sync when rules change.

**Project:** Coding Wizards. A Friday coding class that teaches friends vibe coding (AI agent coding), from typing and HTML up to deployment, networking, and full-stack apps. See `README.md`.

---

## 1. Docs first (every task)

Before creating or editing lessons, read:

1. `docs/curriculum.md`: the Friday schedule (Oct 9 to Dec 18), topics, and homework
2. The previous session folder in `sessions/`, so the new lesson builds on it

- Stay aligned with the curriculum; don't add topics silently.
- If a session changes, update `docs/curriculum.md` too.

---

## 2. Session format

Each Friday has its own folder: `sessions/<day>-<Month>/` (for example `sessions/16th-October/`).

| File | Purpose |
|------|---------|
| `slides.md` | Lesson slides, separated by `---` |
| `practice.md` | Exercises: one `###` heading each, with `⏱️ N min` |
| `starter/` | Optional starter code for students |
| `presentation.html` | **Generated** by `npm run build`. Don't edit by hand |

Every session runs 1h30: 25 min typing → 10 min homework review → 45 min teach and build → 10 min wrap-up.

---

## 3. Teaching principles

- Beginner-friendly, plain English; explain every new term the first time it appears.
- Teach **by hand first**, then show how to do it with AI.
- Students must be able to explain every line the AI writes.
- Decks follow the `ppt-kill-kiss` skill: **KILL** (Keep It Large and Legible) and **KISS** (Keep it Simple and Short).

---

## 4. Git commits

- Use plain `git commit -m "type(scope): summary"` (`feat`, `fix`, `docs`, `chore`, `refactor`).
- **Never** add AI attribution trailers (`Co-authored-by: Cursor`, `Made-with: Cursor`, or similar) unless the user explicitly asks.
- Only commit when the user asks. Do not force-push `main`.
- **Before `git push`:** refresh and commit `docs/stats.md` (see `.agents/rules/stats-before-push.md`).

---

## 5. Tool-specific paths

| Tool | Reads |
|------|--------|
| **Cursor** | `.cursor/rules/*.mdc` (mirrors `.agents/rules/`), `.cursor/skills/` |
| **Antigravity** | `AGENTS.md`, `.agents/rules/`, `.agents/skills/`, `.agents/workflows/` |
| **Claude Code / Codex / others** | `AGENTS.md` |

**Skills:** `.agents/skills/ppt-kill-kiss/`: slide decks with KILL + KISS. Mirrored in `.cursor/skills/`.

**Workflows:** `.agents/workflows/new-session.md`: create the next Friday's session folder.

Full layout: `.agents/README.md`.
