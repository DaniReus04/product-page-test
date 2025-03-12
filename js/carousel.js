function changeImage(index) {
  const images = [
    "images/bottle.png",
    "images/pirate-bottle.png",
    "images/boat-bottle.jpg",
  ];
  document.getElementById("banner").src = images[index];
}
