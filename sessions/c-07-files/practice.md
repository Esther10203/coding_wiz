# Practice: Files

### 7.1 Write a note ⏱️ 8 min

Write your name into `note.txt` with `fprintf`. Check that `fopen` did not return `NULL`.

### 7.2 Read it back ⏱️ 8 min

Open `note.txt` for reading. Print the first line with `fgets` into a `char` array of size 80.

### 7.3 Copy numbers ⏱️ 12 min

Write the numbers 1 to 10 into `nums.txt`, one per line. Read them back with `fscanf` and print the sum.

### 7.4 Missing file ⏱️ 6 min

Try to open `no-such-file.txt` for reading. If it fails, print "Could not open file" and return 1. Do not call `fclose` on a `NULL` pointer.
