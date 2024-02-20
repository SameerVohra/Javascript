const myArr = [1, 2, 3, 4, 5, 6];
const myArr2 = [1, 2, 3, "Sameer", true, "Hello"];

const newArr = new Array(1, 2, 3, 45, 6);

//console.log(myArr[0]);
//console.log(myArr2[3]);
//console.log(newArr[3]);

newArr.push(39993);
console.log(newArr);

newArr.pop();
console.log(newArr);

newArr.unshift(1993);
console.log(newArr);

newArr.shift();
console.log(newArr);

console.log(newArr.includes(45));
console.log(newArr.indexOf(2));
console.log(newArr.indexOf(39809));

const arr = newArr.join();
console.log(newArr);
console.log(arr);

console.log("A ", newArr);
const arrSlice = newArr.slice(0, 3);

console.log("Using Slice");
console.log("B ", newArr);
console.log(arrSlice);

const arrSplice = newArr.splice(0, 3);
console.log("C ", newArr);
console.log(arrSplice);
