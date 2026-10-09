# 🛠️ Practice: HTML and CSS (9 October)

Work through these in order. Each exercise has a ⏱️ time guide. **Write the code by hand. No AI until the 🤖 exercises.**

Open `starter/index.html` in your editor and in your browser. Save your work and refresh the browser to see changes.

---

## 🟢 Level 1: Warm-up (in class)

### 1.1 Hello page ⏱️ 3 min
Create `hello.html` from scratch (type `!` then press Tab). Add:
- A `<title>` with your name
- An `<h1>` saying "Hello, I'm ___"
- Two `<p>` paragraphs about you

### 1.2 Text formatting ⏱️ 3 min
In one paragraph, use `<strong>`, `<em>`, and `<br>`. Add an `<hr>` between your two paragraphs.

### 1.3 Links ⏱️ 3 min
Add 3 links:
- One to your favourite website, opening in a **new tab**
- One `mailto:` email link
- One that jumps to a section further down the page (`href="#hobbies"` and `id="hobbies"`)

### 1.4 Images ⏱️ 3 min
- Add an image from `https://picsum.photos/400` with a good `alt` text
- Make an `images` folder, put a photo in it, and show it with `src="images/yourphoto.jpg"`

### 1.5 Lists ⏱️ 3 min
- An unordered list of 3 hobbies
- An ordered list of your morning routine
- A **nested** list: "Food" with sub-items "Breakfast" and "Lunch"

---

## 🟡 Level 2: Structure (in class)

### 2.1 Fix the broken code 🐛 ⏱️ 5 min
Find **6 mistakes** in this code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  <body>
    <h1>Welcome</h2>
    <p>I love <strong>coding</p></strong>
    <img src="cat.jpg">
    <a href=google.com>Google</a>
    <ul>
      <li>One
      <li>Two</li>
    </ul>
  </body>
</html>
```

<details>
<summary>Show answers</summary>

1. `</head>` is missing before `<body>`
2. `<h1>` is closed with `</h2>`
3. Tags close in the wrong order: should be `</strong></p>`
4. `<img>` has no `alt`
5. The link needs `https://` and quotes: `href="https://google.com"`
6. The first `<li>` isn't closed

(Bonus: `<html>` should have `lang="en"`, and `<meta charset>` is missing.)
</details>

### 2.2 Semantic layout ⏱️ 7 min
Using `starter/index.html`, fill in the `header`, `nav`, `main` (with 2 `section`s), and `footer`. Make the nav links jump to each section.

### 2.3 Table ⏱️ 5 min
Make a table of today's typing scores with the columns **Name | WPM | Accuracy** and 3 rows. Use `thead`, `tbody`, and `th`.

### 2.4 Sign-up form ⏱️ 8 min
Build a form with:
- Name (required)
- Email (`type="email"`, required)
- Password (`minlength="8"`)
- Age (`type="number"`, min 10, max 99)
- Favourite colour (`type="color"`)
- Country (`<select>` with 3 options)
- Experience: radio buttons for Beginner / Intermediate / Pro
- A checkbox: "I agree to the rules"
- A submit button

Every input needs a `<label>`. Test it: try to submit it empty and see what happens.

---

## 🎨 Level 3: CSS (in class)

Use `starter/style.css`.

### 3.1 Colours and fonts ⏱️ 5 min
- Pick a font from [fonts.google.com](https://fonts.google.com) and add it
- Set the page `background` and text `color`
- Give your `h1` a different colour and make it centred

### 3.2 Box model ⏱️ 5 min
Style each `section` as a **card**: white background, `padding: 24px`, `margin: 20px auto`, `max-width: 700px`, `border-radius: 16px`, and a `box-shadow`.

### 3.3 Hover effects ⏱️ 5 min
- Links change colour on `:hover`
- Cards lift up on hover (`transform: translateY(-5px)` plus `transition`)
- The button gets `cursor: pointer` and a hover colour

### 3.4 Copy the design 🎯 ⏱️ 10 min
Recreate this profile card using only HTML and CSS:

```html preview
<!-- Your goal: make a card that looks like this →
     round photo (border-radius: 50%), bold name,
     grey subtitle, one filled + one outlined button -->
<!-- demo -->
<style>
  body { background: #f3f0ff; display: flex; justify-content: center; padding: 10px; }
  .card { background: white; width: 260px; padding: 24px; border-radius: 16px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,.12); }
  .card img { width: 90px; height: 90px; border-radius: 50%; object-fit: cover; }
  .card h3 { margin: 10px 0 2px; }
  .card p { color: #777; margin: 0 0 16px; }
  .card button { padding: 8px 16px; border-radius: 8px; border: 2px solid #8b5cf6; font-weight: 600; cursor: pointer; }
  .fill { background: #8b5cf6; color: white; } .outline { background: white; color: #8b5cf6; }
</style>
<div class="card">
  <img src="https://picsum.photos/id/64/200/200" alt="Profile photo">
  <h3>Esther Tan</h3>
  <p>Web Developer in Training</p>
  <button class="fill">Follow</button> <button class="outline">Message</button>
</div>
```

---

## 🔴 Level 4: Challenges (for fast finishers)

### 4.1 FAQ with no JavaScript
Make an FAQ section with 3 `<details>`/`<summary>` questions about yourself.

### 4.2 Keyboard-only test ♿
Unplug your mouse (or don't touch it). Can you use your whole page with **Tab**, **Enter**, and **Space**? Fix anything you can't reach.

### 4.3 Validator
Paste your code into [validator.w3.org/#validate_by_input](https://validator.w3.org/#validate_by_input) and fix every error until it shows **0 errors**.

### 4.4 Embed
Embed a YouTube video and a Google Map of your city with `<iframe>`.

### 4.5 Speed round ⚡ (group game)
The teacher calls out an element and everyone types it. The first correct answer wins a point.
- "A link to YouTube that opens in a new tab"
- "An image with alt text"
- "An email input that's required"
- "An ordered list with 3 items"
- "A button that says Send"

---

## 🤖 Level 5: Vibe coding (end of class, 10 min)

Now use AI (Copilot, Cursor, or a free chat), with **your own code** as the starting point.

1. **Explain:** paste your page and ask *"Explain my HTML line by line and point out any mistakes."*
2. **Improve:** *"Make my page look more modern. Keep my content and explain every CSS change."*
3. **Compare:** what did the AI do that you didn't know about? Write down **2 new things you learned** and share them with the group.

⚠️ If you can't explain a line the AI wrote, ask it to explain, or delete the line.

---

## 🏠 Homework

Finish your **About Me page** (`starter/` folder) so it has:
- [ ] `header` with your name, and a `nav` with links to each section
- [ ] An About section with a photo (with `alt`) and a bio
- [ ] A Hobbies section with a list
- [ ] A typing scores `table`
- [ ] A contact `form` with validation
- [ ] A `footer` with © 2026
- [ ] At least 8 CSS properties, cards, and hover effects
- [ ] 0 errors on the W3C validator
- [ ] ⭐ Bonus: an FAQ with `<details>`, the profile card from 3.4
- [ ] ⌨️ Typing 10 min a day. Bring your best WPM next Friday
