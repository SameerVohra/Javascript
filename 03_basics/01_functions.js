function sayMyName() {
  console.log("s");
  console.log("a");
  console.log("m");
  console.log("e");
  console.log("e");
  console.log("r");
}

sayMyName();

//Adding two numbers
function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

let result = addTwoNumbers(10, 20);
console.log(result);

function justLoggedIn(name) {
  if (name === undefined) {
    console.log("Please enter a username");
    return;
  }
  const date = new Date();
  return `${name} logged in at ${date}`;
}

const output = justLoggedIn();
console.log(output);

//USING REST OPERATOR
//case1
function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(100, 200, 300, 400, 500));

//case2
function calculateCartPrice2(val1, val2, ...val) {
  return val;
}

console.log(calculateCartPrice2(100, 200, 400, 1200));

const user = {
  username: "Sameer",
  price: 1000,
};

function handlingObjects(obj) {
  console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

handlingObjects(user);

const newArray = [10, 20, 30.4, 50];

function returnValue(arr) {
  return arr[1];
}

const val = returnValue(newArray);
console.log(val);
