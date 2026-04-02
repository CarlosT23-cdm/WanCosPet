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
    .map((p, index) => {
      const esFav = favoritos.some((f) => f.nombre === p.nombre);
      const icono = esFav ? "❤️" : "🤍";
      const claseBtn = esFav ? "btn-favorito activo" : "btn-favorito";
      const imgPrincipal = p.imagenes[0];

      // Mantenemos el ID único por producto para un carrusel organizado
      const galeriaID = `prod-${index}-${nombreGaleria}`;

      // DISEÑO MINIMALISTA: Preparamos la descripción para que aparezca en el carrusel
      const captionHtml = `
        <div class="fancy-descripcion">
          <h4>${p.nombre}</h4>
          <p>${p.descripcion}</p>
          <span>Precio: $${p.precio.toLocaleString()} COP</span>
        </div>
      `;

      // Lógica de Video: Forzamos el reconocimiento del formato mp4
      let htmlVideo = "";
      if (p.video) {
        htmlVideo = `
          <a href="${p.video.trim()}" 
             data-fancybox="${galeriaID}" 
             data-type="html5video" 
             data-caption='${captionHtml}'
             class="btn-video-flotante">
             <i class="fas fa-play-circle"></i> Ver Video
          </a>`;
      }

      const imagenesOcultas = p.imagenes
        .slice(1)
        .map((imgExtra) => {
          return `<a data-fancybox="${galeriaID}" data-caption='${captionHtml}' href="${imgExtra}" style="display:none;"></a>`;
        })
        .join("");

      return `
    <article class="producto" style="position: relative;"> 
        ${htmlVideo}
        <a data-fancybox="${galeriaID}" data-caption='${captionHtml}' href="${imgPrincipal}">
            <img src="${imgPrincipal}" alt="${p.nombre}">
        </a>
        ${imagenesOcultas}
        <div class="producto-info">
            <div class="producto-detalles-texto">
                <h3>${p.nombre}</h3>
                <p><strong>Descripción:</strong> ${p.descripcion}</p>
                <p><strong>Material:</strong> ${p.material || "No especificado"}</p>
                <p><strong>Color:</strong> ${p.color || "No especificado"}</p>
                <p><strong>Tamaño:</strong> ${p.tamaño || "No especificado"}</p>
            </div>
            <div class="price">
                <strong>Precio:</strong> $${p.precio.toLocaleString()} COP
            </div>
            <div class="producto-acciones" style="display: flex; gap: 10px; margin-top: 15px; justify-content: center;">
                <button class="btn-carrito" onclick="agregarAlCarrito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio})">
                    Añadir al carrito
                </button>
                <button class="${claseBtn}" onclick="toggleFavorito('${p.nombre.replace(/'/g, "\\'")}', ${p.precio}, '${imgPrincipal}')">
                    ${icono}
                </button>
            </div>
        </div>
    </article>`;
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
  // 1. Obtener valores de los inputs
  const nombre = document.getElementById("nombre-cliente").value;
  const direccion = document.getElementById("direccion-cliente").value;
  const pago = document.getElementById("metodo-pago").value;

  // 2. Validaciones Administrativas
  if (!nombre || !direccion) {
    alert("Por favor, completa tu nombre y dirección.");
    return;
  }
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  // 3. Construir el cuerpo del mensaje (Unificado)
  let textoFinal = `*📦 NUEVO PEDIDO WANCOS PET*%0A%0A`;
  textoFinal += `*Cliente:* ${nombre}%0A`;
  textoFinal += `*Dirección:* ${direccion}%0A`;
  textoFinal += `*Pago:* ${pago}%0A`;
  textoFinal += `--------------------------%0A`;
  textoFinal += `*Productos:*%0A`;

  // 4. Recorrer el carrito (usando la variable global 'carrito')
  carrito.forEach((item) => {
    textoFinal += `✅ ${item.producto} - $${item.precio.toLocaleString()}%0A`;
  });

  // 5. Calcular Total
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  textoFinal += `--------------------------%0A`;
  textoFinal += `*TOTAL: $${total.toLocaleString()}*%0A%0A`;
  textoFinal += `_Enviado desde la tienda virtual_`;

  // 6. Abrir WhatsApp (Usando encodeURI para seguridad)
  const url = `https://api.whatsapp.com/send?phone=573022375413&text=${textoFinal}`;
  window.open(url, "_blank");
}

function initFancybox() {
  // Mantenemos tu validación de seguridad original
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {
      infinite: true, // Tu configuración original
      // Añadimos la configuración para que los videos se reproduzcan solos al abrirse
      Html: {
        videoAutoplay: true,
      },
    });
  }
}

// --- LÓGICA PARA CERRAR EL CARRITO AL HACER CLIC AFUERA ---
document.addEventListener("click", (event) => {
  const sidebar = document.getElementById("sidebarCarrito");
  const botonFlotante = document.querySelector(".carrito");

  if (sidebar.classList.contains("active")) {
    if (
      !sidebar.contains(event.target) &&
      !botonFlotante.contains(event.target) &&
      !event.target.closest(".btn-carrito") &&
      !event.target.closest(".btn-eliminar")
    ) {
      // AGREGAMOS ESTA LÍNEA

      sidebar.classList.remove("active");
    }
  }
});

// Funciones para los pasos del carrito
function mostrarFormulario() {
  document.getElementById("lista-carrito").style.display = "none";
  document.getElementById("paso-1-carrito").style.display = "none";
  document.getElementById("paso-2-datos").style.display = "block";
}

function volverAProductos() {
  document.getElementById("lista-carrito").style.display = "block";
  document.getElementById("paso-1-carrito").style.display = "block";
  document.getElementById("paso-2-datos").style.display = "none";
}
