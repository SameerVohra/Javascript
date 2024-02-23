const userEmail = [];

if (userEmail) {
  console.log("Got the Email");
} else {
  console.log("Email not provided");
}

//FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES
// true, "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Provide your email");
} else {
  console.log("Email Provided");
}

const emptyObj = {};

if (emptyObj) {
  console.log("Empty object found");
} else {
  console.log("Empty object not found");
}

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
} else {
  console.log("Object is not Empty");
}

//NULLISH COALESCING OPERATOR
let val1;
val1 = null ?? 10;
console.log(val1);

//TERNIARY OPERATOR
// condition ? true:false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
