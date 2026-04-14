function bankRobbery() {
  const heroes = ["Iron Man", "Spiderman", "Batman"];

  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`please save us ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}
bankRobbery();
