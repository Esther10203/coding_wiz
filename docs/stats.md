# Coding Wizards: Repository stats

Refresh before every push and after each new session. Generated **2026-10-09**.

Counts exclude `node_modules`, `.git`, `package-lock.json`, and `.DS_Store`. Line counts cover text files (`.md`, `.mdc`, `.html`, `.css`, `.mjs`, `.json`).

## Top-level folders

| Folder | Folders | Files | Lines (approx.) | Role |
|--------|--------:|------:|----------------:|------|
| `sessions/` | 4 | 7 | 3.1k | One folder per Friday (includes generated `presentation.html` + images) |
| `docs/` | 1 | 2 | 0.3k | Curriculum + stats |
| `.agents/` | 5 | 6 | 0.2k | Agent rules, skills, workflows |
| `.cursor/` | 4 | 4 | 0.2k | Cursor mirror of `.agents/` |
| `typing/` | 1 | 1 | 0.1k | Typing practice game |

**Repo total (approx.):** ~26 files · ~4.4k lines.

## Sessions

| # | Folder | Topic | Slides |
|---|--------|-------|--------|
| 1 | `sessions/9th-October/` | HTML and CSS | 58 lesson + 25 practice (31 live previews) |

## How to refresh

```bash
for d in .agents .cursor docs sessions typing; do
  echo "$d $(find $d -type d | wc -l) folders, $(find $d -type f ! -name .DS_Store | wc -l) files"
done
find . -type f -not -path "./node_modules/*" -not -name package-lock.json \
  \( -name "*.md" -o -name "*.mdc" -o -name "*.html" -o -name "*.css" -o -name "*.mjs" -o -name "*.json" \) \
  -exec cat {} + | wc -l
```

Then update the tables above and the "Generated" date.
