const beyblades = [
  { name: "Dragoon", type: "Attack" },
  { name: "Dranzer", type: "Balance" },
  { name: "Driger", type: "Attack" },
  { name: "Draciel", type: "Defense" },
  { name: "Pegasus", type: "Attack" },
];

const beyNames = beyblades.map(function (bey) {
  return bey.name.toUpperCase();
});

console.log(beyNames);
