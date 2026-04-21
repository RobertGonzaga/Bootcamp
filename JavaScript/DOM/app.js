const banner = document.getElementById("banner");
console.log(banner.src);

const images = document.getElementsByTagName("img");

for (let img of images) {
  console.log(img.src);
}

const subImages = document.getElementsByClassName("anime-img");

for (let img of subImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/250px-Death_Note_Vol_1.jpg";
}
