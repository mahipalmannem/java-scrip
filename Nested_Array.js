function flattenOneLevel(arr) {
  return arr.reduce((flat, item) => flat.concat(item), []);
}

const nested = [1, [2, 3], 4, [5, 6],7];
const flattened = flattenOneLevel(nested);

console.log(flattened); 