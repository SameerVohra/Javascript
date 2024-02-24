//REDUCE

const myNumbers = [1, 2, 3];

const myTotal = myNumbers.reduce(function (acc, currVal) {
  console.log(`acc: ${acc}, currVal: ${currVal}`);
  return (acc *= currVal);
}, 100);

console.log(myTotal);

const myTotal2 = myNumbers.reduce((acc, currval) => {
  return (acc += currval);
}, 0);

const myTotal3 = myNumbers.reduce((acc, currval) => (acc += currval), 0);

console.log(myTotal2);
console.log(myTotal3);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce(function (acc, currVal) {
  return (acc += currVal.price);
}, 0);
console.log(totalPrice);
