---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 3: Functions
### Beginner

---

# Last time

- `if` chooses
- `for` counts
- `while` repeats while a test stays true

---

# A function is a named job

```c
int double_it(int n) {
    return n * 2;
}

int main(void) {
    printf("%d\n", double_it(7));
    return 0;
}
```

`int` before the name is what comes **back**.

---

# Parameters are inputs

```c
int add(int a, int b) {
    return a + b;
}
```

`a` and `b` exist only inside `add`. `main` does not see them.

---

# void means "no value back"

```c
void greet(void) {
    printf("Hello\n");
}
```

Call it with `greet();`. There is nothing to store.

---

# Declare before you call

```c
int square(int n);

int main(void) {
    printf("%d\n", square(4));
    return 0;
}

int square(int n) {
    return n * n;
}
```

The first line is a **prototype**: name and types, no body yet.

---

# Try it · 2 min

Write `int max2(int a, int b)` that returns the bigger number. Call it from `main`.

---

# Remember

- A function has a name, inputs, and a return type
- `return` sends a value back and leaves the function
- A prototype lets `main` call a function defined later
