---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 8: Expert habits
### Careful C

---

# Last time

- Open a file, check it, close it
- `fgets` needs the array size
- `#include` and `#define` run before compile

---

# Split the program

| File | Holds |
|------|--------|
| `sale.h` | the struct and function prototypes |
| `sale.c` | the function bodies |
| `main.c` | `main` only |

A header is the **promise**. The `.c` file is the work.

---

# A small header

```c
#ifndef SALE_H
#define SALE_H

struct Sale {
    double temp;
    int sales;
};

double average_sales(const struct Sale *days, int n);

#endif
```

The include guard stops the header being pasted twice.

---

# Compile more than one file

```bash
gcc -Wall -Wextra -std=c11 -o sales main.c sale.c
```

Both `.c` files become one program. Do not compile the `.h` by itself.

---

# Habits that keep C safe

- Turn on `-Wall -Wextra`
- Pass the length with every array
- Check `malloc`, `fopen`, and `scanf`
- Use `const` when a function only reads
- Initialize variables before you read them

---

# const means "I will not change this"

```c
int total(const int *a, int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    return sum;
}
```

Readers can see the function does not write through `a`.

---

# Try it · 3 min

Move `struct Sale` into `sale.h`. Include it from `main.c`. Compile both files in one `gcc` command.

---

# Remember

- `.h` declares, `.c` defines, `main.c` starts
- Include guards once per header
- Expert C is small functions, checked errors, and warnings on
