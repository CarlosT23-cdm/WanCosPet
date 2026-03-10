// =====================================================================
// === DATOS Y RUTAS ===
// =====================================================================
const rutaBasePerrosJug = "./img_tienda/img_perros_juguetes/";
const rutaBasePerrosAcc = "./img_tienda/img_perros_accesorios/";
const rutaBaseGatosJug = "./img_tienda/img_gatos_juguetes/";
const rutaBaseGatosAcc = "./img_tienda/img_gatos_accesorios/";

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

// === LISTADO DE PRODUCTOS ===
const juguetesPerros = [
  {
    nombre: "Ardilla Chillona",
    precio: 10000,
    imagenes: [
      rutaBasePerrosJug + "Ardilla_chillona_dog_01.jpg",
      rutaBasePerrosJug + "Ardilla_chillona_dog_02.jpg",
    ],
    descripcion:
      "Juguete de peluche con textura suave, genera sonido al presionarlo.",
  },
  {
    nombre: "Cangrejo Limpia Dientes",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Cangrejo_dog_01.jpg"],
    descripcion:
      "Incluye pito interno para juego interactivo y limpieza dental.",
  },
  {
    nombre: "Berenjena Chillona",
    precio: 9800,
    imagenes: [rutaBasePerrosJug + "Berengena_chillona_dog_jug_01.jpg"],
    descripcion: "Elaborado en goma flexible que ayuda a estimular la mordida.",
  },
  {
    nombre: "Dona Antisarro",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Dona_antisarro_jug_dog_01.jpg"],
    descripcion:
      "Resistente juguete de goma maciza en forma de dona, ideal para morder, lanzar y mantener a tu perro entretenido. Sus puntas ayudan a masajear las encías y favorecen la limpieza dental mientras juega. Perfecto para perros activos que necesitan liberar energía de forma segura. 🦷🦴",
  },
  {
    nombre: "Cerdito Chillón",
    precio: 7000,
    imagenes: [rutaBasePerrosJug + "Cerdito_chillon_peq_jug_dog_01.jpg"],
    video: "./video_tienda/cerdito_chillon_dog_jug.mp4",
    descripcion: "Vinilo flexible de alta resistencia con dispositivo sonoro.",
  },
  {
    nombre: "Hueso Dentado",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Hueso_dentado_3x4_dog_jug_01.jpg"],
    descripcion:
      "Actúa como cepillo mecánico que limpia mientras el perro muerde.",
  },
  {
    nombre: "Hueso Dino",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Hueso_dino_dog_jug_01.jpg"],
    descripcion: "Forma divertida y gran resistencia.",
  },
  {
    nombre: "Hueso Mordedor",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "hueso_mordedor_jug_dog_01.jpg"],
    descripcion: "Clásico para morder por horas.",
  },
  {
    nombre: "Hueso Pitbull",
    precio: 8000,
    imagenes: [rutaBasePerrosJug + "Hueso_pitbull_dog_jug_01.jpg"],
    descripcion: "Extra duradero para mandíbulas fuertes.",
  },
  {
    nombre: "Jalador Trenza",
    precio: 11000,
    imagenes: [rutaBasePerrosJug + "Jalador_trenza_mediano_dog_jug_01.jpg"],
    descripcion: "Cuerda de algodón de alta calidad.",
  },
  {
    nombre: "Pelota Cillona Futbol Americano",
    precio: 10200,
    imagenes: [
      rutaBasePerrosJug + "Pelota_chillona_futbol_americano_jug_dog_01.jpg",
    ],
    descripcion:
      "Juguete interactivo con sonido diseñado para estimular el instinto de juego de tu mascota. Al presionarlo emite un divertido chillido que capta la atención del perro y promueve la actividad física. Su material flexible y tamaño compacto lo hacen ideal para juegos de mordida suave, lanzar y recoger. Un accesorio perfecto para mantener a tu perro entretenido y activo. 🐾",
  },
  {
    nombre: "Pelota Rugby",
    precio: 20000,
    imagenes: [rutaBasePerrosJug + "Pelota_rugby_sonido_jug_dog_01.jpg"],
    descripcion: "Con un plástico resistente y muy ligera.",
  },
  {
    nombre: "Pelota Disco",
    precio: 28000,
    imagenes: [rutaBasePerrosJug + "pelota_disco_jug_dog_01.jpg"],
    descripcion: "Textura llamativa y resistente.",
  },
  {
    nombre: "Pelota Lazo",
    precio: 10000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_lazo_dog_jug_01.jpg",
      rutaBasePerrosJug + "Pelota_lazo_dog_jug_02.jpg",
    ],
    descripcion: "Ideal para juegos de lanzar.",
  },
  {
    nombre: "Lazo Pelota de Tenis",
    precio: 11000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_lazo_tenis_jug_dog_01.jpg",
      rutaBasePerrosJug + "Pelota_lazo_tenis_jug_dog_001.jpg",
    ],
    descripcion: "Combinación de texturas favorita.",
  },
  {
    nombre: "Pelota Loca Pequeña",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_01.jpg"],
    descripcion: "Pequeña pero muy saltarina.",
  },
  {
    nombre: "Pelota Snacks",
    precio: 20000,
    imagenes: [rutaBasePerrosJug + "Pelota_snack_dog_jug_01.jpg"],
    descripcion: "Rellénala con sus snacks favoritos.",
  },
  {
    nombre: "Peluche Lona",
    precio: 15000,
    imagenes: [rutaBasePerrosJug + "Peluche_lona_jug_dog_01.jpg"],
    descripcion: "Tela reforzada para mayor duración.",
  },
  {
    nombre: "Peluche Kiwi Chillón",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Peluche_pequeño_sonido_dog_jug_01.jpg"],
    descripcion: "Compañero suave para cachorros.",
  },
  {
    nombre: "Pesa Antisarro",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Pesa_Antisarro_dog_jug_01.jpg"],
    descripcion: "Forma de pesa para fácil agarre.",
  },
];

const accesoriosPerros = [
  {
    nombre: "Bebedero 4 en 1",
    precio: 50000,
    imagenes: [rutaBasePerrosAcc + "Bebedero_4_en_uno_dog_acc_01.jpg"],
    descripcion: "Agua, comida, bolsas y pala.",
  },
  {
    nombre: "Bolsas Biodegradable por 6",
    precio: 13500,
    imagenes: [rutaBasePerrosAcc + "Bolsas_repuesto_paquete_dog_x6_acc_01.jpg"],
    descripcion: "Paquete surtido de 6 rollos resistentes.",
  },
  {
    nombre: "Bolsas Biodegradable por 3",
    precio: 7000,
    imagenes: [rutaBasePerrosAcc + "Bolsas_repuesto_x3_acc_dog_01.jpg"],
    descripcion: "Rollos de bolsas resistentes para desechos.",
  },
  {
    nombre: "Cepillo Universal",
    precio: 10700,
    imagenes: [rutaBasePerrosAcc + "Cepillo_universal_grande_acc_dog_01.jpg"],
    descripcion: "Elimina nudos fácilmente.",
  },
  {
    nombre: "Comedero Alto",
    precio: 14000,
    imagenes: [rutaBasePerrosAcc + "Comedero_alto_acc_dog_01.jpg"],
    descripcion: "Diseño elevado para mejor digestión.",
  },
  {
    nombre: "Comederos Flor",
    precio: 13000,
    imagenes: [
      rutaBasePerrosAcc + "Comedero_flor_dog_acc_01.jpg",
      rutaBasePerrosAcc + "Comedero_flor_dog_acc_02.jpg",
    ],
    descripcion: "Varios colores disponibles.",
  },
  {
    nombre: "Correa Retráctil",
    precio: 22000,
    imagenes: [rutaBasePerrosAcc + "Correa_retractil_acc_dog_01.jpg"],
    descripcion: "5 metros de libertad.",
  },
  {
    nombre: "Dispensadores de Bolsas Fino",
    precio: 11000,
    imagenes: [
      rutaBasePerrosAcc + "Dispensador_bolsas_fino_acc_dog_01.jpg",
      rutaBasePerrosAcc + "Dispensador_bolsas_fino_acc_dog_02.jpg",
    ],
    descripcion: "Modelos elegantes y con linterna.",
  },
  {
    nombre: "Dispensador bolsas con linterna",
    precio: 20000,
    imagenes: [
      rutaBasePerrosAcc + "Dispensador_bolsas_linterna_acc_dog_01.jpg",
    ],
    descripcion: "Para que no te enredes con tus bolsas.",
  },
  {
    nombre: "Dosificador Dog Agua",
    precio: 16000,
    imagenes: [
      rutaBasePerrosAcc + "Dosificador_dog_acc_01.jpg",
      rutaBasePerrosAcc + "Dosificador_dog_acc_02.jpg",
    ],
    descripcion: "Controla las porciones de tu mascota.",
  },
  {
    nombre: "Guante Quita Pelo",
    precio: 14000,
    imagenes: [
      rutaBasePerrosAcc + "guante_quita_pelo_dog_acc_01.jpg",
      rutaBasePerrosAcc + "guante_quita_pelo_dog_acc_02.jpg",
    ],
    descripcion: "Remueve el pelo muerto mientras lo acaricias.",
  },
  {
    nombre: "Impermeable Wanda",
    precio: 41000,
    imagenes: [
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_05.jpg",
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_09.jpg",
    ],
    descripcion: "Protección total contra lluvia, varios colores.",
  },
];

const juguetesGatos = [
  {
    nombre: "Paquete Ratones por 3",
    precio: 7200,
    imagenes: [rutaBaseGatosJug + "Paquete_raton_x3_cat_jug_01.jpg"],
    descripcion: "Ratón de cuerda color negro, plástico, tamaño mediano.",
  },
  {
    nombre: "Catnip Aguacate",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "aguacate_jug_cat_01.jpg"],
    descripcion: "Gira 360 grados y relaja a tu gato.",
  },
  {
    nombre: "Caña libelula",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Caña_flores_cat_jug_01.jpg"],
    descripcion: "Fomenta el instinto de caza flores.",
  },
  {
    nombre: "Caña Flores",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Caña_pluma_cat_jug_02.jpg"],
    descripcion: "Intensifica la actividad de casa mediante plumas.",
  },
  {
    nombre: "Juguetes con Catnip",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Catnip_gato_jug_01.jpg"],
    descripcion: "Peluches suaves con hierba gatera premium.",
  },
  {
    nombre: "Peluche con Catnip",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Peluche_con_catnip_cat_jug_01.jpg"],
    descripcion: "Un hermoso peluche en forma de gato.",
  },
  {
    nombre: "Catnip Puercoespin",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Catnip_cuerpoespin_dosenuno_cat_jug_01.jpg"],
    descripcion: "Divertido juguete con hierba gatera.",
  },
  {
    nombre: "Catnip Vaquita",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Catnip_mariquita_cat_jug_01.jpg"],
    descripcion: "Un divertido escarabajo con hierba gatera.",
  },
  {
    nombre: "Catnip Queso",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "queso_amarillo_jug_cat_01.jpg"],
    descripcion: "Un recipiente de hierba gatera plástico con forma de queso.",
  },
  {
    nombre: "Ratón Catnip Más Pelota",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Juguete_catnip_mas_pelota_cat_jug_01.jpg"],
    descripcion: "Combinación de catnip más pelota.",
  },
  {
    nombre: "Juguete Con Resorte",
    precio: 20000,
    imagenes: [rutaBaseGatosJug + "Juguete_resorte_gato_cat_jug_01.jpg"],
    descripcion: "Ampliamente saltarín.",
  },
  {
    nombre: "Mazorca Chillona",
    precio: 9600,
    imagenes: [rutaBaseGatosJug + "Mazorca_chillona_cat_jug_01.jpg"],
    descripcion: "Juguete con sonido y textura resistente.",
  },
  {
    nombre: "Paquete Juguete Gato x 3",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Paquete_juguete_x3_cat_jug_01.jpg"],
    descripcion: "Ratón de felpa, pelota con cascabel y pez de tela.",
  },
  {
    nombre: "Pelotas Locas",
    precio: 14000,
    imagenes: [
      rutaBaseGatosJug + "pelota_loca_pequeña_jug_cat_02.jpg",
      rutaBaseGatosJug + "pelota_loca_pequeña_jug_cat_03.jpg",
    ],
    descripcion: "De goma y rebotan de forma impredecible.",
  },
  {
    nombre: "Peluches Variados",
    precio: 6500,
    imagenes: [
      rutaBaseGatosJug + "peluche_con_juguete_jug_cat_01.jpg",
      rutaBaseGatosJug + "peluche_con_juguete_jug_cat_02.jpg",
    ],
    descripcion: "Compañeros suaves para la siesta.",
  },
];

const accesoriosGatos = [
  {
    nombre: "Arenera Moderna",
    precio: 37000,
    imagenes: [
      rutaBaseGatosAcc + "Arenera_morada_cat_acc_01.jpg",
      rutaBaseGatosAcc + "Arenera_morada_cat_acc_02.jpg",
    ],
    descripcion: "Excelente diseño plástico.",
  },
  {
    nombre: "Arenera Gris",
    precio: 25000,
    imagenes: [rutaBaseGatosAcc + "Arenera_gris_cat_acc_01.jpg"],
    descripcion: "Diseño amplio y fácil de limpiar.",
  },
  {
    nombre: "Comedero Alto",
    precio: 14000,
    imagenes: [rutaBaseGatosAcc + "Comedero_alto_acc_cat__01.jpg"],
    descripcion: "Postura ergonómica para tu gato.",
  },
  {
    nombre: "Comederos Flor",
    precio: 13000,
    imagenes: [
      rutaBaseGatosAcc + "Comedero_flor_acc_cat_01.jpg",
      rutaBaseGatosAcc + "Comedero_flor_acc_cat_02.jpg",
    ],
    descripcion: "Diseños coloridos y divertidos.",
  },
  {
    nombre: "Palas Cara de Gato",
    precio: 5000,
    imagenes: [
      rutaBaseGatosAcc + "Palas_cara_gato_cat_acc__01.jpg",
      rutaBaseGatosAcc + "Palas_cara_gato_cat_acc_02.jpg",
    ],
    descripcion: "Palas resistentes para limpieza de arena.",
  },
  {
    nombre: "Palas Jarra",
    precio: 8000,
    imagenes: [rutaBaseGatosAcc + "Palas_jarra_cat_acc_01.jpg"],
    descripcion: "Pala plástica grande.",
  },
];

const ofertas = [
  {
    nombre: "Combo Gato Casero",
    descripcion: "Catnip Aguacate + arenera gris.",
    precio: 46000,
    imagenes: [
      rutaBaseGatosJug + "aguacate_jug_cat_01.jpg",
      rutaBaseGatosAcc + "Arenera_gris_cat_acc_01.jpg",
    ],
  },
  {
    nombre: "Combo Limpieza Total",
    descripcion: "Arenera morada + Kit de palas.",
    precio: 35000,
    imagenes: [
      rutaBaseGatosAcc + "Arenera_morada_cat_acc_01.jpg",
      rutaBaseGatosAcc + "Palas_jarra_cat_acc_01.jpg",
    ],
  },
];

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
  renderLista(
    "lista-juguetes-perros",
    juguetesPerros,
    "galeria-juguetes-perros",
  );
  renderLista(
    "lista-accesorios-perros",
    accesoriosPerros,
    "galeria-accesorios-perros",
  );
  renderLista("lista-juguetes-gatos", juguetesGatos, "galeria-juguetes-gatos");
  renderLista(
    "lista-accesorios-gatos",
    accesoriosGatos,
    "galeria-accesorios-gatos",
  );

  const ofertasGrid = document.getElementById("ofertas-grid");
  if (ofertasGrid) {
    ofertasGrid.innerHTML = "";
    ofertas.forEach((o, index) => {
      const galeriaID = `galeria-oferta-${index}`;
      const el = document.createElement("article");
      el.className = "oferta";
      el.innerHTML = `
        <a data-fancybox="${galeriaID}" href="${o.imagenes[0]}">
            <img src="${o.imagenes[0]}" alt="${o.nombre}" loading="lazy">
        </a>
        <div class="producto-info">
            <h3>${o.nombre}</h3>
            <p>${o.descripcion}</p>
            <div class="price">${formatCurrency(o.precio)}</div>
            <button onclick="agregarAlCarrito('${o.nombre.replace(/'/g, "\\'")}', ${o.precio})">Añadir al carrito</button>
        </div>`;
      ofertasGrid.appendChild(el);
    });
  }

  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox^='galeria-']", { infinite: true });
  }
  cargarFavoritos();
  renderClientes();
  renderVideosClientes();
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

// === INICIO ===
document.addEventListener("DOMContentLoaded", () => {
  initRender();
  actualizarVista();

  const buscador = document.getElementById("buscador");
  if (buscador) {
    buscador.addEventListener("input", (e) => {
      const termino = e.target.value.toLowerCase();
      const filtrar = (lista, id, gal) =>
        renderLista(
          id,
          lista.filter((p) => p.nombre.toLowerCase().includes(termino)),
          gal,
        );

      filtrar(
        juguetesPerros,
        "lista-juguetes-perros",
        "galeria-juguetes-perros",
      );
      filtrar(
        accesoriosPerros,
        "lista-accesorios-perros",
        "galeria-accesorios-perros",
      );
      filtrar(juguetesGatos, "lista-juguetes-gatos", "galeria-juguetes-gatos");
      filtrar(
        accesoriosGatos,
        "lista-accesorios-gatos",
        "galeria-accesorios-gatos",
      );
    });
  }

  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("activo"));
      this.classList.add("activo");
    });
  });
});
