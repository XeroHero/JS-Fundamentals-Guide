# JS-with-Kay

## Session 1: JS Syntax Fundamentals

### Basic Types

#### Static vs Dynamic types

The quickest way to understand static types is to contrast them with dynamic types. A language with static types is referred to as a statically-typed language. On the other hand, a language with dynamic types is referred to as a dynamically-typed language.

Statically-typed languages perform type checking at compile time, while dynamically-typed languages perform type checking at runtime. In simple terms, this means that in dynamically-typed languages (such as JS and Python), we are able to just call variables `var`, whereas in statically-typed languages (such as Java and C), we need to explicitly state the type of variable we are going to be using (eg. `int`, `String`, `double`, etc.)

In statically typed languages, the *compiler* performs checks on the code, and throws an error when something isn't right. For example, if we were to try the following in Java, it wouldn't work:
`boolean result = 123;`
This is because the `boolean` data type is only able to take `true` and `false` as types (or their numerical representations, `1` and `0` respectively)

In dynamically-typed languages, the errors occur only once the program is executed. That is, at runtime.

This means that a program written in a dynamically-typed language (like JavaScript or Python) can compile even if it contains type errors that would otherwise prevent the script from running properly.

Convenient, but not always ideal. Which is why tools like Flow and TypeScript have recently stepped in to give JavaScript developers the _option_ to use static types.

[Flow](https://flowtype.org/) is an open-source static type checking library developed and released by Facebook that allows you to incrementally add types to your JavaScript code.

[TypeScript](https://www.typescriptlang.org/), on the other hand, is a superset that compiles down to JavaScript — although it feels almost like a new statically-typed language in its own right. That said, it looks and feels very similar to JavaScript and isn’t hard to pick up.

In either case, when you want to use types, you explicitly tell the tool about which file(s) to type-check. For TypeScript you do this by writing files with the `.ts` extension instead of `.js`. For Flow, you include a comment on top of the file with `@flow`.

##### Flow Syntax and language

Let’s begin by examining some JavaScript primitives, as well as constructs like Arrays, Object, Functions, and etc.

NB: in Flow, the syntax for declaring static types is as follows: `var myBoolean: boolean = false;`. It always follows the patters `var` followed by the name of our variable, followed by a colon (`:`) and a space, followed by the type of the variable and optionally an assignment. Note that it is not required to terminate a statement with a semicolon (`;`).

The main types of variables in JavaScript are given below:

* *boolean*: Describes a `true` or `false` value in JavaScript
* *number*: Describes a double-precision floating-point number. There are no such thing as integers, doubles, floats, long, shorts, etc. in JavaScript.
`number` includes `Infinity` and `NaN`.
* *string*: Sequence of characters
* ⚠️ *null* and *void*: These are some special data types, we will look at them later on.
* *Array*: Arrays are "collections" of similarly-typed objects. These can be strings, numbers for example.
* *Object*: This is another special data type. Essentially, it allows us to spawn up new, custom data types, with various *attributes* inside them. For example:

```
var bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false
};
```
This allows us to define our own data type (above we have defined a `bird` data type, which is obviously not part of native JS).
* *any*: This is a generic type, and is effectively unchecked. Is is not recommended to use this type anywhere in code unless a specific scenario requires it.
* *Maybe*: This is another special type, which allows its contents to be nullable (`null`) or `undefined`, as well as any of the above. To define a `maybe` type, we simply add a `?` before the type, like follows:

```
function acceptsMaybeNumber(value: ?number) {
  //some code
}
```

###### Functions
Functions are like reusable code blocks. Instead of typing out the same code block every time, we can have it only once in our code, and then just *call* or refer to that code block by typing in its name.

A function declaration is as follows

```
function myFunction(arguments) {
  // do some stuff...
  return data;
}
```

We can then call this function using the syntax `function(data);` instead of having to type the code within it every time.
