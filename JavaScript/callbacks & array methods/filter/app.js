const animes = [
  { title: "Attack on Titan", year: 2013, score: 9.1 },
  { title: "Fullmetal Alchemist: Brotherhood", year: 2009, score: 9.2 },
  { title: "Death Note", year: 2006, score: 8.9 },
  { title: "Naruto", year: 2002, score: 8.4 },
  { title: "Demon Slayer", year: 2019, score: 8.7 },
  { title: "Jujutsu Kaisen", year: 2020, score: 8.8 },
  { title: "One Piece", year: 1999, score: 8.9 },
  { title: "My Hero Academia", year: 2016, score: 8.5 },
];

const recentAnimes = animes.filter((anime) => anime.year > 2015);
console.log(recentAnimes);

const topRated = animes.filter((anime) => anime.score >= 9).map((anime) => anime.title);
console.log(topRated);
