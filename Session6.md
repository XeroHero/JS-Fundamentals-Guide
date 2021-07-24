# Session 6: Nesting Code Blocks

The idea of "nesting" is actually quite simple. It involves the fact of having code blocks within other code blocks. These code blocks can be `if ... else` blocks, loops or other types of blocks.

We have not yet introduced the idea of loops, so let's explore it.

## Loops in JavaScript

Loops allow us to perform repetitive tasks in a simple, neat fashion. For example, to print out the numbers 1 to 10, we could tell the system to `console.log(1); console.log(2); console.log(3);` and so on.
But that wouldn't be very pretty. So instead, we can use a loop as follows:

```
for (let i = 0; i < 11; i++) {
  console.log(i);
}
```

💡Question: Why is the second number not 10?

The above shows a form of loop known as the "for loop".  It is very commonly used.

Another loop worth knowing is the `while` loop. This is useful when we don't know in advance how many iterations we will need to perform.

```
let i = 0;
  while (i < 11) {
  console.log(i);
  i++;
}
```

💡Question: Why is the condition not i<10?

This snippet above performs the exact same function as the for loop we examined previously.

### The Do-While Loop

Another very important control structure in JavaScript is the `do-while` loop. Let us examine this with an example.

```
let i = 20;
do {
  console.log("The number is " + i);
  i++;
}
while (i < 10);
```

💡In this example above, the value 20 will be printed, even though the condition is the same as the previous ones. Why?
