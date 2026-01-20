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

