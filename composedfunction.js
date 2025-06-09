const compose = (...fns) => input => 
  fns.reduce((acc, fn) => fn(acc), input);

const trim = str => str.trim();

const toLower = str => str.toLowerCase();

const removeSpecialChars = str => str.replace(/[^a-z0-9\s]/gi, '');

const cleanString = compose(trim, toLower, removeSpecialChars);
console.log(cleanString("  Hello, World!  ")); 
// Output: "hello world"
