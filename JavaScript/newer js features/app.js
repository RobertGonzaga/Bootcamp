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

