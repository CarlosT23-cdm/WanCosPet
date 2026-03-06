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

// === LISTADO DE PRODUCTOS ===
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
    nombre: "Cangrejo Divertido",
    precio: 15000,
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
    precio: 12000,
    imagenes: [rutaBasePerrosJug + "Hueso_bicolor_x2_dog_jug_01.jpg"],
    descripcion: "Set de dos huesos resistentes.",
  },
  {
    nombre: "Hueso Dentado",
    precio: 11000,
    imagenes: [rutaBasePerrosJug + "Hueso_dentado_3x4_dog_jug_01.jpg"],
    descripcion: "Masajea encías y limpia dientes.",
  },
  {
    nombre: "Hueso Dino",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "Hueso_dino_dog_jug_01.jpg"],
    descripcion: "Forma divertida y gran resistencia.",
  },
  {
    nombre: "Hueso Mordedor",
    precio: 8500,
    imagenes: [rutaBasePerrosJug + "hueso_mordedor_jug_dog_01.jpg"],
    descripcion: "Clásico para morder por horas.",
  },
  {
    nombre: "Hueso Pitbull",
    precio: 18000,
    imagenes: [rutaBasePerrosJug + "Hueso_pitbull_dog_jug_01.jpg"],
    descripcion: "Extra duradero para mandíbulas fuertes.",
  },
  {
    nombre: "Jalador Trenza",
    precio: 16500,
    imagenes: [rutaBasePerrosJug + "Jalador_trenza_mediano_dog_jug_01.jpg"],
    descripcion: "Cuerda de algodón de alta calidad.",
  },
  {
    nombre: "Pelota Rugby",
    precio: 20000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_chillona_futbol_americano_jug_dog.jpg",
      rutaBasePerrosJug + "Pelota_rugby_sonido_jug_dog_01.jpg",
    ],
    descripcion: "Rebota de forma impredecible.",
  },
  {
    nombre: "Pelota Disco",
    precio: 13000,
    imagenes: [rutaBasePerrosJug + "pelota_disco_jug_dog_01.jpg"],
    descripcion: "Textura llamativa y resistente.",
  },
  {
    nombre: "Pelota con Lazo",
    precio: 14500,
    imagenes: [
      rutaBasePerrosJug + "Pelota_lazo_dog_jug_01.jpg",
      rutaBasePerrosJug + "Pelota_lazo_dog_jug_02.jpg",
    ],
    descripcion: "Ideal para juegos de lanzar.",
  },
  {
    nombre: "Pelota Lazo Tenis",
    precio: 11000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_lazo_tenis_jug_dog_01.jpg",
      rutaBasePerrosJug + "Pelota_lazo_tenis_jug_dog_001.jpg",
    ],
    descripcion: "Combinación de texturas favorita.",
  },
  {
    nombre: "Pelota Loca",
    precio: 6000,
    imagenes: [rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_01.jpg"],
    descripcion: "Pequeña pero muy saltarina.",
  },
  {
    nombre: "Pelota Snacks",
    precio: 16000,
    imagenes: [rutaBasePerrosJug + "Pelota_snack_dog_jug_01.jpg"],
    descripcion: "Rellénala con sus snacks favoritos.",
  },
  {
    nombre: "Peluche Lona",
    precio: 19000,
    imagenes: [rutaBasePerrosJug + "Peluche_lona_jug_dog_01.jpg"],
    descripcion: "Tela reforzada para mayor duración.",
  },
  {
    nombre: "Peluche Sonido",
    precio: 15000,
    imagenes: [rutaBasePerrosJug + "Peluche_pequeño_sonido_dog_jug_01.jpg"],
    descripcion: "Compañero suave para cachorros.",
  },
  {
    nombre: "Pesa Antisarro",
    precio: 12500,
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
    nombre: "Bolsas de Repuesto",
    precio: 7000,
    imagenes: [
      rutaBasePerrosAcc + "Bolsas_repuesto_x3_acc_dog_01.jpg",
      rutaBasePerrosAcc + "Bolsas_repuesto_paquete_dog_x6_acc_01.jpg",
    ],
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
    precio: 0,
    imagenes: [rutaBasePerrosAcc + "Comedero_alto_acc_dog_01.jpg"],
    descripcion: "Diseño elevado para mejor digestión.",
  },
  {
    nombre: "Comederos Flor",
    precio: 0,
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
    nombre: "Dispensadores de Bolsas",
    precio: 0,
    imagenes: [
      rutaBasePerrosAcc + "Dispensador_bolsas_fino_acc_dog_01.jpg",
      rutaBasePerrosAcc + "Dispensador_bolsas_fino_acc_dog_02.jpg",
      rutaBasePerrosAcc + "Dispensador_bolsas_linterna_acc_dog_01.jpg",
    ],
    descripcion: "Modelos elegantes y con linterna.",
  },
  {
    nombre: "Dosificador de Comida",
    precio: 0,
    imagenes: [
      rutaBasePerrosAcc + "Dosificador_dog_acc_01.jpg",
      rutaBasePerrosAcc + "Dosificador_dog_acc_02.jpg",
    ],
    descripcion: "Controla las porciones de tu mascota.",
  },
  {
    nombre: "Guante Quita Pelo",
    precio: 0,
    imagenes: [
      rutaBasePerrosAcc + "guante_quita_pelo_dog_acc_01.jpg",
      rutaBasePerrosAcc + "guante_quita_pelo_dog_acc_02.jpg",
    ],
    descripcion: "Remueve el pelo muerto mientras lo acaricias.",
  },
  {
    nombre: "Impermeables Wanda",
    precio: 41000,
    imagenes: [
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_01.jpg",
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_02.jpg",
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_04.jpg",
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
    nombre: "Cañas Divertidas",
    precio: 12000,
    imagenes: [
      rutaBaseGatosJug + "Caña_flores_cat_jug_01.jpg",
      rutaBaseGatosJug + "Caña_pluma_cat_jug_02.jpg",
    ],
    descripcion: "Fomenta el instinto de caza con plumas y flores.",
  },
  {
    nombre: "Juguetes con Catnip",
    precio: 0,
    imagenes: [
      rutaBaseGatosJug + "Catnip_gato_jug_01.jpg",
      rutaBaseGatosJug + "Catnip_mariquita_cat_jug_01.jpg",
      rutaBaseGatosJug + "Catnip_cuerpoespin_dosenuno_cat_jug_01.jpg",
      rutaBaseGatosJug + "Peluche_con_catnip_cat_jug_01.jpg",
    ],
    descripcion: "Peluches suaves con hierba gatera premium.",
  },
  {
    nombre: "Juguetes Interactivos",
    precio: 0,
    imagenes: [
      rutaBaseGatosJug + "Juguete_catnip_mas_pelota_cat_jug_01.jpg",
      rutaBaseGatosJug + "Juguete_resorte_gato_cat_jug_01.jpg",
    ],
    descripcion: "Combinación de texturas para horas de juego.",
  },
  {
    nombre: "Mazorca Chillona",
    precio: 0,
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
    precio: 0,
    imagenes: [
      rutaBaseGatosJug + "pelota_loca_pequeña_jug_cat_02.jpg",
      rutaBaseGatosJug + "pelota_loca_pequeña_jug_cat_03.jpg",
      rutaBaseGatosJug + "Pelota_asteroide_dog_jug_01.jpg",
    ],
    descripcion: "Rebotan de forma impredecible.",
  },
  {
    nombre: "Peluches Variados",
    precio: 0,
    imagenes: [
      rutaBaseGatosJug + "peluche_con_juguete_jug_cat_01.jpg",
      rutaBaseGatosJug + "peluche_con_juguete_jug_cat_02.jpg",
      rutaBaseGatosJug + "queso_amarillo_jug_cat_01.jpg",
    ],
    descripcion: "Compañeros suaves para la siesta y el juego.",
  },
];

const accesoriosGatos = [
  {
    nombre: "Arenera Moderna",
    precio: 0,
    imagenes: [
      rutaBaseGatosAcc + "Arenera_gris_cat_acc_01.jpg",
      rutaBaseGatosAcc + "Arenera_morada_cat_acc_01.jpg",
      rutaBaseGatosAcc + "Arenera_morada_cat_acc_02.jpg",
    ],
    descripcion: "Diseño amplio y fácil de limpiar, varios colores.",
  },
  {
    nombre: "Comedero Alto",
    precio: 0,
    imagenes: [rutaBaseGatosAcc + "Comedero_alto_acc_cat__01.jpg"],
    descripcion: "Postura ergonómica para tu gato.",
  },
  {
    nombre: "Comederos Flor",
    precio: 0,
    imagenes: [
      rutaBaseGatosAcc + "Comedero_flor_acc_cat_01.jpg",
      rutaBaseGatosAcc + "Comedero_flor_acc_cat_02.jpg",
      rutaBaseGatosAcc + "Comedero_flor_acc_cat_03.jpg",
    ],
    descripcion: "Diseños coloridos y divertidos.",
  },
  {
    nombre: "Kit de Palas",
    precio: 0,
    imagenes: [
      rutaBaseGatosAcc + "Palas_cara_gato_cat_acc_01.jpg",
      rutaBaseGatosAcc + "Palas_cara_gato_cat_acc_02.jpg",
      rutaBaseGatosAcc + "Palas_jarra_cat_acc_01.jpg",
    ],
    descripcion: "Palas resistentes para limpieza de arena.",
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
  // Puedes añadir más ofertas siguiendo esta misma estructura
];

// === FUNCIONES DE RENDERIZADO ===
// Añadimos 'nombreGaleria' para separar por categorías
function renderLista(idContenedor, lista, nombreGaleria) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;
  cont.innerHTML = "";
  lista.forEach((p) => {
    const prod = document.createElement("article");
    prod.className = "producto";
    const imgPrincipal = p.imagenes[0];
    // Ahora cada categoría tiene su propio nombre de galería
    const imagenesExtra = p.imagenes
      .slice(1)
      .map(
        (img) =>
          `<a data-fancybox="${nombreGaleria}" href="${img}" data-caption="${p.nombre} - ${formatCurrency(p.precio)}" style="display:none;"></a>`,
      )
      .join("");

    prod.innerHTML = `
      <a data-fancybox="${nombreGaleria}" href="${imgPrincipal}" data-caption="${p.nombre} - ${formatCurrency(p.precio)}">
          <img src="${imgPrincipal}" alt="${p.nombre}" loading="lazy">
      </a>
      ${imagenesExtra}
      <div class="producto-info">
          <div>
              <h3>${p.nombre}</h3>
              <p style="font-size: 0.85rem; color: #666; margin-bottom: 5px;">${p.descripcion}</p>
          </div>
          <div>
              <div class="price">${formatCurrency(p.precio)}</div>
              <button onclick="agregarAlCarrito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio})">Añadir al carrito</button>
          </div>
      </div>`;
    cont.appendChild(prod);
  });
}

function initRender() {
  // Pasamos un nombre único por categoría
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
      // Creamos un ID único para cada oferta basado en su índice
      const galeriaID = `galeria-oferta-${index}`;
      const el = document.createElement("article");
      el.className = "oferta";

      const imgPrincipal = o.imagenes[0];
      // Generamos los enlaces ocultos para el resto de imágenes
      const imagenesExtra = o.imagenes
        .slice(1)
        .map(
          (img) =>
            `<a data-fancybox="${galeriaID}" href="${img}" style="display:none;"></a>`,
        )
        .join("");

      el.innerHTML = `
        <a data-fancybox="${galeriaID}" href="${imgPrincipal}" data-caption="${o.nombre}">
            <img src="${imgPrincipal}" alt="${o.nombre}" loading="lazy">
        </a>
        ${imagenesExtra}
        <div class="producto-info">
            <h3>${o.nombre}</h3>
            <p>${o.descripcion}</p>
            <div class="price">${formatCurrency(o.precio)}</div>
            <button onclick="agregarAlCarrito('${o.nombre.replace(/'/g, "\\'")}', ${o.precio})">Añadir al carrito</button>
        </div>
      `;
      ofertasGrid.appendChild(el);
    });
  }

  if (typeof Fancybox !== "undefined") {
    // Vinculamos todas las galerías que empiecen con "galeria-"
    Fancybox.bind("[data-fancybox^='galeria-']", {
      infinite: true, // Se repite al llegar al final de la categoría
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
  document.body.classList.toggle("sidebar-abierto");
  sidebar.classList.toggle("active");
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
    li.innerHTML = `<span>${item.producto}</span> <span>${formatCurrency(item.precio)} <button onclick="eliminarDelCarrito(${index})" style="color:#ff4d4d; border:none; background:none; font-weight:bold; cursor:pointer; margin-left:10px;">X</button></span>`;
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

  // TICKET DIRECTO Y PROFESIONAL
  let mensaje = `*📦 NUEVO PEDIDO - WANCOS PET* 🐾\n\n`;
  mensaje += `*PRODUCTOS:*\n${detalleProductos}\n`;
  mensaje += `------------------------------------------\n`;
  mensaje += `💰 *Subtotal:* ${formatCurrency(subtotal)}\n`;
  mensaje += `🧾 *IVA (19%):* ${formatCurrency(iva)}\n`;
  mensaje += `🔥 *TOTAL ESTIMADO: ${formatCurrency(totalGral)}*\n`;
  mensaje += `------------------------------------------\n\n`;
  mensaje += `_Nota: El costo de envío a ciudades fuera de Bogotá se coordinará en este 
  chat según la transportadora de su preferencia._`;

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${miTelefono}&text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhatsApp, "_blank");
}
