const maxNumber = parseInt(prompt("Welcome! Please enter the maximum number"));
while (!maxNumber) {
  maxNumber = parseInt(prompt("Please enter a valid number!"));
}

const secretNumber = Math.floor(Math.random() * (maxNumber + 1));
let guessNumber = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guessNumber) !== secretNumber) {
  if (guessNumber === "q") break;
  else if (guessNumber < secretNumber) {
    guessNumber = prompt("Too low, guess again");
  } else {
    guessNumber = prompt("Too high, guess again");
  }
  attempts++;
}

if (guessNumber === "q") {
  console.log("Game Stoped!");
} else {
  console.log("Congrats!");
  console.log(`It took you ${attempts} guesses`);
}
