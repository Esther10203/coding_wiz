---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 2: Decisions and loops
### Beginner

---

# Last time

- `main` starts the program
- `int`, `double`, `char` are boxes
- `printf` and `scanf` move values in and out

---

# if / else

```c
if (score >= 10) {
    printf("Pass\n");
} else {
    printf("Try again\n");
}
```

`>=` asks a yes/no question. The braces are the answer.

---

# Compare carefully

| Symbol | Means |
|--------|--------|
| `==` | equal |
| `!=` | not equal |
| `<` `>` | smaller, bigger |
| `&&` | and |
| `\|\|` | or |

`=` stores a value. `==` compares two values.

---

# while: repeat while true

```c
int n = 3;
while (n > 0) {
    printf("%d\n", n);
    n = n - 1;
}
```

If the test never becomes false, the loop never ends.

---

# for: count on purpose

```c
for (int i = 1; i <= 5; i++) {
    printf("%d\n", i);
}
```

Start at 1. Keep going while `i <= 5`. Add 1 each time.

---

# Try it · 2 min

Print the numbers 1 to 10 with a `for` loop. Then print only the even ones (`i % 2 == 0`).

---

# Remember

- `if` chooses a path
- `==` compares, `=` stores
- `for` is a counted loop. `while` repeats while a test is true
