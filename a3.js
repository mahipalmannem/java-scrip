
const double = x => x * 2;
const square = x => x * x;
const toString = x => x.toString();


const pipeline = x => toString(square(double(x)));


const input = 4;
const result = pipeline(input);

console.log("Input:", input);
console.log("Pipeline output:", result); 
