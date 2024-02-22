const user = {
  username: "Sameer",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); //IT WILL PRINT THE CURRENT CONTEXT
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);

//function chai() {
//  console.log(this);
//}
//chai();

const chai = () => {
  console.log(this);
};

chai();

//const addTwo = (num1, num2) => {
// return num1 + num2;
//};
//console.log(addTwo(10, 20));

// +++++++++++++IMPLICIT RETURN++++++++++++++++
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(10, 20));

const returnObj = () => ({ username: "Sameer" });
console.log(returnObj());
