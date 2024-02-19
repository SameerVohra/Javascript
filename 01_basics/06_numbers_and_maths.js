const num = 100;
const number = new Number(400);

//console.log(num);
//console.log(number);

//console.log(number.toString().length);
//console.log(number.toFixed(2)); //IT WILL GIVE DECIMAL VALUE TO 2

const anotherNumber = 123.32123412;
//console.log(anotherNumber.toPrecision(4)); // IT WILL ROUND OFF THE VALUE KEEPING IN MIND THE FIRST 4 DIGITS i.e. 123.3

const balance = 1000000;
//console.log(balance.toLocaleString()); //IT WILL ADD ',' USING THE US STANDARDS
//console.log(balance.toLocaleString("en-IN")); //IT WILL ADD ',' USING THE INDIAN STANDARDS

// +++++++++++++++++++MATHS+++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-3)); //IT WILL CONVERT ANY NEGATIVE VALUE TO A POSITIVE VALUE
//console.log(Math.round(3.9028)); //IT WILL ROUND OFF THE VALUE
//console.log(Math.ceil(4.001)); // IT WILL ALWAYS ROUND OFF THE VALUE TO ITS UPPER LIMIT
//console.log(Math.floor(4.001)); //IT WILL ALWAYS ROUND OFF THE VALUE TO ITS LOWER LIMIT
//console.log(Math.min(2, 5, 1994, -1994, 3958)); // IT WILL GIVE THE MINIMUM VALUE PRESENT
//console.log(Math.max(1, 2, 559914, 999188, 0)); // IT WILL GIVE THE MAXIMUM VALUE PRESENT
console.log(Math.random());
console.log(Math.random() * 10 + 1);

let min = 1;
let max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
