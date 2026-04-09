function singAlong() {
  console.log("I wanna be the very best");
  console.log("Like no one ever was");
  console.log("To catch them is my real test");
  console.log("To train them is my cause");
}
singAlong();

function greet(firstName, lastName) {
  console.log(`Hi, welcome ${firstName} ${lastName[0]}.`);
}
greet("Jason", "Voorhees");

function repeat(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  console.log(result);
}
repeat("Hello World! ", 5);

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }
  return a + b;
}
