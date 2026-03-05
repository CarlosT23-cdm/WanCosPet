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
    nombre: "Cerdito Chillón Pequeño",
    precio: 7000,
    img: rutaBasePerrosJug + "Cerdito_chillon_peq_jug_dog_01.jpg",
    descripcion: "Látex suave con sonido divertido.",
  },
  {
    nombre: "Pelota Huesos Premio",
    precio: 16000,
    img: rutaBasePerrosJug + "Pelota_snack_dog_jug_01.jpg",
    descripcion: "Ideal para esconder snacks.",
  },
  {
    nombre: "Ardilla Chillona",
    precio: 10000,
    img: rutaBasePerrosJug + "Ardilla_chillona_dog_01.jpg",
    descripcion: "Peluche resistente con sonido.",
  },
  {
    nombre: "Pelota Rugby Sonido",
    precio: 20000,
    img: rutaBasePerrosJug + "Pelota_rugby_sonido_jug_dog_01.jpg",
    descripcion: "Caucho de alta durabilidad.",
  },
  {
    nombre: "Dona Antisarro",
    precio: 9000,
    img: rutaBasePerrosJug + "Dona_antisarro_jug_dog_01.jpg",
    descripcion: "Limpieza dental mientras juegan.",
  },
  {
    nombre: "Berenjena Chillona",
    precio: 9800,
    img: rutaBasePerrosJug + "Berengena_chillona_dog_jug_01.jpg",
    descripcion: "Diseño ergonómico y sonido.",
  },
  {
    nombre: "Peluche Pequeño Sonido",
    precio: 15000,
    img: rutaBasePerrosJug + "Peluche_pequeño_sonido_dog_jug_01.jpg",
    descripcion: "Textura suave para cachorros.",
  },
  {
    nombre: "Hueso Pitbull",
    precio: 8000,
    img: rutaBasePerrosJug + "Hueso_pitbull_dog_jug_01.jpg",
    descripcion: "Extra resistente.",
  },
];

const accesoriosPerros = [
  {
    nombre: "Bebedero 4 en 1",
    precio: 50000,
    img: rutaBasePerrosAcc + "Bebedero_4_en_uno_dog_acc_01.jpg",
    descripcion: "Agua, comida, bolsas y pala.",
  },
  {
    nombre: "Impermeable Wanda L",
    precio: 41000,
    img: rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_01.jpg",
    descripcion: "Protección total contra lluvia.",
  },
  {
    nombre: "Cepillo Universal Grande",
    precio: 10700,
    img: rutaBasePerrosAcc + "Cepillo_universal_grande_acc_dog_01.jpg",
    descripcion: "Elimina nudos fácilmente.",
  },
  {
    nombre: "Correa Retráctil",
    precio: 22000,
    img: rutaBasePerrosAcc + "Correa_retractil_acc_dog_01.jpg",
    descripcion: "5 metros de libertad.",
  },
  {
    nombre: "Dispensador Bolsas Linterna",
    precio: 20000,
    img: rutaBasePerrosAcc + "Dispensador_bolsas_linterna_acc_dog_01.jpg",
    descripcion: "Paseos nocturnos seguros.",
  },
  {
    nombre: "Bolsas Repuesto x3",
    precio: 7000,
    img: rutaBasePerrosAcc + "Bolsas_repuesto_x3_acc_dog_01.jpg",
    descripcion: "Bolsas resistentes.",
  },
];

const juguetesGatos = [
  {
    nombre: "Catnip Aguacate",
    precio: 12000,
    img: rutaBaseGatosJug + "aguacate_jug_cat_01.jpg",
    descripcion: "Gira 360 grados y relaja.",
  },
  {
    nombre: "Caña Libélula",
    precio: 12000,
    img: rutaBaseGatosJug + "Caña_flores_cat_jug_01.jpg",
    descripcion: "Fomenta el instinto de caza.",
  },
  {
    nombre: "Gimnasio Himalaya Azul",
    precio: 300000,
    img: rutaBaseGatosJug + "Peluche_con_catnip_cat_jug_01.jpg",
    descripcion: "Descanso y juego total.",
  },
  {
    nombre: "Ratones Chillones x3",
    precio: 6000,
    img: rutaBaseGatosJug + "Paquete_raton_x3_cat_jug_01.jpg",
    descripcion: "Diversión clásica.",
  },
];

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
    descripcion: "Diseño compacto.",
  },
  {
    nombre: "Guacal Extragrande",
    precio: 31000,
    img: rutaBaseGatosAcc + "Palas_jarra_cat_acc_01.jpg",
    descripcion: "Viajes cómodos y seguros.",
  },
  {
    nombre: "Cepillo Dental x4",
    precio: 9000,
    img: rutaBaseGatosAcc + "Palas_cara_gato_cat_acc__01.jpg",
    descripcion: "Cuidado bucal completo.",
  },
];

const ofertas = [
  {
    nombre: "Combo Gato Cacero",
    descripcion: "Catnip Aguacate + arenera gris.",
    precio: 46000,
    img: "./img_sitio/ejemplo_cliente_feliz.jpg",
  },
];

// === FUNCIONES DE RENDERIZADO ===
function renderLista(idContenedor, lista) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;
  cont.innerHTML = "";
  lista.forEach((p) => {
    const prod = document.createElement("article");
    prod.className = "producto";
    prod.innerHTML = `
            <a data-fancybox="gallery" href="${p.img}" data-caption="${p.nombre} - ${formatCurrency(p.precio)}">
                <img src="${p.img}" alt="${p.nombre}" loading="lazy">
            </a>
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
      el.innerHTML = `
                <a data-fancybox="gallery" href="${o.img}" data-caption="${o.nombre}">
                    <img src="${o.img}" alt="${o.nombre}">
                </a>
                <div class="oferta-info">
                    <h3>${o.nombre}</h3>
                    <p>${o.descripcion}</p>
                    <div class="price">${formatCurrency(o.precio)}</div>
                    <button onclick="agregarAlCarrito('${o.nombre.replace(/'/g, "\\'")}', ${o.precio})">Añadir al carrito</button>
                </div>`;
      ofertasGrid.appendChild(el);
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
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "item-carrito";
    li.innerHTML = `
            <span>${item.producto} - ${formatCurrency(item.precio)}</span> 
            <button onclick="eliminarDelCarrito(${index})" style="color:#ff4d4d; border:none; background:none; font-weight:bold; cursor:pointer;">X</button>`;
    lista.appendChild(li);
    total += item.precio;
  });

  totalEl.innerHTML = `<strong>Total: ${formatCurrency(total)}</strong>`;
  countEl.innerText = carrito.length;
}

// === SIMULADOR DE PAGO ===
function simularPago(montoManual) {
  let subtotal = carrito.reduce((s, it) => s + it.precio, 0);

  if (montoManual !== undefined) {
    if (isNaN(montoManual) || montoManual <= 0) {
      document.getElementById("resultado-pago").innerText =
        "Ingresa un monto válido.";
      return;
    }
    subtotal = montoManual;
  }

  if (subtotal === 0 && montoManual === undefined) {
    alert("El carrito está vacío para simular.");
    return;
  }

  const ciudad = document.getElementById("ciudad").value;
  const incluirEnvio = document.getElementById("incluirEnvio").value === "si";
  const costoEnvio = ciudad === "Bogotá" ? 0 : 10000;
  const envioFinal = incluirEnvio ? costoEnvio : 0;

  const iva = Math.round(subtotal * 0.19);
  const total = subtotal + iva + envioFinal;

  document.getElementById("resultado-pago").innerHTML = `
        <div style="line-height:1.4">
            <strong>Resumen del Cálculo:</strong><br>
            Subtotal: ${formatCurrency(subtotal)}<br>
            IVA (19%): ${formatCurrency(iva)}<br>
            Envío (${ciudad}): ${formatCurrency(envioFinal)}<br>
            <hr style="margin:5px 0; border:0; border-top:1px solid #ff914d;">
            <strong style="font-size:1.1rem; color:#ff914d;">TOTAL A PAGAR: ${formatCurrency(total)}</strong>
        </div>`;
}

// === ENVÍO WHATSAPP ===
function enviarPedidoWhatsApp() {
  if (carrito.length === 0) return alert("El carrito está vacío.");
  const miTelefono = "573022375413";
  let mensaje = "¡Hola WanCos Pet! 🐾 Quiero realizar este pedido:\n\n";
  let subtotal = 0;
  carrito.forEach((item, i) => {
    mensaje += `${i + 1}. *${item.producto}* - ${formatCurrency(item.precio)}\n`;
    subtotal += item.precio;
  });
  const ciudad = document.getElementById("ciudad").value;
  mensaje += `\n*TOTAL PRODUCTOS: ${formatCurrency(subtotal)}*\n📍 Ciudad: ${ciudad}`;
  window.open(
    `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensaje)}`,
    "_blank",
  );
}

// === INICIO ===
document.addEventListener("DOMContentLoaded", () => {
  initRender();
  actualizarVista();

  // Fancybox init
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {
      compact: false,
      idle: false,
    });
  }

  // Eventos de botones
  document
    .getElementById("vaciar-btn")
    .addEventListener("click", vaciarCarrito);
  document
    .getElementById("simular-carrito-btn")
    .addEventListener("click", () => simularPago());
  document
    .getElementById("simular-manual-btn")
    .addEventListener("click", () => {
      const m = parseFloat(document.getElementById("monto").value);
      simularPago(m);
    });
});
