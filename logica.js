// === INICIO ===
document.addEventListener("DOMContentLoaded", () => {
  initRender(); // Carga clientes y favoritos
  actualizarVista(); // Carga el carrito
  // El renderizado de productos queda en el script de cada HTML
});

// =====================================================================
// === FUNCIONES DE RENDERIZADO ===
// =====================================================================

function renderLista(idContenedor, lista, nombreGaleria) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;
  cont.innerHTML = "";
  lista.forEach((p) => {
    const prod = document.createElement("article");
    prod.className = "producto";

    const imgPrincipal =
      p.imagenes && p.imagenes.length > 0
        ? p.imagenes[0]
        : "https://via.placeholder.com/300?text=WanCos+Pet";

    const botonVideo = p.video
      ? `<a data-fancybox="${nombreGaleria}" href="${p.video}" class="btn-video">🎥 Ver Video</a>`
      : "";

    const imagenesExtra = (p.imagenes || [])
      .slice(1)
      .map(
        (img) =>
          `<a data-fancybox="${nombreGaleria}" href="${img}" data-caption="${p.nombre}" style="display:none;"></a>`,
      )
      .join("");

    const idFavorito = `fav-${normalizarID(p.nombre)}`;

    prod.innerHTML = `
      <a data-fancybox="${nombreGaleria}" href="${imgPrincipal}" data-caption="${p.nombre} - ${formatCurrency(p.precio)}">
          <img src="${imgPrincipal}" alt="${p.nombre}" loading="lazy">
      </a>
      ${imagenesExtra}
      <div class="producto-info">
          <h3>${p.nombre}</h3>
          <p style="font-size: 0.85rem; color: #666; margin-bottom: 10px;">${p.descripcion}</p>
          ${botonVideo}
          <div class="price">${formatCurrency(p.precio)}</div>
          <div style="display: flex; gap: 10px; align-items: center; justify-content: center;">
            <button onclick="agregarAlCarrito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio})">Añadir al carrito</button>
            <button onclick="toggleFavorito('${p.nombre.replace(/'/g, "\\'")}')" 
                    id="${idFavorito}"
                    style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">
                🤍
            </button>
          </div>
      </div>`;
    cont.appendChild(prod);
  });
}

function initRender() {
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox^='galeria-']", { infinite: true });
  }
  cargarFavoritos();
  renderClientes();
  renderVideosClientes();
}
// =====================================================================
// === DATOS ===
// =====================================================================

function formatCurrency(price) {
  return `$${price.toLocaleString()} COP`;
}

// Función para normalizar IDs (quita tildes, eñes y espacios)
// Esto asegura que "Cerdito Chillón" se convierta en "cerdito-chillon" para el ID de HTML
function normalizarID(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Quita tildes
    .replace(/\s+/g, "-") // Espacios por guiones
    .replace(/[^a-z0-9-]/g, ""); // Quita caracteres especiales
}

const fotosClientes = [
  "./img_sitio/cliente1.jpg",
  "./img_sitio/cliente2.jpg",
  "./img_sitio/cliente3.jpg",
];

const videosClientes = ["./video_tienda/Cliente_feli_Estefania.mp4"];

function renderClientes() {
  const grid = document.getElementById("clientes-grid");
  if (!grid) return;
  grid.innerHTML = "";
  fotosClientes.forEach((foto) => {
    const img = document.createElement("img");
    img.src = foto;
    img.className = "cliente-foto";
    img.alt = "Mascota feliz con su producto WanCos Pet";
    grid.appendChild(img);
  });
}

function renderVideosClientes() {
  const grid = document.getElementById("videos-grid");
  if (!grid) return;
  grid.innerHTML = "";
  videosClientes.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.className = "cliente-video-card";
    videoCard.innerHTML = `
      <video width="100%" height="auto" controls style="border-radius:15px; background:#000;">
        <source src="${video}" type="video/mp4">
        Tu navegador no soporta videos.
      </video>
    `;
    grid.appendChild(videoCard);
  });
}

// === LÓGICA DE CARRITO ===
let carrito = JSON.parse(localStorage.getItem("wancos_carrito_v1") || "[]");

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarVista();
  localStorage.setItem("wancos_carrito_v1", JSON.stringify(carrito));
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarVista();
  localStorage.setItem("wancos_carrito_v1", JSON.stringify(carrito));
}

function vaciarCarrito() {
  if (confirm("¿Vaciar el carrito?")) {
    carrito = [];
    actualizarVista();
    localStorage.removeItem("wancos_carrito_v1");
  }
}

function toggleCarrito() {
  const sidebar = document.getElementById("sidebarCarrito");
  document.body.classList.toggle("sidebar-abierto");
  sidebar.classList.toggle("active");
}

function actualizarVista() {
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("total-carrito");
  const countEl = document.getElementById("carrito-count");
  if (!lista || !totalEl || !countEl) return;

  lista.innerHTML = "";
  let totalFinal = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "item-carrito";
    li.innerHTML = `<span>${item.producto}</span> <span>${formatCurrency(item.precio)} <button onclick="eliminarDelCarrito(${index})" style="color:#ff4d4d; border:none; background:none; font-weight:bold; cursor:pointer;">X</button></span>`;
    lista.appendChild(li);
    totalFinal += item.precio;
  });

  totalEl.innerHTML = `
    <div class="info-envios">🚚 Envíos GRATIS en Bogotá</div>
    <hr>
    <div style="color: black; font-size: 1.2rem;"><strong>TOTAL: ${formatCurrency(totalFinal)}</strong></div>`;

  countEl.innerText = carrito.length;
}

// === ENVÍO WHATSAPP ===
function enviarPedidoWhatsApp() {
  if (carrito.length === 0) return alert("El carrito está vacío.");
  const miTelefono = "573022375413";
  let totalGral = 0;
  let detalleProductos = "";
  carrito.forEach((item) => {
    detalleProductos += `✅ ${item.producto} - ${formatCurrency(item.precio)}\n`;
    totalGral += item.precio;
  });
  let mensaje = `*📦 NUEVO PEDIDO - WANCOS PET*\n\n*PRODUCTOS:*\n${detalleProductos}\n*TOTAL: ${formatCurrency(totalGral)}*\n\n_Nota: Envíos vía Interrapidisimo._`;
  window.open(
    `https://api.whatsapp.com/send?phone=${miTelefono}&text=${encodeURIComponent(mensaje)}`,
    "_blank",
  );
}

// === FAVORITOS ===
let favoritos = JSON.parse(localStorage.getItem("wancos_favoritos") || "[]");

function toggleFavorito(nombre) {
  const index = favoritos.indexOf(nombre);
  const idElemento = `fav-${normalizarID(nombre)}`;
  const btn = document.getElementById(idElemento);

  if (index === -1) {
    favoritos.push(nombre);
    if (btn) btn.innerText = "❤️";
  } else {
    favoritos.splice(index, 1);
    if (btn) btn.innerText = "🤍";
  }
  localStorage.setItem("wancos_favoritos", JSON.stringify(favoritos));
}

function cargarFavoritos() {
  favoritos.forEach((nombre) => {
    const idElemento = `fav-${normalizarID(nombre)}`;
    const btn = document.getElementById(idElemento);
    if (btn) btn.innerText = "❤️";
  });
}

//==== Buscador ====
const buscador = document.getElementById("buscador");
if (buscador) {
  buscador.addEventListener("input", (e) => {
    const termino = e.target.value.toLowerCase();
    const filtrar = (lista, id, gal) => {
      const elemento = document.getElementById(id);
      if (elemento) {
        // Solo intenta renderizar si el contenedor existe en esta página
        renderLista(
          id,
          lista.filter((p) => p.nombre.toLowerCase().includes(termino)),
          gal,
        );
      }
    };

    filtrar(juguetesPerros, "lista-productos", "galeria-perros");
    filtrar(accesoriosPerros, "lista-productos", "galeria-perros");
    filtrar(juguetesGatos, "lista-productos", "galeria-gatos");
    filtrar(accesoriosGatos, "lista-productos", "galeria-gatos");
  });
}
