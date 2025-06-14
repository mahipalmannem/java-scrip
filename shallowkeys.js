function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

  
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
const a = { name: "Alice", age: 30 };
const b = { name: "Alice", age: 30 };
const c = { name: "Alice", age: 31 };

console.log(shallowEqual(a, b)); 
console.log(shallowEqual(a, c));