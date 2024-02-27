const num = parseInt(Math.round(Math.random() * 100 + 1));
const submit = document.querySelector("#subt");
const userVal = document.querySelector("#guessField");
const prevGuess = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startAgain = document.querySelector(".resultParas");
const p = document.createElement("p");
let guessArr = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    const val = parseInt(userVal.value);
    console.log(val);
    validateGuess(val);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number");
  } else {
    guessArr.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game over the number was ${num}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === num) {
    displayMessage("CONGRATULATION YOU WON!!!!!");
    alert("CONGRATULATION YOU WON!!!!!");
    endGame();
  } else {
    console.log(num);
    if (guess > num) {
      console.log("Number is greater than the ans");
      displayMessage("Number is greater than the ans");
    } else {
      console.log("Number is smaller than the ans");
      displayMessage("Number is smaller than the ans");
    }
  }
}

function displayGuess(guess) {
  userVal.value = "";
  prevGuess.innerHTML += `${guess}, `;
  numGuesses++;
  remainingGuesses.innerHTML = `${12 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    e.preventDefault();
    num = parseInt(Math.round(Math.random() * 100 + 1));
    numGuesses = 1;
    prevGuess.innerHTML = "";
    remainingGuesses.innerHTML = `${12 - numGuesses}`;
    userVal.removeAttribute("disabled");
    startAgain.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userVal.value = "";
  userVal.setAttribute("disabled", "");
  playGame = false;
  newGame();
}
