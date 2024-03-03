const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

//console.log(Math.PI);
//Math.PI = 5;
//console.log(Math.PI);

const chai = {
  name: "masala chai",
  price: 20,
  isAvailable: true,

  isReady: () => {
    console.log("NOT READY");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  //  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "isReady", {
  enumerable: false,
});

for (let [key, value] of Object.entries(chai)) {
  console.log(`${key} : ${value}`);
}
