// ================== CARGA DE PAGINAS ================== //
function loadPage(page) {
  fetch(page)
    .then(response => {
      if (!response.ok) throw new Error("No encontrado");
      return response.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = data;
      window.scrollTo(0, 0);
      closeMenu();

      // Re-inicializar componentes
      initHeroSlider();
      initTestimonials();
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<h2>Error</h2><p>Contenido no disponible.</p>";
    });
}

// ================== MENU HAMBURGUESA ================== //
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("active");
}

// Cierra menú al hacer click fuera
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  if (!menu || !toggle) return;

  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// ================== HERO SLIDER ================== //
let heroInterval;

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dotsContainer = document.getElementById("hero-dots");

  if (!slides.length || !dotsContainer) return;

  let currentSlide = 0;
  dotsContainer.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }

  function resetInterval() {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextSlide, 5000);
  }

  showSlide();
  heroInterval = setInterval(nextSlide, 5000);
}

// ================== TESTIMONIOS SLIDER ================== //
function initTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.getElementById("testimonials-dots");

  if (!dotsContainer || !testimonials.length) return;

  dotsContainer.innerHTML = "";

  testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      testimonials[i].scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
      updateDots(i);
    });
  });

  function updateDots(index) {
    dotsContainer.querySelectorAll("span").forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });
  }
}

// ================== INICIAL ================== //
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initTestimonials();
});
