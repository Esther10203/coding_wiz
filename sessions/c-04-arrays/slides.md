---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 4: Arrays and strings
### Intermediate

---

# Last time

- Functions name a job
- Parameters are inputs
- `return` sends one value back

---

# An array is a row of boxes

```c
int scores[4] = {10, 13, 15, 17};
printf("%d\n", scores[0]);
scores[2] = 16;
```

The first index is **0**. The last index here is **3**.

---

# Walk the row

```c
int scores[4] = {10, 13, 15, 17};
int total = 0;
for (int i = 0; i < 4; i++) {
    total = total + scores[i];
}
```

Stay inside `0` to `3`. Index `4` is outside the array.

---

# A string is characters plus `'\0'`

```c
char name[] = "Ada";
printf("%s\n", name);
```

`"Ada"` is `'A'`, `'d'`, `'a'`, and a hidden zero that marks the end.

---

# Length, by hand

```c
int len = 0;
while (name[len] != '\0') {
    len++;
}
```

`strlen` from `<string.h>` does this. You should know what it counts.

---

# Try it · 2 min

Make an array of 5 temperatures. Print each one. Then print the largest.

---

# Remember

- Index 0 is the first box
- Never read past the last index
- A string ends at `'\0'`
