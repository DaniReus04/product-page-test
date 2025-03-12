document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Olá ${name}, bem-vindo!`);
});
