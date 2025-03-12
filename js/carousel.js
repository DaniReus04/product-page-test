function changeImage(index) {
  const images = [
    "images/blue-banner.jpg",
    "images/red-banner.jpg",
    "images/green-banner.avif",
  ];
  document.getElementById("banner").src = images[index];
}
