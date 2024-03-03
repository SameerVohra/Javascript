class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password.toUpperCase()}adhglaho`;
  }

  set password(value) {
    this._password = value;
  }
}

const userOne = new User("abc@gmail.com", "svsfadf");
console.log(userOne.password);
console.log(userOne.email);
