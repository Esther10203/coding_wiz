# Practice: Pointers

### 5.1 Address and value ⏱️ 6 min

Make `int n = 42` and `int *p = &n`. Print `n`, `*p`, and change `n` through `*p`.

### 5.2 Swap ⏱️ 10 min

Write `void swap(int *a, int *b)`. In `main`, swap two variables and print them before and after.

<details>
<summary>Answer shape</summary>

```c
void swap(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
```

</details>

### 5.3 Zero an array ⏱️ 10 min

Write `void zero_all(int *a, int n)` that sets every element to 0. Call it with an array of 4 numbers and print the array after.

### 5.4 Explain & ⏱️ 5 min

In one sentence, say why `scanf("%d", n)` is wrong and `scanf("%d", &n)` is right.
