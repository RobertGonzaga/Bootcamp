const myMath = {
  randomizer: function (num) {
    return Math.floor(Math.random() * num);
  },
  PI: 3.14,
  tempConvert: function (celsius) {
    return celsius * 1.8 + 32;
  },
};

//KEYWORD THIS

const pokemon = {
  name: "pikachu",
  color: "yellow",
  type: "eletric",
  specialMove() {
    console.log(`${this.name} is using a ${this.type} attack!`);
  },
};

const attack = pokemon.specialMove;
