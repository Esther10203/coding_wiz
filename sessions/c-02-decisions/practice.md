# Practice: Decisions and loops

### 2.1 Pass or fail ⏱️ 6 min

Read a score with `scanf`. Print "Pass" when it is 50 or more, otherwise "Fail".

### 2.2 Fizz ⏱️ 8 min

Loop from 1 to 20. If the number divides by 3, print "Fizz". Otherwise print the number. Use `%`.

### 2.3 Sum 1 to N ⏱️ 10 min

Read `n`. Add the numbers from 1 to `n` and print the total.

<details>
<summary>Answer shape</summary>

```c
int total = 0;
for (int i = 1; i <= n; i++) {
    total = total + i;
}
```

</details>

### 2.4 Countdown ⏱️ 6 min

Read a positive `n` and count down to 1 with `while`.
