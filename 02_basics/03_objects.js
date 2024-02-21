//Object Literals

const mySymb = Symbol("symKey");

const jsUser = {
  name: "Sameer",
  "full name": "Sameer Vohra",
  age: 20,
  location: "Haryana",
  email: "sameer@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Wednesday"],
  [mySymb]: "key", // USING A SYMBOL AS A KEY
};

//Accesing the values of an Object

console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser.lastLoginDays);
console.log(jsUser[mySymb]);
console.log(typeof jsUser[mySymb]);

//Changing the values
jsUser.email = "sameer@xyz.com";
jsUser["full name"] = "sameer vohra";

console.log(jsUser.email);
console.log(jsUser["full name"]);

//Freezing the Object
//Object.freeze(jsUser);
//jsUser.email = "sameer@chat.com"; //It won't have any effect on the value because the Object is already freezed
//console.log(jsUser);

//Adding a fucntion  in an Object
jsUser.greeting = function () {
  console.log(`Hello ${this["full name"]}`);
};

jsUser.greeting();
