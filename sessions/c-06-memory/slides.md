---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 6: Structs and memory
### Intermediate

---

# Last time

- `&` is an address, `*` follows it
- Functions change a caller's variable through a pointer
- `a[i]` is `*(a + i)`

---

# A struct groups fields

```c
struct Sale {
    double temp;
    int sales;
};

struct Sale day;
day.temp = 27.0;
day.sales = 10;
```

One sale is a temperature and a count, kept together.

---

# malloc asks for memory

```c
#include <stdlib.h>

int *nums = malloc(4 * sizeof(int));
if (nums == NULL) {
    return 1;
}
```

`malloc` may fail. Always test for `NULL`.

---

# free what you malloc

```c
nums[0] = 10;
free(nums);
nums = NULL;
```

Every `malloc` needs one `free`. Do not use the pointer after `free`.

---

# Stack vs heap

| | Lives | You free it? |
|--|--------|----------------|
| `int n` | while the function runs | no |
| `malloc` | until you `free` | yes |

The heap is for a size you learn at run time.

---

# Try it · 2 min

Make a `struct Sale`, set `temp` and `sales`, and print both with `printf`.

---

# Remember

- A struct is one value with named fields
- Check `malloc` for `NULL`
- `free` exactly once, then do not use that pointer
