# JS-with-Kay

## Session 1: JS Syntax Fundamentals

### Basic Types

#### Static vs Dynamic types

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
