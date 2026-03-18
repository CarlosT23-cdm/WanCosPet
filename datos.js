/**
 * WANCOS PET - BASE DE DATOS DE PRODUCTOS
 * Este archivo funciona como un almacén central. Todos los productos de la tienda
 * están registrados aquí para que sea más fácil encontrarlos y editarlos.
 *   {
    nombre: "ccc",
    precio: cccc,
    imagenes: [rutaBasePerrosJug + "Cortauñas_Grande_Con_Lima_acc_dog.jpg"],
  },
  
 */

// --- NOTA EXPLICATIVA ---
// Estas son las direcciones de las carpetas donde guardas tus fotos.
// Se usan para no tener que escribir la ruta larga en cada producto.
const rutaBaseGatosPerrosAcc = "./img_tienda/img_accesorios_perros_y_gatos/";
const rutaBaseGatosPerrosJug = "./img_tienda/img_juguetes_perros_y_gatos/";
const rutaBasePerrosJug = "./img_tienda/img_perros_juguetes/";
const rutaBasePerrosAcc = "./img_tienda/img_perros_accesorios/";
const rutaBaseGatosJug = "./img_tienda/img_gatos_juguetes/";
const rutaBaseGatosAcc = "./img_tienda/img_gatos_accesorios/";

// Hay productos que funcionan muy bien para las dos especies, incorpore dos carpetas una de ellas con accesorios para perros y gatos y otra con juguetes para perros y
// gatos, tambien incorpore estas dos rutas rutaBaseGatosPerrosAcc, rutaBaseGatosPerrosJug 15-03-2026, ¿tengo que modifcar el logica.js?, crear dos HTML para las carpetas
// img_accesorios_perros&gatos y la de juguetes, asi como tambien pasar alli los porductos de otros html que sean para las dos especies y descargar los demas de telegram

// =====================================================================
// SECCIÓN: PERROS
// =====================================================================

const productosDosEspeciesJug = [
  {
    nombre: "Bola Electrica",
    precio: 22000,
    imagenes: [
      rutaBaseGatosPerrosJug + "Bola_electrica_jug_cat_y_dog_01.jpg",
      rutaBaseGatosPerrosJug + "Bola_electrica_jug_cat_y_dog_02.jpg",
    ],
  },
];

// Listado de juguetes para perros
const juguetesPerros = [
  {
    nombre: "Peluche Cerdito Felpa",
    precio: 15000,
    imagenes: [
      rutaBasePerrosJug + "Peluche_Marranito_Felpa_Con_Sonido_jug_dog_01.jpg",
    ],
    descripcion: "Cerdito con sonido, recubierto de tela, color rosado",
  },

  {
    nombre: "Elefante Felpa",
    precio: 15000,
    imagenes: [rutaBasePerrosJug + "Peluche_Elefante_Felpa_jug_dog_01.jpg"],
  },
  {
    nombre: "Cocodrilo",
    precio: 25000,
    imagenes: [
      rutaBasePerrosJug + "Cocodrilo_jug_dog_01.jpg",
      rutaBasePerrosJug + "Cocodrilo_jug_dog_02.jpg",
    ],
  },
  {
    nombre: "Puerco Espin",
    precio: 7000,
    imagenes: [
      rutaBasePerrosJug + "Puercoespin_jug_dog_01.jpg",
      rutaBasePerrosJug + "Puercoespin_jug_dog_02.jpg",
    ],
  },
  {
    nombre: "Zanahoria Chillona",
    precio: 11000,
    imagenes: [rutaBasePerrosJug + "Zanahoria_Chillona_jug_dog.jpg"],
  },
  {
    nombre: "Peluche Zanahoria Chillona",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Zanahoria_Chillona_(video)_jug_dog.mp4"], //Necesito poner videos en el html al igual que las imagenes
    descripcion:
      "Peluche con sonido, de tamaño mediano, recubierto con una tela muy suave", //necesito que esta descripción aparezca en el html
  },

  {
    nombre: "Peluche Limpia dientes",
    precio: 25000,
    imagenes: [rutaBasePerrosJug + "Peluche_limpia_dientes_dog_jug.jpg"],
  },
  {
    nombre: "Pollo Chillon Pequeño",
    precio: 5000,
    imagenes: [rutaBasePerrosJug + "Pollo_Chillon_Pequeño_jug_dog.jpg"],
  },
  {
    nombre: "Pelota Puntas",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Pelota_puntas_jug_dog.jpg"],
  },
  {
    nombre: "Pelota Maciza Medinana",
    precio: 14000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_maciza_mediana_jug_dog_02.jpg",
      rutaBasePerrosJug + "Pelota_maciza_mediana_jug_dog_01.jpg",
    ],
  },
  {
    nombre: "Pelota Mina Chillona Grande 9 CM",
    precio: 12000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_mina_chillona_grande_dog_jug_01.jpg",
      rutaBasePerrosJug + "Pelota_mina_chillona_grande_dog_jug_02.jpg",
    ],
  },
  {
    nombre: "Pelota Encias",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Pelota_encias_jug_dog_01.jpg"],
  },
  {
    nombre: "Paleta para Refrigerar",
    precio: 12000,
    imagenes: [
      rutaBasePerrosJug + "Paleta_para_refrigerar_dog_jug_01.jpg",
      rutaBasePerrosJug + "Paleta_para_refrigerar_dog_jug_02.jpg",
    ],
  },
  {
    nombre: "Oso Jalador",
    precio: 20000,
    imagenes: [
      rutaBasePerrosJug + "Oso_Jalador_jug_dog_01.jpg",
      rutaBasePerrosJug + "Oso_Jalador_jug_dog_02.jpg",
    ],
  },
  {
    nombre: "Paquete de Pelotas por cinco",
    precio: 25000,
    imagenes: [rutaBasePerrosJug + "Paquete_pelotas_x5_jug_dog.jpg"],
  },
  {
    nombre: "Pelota Chillona",
    precio: 6000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_Chillona_dog_jug.jpg",
      rutaBasePerrosJug + "Pelota_Chillona_02_dog_jug.jpg",
    ],
  },
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
    imagenes: [rutaBasePerrosJug + "Mazorca_chillona_dog_jug_01.jpg"],
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
    imagenes: [
      rutaBasePerrosJug + "Jalador_trenza_mediano_dog_jug_01.jpg",
      rutaBasePerrosJug + "Jalador_trenza_mediano_dog_jug_02",
    ],
  },
  {
    nombre: "Pelota Chillona Futbol Americano",
    precio: 10200,
    imagenes: [
      rutaBasePerrosJug + "Pelota_chillona_futbol_americano_jug_dog_01.jpg",
    ],
    descripcion: "",
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
    imagenes: [
      rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_01.jpg",
      rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_02.jpg",
      rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_01",
    ],
    descripcion: "",
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
    nombre: "Collar Anti Pulgas",
    precio: 8000,
    imagenes: [rutaBasePerrosAcc + "Collar_anti_pulgas_acc_dog.jpg"],
  },
  {
    nombre: "Cortauñas Grande",
    precio: 14100,
    imagenes: [rutaBasePerrosAcc + "Cortauñas_Grande_Con_Lima_acc_dog.jpg"],
  },
  {
    nombre: "Bebedero 4 en 1",
    precio: 50000,
    imagenes: [rutaBasePerrosAcc + "Bebedero_4_en_uno_dog_acc_01.jpg"],
  },
  {
    nombre: "Cepillo Universal",
    precio: 10700,
    imagenes: [rutaBasePerrosAcc + "Cepillo_universal_grande_acc_dog_01.jpg"],
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
    imagenes: [
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_05.jpg",
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_09.jpg",
    ],
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
    nombre: "Caña Flores",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Caña_flores_cat_jug_01.jpg"],
  },
  {
    nombre: "Caña Libelula",
    precio: 9400,
    imagenes: [
      rutaBaseGatosJug + "Caña_libelula_jug_cat_01.jpg",
      rutaBaseGatosJug + "Caña_libelula_jug_cat_02.jpg",
    ],
  },
  {
    nombre: "Caña Pluma",
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
];

// Listado de accesorios para gatos
const accesoriosGatos = [
  {
    nombre: "Comedero Alto",
    precio: 14000,
    imagenes: [rutaBaseGatosAcc + "Comedero_alto_acc_cat__01.jpg"],
  },
  {
    nombre: "Arenera Morada",
    precio: 37000,
    imagenes: [rutaBaseGatosAcc + "Arenera_morada_cat_acc_01.jpg"],
  },
  {
    nombre: "Arenera Gris",
    precio: 25000,
    imagenes: [rutaBaseGatosAcc + "Arenera_gris_cat_acc_01.jpg"],
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
const productosDosEspeciesAcc = [
  {
    nombre: "Cepillo Para Baño Dispensador Shampoo",
    precio: 12000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Cepillo_para_baño_dispensador_shampoo_01.jpg",
    ],
  },
  {
    nombre: "Cepillo Boton Limpieza",
    precio: 25000,
    imagenes: [
      rutaBaseGatosPerrosAcc +
        "Cepillo_con_boron_de_limpieza_acc_dog_cat_03.jpg",
      rutaBaseGatosPerrosAcc +
        "Cepillo_con_boron_de_limpieza_acc_dog_cat_02.jpg",
      rutaBaseGatosPerrosAcc +
        "Cepillo_con_boron_de_limpieza_acc_dog_cat_01.jpg",
    ],
  },
  {
    nombre: "Cepillo Vapor",
    precio: 23000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Cepillo_Vapor_acc_dog_y_cat_02.jpg",
      rutaBaseGatosPerrosAcc + "Cepillo_Vapor_acc_dog_y_cat_01.jpg",
      rutaBaseGatosPerrosAcc + "Cepillo_Vapor_acc_dog_y_cat_03.jpg",
    ],
  },
  {
    nombre: "Bolsas Biodegradable por Seis",
    precio: 13500,
    imagenes: [
      rutaBaseGatosPerrosAcc +
        "Bolsas_repuesto_paquete_dog_y_dat_x6_acc_01.jpg",
    ],
  },
  {
    nombre: "Comederos Flor",
    precio: 13000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Comedero_flor_dog_y_cat_acc_03.jpg",
      rutaBaseGatosPerrosAcc + "Comedero_flor_dog_y_cat_acc_01.jpg",
      rutaBaseGatosPerrosAcc + "Comedero_flor_dog_y_cat_acc_02.jpg",
    ],
  },
  {
    nombre: "Bolsas Biodegradable por Tres",
    precio: 7000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Bolsas_repuesto_x3_acc_dog_y_dat_01.jpg",
    ],
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
  ...productosDosEspeciesAcc,
  ...productosDosEspeciesJug,
];
