let myDate = new Date();
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());
//console.log(typeof myDate);

let myCreatedDate = new Date(2000, 0, 23);
//console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2000, 0, 23, 5, 19);
//console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-02-20");
//console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);

//console.log(myDate.getTime());

//console.log(Math.round(Date.now() / 1000));

let newDate = new Date();
console.log(`Time ${newDate.getTime()}`);
console.log(`Day ${newDate.getDay()}`);
console.log(`Hours ${newDate.getHours()}`);
