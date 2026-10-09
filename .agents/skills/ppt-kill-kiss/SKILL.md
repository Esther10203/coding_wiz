---
name: ppt-kill-kiss
description: >-
  Builds and revises teaching slide decks (sessions/*/slides.md, practice.md,
  presentation.html) using KILL and KISS. Use when creating or editing slides,
  lesson decks, practice slides, Marp markdown, or when the user mentions
  presentation, slides, or KILL/KISS.
---

# Slide decks: KILL & KISS

Use this skill for **any** Coding Wizards deck: `sessions/<date>/slides.md`, `sessions/<date>/practice.md`, and the generated `presentation.html`.

## Core logic

**KILL:** Keep It Large and Legible

**KISS:** Keep it Simple and Short

Every slide must pass both. If it fails either, rewrite it before shipping.

---

## When to load

- User asks for slides, a presentation, a lesson deck, or practice slides
- Creating a new `sessions/<date>/` folder
- Converting a long doc or reference material into a deck
- User says KILL, KISS, large text, or "too much on the slide"

---

## Workflow

1. **Audience and goal:** one sentence. Who is watching (beginner friends learning to code) and what they should remember.
2. **Outline first:** title → recap of last session → concept sections → try-it → build time → homework → recap. One idea per slide.
3. **Draft** `slides.md` (slides separated by `---`) and `practice.md` (one `###` heading per exercise, with `⏱️ N min` for a timer).
4. **Build:** run `npm run build` to regenerate `presentation.html`. Never hand-edit the HTML.
5. **Self-check:** open the presentation fullscreen, walk every slide, and split or cut any dense one.

---

## KILL: Keep It Large and Legible

| Rule | Do | Don't |
|------|----|--------|
| Type size | Big titles; body readable from the back of the room | Tiny footnotes as the main content |
| Contrast | Light text on the deep purple theme | Grey-on-grey, thin text on photos |
| Density | Generous margins; space around bullets | Walls of text; cramped tables |
| Visuals | **One** clear image or diagram per slide, shown **fully** | Collages, cropped photos |
| Tables | At most ~5 rows and 3 columns; short cell text | Spreadsheet dumps |

**Hard limits:**

- At most **~5 bullets** per slide; each bullet **≤ 2 short lines**
- Code blocks at most **~15 lines**, and only the lines that teach the idea
- Images: `object-fit: contain`, never `cover`; the bottom bar must not cover them

---

## KISS: Keep it Simple and Short

| Rule | Do | Don't |
|------|----|--------|
| One idea | One concept per slide (one tag, one property group) | Links + images + lists on one slide |
| Words | Short phrases; verbs first | Paragraphs, jargon |
| Structure | Headline → small example → one takeaway | Nested bullets 3+ levels deep |
| Length | Split heavy topics into 2 slides | "Just one more bullet…" |
| Reference | Put deep detail in the session's markdown or `docs/` | Reading documentation aloud from the slides |

**Hard limits:**

- Prefer **≤ 40 words** of prose per content slide (code examples don't count)
- No slide should need scrolling at 1280×720
- Section dividers = title + one line only

---

## Slide types for teaching decks

1. **Title:** session number, topic, date
2. **Concept:** short title + one code example + one takeaway line
3. **Comparison:** small table (Do / Don't, Block / Inline)
4. **Section divider:** level badge (🟢 🟡 🟠 🔴) + title
5. **Try it:** a 2-minute mini task with a checklist
6. **Practice exercise:** `###` heading with `⏱️ N min`, task, optional `<details>` answers
7. **Homework and recap:** at most 3 key ideas

---

## Coding Wizards defaults

- Audience: beginners learning vibe coding; friendly, plain English
- Theme: deep purple background `#1e1b2e`, lavender headings `#c4b5fd`, pink accents `#f9a8d4`; practice slides use navy `#17222e` with sky-blue headings
- Template: `presentation-template.html` (shared by every session)
- Controls: ← → / Space, `L` lesson, `P` practice, `T` timer, `F` fullscreen
- Rule: teach by hand first, then show the AI prompt for the same idea

---

## Anti-patterns

- Pasting a full reference (every HTML tag) onto stage slides; keep it in markdown notes
- Code blocks longer than the screen
- Multiple competing images on one slide
- The same example repeated on consecutive slides
- Animating every bullet

---

## Done checklist

- [ ] Every slide has **one** clear idea
- [ ] **KILL:** large, legible, high contrast
- [ ] **KISS:** simple, short, no scrolling
- [ ] Code blocks ≤ ~15 lines
- [ ] Every practice exercise has a `⏱️` time
- [ ] `npm run build` was run and `presentation.html` checked fullscreen
