// === LÓGICA MAESTRA WANCOS PET ===

// 1. Variables Globales de Estado
let carrito = JSON.parse(localStorage.getItem("wancos_carrito_v1") || "[]");
let favoritos = JSON.parse(localStorage.getItem("wancos_favoritos") || "[]");

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar funciones clave
  configurarBuscador();
  actualizarVista();
  actualizarVistaFavoritos();
  initFancybox();

  // Renderizar la página por primera vez
  renderizarPaginaActual();

  // Manejo de navegación activa
  const path = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (path.includes(link.getAttribute("href"))) {
      link.classList.add("activo");
    } else if (
      (path.endsWith("/") || path.includes("index.html")) &&
      link.getAttribute("href") === "index.html"
    ) {
      link.classList.add("activo");
    }
  });
});

// FUNCIÓN MOTOR: Renderiza los productos según la página actual
function renderizarPaginaActual() {
  const path = window.location.pathname;
  const mapas = {
    "index.html": { data: juguetesPerros, gal: "galeria-perros" },
    "accesorios-perros.html": { data: accesoriosPerros, gal: "galeria-perros" },
    "juguetes-gatos.html": { data: juguetesGatos, gal: "galeria-gatos" },
    "accesorios-gatos.html": { data: accesoriosGatos, gal: "galeria-gatos" },
    "accesorios-perros_gatos.html": {
      data: productosDosEspeciesAcc,
      gal: "galeria-perros-gatos",
    },
    "juguetes-gatos_perros.html": {
      data: productosDosEspeciesJug,
      gal: "galeria-perros-gatos",
    },
  };

  // Buscamos si el nombre del archivo actual está en nuestro mapa
  let pageKey = Object.keys(mapas).find((key) => path.includes(key));

  // Si no encuentra nada (o es la raíz), por defecto va al index
  if (!pageKey || path.endsWith("/")) {
    pageKey = "index.html";
  }

  const configuracion = mapas[pageKey];

  if (configuracion) {
    // AQUÍ ESTÁ EL SECRETO: Asegúrate de que el ID sea "lista-productos" en el HTML
    renderLista("lista-productos", configuracion.data, configuracion.gal);
  }
}

function renderLista(idContenedor, lista, nombreGaleria) {
  const cont = document.getElementById(idContenedor);
  if (!cont || !lista) return;

  cont.innerHTML = lista
    .map((p) => {
      const esFav = favoritos.some((f) => f.nombre === p.nombre);
      const icono = esFav ? "❤️" : "🤍";
      const claseBtn = esFav ? "btn-favorito activo" : "btn-favorito";
      const imgPrincipal = p.imagenes[0];

      // AQUÍ ESTÁ LA MAGIA:
      // Creamos las imágenes ocultas sin tocar nada más del diseño
      const imagenesOcultas = p.imagenes
        .slice(1)
        .map((imgExtra) => {
          return `<a data-fancybox="${nombreGaleria}" href="${imgExtra}" style="display:none;"></a>`;
        })
        .join("");

      // RETORNAMOS EL HTML COMPLETO (Aquí no falta nada, ni precios ni botones)
      return `
    <article class="producto">
        <a data-fancybox="${nombreGaleria}" href="${imgPrincipal}">
            <img src="${imgPrincipal}" alt="${p.nombre}">
        </a>
        ${imagenesOcultas}
        <div class="producto-info">
            <h3>${p.nombre}</h3>
            
            <p><strong>Descripción:</strong> ${p.descripcion}</p>
            <p><strong>Material:</strong> ${p.material || "No especificado"}</p>
            <p><strong>Textura:</strong> ${p.textura || "No especificado"}</p>
            <p><strong>Color:</strong> ${p.color || "No especificado"}</p>
            <p><strong>Tamaño:</strong> ${p.tamaño || "No especificado"}</p>
            <p><strong>Beneficios:</strong> ${p.beneficios || "No especificado"}</p>

            <div class="price"><strong>Precio:</strong> $${p.precio.toLocaleString()} COP</div>
    </article>
`;
    })
    .join("");
}

// === FAVORITOS ===
function toggleFavorito(nombre, precio, imagen) {
  const index = favoritos.findIndex((p) => p.nombre === nombre);
  if (index === -1) {
    favoritos.push({ nombre, precio, imagen });
  } else {
    favoritos.splice(index, 1);
  }

  localStorage.setItem("wancos_favoritos", JSON.stringify(favoritos));
  actualizarVistaFavoritos();
  renderizarPaginaActual(); // Refresca los corazones en la lista
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

// === BUSCADOR ===
function configurarBuscador() {
  const buscador = document.getElementById("buscador");
  const listaBusqueda = document.getElementById("lista-busqueda");
  const listaProductosNormal = document.getElementById("lista-productos");

  if (!buscador) return;

  buscador.addEventListener("input", (e) => {
    const termino = e.target.value.toLowerCase();
    const path = window.location.pathname;

    // Definimos qué lista usar según la página actual
    let productosFiltrar = [];
    let galeriaActual = "";

    if (path.includes("index.html") || path.endsWith("/")) {
      productosFiltrar = juguetesPerros;
      galeriaActual = "galeria-perros";
    } else if (path.includes("accesorios-perros.html")) {
      productosFiltrar = accesoriosPerros;
      galeriaActual = "galeria-perros";
    } else if (path.includes("juguetes-gatos.html")) {
      productosFiltrar = juguetesGatos;
      galeriaActual = "galeria-gatos";
    } else if (path.includes("accesorios-gatos.html")) {
      productosFiltrar = accesoriosGatos;
      galeriaActual = "galeria-gatos";
    } else if (path.includes("accesorios-perros_gatos.html")) {
      productosFiltrar = productosDosEspeciesAcc;
      galeriaActual = "galeria-perros-gatos";
    } else if (path.includes("juguetes-gatos_perros.html")) {
      productosFiltrar = productosDosEspeciesJug;
      galeriaActual = "galeria-perros-gatos";
    }

    if (termino.trim() === "") {
      if (listaBusqueda) listaBusqueda.innerHTML = "";
      if (listaProductosNormal) listaProductosNormal.style.display = "grid";
      return;
    }

    // Filtramos SOLO los productos de la página actual
    const filtrados = productosFiltrar.filter((p) =>
      p.nombre.toLowerCase().includes(termino),
    );

    if (listaProductosNormal) listaProductosNormal.style.display = "none";

    // --- LÓGICA DEL MENSAJE "NO ENCONTRADO" ---
    if (filtrados.length === 0) {
      listaBusqueda.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #888;">
                    <p style="font-size: 1.5rem;">☹️</p>
                    <p>No se encontraron productos con ese nombre en esta categoría.</p>
                </div>
            `;
    } else {
      renderLista("lista-busqueda", filtrados, galeriaActual);
    }
  });
}

// === CARRITO ===
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
  if (totalEl)
    totalEl.innerHTML = `<strong>Total: $${total.toLocaleString()} COP</strong>`;
  if (countEl) countEl.innerText = carrito.length;
}

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
  if (sidebar) sidebar.classList.toggle("active");
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

function initFancybox() {
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", { infinite: true });
  }
}
