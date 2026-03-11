// === LÓGICA MAESTRA WANCOS PET ===
document.addEventListener("DOMContentLoaded", () => {
  // 1. Navegación Activa
  const path = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (path.includes(link.getAttribute("href"))) link.classList.add("activo");
  });

  // 2. Mapeo de páginas a datos (Centralizado)
  const mapas = {
    "index.html": { data: juguetesPerros, gal: "galeria-perros" },
    "accesorios-perros.html": { data: accesoriosPerros, gal: "galeria-perros" },
    "juguetes-gatos.html": { data: juguetesGatos, gal: "galeria-gatos" },
    "accesorios-gatos.html": { data: accesoriosGatos, gal: "galeria-gatos" },
  };

  // 3. Renderizado Automático según la URL
  const currentPage = Object.keys(mapas).find((page) => path.includes(page));
  if (currentPage) {
    renderLista(
      "lista-productos",
      mapas[currentPage].data,
      mapas[currentPage].gal,
    );
  }

  // Inicialización global
  initFancybox();
  actualizarVista();
});

function initFancybox() {
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", { infinite: true });
  }
}

function renderLista(idContenedor, lista, nombreGaleria) {
  const cont = document.getElementById(idContenedor);
  if (!cont || !lista) return;
  cont.innerHTML = lista
    .map(
      (p) => `
        <article class="producto">
            <a data-fancybox="${nombreGaleria}" href="${p.imagenes[0]}">
                <img src="${p.imagenes[0]}" alt="${p.nombre}" loading="lazy">
            </a>
            <div class="producto-info">
                <h3>${p.nombre}</h3>
                <div class="price">$${p.precio.toLocaleString()} COP</div>
                <button onclick="agregarAlCarrito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio})">Añadir al carrito</button>
            </div>
        </article>
    `,
    )
    .join("");
}

// === LÓGICA CARRITO Y PERSISTENCIA ===
let carrito = JSON.parse(localStorage.getItem("wancos_carrito_v1") || "[]");

function toggleCarrito() {
  document.getElementById("sidebarCarrito").classList.toggle("active");
}

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  localStorage.setItem("wancos_carrito_v1", JSON.stringify(carrito));
  actualizarVista();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("wancos_carrito_v1", JSON.stringify(carrito));
  actualizarVista();
}

function actualizarVista() {
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("total-carrito");
  const countEl = document.getElementById("carrito-count");
  if (!lista) return;

  lista.innerHTML = carrito
    .map(
      (i, idx) =>
        `<li>${i.producto} - $${i.precio.toLocaleString()} <button onclick="eliminarDelCarrito(${idx})">X</button></li>`,
    )
    .join("");
  const total = carrito.reduce((sum, i) => sum + i.precio, 0);
  if (totalEl)
    totalEl.innerHTML = `<strong>Total: $${total.toLocaleString()} COP</strong>`;
  if (countEl) countEl.innerText = carrito.length;
}

function enviarPedidoWhatsApp() {
  if (carrito.length === 0) return alert("El carrito está vacío.");
  let msg = `📦 PEDIDO WANCOS PET:\n`;
  carrito.forEach(
    (i) => (msg += `✅ ${i.producto} - $${i.precio.toLocaleString()}\n`),
  );
  window.open(
    `https://api.whatsapp.com/send?phone=573022375413&text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}
