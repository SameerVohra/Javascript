function setUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const user1 = new createUser("Sameer", "sameer@gmail.com", "1234");
console.log(user1);
