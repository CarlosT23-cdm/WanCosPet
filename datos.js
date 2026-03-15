/**
 * WANCOS PET - BASE DE DATOS DE PRODUCTOS
 * Este archivo funciona como un almacén central. Todos los productos de la tienda
 * están registrados aquí para que sea más fácil encontrarlos y editarlos.
 */

// --- NOTA EXPLICATIVA ---
// Estas son las direcciones de las carpetas donde guardas tus fotos.
// Se usan para no tener que escribir la ruta larga en cada producto.
const rutaBasePerrosJug = "./img_tienda/img_perros_juguetes/";
const rutaBasePerrosAcc = "./img_tienda/img_perros_accesorios/";
const rutaBaseGatosJug = "./img_tienda/img_gatos_juguetes/";
const rutaBaseGatosAcc = "./img_tienda/img_gatos_accesorios/";

// =====================================================================
// SECCIÓN: PERROS
// =====================================================================

// Listado de juguetes para perros
const juguetesPerros = [
  {
    nombre: "Pelota Asteroide",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "Pelota_asteroide_dog_jug_01.jpg"],
  },
  {
    nombre: "Muslo Macizo",
    precio: 7600,
    imagenes: [rutaBasePerrosJug + "Muslo_dog_jug.jpg"],
  },
  {
    nombre: "Mordedor Cuerda Circular",
    precio: 9600,
    imagenes: [rutaBasePerrosJug + "Mordedor_cuerda_circular_dog_jug.jpg"],
  },
  {
    nombre: "Mordedor Con Hueso Chillon",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "Mordedor_con_hueso_chillon_jug_dog.jpg"],
  },
  {
    nombre: "Mazorca Chillona",
    precio: 9800,
    imagenes: [rutaBasePerrosJug + "Mazorca_chillona_cat_jug_01.jpg"],
  },
  {
    nombre: "Llanta",
    precio: 10800,
    imagenes: [rutaBasePerrosJug + "Llanta_jug_dog.jpg"],
    descripcion: "",
  },
  {
    nombre: "Lazo Hueso",
    precio: 7400,
    imagenes: [rutaBasePerrosJug + "Lazo_hueso_jug_dog.jpg"],
    descripcion: "",
  },
  {
    nombre: "Dona",
    precio: 19000,
    imagenes: [rutaBasePerrosJug + "Dona_jug_dog.jpg"],
  },
  {
    nombre: "Cuerda Pelota Pequeña",
    precio: 7400,
    imagenes: [rutaBasePerrosJug + "Cuerda_pelota_pequeña_dog_jug.jpg"],
  },
  {
    nombre: "Ardilla Chillona",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Ardilla_chillona_dog_01.jpg"],
  },
  {
    nombre: "Cangrejo Limpia Dientes",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Cangrejo_dog_01.jpg"],
  },
  {
    nombre: "Berenjena Chillona",
    precio: 9800,
    imagenes: [rutaBasePerrosJug + "Berengena_chillona_dog_jug_01.jpg"],
  },
  {
    nombre: "Dona Antisarro",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Dona_antisarro_jug_dog_01.jpg"],
  },
  {
    nombre: "Cerdito Chillón",
    precio: 7000,
    imagenes: [rutaBasePerrosJug + "Cerdito_chillon_peq_jug_dog_01.jpg"],
  },
  {
    nombre: "Hueso Dentado",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Hueso_dentado_3x4_dog_jug_01.jpg"],
  },
  {
    nombre: "Hueso Dino",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Hueso_dino_dog_jug_01.jpg"],
  },
  {
    nombre: "Hueso Mordedor",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "hueso_mordedor_jug_dog_01.jpg"],
  },
  {
    nombre: "Hueso Pitbull",
    precio: 8000,
    imagenes: [rutaBasePerrosJug + "Hueso_pitbull_dog_jug_01.jpg"],
  },
  {
    nombre: "Jalador Trenza",
    precio: 11000,
    imagenes: [rutaBasePerrosJug + "Jalador_trenza_mediano_dog_jug_01.jpg"],
  },
  {
    nombre: "Pelota Chillona Futbol Americano",
    precio: 10200,
    imagenes: [
      rutaBasePerrosJug + "Pelota_chillona_futbol_americano_jug_dog_01.jpg",
    ],
  },
  {
    nombre: "Pelota Rugby",
    precio: 20000,
    imagenes: [rutaBasePerrosJug + "Pelota_rugby_sonido_jug_dog_01.jpg"],
  },
  {
    nombre: "Pelota Disco",
    precio: 28000,
    imagenes: [rutaBasePerrosJug + "pelota_disco_jug_dog_01.jpg"],
  },
  {
    nombre: "Pelota Lazo",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Pelota_lazo_dog_jug_01.jpg"],
  },
  {
    nombre: "Lazo Pelota de Tenis",
    precio: 11000,
    imagenes: [rutaBasePerrosJug + "Pelota_lazo_tenis_jug_dog_01.jpg"],
  },
  {
    nombre: "Pelota Loca Pequeña",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_01.jpg"],
  },
  {
    nombre: "Pelota Snacks",
    precio: 20000,
    imagenes: [rutaBasePerrosJug + "Pelota_snack_dog_jug_01.jpg"],
  },
  {
    nombre: "Peluche Lona",
    precio: 15000,
    imagenes: [rutaBasePerrosJug + "Peluche_lona_jug_dog_01.jpg"],
  },
  {
    nombre: "Peluche Kiwi Chillón",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Peluche_pequeño_sonido_dog_jug_01.jpg"],
  },
  {
    nombre: "Pesa Antisarro",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Pesa_Antisarro_dog_jug_01.jpg"],
  },
];

// Listado de accesorios para perros
const accesoriosPerros = [
  {
    nombre: "Bebedero 4 en 1",
    precio: 50000,
    imagenes: [rutaBasePerrosAcc + "Bebedero_4_en_uno_dog_acc_01.jpg"],
  },
  {
    nombre: "Bolsas Biodegradable por 6",
    precio: 13500,
    imagenes: [rutaBasePerrosAcc + "Bolsas_repuesto_paquete_dog_x6_acc_01.jpg"],
  },
  {
    nombre: "Bolsas Biodegradable por 3",
    precio: 7000,
    imagenes: [rutaBasePerrosAcc + "Bolsas_repuesto_x3_acc_dog_01.jpg"],
  },
  {
    nombre: "Cepillo Universal",
    precio: 10700,
    imagenes: [rutaBasePerrosAcc + "Cepillo_universal_grande_acc_dog_01.jpg"],
  },
  {
    nombre: "Comedero Alto",
    precio: 14000,
    imagenes: [rutaBasePerrosAcc + "Comedero_alto_acc_dog_01.jpg"],
  },
  {
    nombre: "Comederos Flor",
    precio: 13000,
    imagenes: [rutaBasePerrosAcc + "Comedero_flor_dog_acc_01.jpg"],
  },
  {
    nombre: "Correa Retráctil",
    precio: 22000,
    imagenes: [rutaBasePerrosAcc + "Correa_retractil_acc_dog_01.jpg"],
  },
  {
    nombre: "Dispensadores de Bolsas Fino",
    precio: 11000,
    imagenes: [rutaBasePerrosAcc + "Dispensador_bolsas_fino_acc_dog_01.jpg"],
  },
  {
    nombre: "Dispensador bolsas con linterna",
    precio: 20000,
    imagenes: [
      rutaBasePerrosAcc + "Dispensador_bolsas_linterna_acc_dog_01.jpg",
    ],
  },
  {
    nombre: "Dosificador Dog Agua",
    precio: 16000,
    imagenes: [rutaBasePerrosAcc + "Dosificador_dog_acc_01.jpg"],
  },
  {
    nombre: "Guante Quita Pelo",
    precio: 14000,
    imagenes: [rutaBasePerrosAcc + "guante_quita_pelo_dog_acc_01.jpg"],
  },
  {
    nombre: "Impermeable Wanda",
    precio: 41000,
    imagenes: [rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_05.jpg"],
  },
];

// =====================================================================
// SECCIÓN: GATOS
// =====================================================================

// Listado de juguetes para gatos
const juguetesGatos = [
  {
    nombre: "Paquete Ratones por 3",
    precio: 7200,
    imagenes: [rutaBaseGatosJug + "Paquete_raton_x3_cat_jug_01.jpg"],
  },
  {
    nombre: "Catnip Aguacate",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "aguacate_jug_cat_01.jpg"],
  },
  {
    nombre: "Caña libelula",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Caña_flores_cat_jug_01.jpg"],
  },
  {
    nombre: "Caña Flores",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Caña_pluma_cat_jug_02.jpg"],
  },
  {
    nombre: "Juguetes con Catnip",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Catnip_gato_jug_01.jpg"],
  },
  {
    nombre: "Peluche con Catnip",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Peluche_con_catnip_cat_jug_01.jpg"],
  },
  {
    nombre: "Catnip Puercoespin",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Catnip_cuerpoespin_dosenuno_cat_jug_01.jpg"],
  },
  {
    nombre: "Catnip Vaquita",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Catnip_mariquita_cat_jug_01.jpg"],
  },
  {
    nombre: "Catnip Queso",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "queso_amarillo_jug_cat_01.jpg"],
  },
  {
    nombre: "Ratón Catnip Más Pelota",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Juguete_catnip_mas_pelota_cat_jug_01.jpg"],
  },
  {
    nombre: "Juguete Con Resorte",
    precio: 20000,
    imagenes: [rutaBaseGatosJug + "Juguete_resorte_gato_cat_jug_01.jpg"],
  },

  {
    nombre: "Paquete Juguete Gato x 3",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Paquete_juguete_x3_cat_jug_01.jpg"],
  },
  {
    nombre: "Pelotas Locas",
    precio: 14000,
    imagenes: [rutaBaseGatosJug + "pelota_loca_pequeña_jug_cat_02.jpg"],
  },
  {
    nombre: "Peluches Variados",
    precio: 6500,
    imagenes: [rutaBaseGatosJug + "peluche_con_juguete_jug_cat_01.jpg"],
  },
  {
    nombre: "Bola Electrica",
    precio: 22000,
    imagenes: [rutaBaseGatosJug + "Bola_electrica_jug_cat.jpg"],
  },
];

// Listado de accesorios para gatos
const accesoriosGatos = [
  {
    nombre: "Arenera Moderna",
    precio: 37000,
    imagenes: [rutaBaseGatosAcc + "Arenera_morada_cat_acc_01.jpg"],
  },
  {
    nombre: "Arenera Gris",
    precio: 25000,
    imagenes: [rutaBaseGatosAcc + "Arenera_gris_cat_acc_01.jpg"],
  },
  {
    nombre: "Comedero Alto",
    precio: 14000,
    imagenes: [rutaBaseGatosAcc + "Comedero_alto_acc_cat__01.jpg"],
  },
  {
    nombre: "Comederos Flor",
    precio: 13000,
    imagenes: [rutaBaseGatosAcc + "Comedero_flor_acc_cat_01.jpg"],
  },
  {
    nombre: "Palas Cara de Gato",
    precio: 5000,
    imagenes: [rutaBaseGatosAcc + "Palas_cara_gato_cat_acc__01.jpg"],
  },
  {
    nombre: "Palas Jarra",
    precio: 8000,
    imagenes: [rutaBaseGatosAcc + "Palas_jarra_cat_acc_01.jpg"],
  },
];

// --- NOTA FINAL ---
// Esta lista unifica todos los productos anteriores para que el buscador
// pueda revisar todo el inventario de una sola vez si es necesario.
const todosLosProductos = [
  ...juguetesPerros,
  ...accesoriosPerros,
  ...juguetesGatos,
  ...accesoriosGatos,
];
