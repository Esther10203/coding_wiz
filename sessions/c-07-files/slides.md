---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 7: Files
### Advanced

---

# Last time

- Structs group fields
- `malloc` / `free` manage heap memory
- A `NULL` check comes before you use the pointer

---

# Open, use, close

```c
FILE *f = fopen("notes.txt", "w");
if (f == NULL) {
    return 1;
}
fprintf(f, "Hello file\n");
fclose(f);
```

`"w"` writes a new file. `"r"` reads. Always `fclose`.

---

# Read a line

```c
char line[80];
FILE *f = fopen("notes.txt", "r");
if (f != NULL && fgets(line, 80, f) != NULL) {
    printf("%s", line);
}
fclose(f);
```

`fgets` stops at 79 characters so the array stays safe.

---

# Check every step

- `fopen` can fail: missing file, no permission
- `fgets` returns `NULL` at the end of the file
- Close the file on every path, including errors

---

# #include and #define

```c
#define MAX 80
#include <stdio.h>
```

`#define MAX 80` is a name for a number, replaced before compile. `#include` pastes a header.

---

# Try it · 2 min

Write one line to `hello.txt`, close it, open it again, and print the line.

---

# Remember

- `fopen` → use → `fclose`
- Test `fopen` and `fgets` for failure
- Give `fgets` the real size of the array
