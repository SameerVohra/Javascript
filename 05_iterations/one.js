//For loops

for (let i = 1; i <= 10; i++) {
  const ele = i;
  console.log(ele);
}

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner Loop Value ${j}, and Inner Loop ${i}`);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArr = ["flash", "batman", "superman"];

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

for (let i = 1; i <= 20; i++) {
  //  if (i === 5) break;
  if (i === 5) {
    console.log("5 detected");
    continue;
  }
  console.log(`Value of i is ${i}`);
}
