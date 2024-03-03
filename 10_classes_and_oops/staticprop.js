class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME IS: ${this.username}`);
  }

  static createId() {
    return `1234`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`This course is added by ${this.username}`);
  }
}

const newTeacher = new Teacher("teacher1", "teacher1@gmail.com", 12233);
const newUser = new User("user1");

newTeacher.logMe();
//newUser.createId(); // Will give error because we have used 'static'
