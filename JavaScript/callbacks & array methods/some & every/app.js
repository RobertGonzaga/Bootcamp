const movies = [
  { title: "The Shawshank Redemption", year: 1994, score: 9.3 },
  { title: "The Godfather", year: 1972, score: 9.2 },
  { title: "The Dark Knight", year: 2008, score: 9.0 },
  { title: "Inception", year: 2010, score: 8.8 },
  { title: "Interstellar", year: 2014, score: 8.7 },
  { title: "Parasite", year: 2019, score: 8.6 },
  { title: "Pulp Fiction", year: 1994, score: 8.9 },
  { title: "Fight Club", year: 1999, score: 8.8 },
];

console.log(movies.some((movie) => movie.year > 2015));
console.log(movies.every((movie) => movie.year > 2015));
