# C programming track

**Goal:** read and write C by hand, from a first program to a small multi-file project, and explain every line.

This track sits beside the Friday web curriculum. It does not replace HTML, JavaScript, or the demo-day app.

**Rule:** type the code yourself first. Then ask an AI to explain a line. You must be able to say what each line does.

Compile every program with warnings on:

```bash
gcc -Wall -Wextra -std=c11 -o program program.c
./program
```

## Map

| # | Session | Level | You can… |
|---|---------|-------|----------|
| 1 | [Hello, C](../sessions/c-01-hello/) | Beginner | Compile `main`, print text, store a number |
| 2 | [Decisions and loops](../sessions/c-02-decisions/) | Beginner | Branch and repeat |
| 3 | [Functions](../sessions/c-03-functions/) | Beginner | Split work into named functions |
| 4 | [Arrays and strings](../sessions/c-04-arrays/) | Intermediate | Store lists and text |
| 5 | [Pointers](../sessions/c-05-pointers/) | Intermediate | Use an address to reach a value |
| 6 | [Structs and memory](../sessions/c-06-memory/) | Intermediate | Group fields and allocate memory |
| 7 | [Files](../sessions/c-07-files/) | Advanced | Read and write files safely |
| 8 | [Expert habits](../sessions/c-08-expert/) | Expert habits | Split a program into `.h` and `.c` files |

"Expert" here means careful, readable C you can maintain. It is not operating-system or compiler design.

## How a lesson runs

| Time | Block |
|------|-------|
| 10 min | Recap the previous lesson on screen |
| 25 min | Teach from the slides, typing each example |
| 20 min | Practice exercises |
| 5 min | Three ideas to remember, plus homework |

Open `presentation.html` in a session folder. Keys: ← →, `L` lesson, `P` practice, `F` fullscreen.
