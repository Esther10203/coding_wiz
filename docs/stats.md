# Coding Wizards: Repository stats

Refresh before every push and after each new session. Generated **2026-10-18**.

Counts exclude `node_modules`, `.git`, `package-lock.json`, and `.DS_Store`. Line counts cover text files (`.md`, `.mdc`, `.html`, `.css`, `.mjs`, `.json`).

## Top-level folders

| Folder | Folders | Files | Lines (approx.) | Role |
|--------|--------:|------:|----------------:|------|
| `sessions/` | 12 | 31 | 7.3k | Friday session plus the C track (includes generated `presentation.html`) |
| `docs/` | 1 | 3 | 0.3k | Curriculum, C track, and stats |
| `.agents/` | 5 | 6 | 0.2k | Agent rules, skills, workflows |
| `.cursor/` | 4 | 4 | 0.2k | Cursor mirror of `.agents/` |
| `typing/` | 1 | 1 | 0.1k | Typing practice game |

**Repo total (approx.):** ~51 files · ~8.7k lines.

## Sessions

| # | Folder | Topic | Slides |
|---|---------|-------|--------|
| 1 | `sessions/9th-October/` | HTML and CSS | 58 lesson + 25 practice |
| C1 | `sessions/c-01-hello/` | Hello, C | 10 lesson + 5 practice |
| C2 | `sessions/c-02-decisions/` | Decisions and loops | 8 lesson + 5 practice |
| C3 | `sessions/c-03-functions/` | Functions | 8 lesson + 5 practice |
| C4 | `sessions/c-04-arrays/` | Arrays and strings | 8 lesson + 5 practice |
| C5 | `sessions/c-05-pointers/` | Pointers | 8 lesson + 5 practice |
| C6 | `sessions/c-06-memory/` | Structs and memory | 8 lesson + 5 practice |
| C7 | `sessions/c-07-files/` | Files | 8 lesson + 5 practice |
| C8 | `sessions/c-08-expert/` | Expert habits | 9 lesson + 5 practice |

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
