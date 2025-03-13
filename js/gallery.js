document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = -1;
  const images = [
    "images/bottle.png",
    "images/boat-bottle.jpg",
    "images/pirate-bottle.png",
  ];

  console.log("click");

  const modal = document.querySelector("#image-modal");
  const modalImage = document.querySelector("#modal-image");
  const closeModalBtn = document.querySelector(".close");

  function openModal(index) {
    currentImageIndex = index;
    const modal = document.querySelector("#image-modal");
    const modalImage = document.querySelector("#modal-image");

    console.log("Abrindo modal...");
    console.log("Índice da imagem:", currentImageIndex);
    console.log("Imagem carregada:", images[currentImageIndex]);

    modalImage.src = images[currentImageIndex];

    modal.classList.remove("hidden"); // Mostra o modal

    console.log("Modal deve estar visível agora:", modal);
  }

  function closeModal() {
    modal.classList.add("hidden"); // Esconde o modal
  }

  function changeImageInModal(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    modalImage.src = images[currentImageIndex];
  }

  // Adiciona evento para abrir modal ao clicar nas imagens da galeria
  document.querySelectorAll(".gallery-item").forEach((item, index) => {
    item.addEventListener("click", () => openModal(index));
  });

  // Evento para fechar modal ao clicar no botão "X"
  closeModalBtn.addEventListener("click", closeModal);

  // Fecha o modal ao clicar fora da imagem
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Botões de navegação dentro do modal
  document
    .querySelector(".modal-controls button:first-child")
    .addEventListener("click", () => changeImageInModal(-1));

  document
    .querySelector(".modal-controls button:last-child")
    .addEventListener("click", () => changeImageInModal(1));
});
