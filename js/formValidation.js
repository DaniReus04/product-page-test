(function () {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const leadForm = document.getElementById("lead-form");
  const headerName = document.querySelector(".header-name");

  let userName = "";

  nameInput.addEventListener("input", function () {
    nameInput.value = nameInput.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
  });

  phoneInput.addEventListener("input", function () {
    let phone = phoneInput.value.replace(/\D/g, ""); // Remove não numéricos
    if (phone.length > 11) phone = phone.slice(0, 11); // Limita a 11 dígitos
    phoneInput.value = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || email === "" || phone === "") {
      alert("Preencha todos os campos!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Digite um e-mail válido!");
      return;
    }

    if (phone.length < 15) {
      alert("Digite um telefone válido no formato (99) 99999-9999");
      return;
    }

    leadForm.classList.add("hidden");

    userName = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    headerName.textContent = `${userName} client`;
    window.alert(`Olá ${name}, seja bem-vindo!`);

    document.querySelector(".content").classList.remove("hidden");
    document.querySelector(".footer").classList.remove("hidden");
    document.body.style.overflow = "auto";
  });
})();
