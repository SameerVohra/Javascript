const temp = 40;

if (temp <= 40) {
  console.log("Temperature is less than or equal to 40");
} else {
  console.log("Temperature is greater than 40");
}

const balance = 1000;
if (balance < 500) console.log("Less than 500");
else if (balance < 750) console.log("Less than 750");
else console.log("Less than 1200");

const userLoggedIn = true;
const debitCard = true;
const captcha = true;

if (userLoggedIn && debitCard && captcha) {
  console.log("Allowed to buy a course");
} else {
  console.log("Not allowed to buy a course");
}

const isLoggedInFromGoogle = false;
const isLoggedInFromEmail = true;

if (isLoggedInFromGoogle || isLoggedInFromEmail) {
  console.log("Allowed to Login");
} else {
  console.log("Not allowed to login");
}
