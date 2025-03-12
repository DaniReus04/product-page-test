document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonial-slider");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  const dotsContainer = document.querySelector(".testimonial-dots");

  let index = 0;

  // Criar bolinhas de paginação
  testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToTestimonial(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateSlider() {
    const isMobile = window.innerWidth <= 768;
    // Condição para ajustar o comportamento entre Desktop e Mobile
    if (isMobile) {
      slider.style.transform = `translateX(-${index * 90}%)`;
    } else {
      // Para desktop, pode continuar com o comportamento anterior
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    updateSlider();
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateSlider();
  }

  function goToTestimonial(i) {
    index = i;
    updateSlider();
  }

  nextBtn.addEventListener("click", nextTestimonial);
  prevBtn.addEventListener("click", prevTestimonial);

  // Configuração do arraste manual
  let isDown = false;
  let startX;
  let moveX;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.clientX;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    if (moveX < -50) nextTestimonial();
    if (moveX > 50) prevTestimonial();
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    moveX = e.clientX - startX;
  });

  // Suporte para toque em mobile
  slider.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    isDown = false;
    if (moveX < -50) nextTestimonial();
    if (moveX > 50) prevTestimonial();
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    moveX = e.touches[0].clientX - startX;
  });

  // Atualiza a posição inicial do slider dependendo da largura da tela
  updateSlider();
});
