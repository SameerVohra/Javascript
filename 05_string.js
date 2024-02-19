const name = "Sameer";
const age = 20;

//console.log("Hello my name is " + name + " and my age is " + age); //OLD METHOD AND NOT EASILY READABLE

console.log(`Hello my name is ${name}, and my age is ${age}`);

const gameName = new String("costalShip");

console.log(gameName);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));
console.log(gameName.length);

console.log(gameName.substring(1, 3));
console.log(gameName.slice(-9, 4));

const newString = "          sameer               ";
console.log(newString);
console.log(newString.trim());

const url = "https://xyz.com/sameer%20vohra";
console.log(url);
console.log(url.replace("%20", "-"));

const str2 = "hello world my name is Sameer";
const word = str2.split(" ");
console.log(word[3]);
