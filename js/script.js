document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("sticky-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.padding = "10px 0";
      header.style.boxShadow = "0px 4px 10px rgb(54, 69, 79)";
    } else {
      header.style.padding = "20px 0";
      header.style.boxShadow = "none";
    }
  });
});
