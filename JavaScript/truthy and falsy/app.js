const userInput = prompt("type here");

if (userInput) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

if (0) {
  console.log("Truth");
} else {
  console.log("Falsy");
}

if ("") {
  console.log("Truth");
} else {
  console.log("Falsy");
}

if (null) {
  console.log("Truth");
} else {
  console.log("Falsy");
}

if (undefined) {
  console.log("Truth");
} else {
  console.log("Falsy");
}

if (NaN) {
  console.log("Truth");
} else {
  console.log("Falsy");
}