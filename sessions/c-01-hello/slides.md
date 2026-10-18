---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 1: Hello, C
### Beginner

---

# Today's plan

| Time | What |
|------|------|
| 0:00 | What C is |
| 0:10 | Compile and run |
| 0:25 | Types and `printf` |
| 0:45 | Practice |
| 0:55 | Three things to remember |

---

# What C is

- C tells the computer **exactly** what to store and do
- A `.c` file is text. A **compiler** turns it into a program
- We use `gcc`

> You write the recipe. The compiler cooks it.

---

# Your first program

```c
#include <stdio.h>

int main(void) {
    printf("Hello, C\n");
    return 0;
}
```

`main` is where the program starts. `\n` starts a new line.

---

# Compile, then run

```bash
gcc -Wall -Wextra -std=c11 -o hello hello.c
./hello
```

`-Wall` shows warnings. Read them. A warning is a bug waiting.

---

# A value needs a type

| Type | Holds | Example |
|------|--------|---------|
| `int` | whole number | `int age = 12;` |
| `double` | decimal | `double temp = 27.5;` |
| `char` | one character | `char grade = 'A';` |

A type is the **size and kind** of box.

---

# Print with the right code

```c
int score = 18;
double price = 3.50;
printf("score %d\n", score);
printf("price %.2f\n", price);
```

`%d` = whole number. `%.2f` = decimal with 2 places.

---

# Read a number

```c
int n;
printf("Enter a number: ");
scanf("%d", &n);
printf("You typed %d\n", n);
```

`&n` means "the address of `n`". `scanf` writes into that box.

---

# Try it · 2 min

1. Make `hello.c` with your name in `printf`
2. Compile with `-Wall -Wextra`
3. Change the message and compile again

---

# Remember

- `main` starts the program
- Every value has a **type**
- Compile with warnings on, then run `./hello`
