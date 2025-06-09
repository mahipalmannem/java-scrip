function findDuplicates(arr, key) {
  const seen = new Map();
  const duplicates = new Set();

  for (const obj of arr) {
    const value = obj[key];
    if (seen.has(value)) {
      duplicates.add(value);
    } else {
      seen.set(value, true);
    }
  }

  return Array.from(duplicates);
}
const people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Charlie' },
  { id: 5, name: 'Bob' }
];

console.log(findDuplicates(people, 'name'));
