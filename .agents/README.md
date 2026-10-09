# `.agents`: portable agent configuration

This folder is the **canonical** agent ruleset for Coding Wizards. It works across tools:

- **Antigravity** reads `AGENTS.md` + `.agents/`
- **Cursor** uses `.cursor/rules/*.mdc` and `.cursor/skills/` (kept in sync with this folder)
- **Claude Code / Codex / others** read the root `AGENTS.md`

## Layout

```
AGENTS.md                      # Root entry (all tools). Start here
.agents/
├── README.md                  # This file
├── rules/
│   ├── docs-first.md          # always_on: read the curriculum before editing lessons
│   ├── git-commits.md         # always_on: no AI trailers
│   └── stats-before-push.md   # always_on: refresh docs/stats.md before push
├── skills/
│   └── ppt-kill-kiss/         # Slides: KILL + KISS. See SKILL.md
└── workflows/
    └── new-session.md         # /new-session: create the next Friday's folder
```

## Maintaining rules

1. Edit files under `.agents/rules/` or `.agents/skills/`.
2. Update the root `AGENTS.md` summary if behaviour changes.
3. Mirror the same content in `.cursor/rules/*.mdc` (`alwaysApply: true`) and `.cursor/skills/`.

## Agent skills

| Skill | Use when |
|-------|----------|
| `ppt-kill-kiss` | Lesson slides, practice slides, presentations: KILL (large and legible) + KISS (simple and short) |
