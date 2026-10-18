# Coding Wizards Curriculum: Oct 9 to Dec 18, 2026

**Goal:** by December, everyone can design, build, put online, and explain a real full-stack app, and understand the networking underneath it.

**Schedule:** Fridays only, 1h30 each. 11 sessions.

Only meeting once a week means **homework is where most of the learning happens.** Every week has daily typing plus one build task (about 2 to 3 hours in total).

## Every Friday looks like this

| Time | Block |
|------|-------|
| 0:00 to 0:25 | **Typing** (see typing track below) |
| 0:25 to 0:35 | **Homework review.** One or two people show their work on screen |
| 0:35 to 1:20 | **Deep session.** Teach for about 15 min, build for about 30 min |
| 1:20 to 1:30 | **Wrap-up.** Recap 3 key ideas, hand out homework |

**Rule for AI use:** in class, learn the concept by hand first. In homework, use AI to go further, but you must be able to explain every line it wrote.

---

## Typing track

**In class:** 25 min every Friday. **At home:** 10 to 15 min a day. Log your WPM in a shared sheet every Friday, and hold a 5-minute race at the end of each typing block.

| Fridays | Focus | Target |
|---------|-------|--------|
| Oct 9 to Oct 23 | Home row, posture, no looking. `typing/index.html` levels 1 and 2, [keybr.com](https://www.keybr.com) | 25 WPM, 95% accuracy |
| Oct 30 to Nov 13 | Full keyboard, numbers, code symbols `< > { } ( ) [ ] ; " = /`. Level 4, plus [speedcoder.net](https://www.speedcoder.net) | 30 to 35 WPM |
| Nov 20 to Dec 4 | Editor shortcuts and terminal commands; fast, clear AI prompts (level 3) | 35+ WPM |
| Dec 11 to Dec 18 | [monkeytype.com](https://monkeytype.com) races. Typing championship final on Demo Day | 40+ WPM |

---

## Overview

| # | Friday | Topic |
|---|--------|-------|
| 1 | Oct 9 | HTML and CSS basics |
| 2 | Oct 16 | Layout and responsive design (Figma to code) |
| 3 | Oct 23 | Terminal, Git, GitHub, and your first deployment |
| 4 | Oct 30 | JavaScript basics |
| 5 | Nov 6 | JavaScript in the browser: DOM, events, APIs |
| 6 | Nov 13 | Images (Photoshop), domains, DNS, HTTPS |
| 7 | Nov 20 | Networking: how the internet works |
| 8 | Nov 27 | Backend: Node.js, APIs, databases |
| 9 | Dec 4 | React |
| 10 | Dec 11 | Mobile (React Native), system design, final project kickoff |
| 11 | Dec 18 | 🎉 Demo Day |

---

## 1. Oct 9: HTML and CSS basics (today)

**Session**
- What a website is: HTML for the content, CSS for the style, JS for behaviour. Connect it to last session: a Figma design is the plan, and HTML/CSS is the build.
- Tags: `h1`–`h3`, `p`, `a`, `img`, `ul/li`, `div`, `button`
- Hand-write a small `index.html` and open it in the browser
- CSS: `color`, `background`, `font-family`, `font-size`, `padding`, `margin`, `border-radius`
- Right-click a real website, choose **Inspect**, and change things live

**Homework**
- Build an "About Me" page by hand with a heading, photo, paragraph, list of hobbies, link, and contact form
- Use semantic tags: `header`, `nav`, `main`, `footer`
- Style it with classes and at least 8 CSS properties, including a `:hover` effect
- Bonus: ask AI to "improve the design". Then compare its version with yours and learn 2 new things from it

---

## 2. Oct 16: Layout and responsive design

**Session**
- The box model (content, padding, border, margin) and `box-sizing: border-box`
- Flexbox: `justify-content`, `align-items`, `gap`, `flex-wrap`
- Grid: `grid-template-columns`, `repeat`, `fr`
- Responsive design: the viewport meta tag, media queries, the DevTools phone view
- Turn one of last time's Figma designs into code

**Homework**
- Finish [Flexbox Froggy](https://flexboxfroggy.com) and [Grid Garden](https://cssgridgarden.com)
- Turn your Figma design into a full page that works on phone and desktop
- Recreate one section of a real website you like

---

## 3. Oct 23: Terminal, Git, GitHub, and your first deployment

**Session**
- Terminal: `pwd`, `ls`, `cd`, `mkdir`, `touch`, `mv`, `rm`
- Git: `init`, `add`, `commit`, `status`, `log`; GitHub with `push` and `clone`
- Deploy with GitHub Pages or Netlify: your site is live on the internet 🎉

**Homework**
- Put the About Me and Figma pages on GitHub with at least 10 meaningful commits
- Both pages live, with links shared in the group chat
- Practise the terminal: create, move, and delete a folder structure using only commands

---

## 4. Oct 30: JavaScript basics

**Session**
- `let`/`const`, strings, numbers, booleans, `console.log`
- `if/else`, loops, functions
- Arrays (`push`, `map`, `filter`) and objects
- Using AI as a tutor: "explain this code line by line"

**Homework**
- 10 exercises: tip calculator, FizzBuzz, reverse a word, find the largest number, count vowels, and so on
- A "guess the number" game
- A shopping list as an array of objects, with a function that adds up the total price

---

## 5. Nov 6: JavaScript in the browser

**Session**
- The DOM: `querySelector`, `textContent`, `classList`, `addEventListener`
- Build a to-do app together, saved with `localStorage`
- APIs and JSON: `fetch` and `async/await` with a free API

**Homework**
- Finish the to-do app and add your own feature (filters, editing, dark mode)
- A live-data page: weather, Pokédex, or random jokes
- Add a dark mode toggle to your portfolio

---

## 6. Nov 13: Images, domains, DNS, HTTPS

**Session**
- Photoshop or [Photopea](https://www.photopea.com): layers, crop, resize, remove background, export
- Web formats (PNG, JPG, WebP, SVG) and why image size affects speed
- Domains, DNS records (A, CNAME), connecting a domain to Netlify or Vercel, HTTPS certificates

**Homework**
- Make a logo, a banner, and optimised photos, then add them to your portfolio
- (Optional) buy a cheap domain and connect it
- Write half a page: "What happens when I type my website's URL?"

---

## 7. Nov 20: Networking

**Session**
- IP addresses, routers, packets, the client and server model
- DNS lookups (`nslookup`, `dig`), HTTP methods, status codes (200, 404, 500), ports (80, 443, 22, 3000)
- TCP vs UDP; the TCP/IP layers in plain words
- Security: HTTPS/TLS, firewalls, password hashing, phishing, never committing secrets
- The DevTools Network tab, live

**Homework**
- `traceroute` to 3 sites in different countries and compare the hops
- Inspect the Network tab on 3 sites and list the requests, status codes, and sizes
- Draw the journey: browser → DNS → server → response

---

## 8. Nov 27: Backend, Node.js and databases

**Session**
- What a server is; `npm`; a "Hello" API with Express
- SQL basics with SQLite: `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- Connect a front end to the API: a guestbook
- `.env` files and keeping secrets out of Git

**Homework**
- An API with 3+ routes and a database (movies, books, or recipes)
- Deploy it to Render or Railway
- Your front end loads data from your own deployed API

---

## 9. Dec 4: React

**Session**
- Why frameworks exist; create a Vite + React app
- Components, props, `useState`, lists, forms, `useEffect` with fetch
- Build with the AI agent, then review its changes together
- Deploy to Vercel

**Homework**
- Rewrite the to-do app in React
- A React app that uses your Week 8 API, deployed
- Start thinking about final project ideas and teams

---

## 10. Dec 11: Mobile, system design, final project kickoff

**Session**
- React Native with Expo: run an app on your own phone (chosen over Flutter because you already know React and JS)
- How real systems work: front end, back end, database, cache, CDN, load balancer. Draw WhatsApp's architecture together
- How engineers work: branches, pull requests, code review, issues
- Form teams of 2 or 3 and choose a final project

**Final project (homework for this week)**

Build a deployed full-stack app with a React or React Native front end, an API, a database, a live URL, and a README with an architecture diagram. Use branches and pull requests.

Ideas: a class quiz, a recipe sharer, a habit tracker, an event RSVP site, a bookshelf.

---

## 11. Dec 18: 🎉 Demo Day

- Typing championship final (25 min)
- Each team presents for 5 minutes: show the app, show the architecture diagram, and explain one hard bug they fixed
- Certificates and prizes

---

## Skills checklist (by Dec 18)

- [ ] Touch type at 40+ WPM
- [ ] Turn a Figma design into a responsive HTML/CSS page
- [ ] Use the terminal, Git, and GitHub
- [ ] Write JavaScript: logic, DOM, fetch
- [ ] Prepare and optimise images
- [ ] Deploy a website with a custom domain and HTTPS
- [ ] Explain IP, DNS, HTTP, ports, and TLS
- [ ] Build an API with a database and deploy it
- [ ] Build React and React Native apps
- [ ] Draw a system architecture diagram
- [ ] Use AI agents well: clear prompts, reviewing their code, debugging with them

## C programming track

A separate path, not a replacement for the Friday web classes. Full map: `docs/c-curriculum.md`.

| # | Folder | Level | Topic |
|---|--------|-------|-------|
| 1 | `sessions/c-01-hello/` | Beginner | First program, types, `printf` |
| 2 | `sessions/c-02-decisions/` | Beginner | `if`, `while`, `for` |
| 3 | `sessions/c-03-functions/` | Beginner | Functions and scope |
| 4 | `sessions/c-04-arrays/` | Intermediate | Arrays and strings |
| 5 | `sessions/c-05-pointers/` | Intermediate | Pointers |
| 6 | `sessions/c-06-memory/` | Intermediate | Structs and `malloc` |
| 7 | `sessions/c-07-files/` | Advanced | Files and the preprocessor |
| 8 | `sessions/c-08-expert/` | Expert habits | Modules, headers, careful C |

---

## After December (2027)

TypeScript → testing → Docker → Linux servers and SSH → cloud (AWS) → CI/CD → data structures and algorithms → interview preparation.
