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

