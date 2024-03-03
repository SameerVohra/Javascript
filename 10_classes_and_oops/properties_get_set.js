console.log(
  "---------------------------------------OLD METHOD OF USING GETTERS AND SETTERS------------------------------------------------",
);

function User(email, pass) {
  this._email = email;
  this._pass = pass;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "pass", {
    get: function () {
      return `${this._pass}akldjfklas`;
    },
    set: function (value) {
      this._pass = value;
    },
  });
}

const userOne = new User("abc@gmail.com", "alihz");
console.log(userOne.email);
console.log(userOne.pass);
