// let random = Math.random();

// if (random < 0.5) {
//   console.log("Your number is less than 0.5");
//   console.log(random);
// }

// if (random >= 0.5) {
//   console.log("Your number is greater than 0.5");
//   console.log(random);
// }

// const dayOfWeek = "tuesday";

// if (dayOfWeek === "monday") {
//   console.log("I HATE MONDAYS!");
// } else if (dayOfWeek === "saturday") {
//   console.log("I love saturdays!");
// } else {
//   console.log("meh!");
// }

// const age = Math.floor(Math.random() * 100) + 1;

// if (age < 10) {
//   console.log("Child");
// } else if (age < 18) {
//   console.log("Teen");
// } else if (age < 60) {
//   console.log("Adult");
// } else {
//   console.log("Senior");
// }

const password = prompt("Enter a password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Password accepted");
  } else {
    console.log("Password cannot have spaces");
  }
} else {
  console.log("Password must have 6+ characters");
}
