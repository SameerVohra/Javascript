const user = {
  username: "Sameer",
  loginCount: 8,
  isLoggedIn: true,

  getUserDetails: function () {
    return `Username: ${this.username}`;
  },
};

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = () => console.log(`Welcome ${this.username}`);

  return this;
}

const userOne = new User("Sameer", 12, true);
const userTwo = new User("chaiaurcode", 7, false);
console.log(userOne);
console.log(userTwo);
