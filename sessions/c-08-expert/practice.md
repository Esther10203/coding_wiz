# Practice: Expert habits

Build one program from two `.c` files.

### 8.1 Header ⏱️ 10 min

Create `sale.h` with `struct Sale` and a prototype `double average_sales(const struct Sale *days, int n);`. Add an include guard.

### 8.2 Implementation ⏱️ 12 min

Create `sale.c`. Include `sale.h`. Write `average_sales` so it returns the mean of `sales`, or `0` when `n <= 0`.

### 8.3 Main ⏱️ 10 min

In `main.c`, fill three `struct Sale` values and print the average. Compile with:

```bash
gcc -Wall -Wextra -std=c11 -o sales main.c sale.c
```

### 8.4 Review ⏱️ 8 min

Read your three files out loud. For each function, say what it reads, what it changes, and what it returns. Fix any warning before you stop.
