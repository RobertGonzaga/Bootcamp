const banner = document.getElementById("banner");
banner.src =
  "https://imgs.search.brave.com/gnw66mzfDisX70B7bMMqo6DEjYWoyP-EO0CHh922PBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtbmFydXRvLWFu/ZC1zYXN1a2UtdWNo/aWhhLXdpdGgtYmVh/c3RzLWJ2bWJ2Zjdy/OXhmdzVnM3UuanBn";

const images = document.getElementsByTagName("img");

for (let img of images) {
  console.log(img.src);
}

const subImages = document.getElementsByClassName("anime-img");

for (let img of subImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/250px-Death_Note_Vol_1.jpg";
}

const title = document.querySelector("h1");
console.log(title);

const content = document.querySelector("#content");
console.log(content);

const bolds = document.querySelectorAll("p > b");
console.log(bolds);
