function sayHello() {
  console.log("Hello World!");
}

function repeatTenTimes(func) {
  for (let i = 0; i < 10; i++) {
    func();
  }
}

repeatTenTimes(sayHello);
