# Practice: Hello, C

Type every program yourself. Compile with `gcc -Wall -Wextra -std=c11`.

### 1.1 Hello with your name ⏱️ 5 min

Write `hello.c` that prints two lines: your name, then "I am learning C".

### 1.2 Age next year ⏱️ 8 min

Store your age in an `int`. Print it, then print age + 1.

### 1.3 Price tag ⏱️ 8 min

Store a `double` price. Print it with two decimal places using `%.2f`.

### 1.4 Ask and repeat ⏱️ 10 min

Use `scanf` to read a whole number, then print "You typed N".

<details>
<summary>Answer shape</summary>

```c
int n;
scanf("%d", &n);
printf("You typed %d\n", n);
```

</details>
