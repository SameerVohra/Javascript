//NON-PREMITIVE DATATYPES
//Arrays
const names = ["Sameer", "Saksham", "Saiyad"];

//Objects
const myObj = {
  name: "Sameer",
  age: 20,
};

//Function
const myFunc = function () {
  //console.log("Hello World");
};

//PREMITIVE DATATYPES

//String
let str1 = "Sameer";

//Number
let age = 20;

//Boolean
let isLoggedIn = false;

//Symbol
let int1 = Symbol(123);
let int2 = Symbol(123);
//console.log(int1 === int2);

//BigInt
let BigInt = 39840940974309;
//console.log(BigInt);

// ***********************************MEMORY********************************

let name1 = "Dhruv";
let name2 = name1;

name2 = "Sameer";

console.log(name1);
console.log(name2);

let user1 = {
  email: "user@gmail.com",
  upiId: "user@hdfc",
};

let user2 = user1;
user2.email = "sameer@gmail.com";

console.log(user1.email);
console.log(user2.email);
