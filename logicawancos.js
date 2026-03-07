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

// === LISTADO DE PRODUCTOS (Mantenido igual) ===
const juguetesPerros = [
  {
    nombre: "Ardilla Chillona",
    precio: 10000,
    imagenes: [
      rutaBasePerrosJug + "Ardilla_chillona_dog_01.jpg",
      rutaBasePerrosJug + "Ardilla_chillona_dog_02.jpg",
    ],
    descripcion: "Peluche resistente con sonido.",
  },
  {
    nombre: "Berenjena Chillona",
    precio: 9800,
    imagenes: [rutaBasePerrosJug + "Berengena_chillona_dog_jug_01.jpg"],
    descripcion: "Diseño ergonómico y sonido.",
  },
  {
    nombre: "Cangrejo Limpia dientes",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Cangrejo_dog_01.jpg"],
    descripcion: "Juguete de textura única.",
  },
  {
    nombre: "Cerdito Chillón",
    precio: 7000,
    imagenes: [rutaBasePerrosJug + "Cerdito_chillon_peq_jug_dog_01.jpg"],
    descripcion: "Látex suave con sonido divertido.",
  },
  {
    nombre: "Dona Antisarro",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Dona_antisarro_jug_dog_01.jpg"],
    descripcion: "Limpieza dental mientras juegan.",
  },
  {
    nombre: "Huesos Bicolor x2",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "Hueso_bicolor_x2_dog_jug_01.jpg"],
    descripcion: "Set de dos huesos resistentes.",
  },
  {
    nombre: "Hueso Dentado",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Hueso_dentado_3x4_dog_jug_01.jpg"],
    descripcion: "Masajea encías y limpia dientes.",
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
    descripcion: "Rebota de forma impredecible.",
  },
  {
    nombre: "Pelota Rugby",
    precio: 20000,
    imagenes: [rutaBasePerrosJug + "Pelota_rugby_sonido_jug_dog_01.jpg"],
    descripcion: "Con un plastico resistente y muy ligera.",
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
    descripcion: "Para quye no te enrredes con tus bolsas.",
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
    descripcion: "Un hermoso peluche en forma de gato, para tu amigo.",
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
    descripcion: "Un recipiente de hierba gatera plastico con forma de queso.",
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
    descripcion: "Ampliamente saltarin.",
  },
  {
    nombre: "Mazorca Chillona",
    precio: 9600,
    imagenes: [rutaBaseGatosJug + "Mazorca_chillona_cat_jug_01.jpg"],
    descripcion: "Juguete con sonido y textura resistente.",
  },
  {
    nombre: "Paquete de Ratones y Juguetes",
    precio: 6000,
    imagenes: [
      rutaBaseGatosJug + "Paquete_raton_x3_cat_jug_01.jpg",
      rutaBaseGatosJug + "Paquete_juguete_x3_cat_jug_01.jpg",
    ],
    descripcion: "Sets de juguetes variados para mayor diversión.",
  },
  {
    nombre: "Pelotas Locas",
    precio: 14000,
    imagenes: [
      rutaBaseGatosJug + "pelota_loca_pequeña_jug_cat_02.jpg",
      rutaBaseGatosJug + "pelota_loca_pequeña_jug_cat_03.jpg",
      rutaBaseGatosJug + "Pelota_asteroide_dog_jug_01.jpg",
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
    descripcion: "Compañeros suaves para la siesta y el juego.",
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
    descripcion: "Execelente diseño plastico.",
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
      rutaBaseGatosAcc + "Comedero_flor_acc_cat_03.jpg",
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
    descripcion: "Pala plastica grande.",
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

// === FUNCIONES DE RENDERIZADO (Mejoradas con Accesibilidad) ===
function renderLista(idContenedor, lista, nombreGaleria) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;
  cont.innerHTML = "";
  lista.forEach((p) => {
    const prod = document.createElement("article");
    prod.className = "producto";
    const imgPrincipal = p.imagenes[0];
    const imagenesExtra = p.imagenes
      .slice(1)
      .map(
        (img) =>
          `<a data-fancybox="${nombreGaleria}" href="${img}" data-caption="${p.nombre} - ${formatCurrency(p.precio)}" style="display:none;" aria-hidden="true"></a>`,
      )
      .join("");

    prod.innerHTML = `
      <a data-fancybox="${nombreGaleria}" href="${imgPrincipal}" data-caption="${p.nombre} - ${formatCurrency(p.precio)}" aria-label="Ver imagen ampliada de ${p.nombre}">
          <img src="${imgPrincipal}" alt="${p.nombre}" loading="lazy">
      </a>
      ${imagenesExtra}
      <div class="producto-info">
          <div>
              <h3>${p.nombre}</h3>
              <p style="font-size: 0.85rem; color: #666; margin-bottom: 5px;">${p.descripcion}</p>
          </div>
          <div>
              <div class="price" aria-label="Precio: ${formatCurrency(p.precio)}">${formatCurrency(p.precio)}</div>
              <button onclick="agregarAlCarrito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio})" aria-label="Agregar ${p.nombre} al carrito de compras">Añadir al carrito</button>
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

      const imgPrincipal = o.imagenes[0];
      const imagenesExtra = o.imagenes
        .slice(1)
        .map(
          (img) =>
            `<a data-fancybox="${galeriaID}" href="${img}" style="display:none;" aria-hidden="true"></a>`,
        )
        .join("");

      el.innerHTML = `
        <a data-fancybox="${galeriaID}" href="${imgPrincipal}" data-caption="${o.nombre}" aria-label="Ver oferta: ${o.nombre}">
            <img src="${imgPrincipal}" alt="${o.nombre}" loading="lazy">
        </a>
        ${imagenesExtra}
        <div class="producto-info">
            <h3>${o.nombre}</h3>
            <p>${o.descripcion}</p>
            <div class="price" aria-label="Precio de oferta: ${formatCurrency(o.precio)}">${formatCurrency(o.precio)}</div>
            <button onclick="agregarAlCarrito('${o.nombre.replace(/'/g, "\\'")}', ${o.precio})" aria-label="Agregar oferta ${o.nombre} al carrito de compras">Añadir al carrito</button>
        </div>
      `;
      ofertasGrid.appendChild(el);
    });
  }

  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox^='galeria-']", {
      infinite: true,
      keyboard: true,
      Toolbar: {
        display: { right: ["slideshow", "fullScreen", "thumbs", "close"] },
      },
    });
  }
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
  const isOpening = !document.body.classList.contains("sidebar-abierto");

  document.body.classList.toggle("sidebar-abierto");
  sidebar.classList.toggle("active");

  // Accesibilidad: avisar al lector si el carrito está abierto o cerrado
  sidebar.setAttribute("aria-hidden", !isOpening);
  if (isOpening) {
    sidebar.focus(); // Enfocar el carrito al abrirlo
  }
}

function actualizarVista() {
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("total-carrito");
  const countEl = document.getElementById("carrito-count");
  if (!lista || !totalEl || !countEl) return;

  lista.innerHTML = "";
  let subtotal = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "item-carrito";
    li.innerHTML = `<span>${item.producto}</span> <span>${formatCurrency(item.precio)} <button onclick="eliminarDelCarrito(${index})" style="color:#ff4d4d; border:none; background:none; font-weight:bold; cursor:pointer; margin-left:10px;" aria-label="Quitar ${item.producto} del carrito">X</button></span>`;
    lista.appendChild(li);
    subtotal += item.precio;
  });

  const iva = Math.round(subtotal * 0.19);
  const totalConIva = subtotal + iva;
  totalEl.innerHTML = `<div class="info-envios">🚚 Envíos GRATIS en Bogotá</div><div class="desglose-carrito"><div>Subtotal: ${formatCurrency(subtotal)}</div><div>IVA (19%): ${formatCurrency(iva)}</div><hr><strong>TOTAL: ${formatCurrency(totalConIva)}</strong></div>`;
  countEl.innerText = carrito.length;
}

// === INICIO ===
document.addEventListener("DOMContentLoaded", () => {
  initRender();
  actualizarVista();
  document
    .getElementById("vaciar-btn")
    .addEventListener("click", vaciarCarrito);
});

// === ENVÍO WHATSAPP CON TICKET FORMATEADO ===
function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    return alert(
      "El carrito está vacío. ¡Agrega algunos productos antes de pedir!",
    );
  }

  const miTelefono = "573022375413";
  let subtotal = 0;
  let detalleProductos = "";

  carrito.forEach((item) => {
    detalleProductos += `✅ ${item.producto} - ${formatCurrency(item.precio)}\n`;
    subtotal += item.precio;
  });

  const iva = Math.round(subtotal * 0.19);
  const totalGral = subtotal + iva;

  let mensaje = `*📦 NUEVO PEDIDO - WANCOS PET* 🐾\n\n`;
  mensaje += `*PRODUCTOS:*\n${detalleProductos}\n`;
  mensaje += `------------------------------------------\n`;
  mensaje += `💰 *Subtotal:* ${formatCurrency(subtotal)}\n`;
  mensaje += `🧾 *IVA (19%):* ${formatCurrency(iva)}\n`;
  mensaje += `🔥 *TOTAL ESTIMADO: ${formatCurrency(totalGral)}*\n`;
  mensaje += `------------------------------------------\n\n`;
  mensaje += `_Nota: El costo de envío a ciudades fuera de Bogotá se coordinará en este chat según la transportadora de su preferencia._`;

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${miTelefono}&text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhatsApp, "_blank");
}
