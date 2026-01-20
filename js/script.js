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
  document.getElementById('menu').classList.toggle('active');
}

document.querySelectorAll('.menu > li > a').forEach(item => {
  item.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      const parent = this.parentElement;
      if (parent.querySelector('ul')) {
        e.preventDefault();
        parent.classList.toggle('open');
      }
    }
  });
});
