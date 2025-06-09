const fullName = first => last => `${first} ${last}`;
const withFirst = fullName("John");
const completeName = withFirst("Doe");

console.log(completeName); 
console.log(fullName("John")("Doe"));
