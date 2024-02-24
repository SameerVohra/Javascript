const lang = ["JS", "RUBY", "CPP", "JAVA"];

console.log("METHOD 1");
lang.forEach(function (item) {
  console.log(item);
});

console.log("METHOD 2");
lang.forEach((item) => {
  console.log(item);
});

console.log("METHOD 3");
function printMe(item) {
  console.log(item);
}

lang.forEach(printMe);

lang.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "JAVASCRIPT",
    languageFileName: "js",
  },
  {
    languageName: "PYTHON",
    languageFileName: "py",
  },
  {
    languageName: "JAVA",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
