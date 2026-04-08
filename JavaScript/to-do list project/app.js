let option = null;
let toDoList = [];

while (option !== "quit") {
  option = prompt("What would you like to do?");
  if (option === "new") {
    toDoList.push(prompt("Enter a new to-do"));
    console.log(`${toDoList[toDoList.length - 1]} added to the list`);
  } else if (option === "list") {
    console.log("**************");
    for (let item of toDoList) {
      console.log(`${toDoList.indexOf(item)}: ${item}`);
    }
    console.log("**************");
  } else if (option === "delete") {
    toDoList.splice(prompt("Enter index of to-do to remove"), 1);
    console.log("to-do removed");
  } else {
    console.log("Please enter a valid option");
  }
}
console.log("OK, you quit the app");
