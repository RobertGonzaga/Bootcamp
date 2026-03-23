// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

// const pokemons = [
//   "Pikachu",
//   "Charmander",
//   "Bulbasaur",
//   "Squirtle",
//   "Jigglypuff",
//   "Meowth",
//   "Psyduck",
//   "Snorlax",
//   "Eevee",
//   "Mewtwo",
//   "Gengar",
//   "Lapras",
//   "Ditto",
//   "Dragonite",
//   "Lucario",
//   "Greninja",
//   "Charizard",
//   "Blastoise",
//   "Venusaur",
//   "Arcanine",
// ];

// // for (let i = 0; i < pokemons.length; i++) {
// //   console.log(pokemons[i]);
// // }

// for (let i = pokemons.length - 1; i >= 0; i--) {
//   console.log(pokemons[i]);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`    j is: ${j}`);
//   }
// }

const names = [
  ["Aaron", "Chet", "Louise"],
  ["Paul", "Daniel", "Morgana", "Jinx"],
  ["Bell", "Tony", "Marie", "Walter"],
];

for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < names[i].length; j++) {
    console.log(`Name: ${names[i][j]}`);
  }
}
