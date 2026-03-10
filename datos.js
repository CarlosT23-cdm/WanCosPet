// =====================================================================
// === RUTAS ===
// =====================================================================
const rutaBasePerrosJug = "./img_tienda/img_perros_juguetes/";
const rutaBasePerrosAcc = "./img_tienda/img_perros_accesorios/";
const rutaBaseGatosJug = "./img_tienda/img_gatos_juguetes/";
const rutaBaseGatosAcc = "./img_tienda/img_gatos_accesorios/";

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
      "¿Tu peludo está aburrido? ¡Dale una sorpresa! Esta adorable ardilla chillona es el juguete perfecto para despertar su instinto más juguetón. Con su textura increíblemente suave y ese sonido irresistible que hace al morderla, ¡no podrá soltarla!. ¡La compañera de aventuras que tu mascota necesita! 🐿️✨",
  },
  {
    nombre: "Cangrejo Limpia Dientes",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Cangrejo_dog_01.jpg"],
    descripcion:
      "¿Tu perro necesita liberar energía? ¡Este es su nuevo juguete favorito! Este cangrejo de goma no solo es súper resistente para las mordidas más intensas, sino que sus pinchos ayudan a masajear sus encías y mantener sus dientes limpios mientras juega. ¡Un cangrejito listo para la batalla! 🦀💥",
  },
  {
    nombre: "Berenjena Chillona",
    precio: 9800,
    imagenes: [rutaBasePerrosJug + "Berengena_chillona_dog_jug_01.jpg"],
    descripcion:
      "¡Dile adiós al aburrimiento con esta original berenjena chillona! Es el juguete ideal para que tu perro se divierta un buen rato mientras cuida su salud dental. Gracias a sus texturas en relieve, ayuda a masajear sus encías y limpiar sus dientes de forma natural. ¡A morder con estilo! 🍆🐾",
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
    descripcion:
      "¡Prepárate para las risas! Este cerdito chillón es el juguete que todo perro necesita para animar sus tardes. Con cada apretón, su sonido característico volverá loco a tu peludo de la emoción. Es suave, ligero y perfecto para horas de juego interactivo. ¡El cerdito más ruidoso y divertido del grupo! 🐷💨",
  },
  {
    nombre: "Hueso Dentado",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Hueso_dentado_3x4_dog_jug_01.jpg"],
    descripcion:
      "¿Quieres consentir a tu perro mientras cuidas su sonrisa? Este Hueso Dentado es el aliado perfecto. Gracias a sus texturas en relieve, ayuda a limpiar sus dientes y masajear sus encías de forma natural mientras él se divierte mordiéndolo. ¡Dientes fuertes y diversión sin fin! 🦴✨",
  },
  {
    nombre: "Hueso Dino",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Hueso_dino_dog_jug_01.jpg"],
    descripcion:
      "¿Tu perro es un experto en mordidas? El Hueso Dino llegó para poner a prueba su energía. Su textura llena de relieve no solo lo hace súper entretenido, sino que ayuda a masajear sus encías y mantener sus dientes más limpios mientras juega. ¡DiverSIÓN jurásica para tu mejor amigo! 🦴🦖",
  },
  {
    nombre: "Hueso Mordedor",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "hueso_mordedor_jug_dog_01.jpg"],
    descripcion:
      "¡Diversión garantizada para tu peludo! Este hueso de goma con puntitos y relieve está hecho para morder, jugar y entretener durante horas. Además, ayuda a masajear las encías mientras tu perro se divierte. ¡El juguete perfecto para perros inquietos! 😄.",
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
    nombre: "Bola Electrica",
    precio: 22000,
    video:
      "./video_tienda/video_jugetes_perros&Gatos/Bola_electrica_cat_jut.mp4",
    descripcion:
      "¡La diversión que se mueve sola! Este juguete interactivo mantendrá a tu mascota persiguiéndolo, golpeándolo y jugando sin parar. Ideal para estimular su mente, despertar su instinto de caza y mantener a perros y gatos activos y entretenidos. 🎾⚡😸",
  },
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
