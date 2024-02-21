const user = new Object(); //This is a singleton Object
const newUser = {}; //This is a non singleton Object

newUser.id = "123abc";
newUser.name = "Sameer";
newUser.isLoggedIn = false;

//console.log(newUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    firstName: "Sameer",
    lastName: "Vohra",
  },
  address: {
    city: "pune",
    pincode: 123456,
    houseNo: 32,
  },
};

console.log(regularUser.fullname);
console.log(regularUser.fullname.firstName);

console.log(regularUser.address);
console.log(regularUser.address.city);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const finalObj = Object.assign({}, obj1, obj2, obj3); //NO ORIGINAL OBJECT IS MODIFIED
const finalObj2 = Object.assign(obj1, obj2, obj3); //obj1 IS MODIFIED
const spreadObj = { ...obj1, ...obj2, ...obj3 };

console.log(finalObj);
console.log(finalObj2);
console.log(spreadObj);

const userArr = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 2,
    email: "some1@gmail.com",
  },
  {
    id: 3,
    email: "some2@gmail.com",
  },
];

console.log(userArr[2]?.email);

console.log(Object.keys(finalObj));
console.log(Object.values(finalObj));
console.log(Object.entries(finalObj));
console.log(regularUser.hasOwnProperty("email"));
console.log(regularUser.hasOwnProperty("id"));
