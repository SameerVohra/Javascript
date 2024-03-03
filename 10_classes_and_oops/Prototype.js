let myHeros = ["ironman", "spiderman"];

let heroPower = {
  ironman: "money",
  spiderman: "sling",

  getPower: function () {
    return `Ironman's power is ${this.ironman}`;
  },
};

Object.prototype.sameer = function () {
  console.log("sameer is present in all objects");
};

console.log(heroPower.getPower());
heroPower.sameer();

myHeros.sameer();

const teacher = {
  isGraduated: true,
  age: 25,
};

const teachingSupport = {
  isWorking: false,
};

const teachingAssistant = {
  assignment: "JAVASCRIPT",
  __proto__: teachingSupport,
};

console.log(teachingAssistant.isWorking);

Object.setPrototypeOf(teachingSupport, teacher);
console.log(teachingSupport.isGraduated);
