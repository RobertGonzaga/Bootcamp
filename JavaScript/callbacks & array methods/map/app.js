const beyblades = [
  { name: "Dragoon", type: "Attack" },
  { name: "Dranzer", type: "Balance" },
  { name: "Driger", type: "Attack" },
  { name: "Draciel", type: "Defense" },
  { name: "Pegasus", type: "Attack" },
];

const beyNames = beyblades.map((bey) => bey.name.toUpperCase());

console.log(beyNames);
