# Built in constants

## null

Used to represent the intentional absence of an object value, it is not a property of the global object, unlike `undefined`. 

It is equal to `undefined` but not identical: `null == undefined // true` but `null === undefined //false`.

## NaN (Not a Number)

`NaN` is the default for any value that is not numerical, or when a mathematical operation cannot return a numerical value, it returns `NaN`. An example of this is a division by 0. We can test for an object is a number by using the method `isNaN()` on it. E.g.:

```
window.isNaN();
```
📌 We cannot check for `NaN` with the equality operator. We must use the method given above.
 
 ## Number Constants
 
Number constructor contains some built-in constants:
```
Number.MAX_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_VALUE;
Number.MIN_SAFE_INTEGER;

Number.EPSILON;

Number.POSITIVE_INFINITY;
Number.NEGATIEV_INFINITY;

Number.NaN;
```

## typeOf

The typeOf allows us to see how JavaScript stores the variables in memory.

## Measuring time
 `console.time()` is the standard way of measuring time in JavaScript.  To use it, we follow a pattern:
 
 ```
 console.time([label]); //start the timing
 console.timeEnd();  //stop the timer and print the time to the console
 ```
