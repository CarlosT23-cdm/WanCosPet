//DATOS DE PRODUCTOS WANCOSPET//

// Rutas base
const rutaBasePerrosJug = "./img_tienda/img_perros_juguetes/";
const rutaBasePerrosAcc = "./img_tienda/img_perros_accesorios/";
const rutaBaseGatosJug = "./img_tienda/img_gatos_juguetes/";
const rutaBaseGatosAcc = "./img_tienda/img_gatos_accesorios/";

// Lista juguetes para perros.
const nombresImgPerrosJug = [
  "Ardilla_chillona_dog_01.jpg",
  "Ardilla_chillona_dog_02.jpg",
  "Berengena_chillona_dog_jug_01.jpg",
  "Cangrejo_dog_01.jpg",
  "Cerdito_chillon_peq_jug_dog_01.jpg",
  "Dona_antisarro_jug_dog_01.jpg",
  "Hueso_bicolor_x2_dog_jug_01.jpg",
  "Hueso_dentado_3x4_dog_jug_01.jpg",
  "Hueso_dino_dog_jug_01.jpg",
  "Hueso_mordedor_jug_dog_01.jpg",
  "Hueso_pitbull_dog_jug_01.jpg",
  "Jalador_trenza_mediano_dog_jug_01.jpg",
  "Pelota_chillona_futbol_americano_jug_dog_01.jpg",
  "Pelota_disco_jug_dog_01.jpg",
  "Pelota_lazo_dog_jug_01.jpg",
  "Pelota_lazo_dog_jug_02.jpg",
  "Pelota_lazo_tenis_jug_dog_01.jpg",
  "Pelota_rugby_sonido_jug_dog_01.jpg",
  "Pelota_snack_dog_jug_01.jpg",
  "Peluche_lona_jug_dog_01.jpg",
  "Peluche_pequeño_sonido_dog_jug_01.jpg",
  "Pesa_Antisarro_dog_jug_01.jpg",
];

// Lista accesorios para perros.
const nombresImgPerrosAcc = [
  "Bebedero_4_en_uno_dog_acc_01.jpg",
  "Bolsas_repuesto_paquete_dog_x6_acc_01.jpg",
  "Bolsas_repuesto_x3_acc_dog_01.jpg",
  "Cepillo_universal_grande_acc_dog_01.jpg",
  "Comedero_alto_acc_dog_01.jpg",
  "Comedero_flor_dog_acc_01.jpg",
  "Comedero_flor_dog_acc_02.jpg",
  "Correa_retractil_acc_dog_01.jpg",
  "Dispensador_bolsas_fino_acc_dog_01.jpg",
  "Dispensador_bolsas_fino_acc_dog_02.jpg",
  "Dispensador_bolsas_linterna_acc_dog_01.jpg",
  "Dosificador_dog_acc_01.jpg",
  "Dosificador_dog_acc_02.jpg",
  "guante_quita_pelo_dog_acc_01.jpg",
  "guante_quita_pelo_dog_acc_02.jpg",
  "Wanda_impermeable_dog_acc_02.jpg",
  "Wanda_impermeable_dog_acc_01.jpg",
  "Wanda_impermeable_dog_acc_04.jpg",
  "Wanda_impermeable_dog_acc_05.jpg",
  "Wanda_impermeable_dog_acc_09.jpg",
];

// Lista juguetes para gatos.
const nombresImgGatosJug = [
  "aguacate_jug_cat_01.jpg",
  "Caña_flores_cat_jug_01.jpg",
  "Caña_pluma_cat_jug_02.jpg",
  "Catnip_cuerpoespin_dosenuno_cat_jug_01.jpg",
  "Catnip_gato_jug_01.jpg",
  "Catnip_mariquita_cat_jug_01.jpg",
  "Juguete_catnip_mas_pelota_cat_jug_01.jpg",
  "Juguete_resorte_gato_cat_jug_01.jpg",
  "Mazorca_chillona_cat_jug_01.jpg",
  "Paquete_juguete_x3_cat_jug_01.jpg",
  "Paquete_raton_x3_cat_jug_01.jpg",
  "Pelota_asteroide_dog_jug_01.jpg",
  "pelota_loca_pequeña_jug_cat_02.jpg",
  "pelota_loca_pequeña_jug_cat_03.jpg",
  "Peluche_con_catnip_cat_jug_01.jpg",
  "peluche_con_juguete_jug_cat_01.jpg",
  "peluche_con_juguete_jug_cat_02.jpg",
  "queso_amarillo_jug_cat_01.jpg",
];

// Lista accesorios para gatos.
const nombresImgGatosAcc = [
  "Arenera_gris_cat_acc_01.jpg",
  "Arenera_morada_cat_acc_01.jpg",
  "Arenera_morada_cat_acc_02.jpg",
  "Comedero_alto_acc_cat__01.jpg",
  "Comedero_flor_acc_cat_01.jpg",
  "Comedero_flor_acc_cat_02.jpg",
  "Comedero_flor_acc_cat_03.jpg",
  "Palas_cara_gato_cat_acc__01.jpg",
  "Palas_cara_gato_cat_acc_02.jpg",
  "Palas_jarra_cat_acc_01.jpg",
];

// Función para limpiar el nombre del archivo y hacerlo profesional
function limpiarNombreProducto(nombreArchivo) {
  // 1. Eliminar la extensión de archivo (.jpg, .png, etc.)
  let nombreLimpio = nombreArchivo.replace(/\.[^/.]+$/, "");

  // 2. Eliminar códigos de inventario y números consecutivos (ej. _dog_01, _cat_acc_03)
  nombreLimpio = nombreLimpio.replace(
    /(_(dog|cat|dyc|jug|acc|x\d+|peq|3x4)_\d+)|(_\d+)$/gi,
    ""
  );
  nombreLimpio = nombreLimpio.replace(
    /(_(dog|cat|dyc|jug|acc|peq|x\d+|3x4))/gi,
    ""
  );
  nombreLimpio = nombreLimpio.replace(/(_\d+)$/gi, ""); // Elimina cualquier número suelto al final

  // 3. Reemplazace guiones bajos por espacios
  nombreLimpio = nombreLimpio.replace(/_/g, " ");

  // 4. Este proceso pone la primera letra en mayúscula y quita espacios extra
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

// Categoria productos (Array.from)
// con funcion
const juguetesPerros = Array.from({ length: 15 }, (_, i) => ({
  nombre: limpiarNombreProducto(
    nombresImgPerrosJug[i % nombresImgPerrosJug.length]
  ),
  descripcion: "Caucho resistente, ideal para lanzar y morder.",
  precio: 20000 + (i % 5) * 5000,
  img: `${rutaBasePerrosJug}${
    nombresImgPerrosJug[i % nombresImgPerrosJug.length]
  }`,
}));

const accesoriosPerros = Array.from({ length: 15 }, (_, i) => ({
  nombre: limpiarNombreProducto(
    nombresImgPerrosAcc[i % nombresImgPerrosAcc.length]
  ),
  descripcion:
    "Accesorios de la más alta calidad para la comodidad de tu perro.",
  precio: 25000 + (i % 6) * 4000,
  img: `${rutaBasePerrosAcc}${
    nombresImgPerrosAcc[i % nombresImgPerrosAcc.length]
  }`,
}));

const juguetesGatos = Array.from({ length: 15 }, (_, i) => ({
  nombre: limpiarNombreProducto(
    nombresImgGatosJug[i % nombresImgGatosJug.length]
  ),
  descripcion: "Juguetes que estimulan el instinto y el ejercicio de tu gato.",
  precio: 15000 + (i % 4) * 3000,
  img: `${rutaBaseGatosJug}${
    nombresImgGatosJug[i % nombresImgGatosJug.length]
  }`,
}));

const accesoriosGatos = Array.from({ length: 15 }, (_, i) => ({
  nombre: limpiarNombreProducto(
    nombresImgGatosAcc[i % nombresImgGatosAcc.length]
  ),
  descripcion: "Accesorios esenciales para el cuidado e higiene de tu gato.",
  precio: 35000 + (i % 5) * 6000,
  img: `${rutaBaseGatosAcc}${
    nombresImgGatosAcc[i % nombresImgGatosAcc.length]
  }`,
}));

// Ofertas especiales
const ofertas = [
  {
    nombre: "Pack juguetes mixto (3 unidades)",
    descripcion: "Ahorra comprando el pack mixto.",
    precio: 48000,
    img: "https://cdn.pixabay.com/photo/2016/04/01/10/29/dog-1308619_1280.png",
  },
  {
    nombre: "Combo para gato aventurero",
    descripcion: "Cama + rascador + juguete.",
    precio: 60000,
    img: "https://cdn.pixabay.com/photo/2015/03/26/09/54/cat-690405_1280.jpg",
  },
];

/************ RENDERIZAR PRODUCTOS EN EL DOM ************/
// escapar comillas para inyectar en onclick
function escapeHtml(text) {
  return text.replace(/'/g, "\\'");
}

function renderLista(idContenedor, lista) {
  const cont = document.getElementById(idContenedor);
  cont.innerHTML = "";
  lista.forEach((p, idx) => {
    const prod = document.createElement("article");
    prod.className = "producto";

    // Contenido de la leyenda (caption) para Fancybox
    const captionContent = `
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p class='price'>${formatCurrency(p.precio)}</p>
    `;

    // MODIFICACIÓN CLAVE: Envolver la imagen en un <a> con atributos Fancybox
    prod.innerHTML = `
        <a data-fancybox="productos-galeria" 
           data-src="${p.img}" 
           data-caption="${escapeHtml(captionContent)}"
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
            <button onclick="agregarAlCarrito('${escapeHtml(p.nombre)}', ${
      p.precio
    })">Añadir al carrito</button>
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

  // Ofertas
  const ofertasGrid = document.getElementById("ofertas-grid");
  ofertas.forEach((o) => {
    const el = document.createElement("div");
    el.className = "oferta";

    // Contenido de la leyenda (caption) para Fancybox
    const captionContent = `
        <h3>${o.nombre}</h3>
        <p>${o.descripcion}</p>
        <p class='price'>${formatCurrency(o.precio)}</p>
    `;

    // MODIFICACIÓN CLAVE: Envolver la imagen de la oferta en un <a> con atributos Fancybox
    el.innerHTML = `
        <a data-fancybox="productos-galeria" 
           data-src="${o.img}" 
           data-caption="${escapeHtml(captionContent)}"
           href="javascript:;">
           <img src="${o.img}" alt="${o.nombre}" />
        </a>
        <div class="oferta-info">
          <div>
            <h3>${o.nombre}</h3>
            <p>${o.descripcion}</p>
          </div>
          <div>
            <div class="price">${formatCurrency(o.precio)}</div>
            <button onclick="agregarAlCarrito('${escapeHtml(o.nombre)}', ${
      o.precio
    })">Añadir al carrito</button>
          </div>
        </div>
      `;
    ofertasGrid.appendChild(el);
  });
}

/************ CARRITO (PERSISTENCIA Y FUNCIONALIDAD) ************/
let carrito = JSON.parse(localStorage.getItem("wancos_carrito_v1") || "[]");
let historialPagos = JSON.parse(
  localStorage.getItem("wancos_pagos_v1") || "[]"
);

function guardarCarrito() {
  localStorage.setItem("wancos_carrito_v1", JSON.stringify(carrito));
}
function guardarHistorial() {
  localStorage.setItem("wancos_pagos_v1", JSON.stringify(historialPagos));
}

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  document.getElementById("carrito-count").innerText = carrito.length;
  actualizarSidebar();
  guardarCarrito();
}

function toggleCarrito() {
  const sb = document.getElementById("sidebarCarrito");
  sb.classList.toggle("active");
  sb.setAttribute("aria-hidden", !sb.classList.contains("active"));
}

function actualizarSidebar() {
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("total-carrito");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "item-carrito";
    li.innerHTML = `<span>${item.producto} - ${formatCurrency(
      item.precio
    )}</span> <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
    lista.appendChild(li);
    total += item.precio;
  });
  totalEl.textContent = carrito.length
    ? `Total: ${formatCurrency(total)}`
    : "Carrito vacío";
  document.getElementById("carrito-count").innerText = carrito.length;
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

/************ SIMULADOR DE PAGO ************/
function simularPago(montoManual) {
  let subtotal = carrito.reduce((s, it) => s + it.precio, 0);
  let tipo = "carrito";

  if (montoManual !== undefined) {
    if (isNaN(montoManual) || montoManual <= 0) {
      document.getElementById("resultado-pago").innerText =
        "Por favor ingresa un monto válido para simular el pago manual.";
      return;
    }
    subtotal = montoManual;
    tipo = "manual";
  }

  const ciudad = document.getElementById("ciudad").value;
  const incluirEnvio = document.getElementById("incluirEnvio").value === "si";
  // Envío: 0 para Bogotá, 10000 COP para otros
  const envio = ciudad.toLowerCase().startsWith("bog") ? 0 : 10000;
  const envioAplicado = incluirEnvio ? envio : 0;
  const iva = Math.round(subtotal * 0.19);
  const total = Math.round(subtotal + iva + envioAplicado);

  const pago = {
    tipo: tipo,
    subtotal,
    iva,
    envio: envioAplicado,
    total,
    fecha: new Date().toISOString(),
  };
  historialPagos.push(pago);
  actualizarHistorialUI();
  guardarHistorial();

  document.getElementById(
    "resultado-pago"
  ).innerText = `Subtotal: ${formatCurrency(
    subtotal
  )} | IVA (19%): ${formatCurrency(iva)} | Envío: ${formatCurrency(
    envioAplicado
  )} | Total: ${formatCurrency(total)}`;
}

function simularPagoCarritoHandler() {
  const montoInput = parseFloat(document.getElementById("monto").value);
  // Si el usuario ingresa un monto en el campo, lo usamos. Si no, usamos el total del carrito.
  simularPago(montoInput > 0 ? montoInput : undefined);
}

function simularPagoManualHandler() {
  const montoInput = parseFloat(document.getElementById("monto").value);
  simularPago(montoInput); // Obliga a usar el monto ingresado
}

function actualizarHistorialUI() {
  const historialEl = document.getElementById("historial-pagos");
  const acumuladoEl = document.getElementById("acumulado-pagos");
  historialEl.innerHTML = "";
  let acumulado = 0;
  historialPagos.slice(-5).forEach((pago, i) => {
    // Mostrar solo los últimos 5
    const li = document.createElement("li");
    li.style.padding = "0.4rem 0";
    li.style.borderBottom = "1px solid #f0f0f0";
    li.innerHTML = `${pago.tipo.toUpperCase()} - **Total: ${formatCurrency(
      pago.total
    )}** - ${new Date(pago.fecha).toLocaleDateString()}`;
    historialEl.appendChild(li);
    acumulado += pago.total;
  });
  acumuladoEl.textContent = historialPagos.length
    ? `Total pagado (acumulado): ${formatCurrency(acumulado)}`
    : "No hay pagos registrados";
}

/*INICIALIZACIÓN y LISTENERS*/
document.addEventListener("DOMContentLoaded", () => {
  initRender(); // Renderiza los productos
  actualizarSidebar(); // Carga y actualiza el carrito y el historial al iniciar

  // Asignar Event Listeners a los botones
  document
    .getElementById("simular-carrito-btn")
    .addEventListener("click", simularPagoCarritoHandler);
  document
    .getElementById("simular-manual-btn")
    .addEventListener("click", simularPagoManualHandler);
  document
    .getElementById("vaciar-btn")
    .addEventListener("click", vaciarCarrito);

  // --- INICIALIZACIÓN DE FANCYBOX PARA EL VISOR DE IMÁGENES (ÚNICA VEZ) ---
  // Fancybox debe estar disponible globalmente (cargado en el HTML antes de este script)
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox='productos-galeria']", {
      // Te permite usar la rueda del ratón para hacer zoom
      wheel: "slide",

      // Opciones para las herramientas de la barra superior (Zoom, Pan, Cierre)
      Toolbar: {
        display: [
          { id: "zoom", position: "left" }, // Botón de Zoom
          { id: "pan", position: "left" }, // Botón para activar el arrastre
          "close",
        ],
      },

      // Configuración específica del zoom y arrastre (Panzoom)
      Panzoom: {
        // Habilita el arrastre de la imagen cuando está ampliada
        mouseMoveFriction: 0.1,
        // Escala mínima y máxima de zoom
        maxScale: 4,
        minScale: 1,
      },
      // Asegura que la información de la descripción se muestre en el caption
      caption: (fancybox, slide) => {
        return slide.caption || slide.content;
      },
    });
  } else {
    console.warn(
      "Fancybox JS no se encontró. Asegúrate de que el script CDN esté enlazado correctamente en el HTML."
    );
  }
  // --- FIN INICIALIZACIÓN FANCYBOX ---
});

// Resaltado de navegación (persistencia y scroll)
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section[id]");

function marcarActivo(href) {
  links.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === href);
  });
}

function restaurarActivoAlCargar() {
  const guardado = localStorage.getItem("wancos_seccionActiva_v1");
  if (guardado) {
    marcarActivo(guardado);
  }
}
window.addEventListener("load", restaurarActivoAlCargar);

// Evento de scroll
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  let elegido = null;
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    // La sección se considera activa si su borde superior está cerca de la parte superior de la ventana (-160px del header)
    if (y >= top - 160) {
      elegido = "#" + sec.id;
    }
  });
  if (elegido) {
    marcarActivo(elegido);
    localStorage.setItem("wancos_seccionActiva_v1", elegido);
  }
});
