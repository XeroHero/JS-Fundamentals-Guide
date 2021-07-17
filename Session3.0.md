# Lesson 3 - Working with Strings

Strings are sequences of characters (numbers, digits, punctuation, special characters) enclosed in double or single quotes. E.g.: `var hello = "hello";` is a string, also `var world = 'world';` is another string.

```
var heyWorld = `hello world`
```

Almost anything can be converted to a string by the `.toSting()` method, or using the `String()` function e.g. `var intString = String(32);`.

We can concatenate strings by using the `+` operator: `var helloworld = 'Hello' + 'World'`. Another way is to use the `.concat()` method: `hello.concat(world)` will return `HelloWorld`.


Example 1: Reversing a string.
```
function reverseString(str) {
  return str.split('').reverse().join();
 }
 
 reverseString('string'); // gnirts
```

In this example, the `split()` method splits the string into an array of characters. `reverse()` then reverses the order of that array, and finally `join()` rejoins the entire array (now reversed) together.
