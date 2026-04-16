const numbers = [22, 19, 7, 45, 38, 50, 62];

// const sum = numbers.reduce((total, current) => (total += current));
// console.log(sum);

const higher = numbers.reduce((current, next) => {
  if (current > next) {
    return current;
  }
  return next;
});
console.log(higher);

//sum with initial value added
const sum = numbers.reduce((total, current) => (total += current), 100);
console.log(sum);

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

const bestMovie = movies.reduce((current, next) => {
  if (current.score > next.score) {
    return current;
  }
  return next;
});
console.log(bestMovie);
