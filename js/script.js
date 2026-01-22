function loadPage(page) {
  fetch('pages/' + page)
    .then(response => {
      if (!response.ok) throw new Error("No encontrado");
      return response.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;
      window.scrollTo(0, 0);
    })
    .catch(() => {
      document.getElementById('content').innerHTML =
        "<h2>Error</h2><p>Contenido no disponible.</p>";
    });
}

//=============== MENU HAMBURGUESA =====================================//
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Cierra el menú móvil
function closeMenu() {
  document.getElementById("menu").classList.remove("active");
}

// Carga páginas sin recargar header/footer
function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
      closeMenu(); // 👈 CLAVE: cerrar menú al hacer click
    })
    .catch(error => console.error("Error cargando página:", error));
}


// ============= CIERRA EL MENU AL DAR CLICK FUERA =========================//
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
  }
});


//===================================CARRUSEL=================================//
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const dotsContainer = document.getElementById("hero-dots");
let slideInterval;

// Crear puntitos
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// Inicializar
showSlide(currentSlide);
slideInterval = setInterval(nextSlide, 5000);

// Cambia cada 5 segundos
//setInterval(nextSlide, 5000);
//* ======================================TESTIMONIOS SLIDER======================================//
const testimonials = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.getElementById("testimonials-dots");

if (dotsContainer && testimonials.length > 0) {
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
