# is-password-ok

Returns `true` if the password:

- is a string
- has a [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) between 9 and 72 characters, inclusive
- isn't one of the top 100 most common passwords (excluding those that don't meet the other criteria)

This project uses `Set`, which you'll need to polyfill if you don't have it.

```js
import isPasswordOk from "@evanhahn/is-password-ok";

// these return true
isPasswordOk("this is a long password");
isPasswordOk(";(a[{k4IA");

// these return false
isPasswordOk("2short");
isPasswordOk("chocolate");
isPasswordOk(12345678900);
```

Made for a personal project. Your app's password rules may vary!
