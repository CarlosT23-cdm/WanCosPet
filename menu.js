const menuHTML = `
  <a href="index.html" class="nav-link">Juguetes Perros</a>
  <a href="accesorios-perros.html" class="nav-link">Accesorios Perros</a>
  <a href="juguetes-gatos.html" class="nav-link">Juguetes Gatos</a>
  <a href="accesorios-gatos.html" class="nav-link">Accesorios Gatos</a>
`;

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  if (nav) {
    nav.innerHTML = menuHTML;
    // Opcional: Resaltar el link activo automáticamente
    const path = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === path) link.classList.add("activo");
    });
  }
});
