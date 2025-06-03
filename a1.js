function area(a) {
  return function(b) {
    return a * b;
  };
}
console.log(area(5)(4));