const pokemons = [
  { name: "Pikachu", type: "Electric" },
  { name: "Charmander", type: "Fire" },
  { name: "Squirtle", type: "Water" },
  { name: "Bulbasaur", type: "Grass" },
  { name: "Eevee", type: "Normal" },
];

pokemons.forEach(function (pokemon) {
  console.log(`${pokemon.name} is ${pokemon.type} type!`);
});
