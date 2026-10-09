---
description: Create the next Friday's session folder (slides, practice, starter, presentation)
---

# /new-session

1. Read `docs/curriculum.md` and find the next Friday's topic and homework.
2. Read the previous `sessions/<date>/slides.md` and `practice.md` to continue from them (recap slide, homework review).
3. Create `sessions/<day>-<Month>/` (for example `sessions/16th-October/`) with:
   - `slides.md`: title → recap → concepts by level (🟢 🟡 🟠 🔴) → AI prompts → homework → recap
   - `practice.md`: exercises with `### N.N Name ⏱️ N min`, answers in `<details>`, plus a 🤖 vibe coding exercise and homework
   - `starter/`: only if students need starter files
4. Follow the `ppt-kill-kiss` skill (`.agents/skills/ppt-kill-kiss/SKILL.md`).
5. Run `npm run build` and open `sessions/<date>/presentation.html` to check it fullscreen.
6. Update `docs/curriculum.md` if anything changed.
