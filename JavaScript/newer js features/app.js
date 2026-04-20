//DEFAULT PARAMS
function rollDie(dieSides = 6) {
  console.log(Math.floor(Math.random() * dieSides) + 1);
}

//SPREAD IN FUNCTION CALLS
const numbers = [7, 13, 12, 3, 19, 33, 22, 41, 1];
console.log(Math.max(numbers));
console.log(Math.max(...numbers));

const pokemons = [
  {
    id: 1,
    nome: "Bulbasaur",
    tipo: ["Grama", "Veneno"],
    nivel: 5,
    hp: 45,
  },
  {
    id: 4,
    nome: "Charmander",
    tipo: ["Fogo"],
    nivel: 5,
    hp: 39,
  },
  {
    id: 7,
    nome: "Squirtle",
    tipo: ["Água"],
    nivel: 5,
    hp: 44,
  },
  {
    id: 25,
    nome: "Pikachu",
    tipo: ["Elétrico"],
    nivel: 8,
    hp: 35,
  },
];

console.log(...pokemons);

// SPREAD WITH ARRAY LITERALS

const nbaTeams = ["OKC", "BULLS", "WARRIORS", "LAKERS"];
const soccerTeams = ["Barcelona", "Real Madrid", "Cruzeiro", "Santos"];

const allTeams = [...nbaTeams, ...soccerTeams];
console.log(allTeams);

// SPREAD WITH OBJECTS

const flash = {
  power: "acceleration force",
  company: "DC",
  haveSoloMovie: true,
};

const quicksilver = {
  power: "speed",
  company: "Marvel",
  haveSoloMovie: false,
  favoriteBand: "Pink Floyd",
};

const speedHeroes = { ...quicksilver, ...flash };
console.log(speedHeroes);

// REST PARAMETERS

function sum(...nums) {
  return nums.reduce((total, i) => {
    return total + i;
  });
}

function winners(firstPlace, secondPlace, thirdPlace, ...everyoneElse) {
  console.log(`${firstPlace} gold medal`);
  console.log(`${secondPlace} silver medal`);
  console.log(`${thirdPlace} bronze medal`);
  console.log(`${everyoneElse} didnt make it`);
}

// DESTRUCTURING ARRAYS

const fruits = ["banana", "apple", "orange", "avocado"];
const [fruit1, fruit2, ...otherFruits] = fruits;
console.log(fruit1, fruit2, otherFruits);

// DESTRUCTURING OBJECTS

const player1 = {
  fullName: "Lionel Messi",
  currentClub: "Inter Miami",
  ballonDorTitles: 8,
  worldCupTrophies: 1,
  playStyle: "Playmaker",
};

const player2 = {
  fullName: "Cristiano Ronaldo",
  currentClub: "AL-Nassr",
  ballonDorTitles: 5,
  playStyle: "Playmaker",
};

// const { fullName, currentClub, ballonDorTitles: bestPlayerTrophies } = player1;
const { fullName, currentClub, worldCupTrophies = 0 } = player2;
