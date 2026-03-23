// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// const secretCode = "Noobmaster69";
// let guess = prompt("Enter de secret code");

// while (guess !== secretCode) {
//   guess = prompt("Enter de secret code");
// }

// console.log("You got it!");

let input = prompt("Hi, type something");

while (true) {
  if (input === "stop") break;
  input = prompt(input);
}
console.log("Finished");
