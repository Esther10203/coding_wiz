# 🧙 Coding Wizards

A Friday coding class that teaches friends **vibe coding** (building software with AI agents), from typing fast all the way to deploying full-stack apps.

**Schedule:** Fridays, 1h30, from 9 October to 18 December 2026 (Demo Day). See [`docs/curriculum.md`](docs/curriculum.md).

## Folder structure

```
coding_wizards/
├── README.md                   # You are here
├── AGENTS.md                   # Instructions for AI agents (Cursor, Claude, Gemini…)
├── .agents/                    # Agent rules, skills, workflows (canonical)
├── .cursor/                    # Cursor mirror of .agents (rules + skills)
├── docs/
│   ├── curriculum.md           # The full plan: topics + homework per Friday
│   └── stats.md                # Repository stats
├── sessions/
│   └── 9th-October/            # One folder per Friday
│       ├── slides.md           # Lesson slides (markdown)
│       ├── practice.md         # Exercises with timers
│       ├── starter/            # Starter code for students
│       └── presentation.html   # Generated slideshow. Open this in class
├── typing/index.html           # Typing practice game
├── presentation-template.html  # Look and controls shared by every presentation
└── build-slides.mjs            # Turns slides.md + practice.md into presentation.html
```

## Teaching a session

1. Open `sessions/<date>/presentation.html` in a browser and press **F** for fullscreen.
2. Start with 25 minutes on `typing/index.html`.
3. Use **L** / **P** to switch between lesson and practice, and **T** to start an exercise timer.

## Making the next session

```bash
npm install          # once
# create sessions/16th-October/slides.md (and practice.md)
npm run build        # generates presentation.html for every session
```

AI agents can do this for you with the `/new-session` workflow (`.agents/workflows/new-session.md`). Slides follow the **KILL & KISS** skill: *Keep It Large and Legible*, *Keep it Simple and Short*.
