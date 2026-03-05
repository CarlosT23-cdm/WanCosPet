// =====================================================================
// === DATOS Y RUTAS (DEBEN ESTAR AL INICIO Y FUERA DE FUNCIONES) ===
// =====================================================================

// Rutas base
const rutaBasePerrosJug = "./img_tienda/img_perros_juguetes/";
const rutaBasePerrosAcc = "./img_tienda/img_perros_accesorios/";
const rutaBaseGatosJug = "./img_tienda/img_gatos_juguetes/";
const rutaBaseGatosAcc = "./img_tienda/img_gatos_accesorios/";

// Función para limpiar el nombre del archivo y hacerlo profesional
function limpiarNombreProducto(nombreArchivo) {
  let nombreLimpio = nombreArchivo.replace(/\.[^/.]+$/, "");
  nombreLimpio = nombreLimpio.replace(
    /(_(dog|cat|dyc|jug|acc|x\d+|peq|3x4)_\d+)|(_\d+)$/gi,
    "",
  );
  nombreLimpio = nombreLimpio.replace(
    /(_(dog|cat|dyc|jug|acc|peq|x\d+|3x4))/gi,
    "",
  );
  nombreLimpio = nombreLimpio.replace(/(_\d+)$/gi, "");
  nombreLimpio = nombreLimpio.replace(/_/g, " ");
  if (nombreLimpio.length > 0) {
    nombreLimpio = nombreLimpio.trim();
    nombreLimpio = nombreLimpio.charAt(0).toUpperCase() + nombreLimpio.slice(1);
  }
  return nombreLimpio.trim();
}

// FORMATO DE MONEDA
function formatCurrency(price) {
  return `$${price.toLocaleString()} COP`;
}

// === ACTUALIZACIÓN: PRODUCTOS REALES DESDE EXCEL/DRIVE ===

// Lista juguetes para perros con PRECIOS REALES
const juguetesPerros = [
  {
    nombre: "Cerdito Chillón Pequeño",
    precio: 7000,
    img: rutaBasePerrosJug + "Cerdito_chillon_peq_jug_dog_01.jpg",
    descripcion: "Látex suave con sonido divertido.",
  },
  {
    nombre: "Pelota Huesos Premio",
    precio: 20000,
    img: rutaBasePerrosJug + "Pelota_snack_dog_jug_01.jpg",
    descripcion: "Ideal para esconder snacks y estimular la mente.",
  },
  {
    nombre: "Ardilla Chillona",
    precio: 10000,
    img: rutaBasePerrosJug + "Ardilla_chillona_dog_01.jpg",
    descripcion: "Peluche resistente con sonido interno.",
  },
  {
    nombre: "Pelota Rugby Sonido",
    precio: 20000,
    img: rutaBasePerrosJug + "Pelota_rugby_sonido_jug_dog_01.jpg",
    descripcion: "Caucho de alta durabilidad para morder.",
  },
  {
    nombre: "Dona Antisarro",
    precio: 9000,
    img: rutaBasePerrosJug + "Dona_antisarro_jug_dog_01.jpg",
    descripcion: "Ayuda a la limpieza dental mientras juegan.",
  },
  {
    nombre: "Berenjena Chillona",
    precio: 9800,
    img: rutaBasePerrosJug + "Berengena_chillona_dog_jug_01.jpg",
    descripcion: "Diseño ergonómico y sonido llamativo.",
  },
  {
    nombre: "Peluche Pequeño Sonido",
    precio: 15500,
    img: rutaBasePerrosJug + "Peluche_pequeño_sonido_dog_jug_01.jpg",
    descripcion: "Textura suave, ideal para cachorros.",
  },
  {
    nombre: "Hueso Pitbull",
    precio: 18500,
    img: rutaBasePerrosJug + "Hueso_pitbull_dog_jug_01.jpg",
    descripcion: "Extra resistente para mandíbulas fuertes.",
  },
];

// Lista accesorios para perros con PRECIOS REALES
const accesoriosPerros = [
  {
    nombre: "Bebedero 4 en 1",
    precio: 50000,
    img: rutaBasePerrosAcc + "Bebedero_4_en_uno_dog_acc_01.jpg",
    descripcion: "Agua, comida, bolsas y pala en un solo envase.",
  },
  {
    nombre: "Impermeable Wanda L",
    precio: 41000,
    img: rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_01.jpg",
    descripcion: "Protección total contra la lluvia con estilo.",
  },
  {
    nombre: "Cepillo Universal Grande",
    precio: 10700,
    img: rutaBasePerrosAcc + "Cepillo_universal_grande_acc_dog_01.jpg",
    descripcion: "Elimina nudos y pelo muerto fácilmente.",
  },
  {
    nombre: "Correa Retráctil",
    precio: 22000,
    img: rutaBasePerrosAcc + "Correa_retractil_acc_dog_01.jpg",
    descripcion: "Libertad de movimiento controlada (5 metros).",
  },
  {
    nombre: "Dispensador Bolsas Linterna",
    precio: 20000,
    img: rutaBasePerrosAcc + "Dispensador_bolsas_linterna_acc_dog_01.jpg",
    descripcion: "Perfecto para paseos nocturnos seguros.",
  },
  {
    nombre: "Bolsas Repuesto x3",
    precio: 8500,
    img: rutaBasePerrosAcc + "Bolsas_repuesto_x3_acc_dog_01.jpg",
    descripcion: "Paquete económico de bolsas resistentes.",
  },
];

// Lista juguetes para gatos con PRECIOS REALES
const juguetesGatos = [
  {
    nombre: "Catnip Aguacate",
    precio: 10000,
    img: rutaBaseGatosJug + "aguacate_jug_cat_01.jpg",
    descripcion: "Gira 360 grados y relaja a tu gatito.",
  },
  {
    nombre: "Caña Libélula",
    precio: 11500,
    img: rutaBaseGatosJug + "Caña_flores_cat_jug_01.jpg",
    descripcion: "Fomenta el instinto de caza y salto.",
  },
  {
    nombre: "Gimnasio Himalaya Azul",
    precio: 300000,
    img: rutaBaseGatosJug + "Peluche_con_catnip_cat_jug_01.jpg",
    descripcion: "El paraíso de descanso y juego para tu gato.",
  },
  {
    nombre: "Ratones Chillones x3",
    precio: 5800,
    img: rutaBaseGatosJug + "Paquete_raton_x3_cat_jug_01.jpg",
    descripcion: "Diversión clásica garantizada.",
  },
];

// Lista accesorios para gatos con PRECIOS REALES
const accesoriosGatos = [
  {
    nombre: "Arenera Gris",
    precio: 37000,
    img: rutaBaseGatosAcc + "Arenera_gris_cat_acc_01.jpg",
    descripcion: "Amplia y fácil de limpiar.",
  },
  {
    nombre: "Arenero Huellitas",
    precio: 25000,
    img: rutaBaseGatosAcc + "Arenera_morada_cat_acc_01.jpg",
    descripcion: "Diseño compacto con textura antideslizante.",
  },
  {
    nombre: "Guacal Extragrande",
    precio: 55000,
    img: rutaBaseGatosAcc + "Palas_jarra_cat_acc_01.jpg",
    descripcion: "Viajes cómodos y seguros para gatos grandes.",
  },
  {
    nombre: "Cepillo Dental x4",
    precio: 9000,
    img: rutaBaseGatosAcc + "Palas_cara_gato_cat_acc__01.jpg",
    descripcion: "Cuidado bucal completo para tu mascota.",
  },
];

// Ofertas especiales
const ofertas = [
  {
    nombre: "Combo Gato Aventurero",
    descripcion: "Cama + Juguete Catnip.",
    precio: 60000,
    img: "./img_sitio/ejemplo_cliente_feliz.jpg",
  },
];

// =====================================================================
// === FUNCIONES DE RENDERIZADO SIMPLIFICADAS ===
// =====================================================================

function escapeHtml(text) {
  let escaped = JSON.stringify(text).slice(1, -1);
  return escaped.replace(/'/g, "\\'");
}

function renderLista(idContenedor, lista) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;
  cont.innerHTML = "";
  lista.forEach((p) => {
    const prod = document.createElement("article");
    prod.className = "producto";
    const captionSimple = `${p.nombre} - ${formatCurrency(p.precio)}`;

    prod.innerHTML = `
        <a data-fancybox="productos-galeria" 
           data-src="${p.img}" 
           data-caption="${escapeHtml(captionSimple)}"
           href="javascript:;">
           <img src="${p.img}" alt="${p.nombre}" />
        </a>
        <div class="producto-info">
          <div>
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
          </div>
          <div>
            <div class="price">${formatCurrency(p.precio)}</div>
            <button onclick="agregarAlCarrito('${escapeHtml(p.nombre)}', ${p.precio})">Añadir al carrito</button>
          </div>
        </div>
      `;
    cont.appendChild(prod);
  });
}

function initRender() {
  renderLista("lista-juguetes-perros", juguetesPerros);
  renderLista("lista-accesorios-perros", accesoriosPerros);
  renderLista("lista-juguetes-gatos", juguetesGatos);
  renderLista("lista-accesorios-gatos", accesoriosGatos);

  const ofertasGrid = document.getElementById("ofertas-grid");
  if (ofertasGrid) {
    ofertasGrid.innerHTML = "";
    ofertas.forEach((o) => {
      const el = document.createElement("div");
      el.className = "oferta";
      const captionSimple = `${o.nombre} - ${formatCurrency(o.precio)}`;
      el.innerHTML = `
          <a data-fancybox="productos-galeria" 
             data-src="${o.img}" 
             data-caption="${escapeHtml(captionSimple)}"
             href="javascript:;">
             <img src="${o.img}" alt="${o.nombre}" />
          </a>
          <div class="oferta-info">
            <h3>${o.nombre}</h3>
            <p>${o.descripcion}</p>
            <div class="price">${formatCurrency(o.precio)}</div>
            <button onclick="agregarAlCarrito('${escapeHtml(o.nombre)}', ${o.precio})">Añadir al carrito</button>
          </div>
        `;
      ofertasGrid.appendChild(el);
    });
  }

  if (typeof Fancybox !== "undefined") {
    Fancybox.bind('[data-fancybox="productos-galeria"]', {
      wheel: "slide",
      caption: (fancybox, slide) => slide.caption || slide.content,
    });
  }
}

// =====================================================================
// === LÓGICA DE CARRITO Y PAGOS (SE MANTIENE FUNCIONAL) ===
// =====================================================================
let carrito = JSON.parse(localStorage.getItem("wancos_carrito_v1") || "[]");
let historialPagos = JSON.parse(
  localStorage.getItem("wancos_pagos_v1") || "[]",
);

function guardarCarrito() {
  localStorage.setItem("wancos_carrito_v1", JSON.stringify(carrito));
}
function guardarHistorial() {
  localStorage.setItem("wancos_pagos_v1", JSON.stringify(historialPagos));
}

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarSidebar();
  guardarCarrito();
}

function toggleCarrito() {
  const sidebar = document.querySelector(".sidebar-carrito");

  // Si no existe la capa de cierre en el HTML, la creamos una sola vez
  if (!document.querySelector(".carrito-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "carrito-overlay";
    overlay.onclick = toggleCarrito; // Al darle clic, cierra el carrito
    document.body.appendChild(overlay);
  }

  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    document.body.classList.add("sidebar-abierto");
  } else {
    document.body.classList.remove("sidebar-abierto");
  }
}

function actualizarSidebar() {
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("total-carrito");
  const countEl = document.getElementById("carrito-count");
  if (!lista || !totalEl || !countEl) return;

  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "item-carrito";
    li.innerHTML = `<span>${item.producto} - ${formatCurrency(item.precio)}</span> <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
    lista.appendChild(li);
    total += item.precio;
  });
  totalEl.textContent = carrito.length
    ? `Total: ${formatCurrency(total)}`
    : "Carrito vacío";
  countEl.innerText = carrito.length;
  actualizarHistorialUI();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarSidebar();
  guardarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarSidebar();
  guardarCarrito();
}

function simularPago(montoManual) {
  let subtotal = carrito.reduce((s, it) => s + it.precio, 0);
  let tipo = "carrito";
  if (montoManual !== undefined) {
    if (isNaN(montoManual) || montoManual <= 0) {
      document.getElementById("resultado-pago").innerText =
        "Ingresa un monto válido.";
      return;
    }
    subtotal = montoManual;
    tipo = "manual";
  }
  const ciudad = document.getElementById("ciudad").value;
  const incluirEnvio = document.getElementById("incluirEnvio").value === "si";
  const envio = ciudad.toLowerCase().startsWith("bog") ? 0 : 10000;
  const envioAplicado = incluirEnvio ? envio : 0;
  const iva = Math.round(subtotal * 0.19);
  const total = Math.round(subtotal + iva + envioAplicado);

  historialPagos.push({
    tipo,
    subtotal,
    iva,
    envio: envioAplicado,
    total,
    fecha: new Date().toISOString(),
  });
  actualizarHistorialUI();
  guardarHistorial();
  document.getElementById("resultado-pago").innerText =
    `Total a simular: ${formatCurrency(total)}`;
}

function actualizarHistorialUI() {
  const historialEl = document.getElementById("historial-pagos");
  const acumuladoEl = document.getElementById("acumulado-pagos");
  if (!historialEl || !acumuladoEl) return;
  historialEl.innerHTML = "";
  let acumulado = 0;
  historialPagos.slice(-5).forEach((pago) => {
    const li = document.createElement("li");
    li.innerHTML = `${pago.tipo.toUpperCase()} - ${formatCurrency(pago.total)}`;
    historialEl.appendChild(li);
    acumulado += pago.total;
  });
  acumuladoEl.textContent = `Acumulado: ${formatCurrency(acumulado)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  initRender();
  actualizarSidebar();
  document
    .getElementById("simular-carrito-btn")
    .addEventListener("click", () => simularPago());
  document
    .getElementById("simular-manual-btn")
    .addEventListener("click", () => {
      const m = parseFloat(document.getElementById("monto").value);
      simularPago(m);
    });
  document
    .getElementById("vaciar-btn")
    .addEventListener("click", vaciarCarrito);
});

function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  const miTelefono = "573022375413";
  let mensaje = "¡Hola WanCos Pet! Pedido:\n\n";
  let subtotal = 0;
  carrito.forEach((item, i) => {
    mensaje += `${i + 1}. *${item.producto}* - ${formatCurrency(item.precio)}\n`;
    subtotal += item.precio;
  });
  const ciudad = document.getElementById("ciudad").value;
  const envio = ciudad.toLowerCase().startsWith("bog") ? 0 : 10000;
  const total = subtotal + Math.round(subtotal * 0.19) + envio;
  mensaje += `\n*TOTAL: ${formatCurrency(total)}*\nCiudad: ${ciudad}`;
  window.open(
    `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensaje)}`,
    "_blank",
  );
}

// === CAPA DE SEGURIDAD PROTECTORA ===
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I"))
    e.preventDefault();
});
