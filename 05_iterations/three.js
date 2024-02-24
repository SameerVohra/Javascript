const arr = [1, 2, 3, 4, 5, 6, 7];

for (const i of arr) {
  console.log(i);
}

const greetings = "Hello World!!";
for (const greet of greetings) {
  if (greet === " ") {
    console.log("Each char is: space found");
    continue;
  }
  console.log(`Each char is: ${greet}`);
}

//MAPS

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States of America");
map.set("FR", "France");
console.log(map);

for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}
