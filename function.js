function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const subtract3 = x => x - 3;
const square = x => x * x;

const composedFunction = compose(square, subtract3);
console.log(composedFunction(5));