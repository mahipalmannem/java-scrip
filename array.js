function groupBy(arr, key) {
  return arr.reduce((grouped, item) => {
    const groupKey = item[key];
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(item);
    return grouped;
  }, {});
}
const people = [
  { name: 'Alice', city: 'Paris' },
  { name: 'Bob', city: 'London' },
  { name: 'Charlie', city: 'Paris' },
  { name: 'David', city: 'London' },
  { name: 'Eve', city: 'Berlin' }
];

const groupedByCity = groupBy(people, 'city');

console.log(groupedByCity);
