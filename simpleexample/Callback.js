const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const calculator = (a, b, perform) => perform(a, b);

console.log(calculator(10, 2, add));
console.log(calculator(10, 2, sub));
console.log(calculator(10, 2, mul));
console.log(calculator(10, 2, div));
