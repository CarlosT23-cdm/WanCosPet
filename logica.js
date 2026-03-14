// === LÓGICA MAESTRA WANCOS PET ===
document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener la ruta actual
  const path = window.location.pathname;

  // 2. Navegación Activa (Resaltar botón del menú)
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (path.includes(link.getAttribute("href"))) {
      link.classList.add("activo");
    } else if (
      (path.endsWith("/") || path.includes("index.html")) &&
      link.getAttribute("href") === "index.html"
    ) {
      // Caso especial para que el botón de "Juguetes Perros" se vea activo en el Inicio
      link.classList.add("activo");
    }
  });

  // 3. Mapeo de páginas a datos (Centralizado)
  const mapas = {
    "index.html": { data: juguetesPerros, gal: "galeria-perros" },
    "accesorios-perros.html": { data: accesoriosPerros, gal: "galeria-perros" },
    "juguetes-gatos.html": { data: juguetesGatos, gal: "galeria-gatos" },
    "accesorios-gatos.html": { data: accesoriosGatos, gal: "galeria-gatos" },
  };

  // 4. Renderizado Inteligente
  // Buscamos si la URL coincide con alguna de nuestras páginas
  let currentPage = Object.keys(mapas).find((page) => path.includes(page));

  // SI ES EL INDEX O LA RAÍZ: Forzamos que use los datos de index.html
  if (!currentPage || path.endsWith("/") || path.includes("index.html")) {
    currentPage = "index.html";
  }

  // Ejecutamos el renderizado solo si tenemos datos válidos
  if (currentPage && mapas[currentPage]) {
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
    .map((p) => {
      // 1. Definimos las variables necesarias para el corazón DENTRO del map
      const imgPrincipal =
        p.imagenes && p.imagenes.length > 0
          ? p.imagenes[0]
          : "https://via.placeholder.com/300?text=WanCos+Pet";
      const esFavorito = favoritos.some((f) => f.nombre === p.nombre);
      const claseCorazon = esFavorito ? "btn-favorito activo" : "btn-favorito";
      const iconoCorazon = esFavorito ? "❤️" : "🤍";

      // 2. Retornamos el HTML del producto
      return `
        <article class="producto">
            <a data-fancybox="${nombreGaleria}" href="${imgPrincipal}">
                <img src="${imgPrincipal}" alt="${p.nombre}" loading="lazy" decoding="async">
            </a>
            <div class="producto-info">
                <h3>${p.nombre}</h3>
                <div class="price">$${p.precio.toLocaleString()} COP</div>
                
                <div style="display: flex; gap: 10px; align-items: center; justify-content: center;">
                    <button onclick="agregarAlCarrito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio})">
                        Añadir al carrito
                    </button>
                    
                    <button class="${claseCorazon}" onclick="toggleFavorito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio}, '${imgPrincipal}')">
                        ${iconoCorazon}
                    </button>
                </div>
            </div>
        </article>
      `;
    })
    .join("");
}

// === LÓGICA CARRITO Y PERSISTENCIA ===
let carrito = JSON.parse(localStorage.getItem("wancos_carrito_v1") || "[]");

function vaciarCarrito() {
  if (
    confirm(
      "¿Estás seguro de que deseas eliminar todos los productos del carrito?",
    )
  ) {
    carrito = [];
    localStorage.removeItem("wancos_carrito_v1");
    actualizarVista();
  }
}

function toggleCarrito() {
  const sidebar = document.getElementById("sidebarCarrito");
  sidebar.classList.toggle("active"); // Esto activa/desactiva la clase CSS
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

  // Renderizado con el nuevo diseño Premium
  lista.innerHTML = carrito
    .map(
      (i, idx) => `
        <li class="item-carrito">
          <div class="item-info">
            <span class="item-nombre">${i.producto}</span>
            <span class="item-precio">$${i.precio.toLocaleString()} COP</span>
          </div>
          <button class="btn-eliminar" onclick="eliminarDelCarrito(${idx})">
            <i class="fas fa-trash"></i>
          </button>
        </li>
      `,
    )
    .join("");

  const total = carrito.reduce((sum, i) => sum + i.precio, 0);
  if (totalEl) {
    totalEl.innerHTML = `<strong>Total: $${total.toLocaleString()} COP</strong>`;
  }
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
// Variable global para favoritos
let favoritos = JSON.parse(localStorage.getItem("wancos_favoritos") || "[]");

function toggleFavorito(nombre, precio, imagen) {
  console.log("Cambiando favorito de:", nombre); // Esto te confirmará el clic en la consola

  const index = favoritos.findIndex((p) => p.nombre === nombre);

  if (index === -1) {
    favoritos.push({ nombre, precio, imagen });
  } else {
    favoritos.splice(index, 1);
  }

  // Guardar
  localStorage.setItem("wancos_favoritos", JSON.stringify(favoritos));

  // 1. Actualizar la bandeja de arriba
  actualizarVistaFavoritos();

  // 2. RE-DIBUJAR TODO EL SITIO (Esto hace que el corazón cambie de color)
  if (typeof initRender === "function") {
    initRender();
  } else {
    console.error("La función initRender no está definida o no es accesible.");
  }
}

function actualizarVistaFavoritos() {
  const contenedor = document.getElementById("contenedor-favoritos");
  if (!contenedor) return;

  if (favoritos.length === 0) {
    contenedor.innerHTML =
      '<p class="fav-vacio-msj">Selecciona tus favoritos dando "me gusta" ❤️</p>';
    return;
  }

  contenedor.innerHTML = favoritos
    .map(
      (p) => `
        <div class="item-favorito-mini" style="min-width: 120px; text-align: center;">
            <img src="${p.imagen}" style="width: 80px; height: 80px; border-radius: 10px; object-fit: cover;">
            <p style="font-size: 0.8rem; font-weight: bold; margin-top: 5px;">${p.nombre}</p>
        </div>
    `,
    )
    .join("");
}

// Llama a esta función dentro de tu DOMContentLoaded para que cargue al abrir la página
document.addEventListener("DOMContentLoaded", () => {
  actualizarVistaFavoritos();
});
