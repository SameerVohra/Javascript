const marvel = ["spiderman", "ironman", "thor"];
const dc = ["superman", "batman", "flash"];

//marvel.push(dc);
//console.log(marvel);
//console.log(marvel.length);
//console.log(marvel[3][2]);

const concatArr = marvel.concat(dc);
console.log(concatArr);

const spreadArr = [...marvel, ...dc];
console.log(spreadArr);

const anotherArray = [
  1,
  2,
  3,
  [4, 5, 6],
  10,
  21,
  22,
  [2, 3, 4, [10, 20, 30, 49]],
];
const usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray);

const name = "Sameer";
console.log(Array.isArray(name));
const nameArr = Array.from(name);
console.log(nameArr);
console.log(Array.isArray(nameArr));

const s1 = 100;
const s2 = 200;
const s3 = 300;

const sArr = Array.of(s1, s2, s3);
console.log(sArr);
