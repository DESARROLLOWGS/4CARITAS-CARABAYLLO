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

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Cambia cada 5 segundos
setInterval(nextSlide, 5000);

