[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

### Invariant explanation
The invarient that must be true at the beginning of every recursive call is that n must be greater than 1.
This is because it keeps calling the function until n == 1 and that starts the array with [0, 1] and
continues to add to that until it adds the n'th term to the end of the array. Otherwise, if the initial case
is n == 1 or n == 0, there is no recursion necessary. This makes sure that we always have the correct n'th number because we will always have the correct starting numbers. The most important part of the fibonacci sequence is to have the 0th and 1st numbers because the rest of the series is based off of that. n being greater than 1 at the beginning of the current iteration tells us that we will need to make another recursive call because we have not reached the case where we can start with the correct numbers.
