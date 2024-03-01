const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promiseOne resolved");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task2 completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async task2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Sameer", email: "sameer@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  const error = true;
  setTimeout(() => {
    if (!error) {
      resolve({ username: "sameer", password: "1234" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("PROMISE REJECTED OR RESOLVED");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS Went Wrong");
    }
  }, 1000);
});

const consumePromiseFive = async () => {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();

const getData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/SameerVohra");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

getData();

// -----------------------------TRY CATCH METHOD OF FETCHING DATA-------------------------------------------

fetch("https://api.github.com/users/SameerVohra")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(`E: ${error}`));
