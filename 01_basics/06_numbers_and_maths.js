const num = 100;
const number = new Number(400);

console.log(num);
console.log(number);

console.log(number.toString().length);
console.log(number.toFixed(2)); //IT WILL GIVE DECIMAL VALUE TO 2

const anotherNumber = 123.32123412;
console.log(anotherNumber.toPrecision(4)); // IT WILL ROUND OFF THE VALUE KEEPING IN MIND THE FIRST 4 DIGITS i.e. 123.3

const balance = 1000000;
console.log(balance.toLocaleString()); //IT WILL ADD ',' USING THE US STANDARDS
console.log(balance.toLocaleString("en-IN")); //IT WILL ADD ',' USING THE INDIAN STANDARDS
