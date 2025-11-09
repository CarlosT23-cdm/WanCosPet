/************ DATOS DE PRODUCTOS (15 por sección) ************/
// Imágenes de ejemplo (puedes cambiarlas por las tuyas)
const imgPerros = [
  "https://cdn.pixabay.com/photo/2016/02/19/10/00/dog-1209621_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg",
];
const imgPerrosAcc = [
  "https://cdn.pixabay.com/photo/2019/07/02/16/52/dog-collar-4314947_1280.jpg",
];
const imgGatos = [
  "https://cdn.pixabay.com/photo/2017/08/01/00/28/cat-2569144_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/03/53/cat-1867226_1280.jpg",
];
const imgGatosAcc = [
  "https://cdn.pixabay.com/photo/2016/03/27/22/22/cat-1285634_1280.jpg",
];

// Genero 15 productos realistas por cada categoría
const juguetesPerros = Array.from({ length: 15 }, (_, i) => ({
  nombre: `Pelota interactiva ${i + 1}`,
  descripcion: "Caucho resistente, ideal para lanzar y morder.",
  precio: 20000 + (i % 5) * 5000,
  img: imgPerros[i % imgPerros.length],
}));

const accesoriosPerros = Array.from({ length: 15 }, (_, i) => ({
  nombre: `Collar ajustable ${["S", "M", "L"][i % 3]} ${i + 1}`,
  descripcion: "Collar resistente y cómodo.",
  precio: 25000 + (i % 6) * 4000,
  img: imgPerrosAcc[0],
}));

const juguetesGatos = Array.from({ length: 15 }, (_, i) => ({
  nombre: `Juguete con plumas ${i + 1}`,
  descripcion: "Estimula el instinto y el ejercicio.",
  precio: 15000 + (i % 4) * 3000,
  img: imgGatos[i % imgGatos.length],
}));

const accesoriosGatos = Array.from({ length: 15 }, (_, i) => ({
  nombre: `Rascador modelo ${i + 1}`,
  descripcion: "Ideal para afilar uñas y descansar.",
  precio: 35000 + (i % 5) * 6000,
  img: imgGatosAcc[0],
}));

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
    prod.innerHTML = `
        <img src="${p.img}" alt="${p.nombre}" />
        <div class="producto-info">
          <div>
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
          </div>
          <div>
            <div class="price">$${p.precio.toLocaleString()} COP</div>
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
    el.innerHTML = `
        <img src="${o.img}" alt="${o.nombre}" />
        <div class="oferta-info">
          <div>
            <h3>${o.nombre}</h3>
            <p>${o.descripcion}</p>
          </div>
          <div>
            <div class="price">$${o.precio.toLocaleString()} COP</div>
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
    li.innerHTML = `<span>${
      item.producto
    } - $${item.precio.toLocaleString()}</span> <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
    lista.appendChild(li);
    total += item.precio;
  });
  totalEl.textContent = carrito.length
    ? `Total: $${total.toLocaleString()} COP`
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
  ).innerText = `Subtotal: $${subtotal.toLocaleString()} | IVA (19%): $${iva.toLocaleString()} | Envío: $${envioAplicado.toLocaleString()} | Total: $${total.toLocaleString()} COP`;
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
    li.innerHTML = `${pago.tipo.toUpperCase()} - **Total: $${pago.total.toLocaleString()}** - ${new Date(
      pago.fecha
    ).toLocaleDateString()}`;
    historialEl.appendChild(li);
    acumulado += pago.total;
  });
  acumuladoEl.textContent = historialPagos.length
    ? `Total pagado (acumulado): $${acumulado.toLocaleString()} COP`
    : "No hay pagos registrados";
}

/************ INICIALIZACIÓN y LISTENERS ************/
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
