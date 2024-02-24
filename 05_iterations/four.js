const myObj = {
  js: "JAVASCRIPT",
  cpp: "C++",
  rb: "RUBY",
  swift: "SWIFT BY APPLE",
};

//FOR IN LOOP
for (const key in myObj) {
  console.log(`${key} :- ${myObj[key]}`);
}

const myArr = [1, 2, 3, 4, 5, 6];
for (const i in myArr) {
  console.log(myArr[i]);
}
