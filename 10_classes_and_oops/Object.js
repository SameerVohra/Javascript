function multiplyBy5(num) {
  this.num = num * 5;
  return this;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const userOne = new createUser("user1", 10);
const userTwo = new createUser("user2", 12);

userOne.increment();
userOne.printMe();
