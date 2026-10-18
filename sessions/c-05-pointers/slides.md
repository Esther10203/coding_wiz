---
marp: true
theme: default
paginate: true
---

# 🧙 Coding Wizards
## C · Lesson 5: Pointers
### Intermediate

---

# Last time

- An array is a row of boxes, starting at index 0
- A string ends at `'\0'`
- Pass the length with the array

---

# A pointer holds an address

```c
int score = 18;
int *p = &score;
printf("%d\n", *p);
*p = 20;
```

`&` takes the address. `*` follows the address to the value.

---

# Why scanf needed &

```c
scanf("%d", &n);
```

`scanf` must know **where** to write. `&n` is that place.

---

# A function can change a variable

```c
void bump(int *n) {
    *n = *n + 1;
}

int x = 3;
bump(&x);
```

Without a pointer, `bump` would only change its own copy.

---

# An array name is an address

```c
int a[3] = {1, 2, 3};
printf("%d\n", *a);
printf("%d\n", *(a + 1));
```

`a[1]` and `*(a + 1)` are the same box.

---

# Try it · 2 min

Write `void swap(int *a, int *b)` and swap 4 and 9. Print both after the call.

---

# Remember

- `p` is an address. `*p` is the value there
- `&x` is the address of `x`
- Pass `&` when a function must change your variable
