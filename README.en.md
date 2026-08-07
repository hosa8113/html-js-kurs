# 🎓 HTML & JavaScript Beginner Course

A project-based web development course for beginners — designed for first-year Swiss software developer apprentices ("Applikationsentwickler EFZ").

**From zero to a real web app in 12 lessons.**

🇩🇪 [Deutsche Version](README.md)

> **Note:** Course content (lessons, exercises, solutions) is written in **German**. This English README explains the structure and philosophy so international users can navigate and adapt the course.

---

## 📖 About This Course

This course teaches HTML, CSS, and JavaScript — not through dry theory, but through **real projects** you build yourself. By the end, you will have:

- ✅ Solid foundations in HTML, CSS, and JavaScript
- ✅ Experience with modern concepts (Flexbox, State Pattern, APIs)
- ✅ **12 completed projects** you can show off
- ✅ Your own final project for your portfolio

**No framework overload.** No 300 MB of `npm install`. Just browser + VS Code + your curiosity.

---

## 🎯 Who Is This Course For?

- **Software developer apprentices** in their first year
- **16-year-old beginners** with minimal prior knowledge
- **Career changers** learning web development from scratch
- **Self-learners** looking for a structured path

**Prerequisites:** None. You should be able to use a computer — that's it.

---

## 🛠️ What You'll Need

- **Computer** with Windows, Mac, or Linux
- **VS Code** ([free download](https://code.visualstudio.com/))
- **VS Code Extension "Live Server"** (by Ritwick Dey)
- **Chrome or Firefox** (for DevTools)
- From Lesson 6 onward, optional: **Git + GitHub account**

No additional setup, no Node.js, no npm. Everything runs directly in the browser.

---

## 📚 Course Structure

12 lessons of ~90 minutes each. Every lesson builds on the previous one.

### Part 1 — HTML & CSS (Lessons 1–4)

| # | Lesson | What You'll Build |
|---|--------|-------------------|
| 1 | **[HTML Basics](lektion-01-html-grundgeruest/)** | Personal profile page |
| 2 | **[CSS Basics](lektion-02-css-basics/)** | Styled version of the profile |
| 3 | **[Flexbox & Layout](lektion-03-flexbox-layout/)** | Dashboard with sidebar |
| 4 | **[Images, Links & Lists](lektion-04-bilder-links-listen/)** | Multi-page fan site |

### Part 2 — JavaScript (Lessons 5–8)

| # | Lesson | What You'll Build |
|---|--------|-------------------|
| 5 | **[JavaScript: First Steps](lektion-05-javascript-erste-zeilen/)** | Interactive mood tracker |
| 6 | **[Variables & if/else](lektion-06-variablen-if-else/)** | Number guessing game + Rock-Paper-Scissors |
| 7 | **[DOM Manipulation](lektion-07-dom-manipulation/)** | Click counter + shopping list |
| 8 | **[Forms & Events](lektion-08-formulare-events/)** | To-do list + registration form |

### Part 3 — Advanced (Lessons 9–12)

| # | Lesson | What You'll Build |
|---|--------|-------------------|
| 9 | **[Arrays & localStorage](lektion-09-arrays-localstorage/)** | Bookmark manager with dark mode |
| 10 | **[fetch & APIs](lektion-10-fetch-apis/)** | Weather app + Pokémon search |
| 11 | **[Code Quality & Refactoring](lektion-11-code-qualitaet-refactoring/)** | Clean up messy code |
| 12 | **[Final Project](lektion-12-abschlussprojekt/)** | Your own project 🎓 |

---

## 📂 Folder Structure per Lesson

Every lesson follows the same structure:

```
lektion-XX-topic/
├── README.md              → Theory, learning goals, instructions
├── beispiel/              → Complete example project
│   ├── index.html
│   ├── style.css
│   └── script.js
├── uebungen/              → 3 exercises with increasing difficulty
│   ├── uebung-1.md        → Easy, guided
│   ├── uebung-2.md        → Medium
│   └── uebung-3.md        → Free / creative
└── loesungen/             → Reference solutions for all exercises
    ├── uebung-1/          → With LOESUNG.md for explanations
    ├── uebung-2/
    └── uebung-3/
```

**Important:** Only look at reference solutions when you're truly stuck. The learning happens through **doing it yourself**.

### German Terms Cheat Sheet

Since folder and file names are German:

| German | English |
|--------|---------|
| Lektion | Lesson |
| Übung / uebung | Exercise |
| Lösung / loesung | Solution |
| Beispiel | Example |
| Grundgerüst | Basic structure |
| Aufgabe | Task |
| Anforderungen | Requirements |
| Ansatz | Approach |
| Bonus | Bonus |
| Musterlösung | Reference solution |

---

## 🚀 How to Go Through the Course

### For each lesson:

1. **Read the README.md** — understand theory and learning goals
2. **Look at `beispiel/`** — open in browser, explore the code
3. **Do Exercise 1** (guided, with instructions)
4. **Do Exercise 2** (medium difficulty)
5. **Do Exercise 3** (free / creative)
6. **If needed:** compare with reference solution
7. **Check off the checklist** at the end of the README
8. **Move to the next lesson**

### Pace

- **Recommended:** 1 lesson per week → 12 weeks total
- **Intensive:** 1 lesson per day → 12 days
- **On the side:** whenever fits — no pressure

More important than pace is **consistency**. Better 30 minutes every day than 5 hours on Sunday.

---

## 🎨 Course Principles

1. **Project-based** — from day 1 you build something visible
2. **No framework overload** — pure HTML/CSS/JS. Frameworks come in the next course.
3. **Small steps** — one concept per lesson
4. **Practice before theory** — do first, understand later
5. **Meaningful names** — descriptive variables, no `x` or `tmp`
6. **DevTools early** — from Lesson 2, F12 open, explore everything

---

## 👨‍🏫 For Teachers & Trainers

This course is **free to use** for teaching (see [License](#-license)).

- Each lesson is roughly a **90-minute session** (single or double period)
- Reference solutions can serve as a **grading baseline**
- The `AGENTS.md` in the root describes the course philosophy
- Exercise 3 in each lesson is intentionally open — usable as a **creative assessment**

Feedback and improvement suggestions welcome (via Issue or PR).

---

## 🎓 For Students / Self-Learners

- **Stick with it.** You don't learn programming in a week.
- **Read errors.** DevTools Console is your best friend.
- **Ask questions.** Google, Stack Overflow, ChatGPT — all fair game.
- **Reading code is also learning.** Study reference solutions — don't copy, understand.
- **Build your own things on the side.** The course gives you tools — what you make with them is yours.

---

## 🗺️ What Comes After

After this course, you have **solid fundamentals**. Next steps:

1. **Deepen Git & GitHub** — branches, pull requests
2. **Learn CSS Grid** — layout power beyond Flexbox
3. **A framework:** Vue.js, React, or Svelte
4. **TypeScript** — safer types
5. **Backend:** Node.js + Express + database
6. **DevOps:** deploy with Vercel, Netlify, GitHub Pages

But that's advanced material. The **fundamentals** — you've got them.

---

## 🤝 Contributing

Found a bug? Idea for improvement? New lesson?

- **Open an Issue** for discussion
- **Send a Pull Request** for concrete changes
- **Fork** and build your own version — backlink appreciated

Contributions in English are welcome, but course content will remain German (that's the target audience).

---

## 📄 License

This course is released under the **MIT License**. This means:

- ✅ Free for teaching and self-learning
- ✅ Free for corporate training
- ✅ Adapting and redistributing allowed
- ✅ Commercial use allowed
- ⚠️ No warranty

Nicety: a backlink to the repo would be appreciated but not required.

---

## 🙏 Acknowledgments

- Inspired by the many good (and bad) web courses on the internet
- Format inspired by "Learn X in Y minutes"
- Thanks to everyone who ever fixed a typo in HTML/CSS/JS docs

---

**Ready? Let's start with [Lesson 1 — HTML Basics](lektion-01-html-grundgeruest/) →**

(Note: lesson content is in German. Use the German terms cheat sheet above to navigate.)
