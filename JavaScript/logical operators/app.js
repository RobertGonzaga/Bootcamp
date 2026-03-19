// const password = prompt("Enter a password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password valid!");
// } else {
//   console.log("Invalid Password");
// }

// const age = 8

// if (age > 0 && age < 10 || age > 60) {
//   console.log("You have 50% off")
// } else {
//   console.log("You have 10% off")
// }

const firstName = prompt("Enter your first name");

if (!firstName) {
  firstName = prompt("Try again");
}
