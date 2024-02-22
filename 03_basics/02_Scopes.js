let a = 100;
let b = 3999;

if (true) {
  let a = 10;
  let b = 199;
  console.log("INNER");
  console.log(`a: ${a}\nb: ${b}`);
}

console.log("OUTER");
console.log(`a: ${a}\nb: ${b}`);

function one() {
  const username = "Sameer";
  function two() {
    const website = "Youtube";
    console.log(username + website);
  }
  //console.log(website); //WILL GIVE ERROR

  two();
}
one();

if (true) {
  const username = "Sameer";
  if (username == "Sameer") {
    const website = "Youtube";
    console.log(username + website);
  }
  // console.log(website); // WILL GIVE ERROR
}
// console.log(username); //WILL GIVE ERROR

// +++++++++++++++++++++++INTERESTING++++++++++++++++++++++++

//This is possible
console.log(addOne(10));
function addOne(val) {
  return val + 1;
}

//But not in this case
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(10));
