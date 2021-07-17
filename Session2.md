# Session 2: Methods and Code Readability

Very often, the code we write is not just designed to be used by ourselves. We therefore try to make is as readable as possible, by performing regular refactoring. 

📌 Refactoring: the process of modifying code in order to improve it in terms of legibilty, speed without impacting existing functionality negatively.

## Functions
Functions are like reusable code blocks. Instead of typing out the same code block every time, we can have it only once in our code, and then just *call* or refer to that code block by typing in its name.

A function declaration is as follows

```
function myFunction(arguments) {
  // do some stuff...
  return data;
}
```

We can then call this function using the syntax `function(data);` instead of having to type the code within it every time.
