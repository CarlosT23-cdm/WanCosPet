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

// Listado de juguetes para perros
const juguetesPerros = [
  {
    nombre: "Peluche Cerdito Felpa",
    precio: 15000,
    imagenes: [
      rutaBasePerrosJug + "Peluche_Marranito_Felpa_Con_Sonido_jug_dog_01.jpg",
    ],
    descripcion:
      "Divertido cerdito con sonido interno tipo squeaky, ideal para mascotas que buscan un compañero de juego tierno y estimulante.",
    // Estos son los campos nuevos que voy a agregar para daca producto:
    material: "Felpa suave de alta calidad con relleno de algodón siliconado.",
    textura: "Rugosa con puntos de relieve",
    color: "Rosado pastel",
    tamaño: "15 - 20 cm",
    beneficios: "Sonido interactivo, ideal para cachorros",
  },

  {
    nombre: "Elefante Felpa",
    precio: 15000,
    imagenes: [rutaBasePerrosJug + "Peluche_Elefante_Felpa_jug_dog_01.jpg"],
    descripcion:
      "Compañero suave diseñado para fomentar el instinto de caza y la relajación. Su forma tubular es perfecta para que tu mascota lo cargue a todas partes.",
    textura: "Lisa y sedosa al tacto.",
    color: "Gris con detalles azul y blanco",
    tamaño: "25 - 30 cm",
    beneficios:
      "Fomenta el juego de 'pateo' en gatos y es ideal como almohada de descanso.",
  },

  {
    nombre: "Cocodrilo",
    precio: 25000,
    imagenes: [
      rutaBasePerrosJug + "Cocodrilo_jug_dog_01.jpg",
      rutaBasePerrosJug + "Cocodrilo_jug_dog_02.jpg",
    ],
    descripcion:
      "Juguete que combina diversión y estimulación sensorial. Diseño prehistórico capta la atención de mascotas curiosas al instante.",
    material: "Felpa de microfibra.",
    textura: "Puntos en relieve que simulan escamas.",
    color: "Morado lavanda con amarillo y blanco",
    tamaño: "25 - 30 cm",
    beneficios: "Masajea encías suavemente y brinda alta estimulación visual.",
  },
  {
    nombre: "Puerco Espin",
    precio: 7000,
    imagenes: [
      rutaBasePerrosJug + "Puercoespin_jug_dog_01.jpg",
      rutaBasePerrosJug + "Puercoespin_jug_dog_02.jpg",
    ],
    descripcion:
      "Pelota interactiva de alta visibilidad, excelente para juegos de lanzar y atrapar que promueven la actividad física diaria.",
    material: "Caucho/Goma no tóxica y duradera.",
    textura: "Púas de goma flexibles para limpieza dental.",
    color: "Rojo vibrante",
    tamaño: "7 cm (Diámetro)",
    beneficios: "Ayuda a la salud dental y reduce el estrés por aburrimiento.",
  },
  {
    nombre: "Zanahoria Chillona",
    precio: 11000,
    imagenes: [rutaBasePerrosJug + "Zanahoria_Chillona_jug_dog.jpg"],
    descripcion:
      "Juguete clásico y resistente en forma de zanahoria que emite un divertido sonido al presionarlo, manteniendo a tu mascota activa.",
    material: "Vinilo no tóxico de alta durabilidad.",
    textura: "Relieve lineal que facilita el agarre y la mordida.",
    color: "Naranja con tallo verde",
    tamaño: "15 cm aprox.",
    beneficios: "Estimulación auditiva y física; material fácil de lavar.",
  },

  {
    nombre: "Peluche Limpia dientes",
    precio: 25000,
    imagenes: [rutaBasePerrosJug + "Peluche_limpia_dientes_dog_jug.jpg"],
    descripcion:
      "Divertido mapache que combina la suavidad de un peluche con un cuerpo central diseñado para la higiene dental de tu mascota.",
    material: "Tela afelpada y centro de caucho termoplástico (TPR).",
    textura: "Mixta: extremidades suaves y centro con púas de goma.",
    color: "Gris, azul y blanco",
    tamaño: "22 cm aprox.",
    beneficios:
      "Ayuda a remover el sarro mientras juegan; doble textura para mayor interés.",
  },
  {
    nombre: "Pollo Chillon Pequeño",
    precio: 5000,
    imagenes: [rutaBasePerrosJug + "Pollo_Chillon_Pequeño_jug_dog.jpg"],
    descripcion:
      "El juguete icónico que nunca falla. Emite un grito característico que despierta instantáneamente el instinto de juego.",
    material: "Caucho flexible y seguro.",
    textura: "Rugosa y porosa para un agarre firme.",
    color: "Amarillo con detalles rojos",
    tamaño: "16 cm aprox.",
    beneficios: "Alta respuesta sonora; ideal para liberar estrés y ansiedad.",
  },
  {
    nombre: "Pelota Puntas",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Pelota_puntas_jug_dog.jpg"],
    descripcion:
      "Pelota versátil de alto rebote con puntas suaves, diseñada para juegos de lanzar y capturar en cualquier espacio.",
    material: "Goma maciza resistente.",
    textura: "Puntas romas que proporcionan un masaje constante en las encías.",
    color: "Azul vibrante",
    tamaño: "7 cm (Diámetro)",
    beneficios: "Promueve la salud oral y el ejercicio cardiovascular.",
  },
  {
    nombre: "Pelota Maciza Medinana",
    precio: 14000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_maciza_mediana_jug_dog_02.jpg",
      rutaBasePerrosJug + "Pelota_maciza_mediana_jug_dog_01.jpg",
    ],
    descripcion:
      "Pelota de goma de alta resistencia, perfecta para perros con mordida fuerte y juegos intensos de lanzar y capturar. Esta pelota tiene un rebote excelente y posee buena resistencia..",
    material: "Caucho macizo, no tóxico y duradero.",
    textura: "Goma lisa y compacta para un rebote potente.",
    color: "Verde lima vibrante",
    tamaño: "Mediano (aprox. 7 cm)",
    beneficios: "Fomenta el ejercicio, es ideal para la estimulación física.",
  },
  {
    nombre: "Pelota Mina Chillona Grande 9 CM",
    precio: 12000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_mina_chillona_grande_dog_jug_01.jpg",
      rutaBasePerrosJug + "Pelota_mina_chillona_grande_dog_jug_02.jpg",
    ],
    descripcion:
      "Una pelota grande y divertida con un sonido potente. Su forma única de mina facilita que tu mascota la agarre con la boca.",
    material: "Vinilo suave pero resistente.",
    textura: "Púas romas y grandes que proporcionan un masaje sensorial.",
    color: "Azul eléctrico",
    tamaño: "Grande (9 cm)",
    beneficios:
      "Estimulación auditiva de alto nivel, ideal para juegos interactivos.",
  },
  {
    nombre: "Pelota Encias",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Pelota_encias_jug_dog_01.jpg"],
    descripcion:
      "Pelota diseñada pensando en la salud bucal de tu perro. Sus púas suaves ayudan a limpiar los dientes mientras juega.",
    material: "Goma flexible y segura.",
    textura: "Púas de goma flexibles para limpieza dental.",
    color: "Azul vibrante",
    tamaño: "7 cm (aprox.)",
    beneficios: "Ayuda a la salud dental, reduce el estrés.",
  },
  {
    nombre: "Paleta para Refrigerar",
    precio: 12000,
    imagenes: [
      rutaBasePerrosJug + "Paleta_para_refrigerar_dog_jug_01.jpg",
      rutaBasePerrosJug + "Paleta_para_refrigerar_dog_jug_02.jpg",
    ],
    descripcion:
      "Juguete innovador que se puede llenar con agua y congelar, proporcionando alivio y frescura en días calurosos.",
    material: "Goma resistente al frío y no tóxica.",
    textura: "Variada: rugosa y con relieves para estimular la lengua.",
    color: "Azul hielo con patrón de rombos",
    tamaño: "14 cm (aprox.)",
    beneficios: "Alivio para encías doloridas, refresca en verano.",
  },
  {
    nombre: "Oso Jalador",
    precio: 20000,
    imagenes: [
      rutaBasePerrosJug + "Oso_Jalador_jug_dog_01.jpg",
      rutaBasePerrosJug + "Oso_Jalador_jug_dog_02.jpg",
    ],
    descripcion:
      "Juguete multifuncional que combina un peluche suave, un cuerpo de caucho texturizado para morder y una cuerda resistente para juegos de tirar.",
    material: "Peluche, caucho termoplástico (TPR) y cuerda de algodón.",
    textura:
      "Combinación de suavidad, relieves en el caucho y nudos de cuerda.",
    color: "Azul con detalles en beige y blanco",
    tamaño: "No especificado",
    beneficios:
      "Ideal para la limpieza dental y juegos interactivos de fuerza.",
  },
  {
    nombre: "Paquete de Pelotas por cinco",
    precio: 25000,
    imagenes: [rutaBasePerrosJug + "Paquete_pelotas_x5_jug_dog.jpg"],
    descripcion:
      "Set variado de cinco pelotas de diferentes deportes (fútbol, baloncesto, tenis, etc.), perfecto para mantener la novedad en el juego diario.",
    material: "Diferentes densidades de caucho y fieltro sintético.",
    textura: "Variada (lisa, rugosa y con costuras simuladas).",
    color: "Multicolor",
    tamaño: "Tamaño promedio de pelota de tenis",
    beneficios: "Versatilidad de juego y excelente visibilidad en exteriores.",
  },

  {
    nombre: "Pelota Chillona",
    precio: 6000,
    imagenes: [
      rutaBasePerrosJug + "Pelota_Chillona_dog_jug.jpg",
      rutaBasePerrosJug + "Pelota_Chillona_02_dog_jug.jpg",
    ],
    descripcion:
      "Pelota clásica con sonido integrado que se activa al morder. Su diseño imita una pelota de béisbol para un mejor agarre.",
    material: "Vinilo resistente no tóxico.",
    textura: "Lisa con grabados de costura para facilitar el cobro.",
    color: "Naranja vibrante",
    tamaño: "No especificado",
    beneficios:
      "Estimulación auditiva que mantiene el interés de la mascota por más tiempo.",
  },
  {
    nombre: "Pelota Asteroide",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "Pelota_asteroide_dog_jug_01.jpg"],
    descripcion:
      "Pelota de diseño irregular con múltiples puntas romas que generan un rebote impredecible, desafiando los reflejos de tu mascota.",
    material: "Caucho macizo de alta durabilidad.",
    textura: "Puntas redondeadas de gran relieve.",
    color: "Morado",
    tamaño: "No especificado",
    beneficios:
      "Masajea las encías durante el juego y promueve el ejercicio intenso.",
  },
  {
    nombre: "Muslo Macizo",
    precio: 7600,
    imagenes: [rutaBasePerrosJug + "Muslo_dog_jug.jpg"],
    descripcion:
      "Juguete de caucho resistente en forma de pierna de pollo con relieves que masajean las encías mientras el perro muerde.",
    material: "Caucho macizo de alta resistencia.",
    textura: "Superficie lisa con protuberancias romas distribuidas.",
    color: "Beige / Crema",
    tamaño: "Similar a un marcador Sharpie (aprox. 13 cm).",
    beneficios:
      "Excelente para perros con mordida fuerte y para la salud de las encías.",
  },
  {
    nombre: "Mordedor Cuerda Circular",
    precio: 9600,
    imagenes: [rutaBasePerrosJug + "Mordedor_cuerda_circular_dog_jug.jpg"],
    descripcion:
      "Aro rígido con texturas de huellas envuelto en cuerda de algodón multicolor, ideal para juegos de forcejeo y lanzamiento.",
    material: "Plástico TPR y cuerda de algodón natural.",
    textura: "Combinación de relieves circulares y trenzado de cuerda.",
    color: "Rosa neón con cuerda multicolor.",
    tamaño: "Diámetro mediano.",
    beneficios:
      "Ayuda a limpiar los dientes mediante la fricción con la cuerda.",
  },
  {
    nombre: "Mordedor Con Hueso Chillon",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "Mordedor_con_hueso_chillon_jug_dog.jpg"],
    descripcion:
      "Hueso de caucho azul con la frase GOOD DOG que emite sonido al presionarlo, unido a una cuerda gruesa para mayor agarre.",
    material: "Vinilo resistente y cuerda de fibra sintética.",
    textura: "Goma lisa y cuerda trenzada suave.",
    color: "Azul con cuerda multicolor.",
    tamaño: "No especificado.",
    beneficios: "Estimulación sonora y física en un solo juguete.",
  },
  {
    nombre: "Mazorca Chillona",
    precio: 9800,
    imagenes: [rutaBasePerrosJug + "Mazorca_chillona_dog_jug_01.jpg"],
    descripcion:
      "Juguete con forma de maíz que incluye un pito interno. Su diseño ergonómico facilita que la mascota lo cargue en la boca.",
    material: "Látex o vinilo suave.",
    textura: "Relieve que imita los granos de la mazorca.",
    color: "Amarillo con hojas verdes.",
    tamaño: "Pequeño / Mediano.",
    beneficios:
      "Material flexible ideal para cachorros o perros de mordida suave.",
  },
  {
    nombre: "Llanta de Goma Resistente",
    precio: 10800,
    imagenes: [rutaBasePerrosJug + "Llanta_jug_dog.jpg"],
    descripcion:
      "Mordedor clásico y ultra resistente con forma de neumático. Ideal para perros destructores, fomentando horas de masticación segura y entretenida.",
    material: "Caucho macizo de alta resistencia y durabilidad.",
    textura:
      "Goma compacta con relieves marcados que simulan la huella de un neumático.",
    color: "Azul eléctrico",
    tamaño: "Mediano (aprox. 15 cm)",
    beneficios:
      "Excelente para perros con mordida fuerte y para ayudar a limpiar la placa bacteriana.",
  },
  {
    nombre: "Lazo Hueso",
    precio: 7400,
    imagenes: [rutaBasePerrosJug + "Lazo_hueso_jug_dog.jpg"],
    descripcion:
      "Combinación dinámica para jugar: un hueso de goma texturizada en el centro, ideal para morder, unido a extremos de cuerda trenzada para juegos de fuerza.",
    material:
      "Cuerpo de caucho termoplástico (TPR) y cuerda trenzada de algodón.",
    textura: "Goma flexible con relieves sensoriales y cuerda trenzada gruesa.",
    color: "Azul transparente / Cuerda multicolor",
    tamaño: "Aproximadamente 25 cm (largo total)",
    beneficios:
      "Fortalece la mandíbula y ayuda a limpiar los dientes mediante la fricción con la cuerda.",
  },
  {
    nombre: "Dona Chillona Antiestrés",
    precio: 19000,
    imagenes: [rutaBasePerrosJug + "Dona_jug_dog.jpg"],
    descripcion:
      "Adorable mordedor en forma de dona con sprinkles de colores. Emite un sonido divertido al presionarlo, manteniendo la atención de tu mascota.",
    material: "Vinilo suave y flexible, seguro para la salud de tu mascota.",
    textura:
      "Superficie lisa y blanda, fácil de morder incluso para mascotas pequeñas.",
    color: "Rosa con detalles de colores",
    tamaño: "Pequeño / Mediano (aprox. 12 cm)",
    beneficios:
      "Estimulación auditiva y física en un diseño llamativo; ideal para cachorros.",
  },
  {
    nombre: "Cuerda Pelota Pequeña",
    precio: 7400,
    imagenes: [rutaBasePerrosJug + "Cuerda_pelota_pequeña_dog_jug.jpg"],
    descripcion:
      "Nudo de cuerda grueso y resistente, diseñado para juegos de tira y afloja o para lanzar. Perfecto para gatos y perros de raza pequeña.",
    material: "Cuerda de algodón natural trenzado de alta densidad.",
    textura: "Rústica y porosa, excelente para que los dientes penetren.",
    color: "Verde neón vibrante con cuerda natural",
    tamaño: "Nudo de 7 cm aprox. + cuerda de agarre",
    beneficios: "Fomenta el ejercicio y la salud oral de forma 100% natural.",
  },
  {
    nombre: "Ardilla Chillona",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Ardilla_chillona_dog_01.jpg"],
    descripcion:
      "Peluche suave con sonido interno que despierta el instinto cazador de tu gato. Su diseño ligero permite que sea lanzada y capturada con facilidad durante el juego.",
    material: "Tela de felpa suave y fibra sintética.",
    textura: "Esponjosa y agradable al tacto.",
    color: "Gris con detalles rosas",
    tamaño: "Pequeño (Ideal para gatos)",
    beneficios: "Estimula la actividad física y reduce el estrés.",
    precio: 12000,
  },
  {
    nombre: "Cangrejo Limpia Dientes",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Cangrejo_dog_01.jpg"],
    descripcion:
      "Juguete masticable con cerdas de goma que masajean las encías y ayudan a remover el sarro mientras tu perro juega. Incluye una cuerda para juegos de tironeo.",
    material: "Caucho termoplástico (TPR) resistente.",
    textura: "Rugosa con relieves de limpieza.",
    color: "Amarillo",
    tamaño: "Mediano",
    beneficios: "Mejora la salud oral y fortalece la mandíbula.",
    precio: 15000,
  },
  {
    nombre: "Berenjena Chillona",
    precio: 9800,
    imagenes: [rutaBasePerrosJug + "Berengena_chillona_dog_jug_01.jpg"],
    descripcion:
      "Divertido juguete con pito integrado y forma ergonómica. Sus relieves externos ayudan a la limpieza dental básica mientras la mascota muerde con entusiasmo.",
    material: "Látex natural no tóxico.",
    textura: "Semiblanda con puntos en relieve.",
    color: "Morado y Verde",
    tamaño: "12 cm aprox.",
    beneficios: "Entretenimiento prolongado gracias a su sonido atrayente.",
    precio: 9500,
  },
  {
    nombre: "Dona Antisarro",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Dona_antisarro_jug_dog_01.jpg"],
    descripcion:
      "Anillo dental con múltiples puntos de presión diseñados para limpiar zonas difíciles de alcanzar. Es resistente a mordidas constantes y fácil de lavar.",
    material: "Goma maciza de alta durabilidad.",
    textura: "Dura con patrones geométricos.",
    color: "Rojo",
    tamaño: "10 cm de diámetro",
    beneficios: "Aliento más fresco y encías más saludables.",
    precio: 14000,
  },
  {
    nombre: "Cerdito Chillón",
    precio: 7000,
    imagenes: [rutaBasePerrosJug + "Cerdito_chillon_peq_jug_dog_01.jpg"],
    descripcion:
      "Juguete clásico con sonido de alta frecuencia que capta la atención al instante. Su forma redondeada es perfecta para que perros pequeños y medianos lo transporten fácilmente.",
    material: "Látex suave y flexible.",
    textura: "Piel de cerdo texturizada.",
    color: "Rosado vibrante",
    tamaño: "10 cm de diámetro",
    beneficios: "Fomenta el juego interactivo y reduce el aburrimiento.",
  },
  {
    nombre: "Hueso Dentado",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Hueso_dentado_3x4_dog_jug_01.jpg"],
    descripcion:
      "Mordedor translúcido con cerdas rígidas diseñadas para penetrar entre los dientes. Ayuda a masajear las encías mientras la mascota intenta atraparlo.",
    material: "Caucho TPR de alta resistencia.",
    textura: "Cerdas y nodos de limpieza.",
    color: "Transparente con base roja",
    tamaño: "15 cm de largo",
    beneficios: "Limpieza dental profunda y fortalecimiento de mandíbula.",
  },
  {
    nombre: "Hueso Dino",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Hueso_dino_dog_jug_01.jpg"],
    descripcion:
      "Hueso de gran tamaño con relieves que imitan fósiles. Su densidad está pensada para perros con una mordida constante que necesitan un reto duradero.",
    material: "Goma maciza reforzada.",
    textura: "Relieves rugosos y lineales.",
    color: "Crema / Hueso",
    tamaño: "18 cm (Grande)",
    beneficios: "Ideal para liberar estrés en masticadores fuertes.",
  },
  {
    nombre: "Hueso Mordedor",
    precio: 14000,
    imagenes: [rutaBasePerrosJug + "hueso_mordedor_jug_dog_01.jpg"],
    descripcion:
      "Mordedor ergonómico con puntas de goma suaves. Su diseño ligero lo hace ideal para cachorros en etapa de dentición que buscan alivio en sus encías.",
    material: "Silicona de grado alimenticio.",
    textura: "Puntas romas de masaje.",
    color: "Naranja",
    tamaño: "12 cm de largo",
    beneficios: "Alivia la picazón en encías de cachorros.",
  },
  {
    nombre: "Hueso Pitbull",
    precio: 8000,
    imagenes: [rutaBasePerrosJug + "Hueso_pitbull_dog_jug_01.jpg"],
    descripcion:
      "Diseñado para mordidas de alta potencia. Sus múltiples relieves de limpieza actúan como cepillo mientras la mascota mastica con fuerza.",
    material: "Caucho macizo ultra resistente.",
    textura: "Puntas y nodos de alta densidad.",
    color: "Verde menta",
    tamaño: "16 cm (Robusto)",
    beneficios: "Máxima durabilidad para perros destructores.",
  },
  {
    nombre: "Jalador Trenza",
    precio: 11000,
    imagenes: [
      rutaBasePerrosJug + "Jalador_trenza_mediano_dog_jug_01.jpg",
      rutaBasePerrosJug + "Jalador_trenza_mediano_dog_jug_02",
    ],
    descripcion:
      "Juguete de tracción ideal para el juego compartido. Su diseño en espiral permite un agarre firme tanto para el dueño como para la mascota.",
    material: "Goma flexible entrelazada.",
    textura: "Espiral texturizada.",
    color: "Verde neón",
    tamaño: "Mediano (25 cm aprox.)",
    beneficios: "Fortalece el vínculo y la musculatura del cuello.",
  },
  {
    nombre: "Pelota Chillona Futbol Americano",
    precio: 10200,
    imagenes: [
      rutaBasePerrosJug + "Pelota_chillona_futbol_americano_jug_dog_01.jpg",
    ],
    descripcion:
      "Pelota con sonido interno y forma ovoide que genera rebotes impredecibles, manteniendo a tu mascota alerta y activa durante el ejercicio.",
    material: "Vinilo de alta calidad.",
    textura: "Relieve tipo costura de balón.",
    color: "Café con detalles negros",
    tamaño: "14 cm de largo",
    beneficios: "Estimula la agilidad y los reflejos.",
  },
  {
    nombre: "Pelota Rugby",
    precio: 20000,
    imagenes: [rutaBasePerrosJug + "Pelota_rugby_sonido_jug_dog_01.jpg"],
    descripcion:
      "Estructura calada que permite una fácil respiración durante el juego. Su diseño aerodinámico es perfecto para lanzamientos a larga distancia.",
    material: "Plástico gomoso ligero.",
    textura: "Rejilla geométrica.",
    color: "Azul con detalles verdes",
    tamaño: "12 cm aprox.",
    beneficios: "Ligera y fácil de atrapar en el aire.",
  },
  {
    nombre: "Pelota Disco",
    precio: 28000,
    imagenes: [rutaBasePerrosJug + "pelota_disco_jug_dog_01.jpg"],
    descripcion:
      "Juguete aerodinámico que cambia de forma al lanzarlo. Su diseño flexible permite capturarlo fácilmente en el aire, ideal para parques.",
    material: "Plástico flexible y resistente.",
    textura: "Lisa con ranuras de sujeción.",
    color: "Azul con centro amarillo",
    tamaño: "23 cm (Abierta)",
    beneficios: "Fomenta el ejercicio cardiovascular y la agilidad.",
  },
  {
    nombre: "Pelota Lazo",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Pelota_lazo_dog_jug_01.jpg"],
    descripcion:
      "Pelota de cuerda tejida con asa integrada para un agarre firme. Perfecta para sesiones intensas de estira y afloja con tu mascota.",
    material: "Algodón trenzado reforzado.",
    textura: "Fibras entrelazadas rugosas.",
    color: "Blanco y Rosa",
    tamaño: "Pequeña / Mediana",
    beneficios: "Limpieza dental natural y fortalecimiento cervical.",
  },
  {
    nombre: "Lazo Pelota de Tenis",
    precio: 11000,
    imagenes: [rutaBasePerrosJug + "Pelota_lazo_tenis_jug_dog_01.jpg"],
    descripcion:
      "La clásica pelota de tenis unida a un lazo bicolor. Permite lanzamientos a mayor distancia y un manejo más higiénico del juguete.",
    material: "Fieltro y cuerda de nylon.",
    textura: "Afelpada y trenzada.",
    color: "Verde Neón y Blanco",
    tamaño: "Estándar con extensión",
    beneficios: "Ideal para juegos de cobro y lanzar a distancia.",
  },
  {
    nombre: "Pelota Loca Pequeña",
    precio: 14000,
    imagenes: [
      rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_01.jpg",
      rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_02.jpg",
      rutaBasePerrosJug + "pelota_loca_pequeña_jug_dog_01",
    ],
    descripcion:
      "Pequeña esfera con puntas que provocan rebotes erráticos. Mantiene al perro concentrado y activo intentando predecir su dirección.",
    material: "Goma maciza de alta densidad.",
    textura: "Puntas romas de masaje.",
    color: "Morado",
    tamaño: "6 cm de diámetro",
    beneficios: "Estimulación mental y masaje de encías.",
  },
  {
    nombre: "Pelota Snacks",
    precio: 20000,
    imagenes: [rutaBasePerrosJug + "Pelota_snack_dog_jug_01.jpg"],
    descripcion:
      "Pelota interactiva con ranuras dentadas diseñadas para ocultar premios. Estimula la mente de tu mascota mientras intenta extraer la comida.",
    material: "Caucho natural no tóxico.",
    textura: "Ranuras con cerdas de goma.",
    color: "Calipso / Turquesa",
    tamaño: "7 cm de diámetro",
    beneficios: "Estimulación cognitiva y limpieza dental pasiva.",
  },
  {
    nombre: "Peluche Lona",
    precio: 15000,
    imagenes: [rutaBasePerrosJug + "Peluche_lona_jug_dog_01.jpg"],
    descripcion:
      "Juguete de alta resistencia con cuerpo de lona reforzada y un aro central para jalar. Ideal para perros que disfrutan de juegos de tracción.",
    material: "Lona técnica y cuerda de algodón.",
    textura: "Tejido rugoso y resistente.",
    color: "Gris con detalles azules",
    tamaño: "Mediano (20 cm aprox.)",
    beneficios: "Alta durabilidad frente a mordidas constantes.",
  },
  {
    nombre: "Peluche Kiwi Chillón",
    precio: 10000,
    imagenes: [rutaBasePerrosJug + "Peluche_pequeño_sonido_dog_jug_01.jpg"],
    descripcion:
      "Divertido peluche con forma de fruta que incluye un sonido chillón en su interior. Su textura suave lo hace el compañero perfecto para la siesta.",
    material: "Felpa extra suave y fibra sintética.",
    textura: "Aterciopelada.",
    color: "Café exterior, verde interior",
    tamaño: "10 cm de diámetro",
    beneficios: "Proporciona consuelo y reduce la ansiedad.",
  },
  {
    nombre: "Pesa Antisarro",
    precio: 9000,
    imagenes: [rutaBasePerrosJug + "Pesa_Antisarro_dog_jug_01.jpg"],
    descripcion:
      "Mordedor en forma de pesa con relieves puntiagudos que penetran en los espacios interdentales, eliminando restos de comida y placa.",
    material: "Goma maciza resistente.",
    textura: "Múltiples puntas de limpieza.",
    color: "Rojo vibrante",
    tamaño: "15 cm de largo",
    beneficios: "Prevención de sarro y fortalecimiento gingival.",
  },
];

// Listado de accesorios para perros
const accesoriosPerros = [
  {
    nombre: "Porta Bolsas Hueso",
    precio: 5000,
    imagenes: [
      rutaBasePerrosAcc + "Porta_bolsas_hueso_colorGris_acc_dog_02.jpg",
      rutaBasePerrosAcc + "Porta_bolsas_hueso_colorVerde_acc_dog_01.jpg",
      rutaBasePerrosAcc + "Porta_bolsas_hueso_colorGris_acc_dog_03.jpg",
      rutaBasePerrosAcc + "Porta_bolsas_hueso_colorRosado_acc_dog_04.jpg",
      rutaBasePerrosAcc + "Porta_bolsas_hueso_colorRosado_acc_dog_05.jpg",
    ],
    descripcion:
      "Dispensador práctico con forma de hueso y mosquetón para enganchar en la correa. Incluye un rollo de bolsas para mantener la limpieza durante cada paseo.",
    material: "Plástico rígido duradero.",
    textura: "Lisa y compacta.",
    color: "Gris",
    tamaño: "Estándar para rollos universales",
    beneficios: "Higiene y comodidad en un solo accesorio.",
  },
  {
    nombre: "Correa Cinturon de Carro",
    precio: 20000,
    imagenes: [rutaBasePerrosAcc + "Correa_cinturon_de_carro_acc_dog.jpg"],
    descripcion:
      "Accesorio de seguridad esencial para viajes en vehículo. Se ancla directamente al broche del cinturón para mantener a tu mascota protegida en el asiento.",
    material: "Nylon de alta resistencia y herrajes metálicos.",
    textura: "Tejido de cinta plana.",
    color: "Negro",
    tamaño: "Ajustable",
    beneficios: "Seguridad vial y prevención de distracciones al conducir.",
  },
  {
    nombre: "Comedero Plegable",
    precio: 9500,
    imagenes: [
      rutaBasePerrosAcc + "Comedero_plegable_dog_01.jpg",
      rutaBasePerrosAcc + "Comedero_plegable_dog_02.jpg",
    ],
    descripcion:
      "Plato colapsable ideal para viajes, senderismo o paseos largos. Su diseño ultra delgado permite guardarlo en cualquier morral sin ocupar espacio.",
    material: "Silicona de grado alimenticio.",
    textura: "Flexible y antideslizante.",
    color: "Rojo",
    tamaño: "Mediano",
    beneficios: "Portabilidad extrema y fácil limpieza.",
  },
  {
    nombre: "Cama Grande Patitas",
    precio: 40000,
    imagenes: [rutaBasePerrosAcc + "Cama_Grande_68x83cm_acc_dog.jpg"],
    descripcion:
      "Cojín acolchado con bordes elevados para mayor soporte térmico y confort. Su estampado de huellas le da un toque tierno a cualquier rincón del hogar.",
    material: "Tela térmica y relleno de algodón siliconado.",
    textura: "Suave y acolchada.",
    color: "Azul oscuro con estampado blanco",
    tamaño: "Grande",
    beneficios: "Descanso reparador y aislamiento del frío del suelo.",
  },

  {
    nombre: "Porta Bolsas Cactus",
    precio: 8000,
    imagenes: [
      rutaBasePerrosAcc + "Porta_bolsas_catctus_acc_dog_01.jpg",
      rutaBasePerrosAcc + "Porta_bolsas_catctus_acc_dog_01.jpg",
    ],
    descripcion:
      "Divertido dispensador con forma de cactus. Incluye mosquetón para colgar en la correa y un rollo de bolsas biodegradable para cada paseo.",
    material: "Plástico rígido duradero.",
    textura: "Superficie lisa y compacta.",
    color: "Verde con base naranja",
    tamaño: "Estándar para rollos universales",
    beneficios: "Estilo y practicidad en la higiene de tu mascota.",
  },
  {
    nombre: "Collar Anti Pulgas",
    precio: 8000,
    imagenes: [rutaBasePerrosAcc + "Collar_anti_pulgas_acc_dog.jpg"],
    descripcion:
      "Collar repelente diseñado para proteger a tu perro contra pulgas y garrapatas de forma efectiva y continua por hasta 4 meses.",
    material: "Plástico medicado repelente.",
    textura: "Flexible y suave.",
    color: "Rojo (según empaque)",
    tamaño: "Ajustable para perros medianos",
    beneficios: "Prevención eficaz y descanso para tu mascota.",
  },
  {
    nombre: "Cortauñas Grande",
    precio: 14100,
    imagenes: [rutaBasePerrosAcc + "Cortauñas_Grande_Con_Lima_acc_dog.jpg"],
    descripcion:
      "Herramienta profesional de corte tipo guillotina con tope de seguridad. Permite un corte preciso y limpio sin causar dolor ni estrés.",
    material: "Acero inoxidable y mango de goma.",
    textura: "Mango ergonómico antideslizante.",
    color: "Naranja y Negro",
    tamaño: "Grande",
    beneficios: "Pedicura segura, cómoda y en casa.",
  },
  {
    nombre: "Bebedero 4 en 1",
    precio: 50000,
    imagenes: [rutaBasePerrosAcc + "Bebedero_4_en_uno_dog_acc_01.jpg"],
    descripcion:
      "Accesorio de viaje multifuncional que integra botella de agua, comedero plegable, dispensador de bolsas y pala para desechos.",
    material: "Plástico libre de BPA.",
    textura: "Exterior liso y plegable.",
    color: "Verde neón",
    tamaño: "Compacto y portátil",
    beneficios: "Hidratación y alimentación organizada en cualquier lugar.",
  },
  {
    nombre: "Cepillo Universal",
    precio: 10700,
    imagenes: [rutaBasePerrosAcc + "Cepillo_universal_grande_acc_dog_01.jpg"],
    descripcion:
      "Carda profesional con cerdas metálicas finas. Ideal para desenredar y eliminar el pelo muerto en mantos medios y largos sin lastimar la piel.",
    material: "Plástico ABS y cerdas de acero.",
    textura: "Mango ergonómico y cerdas rígidas.",
    color: "Gris",
    tamaño: "Grande",
    beneficios: "Manto brillante y reducción de nudos.",
  },
  {
    nombre: "Correa Retráctil",
    precio: 22000,
    imagenes: [rutaBasePerrosAcc + "Correa_retractil_acc_dog_01.jpg"],
    video:
      "./videos_tienda/Videos_accesorios_perros/Correa_retractil_negra_video_acc_dog.mp4",
    descripcion:
      "Sistema de cinta extensible con bloqueo de seguridad. Ofrece libertad de movimiento controlada durante los paseos en ciudad o campo.",
    material: "Carcasa de plástico y cinta de nylon.",
    textura: "Agarre antideslizante.",
    color: "Negro",
    tamaño: "5 metros de largo",
    beneficios: "Libertad y control total en cada salida.",
  },
  {
    nombre: "Dispensadores de Bolsas Fino",
    precio: 11000,
    imagenes: [rutaBasePerrosAcc + "Dispensador_bolsas_fino_acc_dog_01.jpg"],
    descripcion:
      "Estuche de tela resistente con cierre de cremallera y mosquetón. Un diseño elegante y discreto para portar las bolsas de higiene.",
    material: "Tela tipo lona y metal.",
    textura: "Tejido suave al tacto.",
    color: "Gris jaspeado",
    tamaño: "Compacto",
    beneficios: "Acceso rápido y diseño sofisticado.",
  },
  {
    nombre: "Dispensador bolsas con linterna",
    precio: 20000,
    imagenes: [
      rutaBasePerrosAcc + "Dispensador_bolsas_linterna_acc_dog_01.jpg",
    ],
    descripcion:
      "Accesorio 2 en 1 que combina un dispensador de bolsas con una potente linterna LED. Perfecto para mayor seguridad en paseos nocturnos.",
    material: "Plástico reforzado.",
    textura: "Cuerpo cilíndrico liso.",
    color: "Beige / Durazno",
    tamaño: "Portátil",
    beneficios: "Visibilidad y limpieza en horarios nocturnos.",
  },
  {
    nombre: "Dosificador Dog Agua",
    precio: 16000,
    imagenes: [rutaBasePerrosAcc + "Dosificador_dog_acc_01.jpg"],
    descripcion:
      "Botella portátil con tazón integrado en forma de hoja. Permite hidratar a tu perro de forma higiénica y sin desperdiciar agua en exteriores.",
    material: "Plástico libre de BPA.",
    textura: "Superficie lisa ergonómica.",
    color: "Azul claro",
    tamaño: "500 ml",
    beneficios: "Hidratación rápida y sin derrames.",
  },
  {
    nombre: "Guante Quita Pelo",
    precio: 14000,
    imagenes: [rutaBasePerrosAcc + "guante_quita_pelo_dog_acc_01.jpg"],
    descripcion:
      "Guante de silicona con puntas suaves que atrapan el pelo suelto mientras acaricias a tu mascota. Ideal para masajes relajantes.",
    material: "Silicona y malla transpirable.",
    textura: "Nodos de goma suaves.",
    color: "Azul y Negro",
    tamaño: "Ajustable (Talla única)",
    beneficios: "Elimina exceso de pelo y mejora la circulación.",
  },
  {
    nombre: "Impermeable Wanda",
    precio: 41000,
    imagenes: [
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_05.jpg",
      rutaBasePerrosAcc + "Wanda_impermeable_dog_acc_09.jpg",
    ],
    descripcion:
      "Capa transparente resistente al agua con bordes reforzados. Protege a tu perro de la lluvia sin ocultar su pelaje ni limitar su movimiento.",
    material: "Vinilo impermeable ligero.",
    textura: "Plástica flexible.",
    color: "Transparente con bordes blancos",
    tamaño: "Grande (ajustable)",
    beneficios: "Mantiene a la mascota seca y limpia.",
  },
  {
    nombre: "Dispensador Bolsas Emoji",
    precio: 13000,
    imagenes: [
      rutaBasePerrosAcc + "Diespensador_de_bolsas_cpn_emoji_01.jpg",
      rutaBasePerrosAcc + "Diespensador_de_bolsas_cpn_emoji_02.jpg",
    ],
    descripcion:
      "Divertido porta bolsas con forma de emoji. Cuenta con un mosquetón de seguridad para colgarlo fácilmente en cualquier pechera o correa.",
    material: "Plástico rígido.",
    textura: "Mate con relieves.",
    color: "Café",
    tamaño: "Compacto",
    beneficios: "Aporta un toque divertido a la limpieza diaria.",
  },
];

// =====================================================================
// SECCIÓN: GATOS
// =====================================================================

// Listado de juguetes para gatos
const juguetesGatos = [
  {
    nombre: "Pluma Catnip",
    precio: 9000,
    imagenes: [rutaBaseGatosJug + "Pluma_Catnip_jug_cat_01.jpg"],
    descripcion:
      "Juguete interactivo con plumas naturales y esencia de catnip. Estimula el instinto de caza y mantiene a tu gato activo y entretenido.",
    material: "Plumas, madera y tela.",
    textura: "Suave y ligera.",
    color: "Natural con detalles verdes",
    tamaño: "Estándar",
    beneficios: "Reduce el estrés y fomenta el ejercicio físico.",
  },
  {
    nombre: "Pelota Astro Luminosa",
    precio: 10500,
    imagenes: [rutaBaseGatosJug + "Pelota_astro_luminosa_jug_cat_01.jpg"],
    descripcion:
      "Pelota con diseño galáctico que brilla o rebota de forma errática. Captura la atención de tu felino incluso en condiciones de poca luz.",
    material: "Plástico resistente no tóxico.",
    textura: "Rígida con relieves.",
    color: "Verde Neón / Azul",
    tamaño: "Pequeño",
    beneficios: "Estimulación visual y agilidad mental.",
  },
  {
    nombre: "Ratones Chillones por tres",
    precio: 6000,
    imagenes: [rutaBaseGatosJug + "Ratones_chillones_por_tres_cat_jug_01.jpg"],
    descripcion:
      "Set de tres ratones coloridos que emiten un pequeño sonido al ser golpeados. El tamaño perfecto para que tu gato los cargue y lance.",
    material: "Tela sintética y sonajero interno.",
    textura: "Peluda y suave.",
    color: "Naranja, Rojo y Gris",
    tamaño: "Mini",
    beneficios: "Diversión multiplicada y juego independiente.",
  },
  {
    nombre: "Ratón de Cuerda",
    precio: 8000,
    imagenes: [
      rutaBaseGatosJug + "Raton_de_cuerda_cat_jug_01.jpg",
      rutaBaseGatosJug + "Raton_de_cuerda_cat_jug_02.jpg",
    ],
    descripcion:
      "Clásico juguete mecánico que se desplaza por el suelo al girar la llave. Imita el movimiento de una presa real para horas de diversión.",
    material: "Plástico y recubrimiento textil.",
    textura: "Afelpada.",
    color: "Marrón con detalles blancos",
    tamaño: "Mediano",
    beneficios: "Promueve la actividad física intensa sin baterías.",
  },
  {
    nombre: "Ratón de Impulso",
    precio: 14000,
    imagenes: [
      rutaBaseGatosJug + "Raton_de_impulso_negro_cat_jug_04.jpg",
      rutaBaseGatosJug + "Raton_de_impulso_negro_cat_jug_02.jpg",
      rutaBaseGatosJug + "Raton_de_impulso_negro_cat_jug_03.jpg",
      rutaBaseGatosJug + "Raton_de_impulso_negro_cat_jug_01.jpg",
    ],
    descripcion:
      "Juguete mecánico que avanza rápidamente al retrocederlo. Su movimiento veloz despierta el instinto natural de persecución en gatos de todas las edades.",
    material: "Plástico ABS resistente.",
    textura: "Superficie con relieves realistas.",
    color: "Negro",
    tamaño: "10 cm de largo",
    beneficios: "Fomenta la actividad física y la agilidad.",
  },
  {
    nombre: "Ratón Con Alas",
    precio: 14000,
    imagenes: [rutaBaseGatosJug + "Raton_con_alas_cat_jug_01.jpg"],
    descripcion:
      "Adorable peluche con alas de fieltro y texturas variadas. Estimula el instinto de caceria mientras empieza a girar en circulos.",
    material: "Tela suave y fieltro.",
    textura: "Acolchada y aterciopelada.",
    color: "Rosado con detalles azules",
    tamaño: "Pequeño",
    beneficios: "Proporciona confort y reduce el aburrimiento.",
  },
  {
    nombre: "Caña de Pescar",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Cana_de_pescar_jug_cat_01.jpg"],
    descripcion:
      "Varita interactiva con cuerda elástica y juguete colgante con plumas. Permite un juego compartido que fortalece el vínculo entre dueño y mascota.",
    material: "Madera natural y plumas.",
    textura: "Mango liso y punta ligera.",
    color: "Madera clara y azul",
    tamaño: "Vara de 40 cm",
    beneficios: "Mejora los reflejos y la coordinación.",
  },
  {
    nombre: "Pelota Multi Color",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Pelota_multi_color_jug_cat_01.jpg"],
    descripcion:
      "Pelota tipo nudo fabricada con tiras de colores entrelazadas. Su forma irregular provoca rebotes divertidos que mantienen al gato alerta.",
    material: "Goma flexible.",
    textura: "Entramado de tiras.",
    color: "Multicolor",
    tamaño: "5 cm de diámetro",
    beneficios: "Fácil de atrapar y transportar con la boca.",
  },
  {
    nombre: "Juguete Hierba Gatera",
    precio: 30000,
    imagenes: [rutaBaseGatosJug + "Juguete_hierba_gatera_01.jpg"],
    descripcion:
      "Estructura artesanal de madera con una esfera de catnip prensado en su interior. Despierta el interés sensorial y promueve el juego prolongado.",
    material: "Madera natural y catnip.",
    textura: "Rústica y sólida.",
    color: "Madera natural",
    tamaño: "Estándar",
    beneficios: "Estimulación cognitiva y bienestar emocional.",
  },
  {
    nombre: "Ratón Boxeador",
    precio: 10500,
    imagenes: [
      rutaBaseGatosJug + "Raton_boxeador_jug_cat_01.jpg",
      rutaBaseGatosJug + "Raton_boxeador_jug_cat_02.jpg",
      rutaBaseGatosJug + "Raton_boxeador_jug_cat_03.jpg",
    ],
    descripcion:
      "Ratón de peluche montado sobre una base esférica pesada. Su diseño le permite tambalearse y rebotar ante cada zarpazo sin caerse.",
    material: "Tela suave y base plástica.",
    textura: "Peluda con base lisa.",
    color: "Blanco, Rosado y Verde",
    tamaño: "Mediano",
    beneficios: "Fomenta la coordinación motriz y el juego solitario.",
  },
  {
    nombre: "Juguete Bola Raton",
    precio: 6000,
    imagenes: [rutaBaseGatosJug + "Juguete_bola_raton_01_jug_cat.jpg"],
    descripcion:
      "Divertida esfera de rejilla metálica que contiene un pequeño ratón en su interior. El sonido y movimiento incitan a la persecución constante.",
    material: "Metal ligero y tela.",
    textura: "Rejilla rígida.",
    color: "Amarillo y Rojo",
    tamaño: "Pequeño",
    beneficios: "Mantiene al gato activo y alerta.",
  },
  {
    nombre: "Ratones por tres",
    precio: 7200,
    imagenes: [
      rutaBaseGatosJug + "Ratones_por_tres_02_jug_cat.jpg",
      rutaBaseGatosJug + "Ratones_por_tres_01_jug_cat.jpg",
    ],
    descripcion:
      "Trío de ratones clásicos de felpa con colas largas. Ideales para que tu mascota los cace, muerda y traslade por toda la casa.",
    material: "Fieltro y relleno blando.",
    textura: "Suave y fácil de morder.",
    color: "Gris, Café y Blanco",
    tamaño: "Mini",
    beneficios: "Satisface el instinto de caza de forma segura.",
  },

  {
    nombre: "Catnip Aguacate",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "aguacate_jug_cat_01.jpg"],
    descripcion:
      "Juguete con bola de catnip giratoria. Se adhiere a superficies planas para que tu gato lama y juegue mientras se relaja con su esencia natural.",
    material: "Plástico ABS y catnip natural.",
    textura: "Lisa con centro rugoso.",
    color: "Verde y Amarillo",
    tamaño: "6 cm de diámetro",
    beneficios: "Alivia el estrés y ayuda a la limpieza dental.",
  },
  {
    nombre: "Caña Flores",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Caña_flores_cat_jug_01.jpg"],
    descripcion:
      "Vara flexible con flores de tela y plumas. Ideal para estimular el instinto de caza mediante juegos de persecución y saltos acrobáticos.",
    material: "Madera, tela y plumas.",
    textura: "Suave y plumosa.",
    color: "Morado, Blanco y Rosado",
    tamaño: "Vara de 45 cm",
    beneficios: "Fomenta el ejercicio y mejora los reflejos.",
  },
  {
    nombre: "Ratones Colores por tres",
    precio: 7200,
    imagenes: [rutaBaseGatosJug + "Paquete_raton_x3_cat_jug_01.jpg"],
    descripcion:
      "Trío de ratones en colores neón con colas plumosas. Su peso ligero permite que el gato los lance y capture fácilmente por toda la casa.",
    material: "Peluche y plumas sintéticas.",
    textura: "Esponjosa.",
    color: "Verde, Fucsia y Blanco",
    tamaño: "Mini",
    beneficios: "Perfecto para el juego independiente y activo.",
  },
  {
    nombre: "Caña Libelula",
    precio: 9400,
    imagenes: [
      rutaBaseGatosJug + "Caña_libelula_jug_cat_01.jpg",
      rutaBaseGatosJug + "Caña_libelula_jug_cat_02.jpg",
    ],
    descripcion:
      "Caña interactiva con una libélula de alas iridiscentes. Los reflejos de luz captan la atención de tu felino para horas de diversión visual.",
    material: "Plástico y material reflectante.",
    textura: "Rígida y brillante.",
    color: "Verde, Naranja y Azul",
    tamaño: "Vara de 40 cm",
    beneficios: "Estimulación visual y agilidad mental.",
  },
  {
    nombre: "Caña Pluma",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Caña_pluma_cat_jug_02.jpg"],
    descripcion:
      "Vara flexible para juegos de persecución. Su pluma ligera imita el vuelo de una presa, manteniendo a tu gato activo y alerta.",
    material: "Plástico y plumas naturales.",
    textura: "Vara lisa con punta plumosa.",
    color: "Rosa Neón y Morado",
    tamaño: "Vara de 45 cm",
    beneficios: "Fomenta el ejercicio y los reflejos.",
  },
  {
    nombre: "Juguete con Catnip",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Catnip_gato_jug_01.jpg"],
    descripcion:
      "Base adhesiva con forma de gato y esfera de catnip natural. Estimula el sentido del gusto y olfato de forma divertida.",
    material: "Plástico ABS y Catnip.",
    textura: "Suave al tacto con esfera rugosa.",
    color: "Rosa Pastel",
    tamaño: "Estándar",
    beneficios: "Relajación y limpieza dental natural.",
  },
  {
    nombre: "Peluche con Catnip",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "Peluche_con_catnip_cat_jug_01.jpg"],
    descripcion:
      "Juguete de felpa suave relleno de hierba gatera. Perfecto para morder, patear y llevar a todas partes como compañero.",
    material: "Felpa y algodón.",
    textura: "Acolchada y muy suave.",
    color: "Azul y Blanco",
    tamaño: "Pequeño",
    beneficios: "Reduce la ansiedad y el estrés.",
  },
  {
    nombre: "Catnip Puercoespin",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Catnip_cuerpoespin_dosenuno_cat_jug_01.jpg"],
    descripcion:
      "Original dispensador con bola de catnip protegida. Sus relieves permiten que el gato se frote y masajee sus encías.",
    material: "Silicona suave y Catnip.",
    textura: "Relieves de goma para masaje.",
    color: "Verde Menta",
    tamaño: "6 cm de largo",
    beneficios: "Masaje facial y estimulación sensorial.",
  },
  {
    nombre: "Catnip Vaquita",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Catnip_mariquita_cat_jug_01.jpg"],
    descripcion:
      "Juguete interactivo adhesivo con forma de mariquita. Contiene una bola giratoria de catnip 100% puro para atraer y entretener a tu gato.",
    material: "Plástico ABS de grado alimenticio y Catnip natural.",
    textura: "Lisa con centro orgánico.",
    color: "Rojo con puntos negros y base amarilla.",
    tamaño: "6 cm de diámetro",
    beneficios: "Relajación, alivio de estrés y estimulación sensorial.",
  },
  {
    nombre: "Catnip Queso",
    precio: 12000,
    imagenes: [rutaBaseGatosJug + "queso_amarillo_jug_cat_01.jpg"],
    descripcion:
      "Juguete adhesivo con diseño divertido de queso y ratón. Sus relieves y orificios permiten que el gato acceda al catnip mientras masajea su cara.",
    material: "Silicona suave no tóxica y Catnip premium.",
    textura: "Flexible con relieves de fricción.",
    color: "Amarillo brillante con detalles grises.",
    tamaño: "7 cm de largo",
    beneficios: "Masaje facial, reducción de ansiedad y fácil limpieza dental.",
  },
  {
    nombre: "Ratón Catnip Más Pelota",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Juguete_catnip_mas_pelota_cat_jug_01.jpg"],
    descripcion:
      "Dúo dinámico para gato. Incluye un ratón de felpa relleno de catnip con pluma y una pelota translúcida con figura interna para persecución.",
    material: "Tela sintética, plástico, plumas sintéticas y Catnip.",
    textura: "Suave (ratón) y lisa (pelota).",
    color: "Gris/Amarillo (ratón) y Azul (pelota).",
    tamaño: "Estándar",
    beneficios: "Variedad de estímulos visuales, táctiles y olfativos.",
  },
  {
    nombre: "Juguete Con Resorte",
    precio: 20000,
    imagenes: [rutaBaseGatosJug + "Juguete_resorte_gato_cat_jug_01.jpg"],
    descripcion:
      "Plataforma de felpa acolchada con un resorte flexible y un juguete colgante. Diseñado para incentivar saltos, mordidas y juego activo continuo.",
    material: "Madera (base), metal y tela de peluche.",
    textura: "Suave acolchada con metal flexible.",
    color: "Rojo con estampado de huellas blancas.",
    tamaño: "Base de 15x15 cm / Alto 20 cm",
    beneficios: "Mejora agilidad, coordinación y mantiene al gato activo.",
  },

  {
    nombre: "Paquete Juguete Gato x 3",
    precio: 10000,
    imagenes: [rutaBaseGatosJug + "Paquete_juguete_x3_cat_jug_01.jpg"],
    descripcion:
      "Kit variado para entretenimiento felino. Incluye un ratón de felpa, una pelota de cascabel y una pelota tejida para diferentes estímulos.",
    material: "Peluche, plástico, metal (cascabel) y sisal.",
    textura: "Suave, lisa y rugosa.",
    color: "Multicolor (como en la imagen)",
    tamaño: "Pequeño",
    beneficios: "Fomenta la actividad física, la caza y el juego.",
  },
];

// Listado de accesorios para gatos
const accesoriosGatos = [
  {
    nombre: "Gimnasio Cosmo",
    precio: 300000,
    imagenes: [
      rutaBaseGatosAcc + "Modelo_gimnasio_Cosmo_acc_cat_02.jpeg",
      rutaBaseGatosAcc + "Modelo_gimnasio_Cosmo_acc_cat_01.jpeg",
    ],
    descripcion:
      "Estructura multinivel compacta con cueva superior y hamaca inferior. Ideal para espacios reducidos, proporcionando descanso y zona de rascado.",
    material: "Madera, tela de peluche y cuerda de fique.",
    textura: "Suave y resistente al rascado.",
    color: "Gris y Negro",
    tamaño: "Diseño compacto para apartamentos.",
    beneficios: "Reduce el estrés y protege tus muebles.",
  },
  {
    nombre: "Comedero Alto",
    precio: 14000,
    imagenes: [rutaBaseGatosAcc + "Comedero_alto_acc_cat__01.jpg"],
    descripcion:
      "Plato elevado con diseño ergonómico en forma de gato. Facilita la alimentación al reducir la tensión en el cuello de tu mascota.",
    material: "Plástico de alta densidad no tóxico.",
    textura: "Lisa de fácil lavado.",
    color: "Verde Lima y Amarillo",
    tamaño: "Estándar",
    beneficios: "Mejora la digestión y la postura al comer.",
  },
  {
    nombre: "Arenera Morada",
    precio: 37000,
    imagenes: [rutaBaseGatosAcc + "Arenera_morada_cat_acc_01.jpg"],
    descripcion:
      "Bandeja sanitaria amplia con bordes elevados para evitar la salida de arena. Incluye pala recolectora con diseño temático.",
    material: "Polipropileno resistente.",
    textura: "Rígida.",
    color: "Morado Vibrante",
    tamaño: "Grande",
    beneficios: "Higiene facilitada y mayor comodidad para el gato.",
  },
  {
    nombre: "Gimnasio Imalaya",
    precio: 300000,
    imagenes: [
      rutaBaseGatosAcc + "Modelo_gimnasio_imalaya_acc_cat_01.jpeg",
      rutaBaseGatosAcc + "Modelo_gimnasio_imalaya_acc_cat_02.jpeg",
    ],
    descripcion:
      "Centro de actividades de gran altura con múltiples niveles, dos cuevas de descanso y postes rascadores reforzados.",
    material: "Madera, alfombra y fibras naturales.",
    textura: "Acolchada con zonas rugosas.",
    color: "Azul Oscuro y Beige",
    tamaño: "72 cm x 41 cm x 1.55 m",
    beneficios: "Fomenta la escalada y el ejercicio en gatos activos.",
  },
  {
    nombre: "Arenera Gris",
    precio: 25000,
    imagenes: [rutaBaseGatosAcc + "Arenera_gris_cat_acc_01.jpg"],
    descripcion:
      "Bandeja sanitaria de diseño abierto y bordes redondeados. Su estructura facilita la limpieza diaria y proporciona un espacio cómodo para gatos de diversos tamaños.",
    material: "Plástico de alta resistencia.",
    textura: "Lisa y fácil de desinfectar.",
    color: "Gris neutro con borde decorativo de huellas.",
    tamaño: "Grande",
    beneficios:
      "Durabilidad, facilidad de uso y control de esparcimiento de arena.",
  },
  {
    nombre: "Palas Cara de Gato",
    precio: 5000,
    imagenes: [rutaBaseGatosAcc + "Palas_cara_gato_cat_acc__01.jpg"],
    descripcion:
      "Palas recolectoras con un toque divertido. Cuentan con ranuras precisas para tamizar la arena de forma eficiente, ahorrando tiempo y producto.",
    material: "Plástico rígido duradero.",
    textura: "Lisa.",
    color: "Rojo y Morado",
    tamaño: "Estándar con mango ergonómico.",
    beneficios: "Limpieza rápida y diseño ergonómico para un mejor agarre.",
  },
  {
    nombre: "Palas Jarra",
    precio: 8000,
    imagenes: [rutaBaseGatosAcc + "Palas_jarra_cat_acc_01.jpg"],
    descripcion:
      "Innovadora pala con diseño de jarra integrada. Permite recoger los desechos y verter arena nueva de manera más controlada y sin derrames.",
    material: "Polímero de alta calidad.",
    textura: "Suave al tacto.",
    color: "Rojo y Verde neón",
    tamaño: "Compacto",
    beneficios: "Versatilidad 2 en 1 y optimización de la higiene en el hogar.",
  },
];
const productosDosEspeciesJug = [
  {
    nombre: "Juguete Interactivo",
    precio: 22000,
    imagenes: [
      rutaBaseGatosPerrosJug + "Juguete_interactivo_jug_cat_dog_01.jpg",
    ],
    descripcion:
      "Juguete con movimiento aleatorio que simula el desplazamiento de una presa. Su cuerpo articulado y colores vibrantes despiertan el instinto de caza en perros pequeños y gatos.",
    material: "Plástico ABS de alta resistencia.",
    textura: "Segmentada y lisa.",
    color: "Rojo con detalles negros.",
    tamaño: "Largo extendido de 40 cm.",
    beneficios: "Estimulación mental y ejercicio físico autónomo.",
  },
  {
    nombre: "Bola Electrica",
    precio: 22000,
    imagenes: [
      rutaBaseGatosPerrosJug + "Bola_electrica_jug_cat_y_dog_01.jpg",
      rutaBaseGatosPerrosJug + "Bola_electrica_jug_cat_y_dog_02.jpg",
    ],
    descripcion:
      "Pelota inteligente con rotación automática de 360 grados. Cambia de dirección al detectar obstáculos, manteniendo la atención de la mascota por más tiempo.",
    material: "Silicona suave y componentes electrónicos.",
    textura: "Rugosa para mejor agarre y limpieza dental leve.",
    color: "Rosa Pastel.",
    tamaño: "4.3 cm de diámetro (ideal para gatos y perros miniatura).",
    beneficios: "Evita el sedentarismo y reduce la ansiedad por separación.",
  },
  {
    nombre: "Pescado Electrico",
    precio: 25000,
    imagenes: [
      rutaBaseGatosPerrosJug + "Pescado_electrico_naranja_01_jug_cat.jpg",
    ],
    descripcion:
      "Juguete realista con sensor de movimiento que activa un aleteo constante al ser tocado. Incluye un motor recargable vía USB.",
    material: "Tela de felpa suave y algodón de polipropileno.",
    textura: "Blanda y acolchada.",
    color: "Naranja y Blanco (Simulación de Nemo).",
    tamaño: "28 cm de largo.",
    beneficios: "Proporciona una experiencia de caza realista y reconfortante.",
  },
  {
    nombre: "Carro Control Remoto",
    precio: 45000,
    imagenes: [
      rutaBaseGatosPerrosJug + "Carro_control_remoto_jug_cat_dog_01.jpg",
      rutaBaseGatosPerrosJug + "Carro_control_remoto_jug_cat_dog_02.jpg",
    ],
    descripcion:
      "Vehículo acrobático diseñado para juegos de persecución a alta velocidad. Su estructura reforzada resiste impactos y vuelcos durante la sesión de juego.",
    material: "Plástico reforzado y caucho en ruedas.",
    textura: "Rígida con neumáticos de alta tracción.",
    color: "Blanco y Azul con luces LED.",
    tamaño: "Compacto.",
    beneficios: "Fomenta el vínculo dueño-mascota a través del juego activo.",
  },
];
const productosDosEspeciesAcc = [
  {
    nombre: "Collar Reflectivo",
    precio: 5000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Collar_reflectivo_rojo_acc_cat_dog_01.jpg",
      rutaBaseGatosPerrosAcc + "Collar_reflectivo_negro_acc_cat_dog_01.jpg",
    ],
    descripcion:
      "Collar de seguridad con banda reflectiva de alta visibilidad para paseos nocturnos. Incluye broche de liberación rápida y cascabel opcional.",
    material: "Nylon con cinta reflectiva.",
    textura: "Tejido firme y suave.",
    color: "Rojo / Negro",
    tamaño: "Ajustable para gatos y perros pequeños.",
    beneficios: "Aumenta la seguridad en la oscuridad y es muy ligero.",
  },
  {
    nombre: "Comedero Acero Inoxidable",
    precio: 13000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Comedero_acero_inoxidable_acc_dog_01.jpg",
      rutaBaseGatosPerrosAcc + "Comedero_acero_inoxidable_acc_dog_02.jpg",
    ],
    descripcion:
      "Tazón clásico de acero inoxidable, resistente a la corrosión y libre de bacterias. Base estable para evitar que se deslice mientras tu mascota come.",
    material: "Acero inoxidable pulido.",
    textura: "Lisa de fácil limpieza.",
    color: "Plateado",
    tamaño: "Estándar",
    beneficios: "Máxima higiene y durabilidad de por vida.",
  },
  {
    nombre: "Collar Camuflado",
    precio: 8000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Collar_tono_camuflado_dog_cat.jpg",
      rutaBaseGatosPerrosAcc + "Collar_tono_degradado_acc_dog_cat.jpg",
    ],
    descripcion:
      "Collar con diseño militar moderno. Fabricado con materiales resistentes para aguantar el ritmo de las mascotas más aventureras.",
    material: "Nylon reforzado.",
    textura: "Cinta tejida resistente.",
    color: "Verde Camuflaje",
    tamaño: "Ajustable",
    beneficios: "Resistente a tirones y con estilo aventurero.",
  },
  {
    nombre: "Collar Degradado",
    precio: 8000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Collar_tono_degradado_acc_dog_cat.jpg",
    ],
    descripcion:
      "Collar con acabado en degradado de colores vibrantes. Una opción única y estética para que tu mascota destaque en el parque.",
    material: "Poliéster suave de alta densidad.",
    textura: "Sedosa al tacto.",
    color: "Multicolor degradado",
    tamaño: "Ajustable",
    beneficios: "Diseño exclusivo y suavidad para el cuello de la mascota.",
  },
  {
    nombre: "Cama Eco Granade",
    precio: 60000,
    imagenes: [rutaBaseGatosPerrosAcc + "Cama_Eco_62cm_acc_dog_cat.jpg"],
    descripcion:
      "Cama ecológica de amplio espacio, diseñada para brindar un descanso profundo. Su base acolchada se adapta a la forma de la mascota para mayor confort.",
    material:
      "Textil reciclado de alta resistencia y relleno de fibra siliconada.",
    textura: "Suave y térmica.",
    color: "Gris con detalles oscuros",
    tamaño: "62 cm",
    beneficios: "Sostenible, fácil de lavar y ultra cómoda.",
  },

  {
    nombre: "Guacal Grande",
    precio: 45000,
    imagenes: [
      rutaBaseGatosPerrosAcc +
        "Guacal_Grande_de_45largo_33ancho_30alto_acc_dog_cat_01.jpg",
      rutaBaseGatosPerrosAcc +
        "Guacal_Grande_de_45largo_33ancho_30alto_acc_dog_cat_02.jpg",
    ],
    descripcion:
      "Transportador espacioso y seguro para viajes largos o visitas al veterinario. Cuenta con rejillas de ventilación óptimas en los laterales.",
    material: "Plástico rígido de alta densidad.",
    textura: "Rígida.",
    color: "Azul y Gris",
    tamaño: "45 cm largo x 33 cm ancho x 30 cm alto",
    beneficios: "Seguridad garantizada y excelente flujo de aire.",
  },
  {
    nombre: "Guacal Mediano",
    precio: 45000,
    imagenes: [
      rutaBaseGatosPerrosAcc +
        "Guacal_Mediano_de_35largo_28ancho_30alto_acc_dog_cat_01.jpg",
      rutaBaseGatosPerrosAcc +
        "Guacal_Mediano_de_35largo_28ancho_30alto_acc_dog_cat_02.jpg",
    ],
    descripcion:
      "Guacal de tamaño intermedio ideal para gatos adultos o perros de raza pequeña. Estructura robusta con cierre de seguridad frontal.",
    material: "Polímero resistente.",
    textura: "Rígida.",
    color: "Verde y Gris",
    tamaño: "35 cm largo x 28 cm ancho x 30 cm alto",
    beneficios: "Ligero de transportar y fácil de armar.",
  },
  {
    nombre: "Guacal Pequeño",
    precio: 30000,
    imagenes: [
      rutaBaseGatosPerrosAcc +
        "Guacal_Pequeno_de_36largo_25ancho_24alto_acc_dog_cat_03.jpg",
      rutaBaseGatosPerrosAcc +
        "Guacal_Pequeno_de_36largo_25ancho_24alto_acc_dog_cat_02.jpg",
      rutaBaseGatosPerrosAcc +
        "Guacal_Pequeno_de_36largo_25ancho_24alto_acc_dog_cat_01.jpg",
      rutaBaseGatosPerrosAcc +
        "Guacal_Pequeno_de_36largo_25ancho_24alto_acc_dog_cat_04.jpg",
    ],
    descripcion:
      "Transportador compacto perfecto para cachorros o gatitos jóvenes. Diseño ergonómico para un traslado manual cómodo.",
    material: "Plástico resistente no tóxico.",
    textura: "Rígida.",
    color: "Rojo / Azul / Verde",
    tamaño: "36 cm largo x 25 cm ancho x 24 cm alto",
    beneficios: "Ideal para trayectos cortos y fácil de guardar.",
  },
  {
    nombre: "Pala Gramera",
    precio: 36000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Pala_Gramera_01_acc_dod_cat.jpg",
      rutaBaseGatosPerrosAcc + "Pala_Gramera_02_acc_dod_cat.jpg",
    ],
    descripcion:
      "Herramienta de precisión para medir la ración exacta de alimento. Incluye báscula digital integrada en el mango.",
    material: "Plástico ABS de grado alimenticio.",
    textura: "Lisa con pantalla digital.",
    color: "Blanco",
    tamaño: "Estándar",
    beneficios: "Evita el sobrepeso controlando las porciones exactas.",
  },
  {
    nombre: "Comedero Metalico Estampado",
    precio: 19000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Comedero_metalico_estampado_22cm_01.jpg",
      rutaBaseGatosPerrosAcc + "Comedero_metalico_estampado_22cm_03.jpg",
    ],
    descripcion:
      "Plato de acero con decoraciones laterales. Combina la resistencia del metal con un diseño estético para el hogar.",
    material: "Acero inoxidable con recubrimiento externo.",
    textura: "Lisa.",
    color: "Estampado variado",
    tamaño: "22 cm de diámetro",
    beneficios: "Antioxidante y base con mayor estabilidad.",
  },
  {
    nombre: "Pistola Para Pildoras",
    precio: 9500,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Pistola_para_pildoras_acc_cat_dog_01.jpg",
    ],
    descripcion:
      "Dispositivo práctico para suministrar medicamentos orales sin lastimar a la mascota ni arriesgar tus dedos.",
    material: "Plástico y punta de silicona suave.",
    textura: "Lisa y flexible en la punta.",
    color: "Verde / Azul",
    tamaño: "15 cm",
    beneficios: "Facilita la medicación y reduce el estrés del animal.",
  },
  {
    nombre: "Cepillo Para Baño Dispensador Shampoo",
    precio: 12000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Cepillo_para_baño_dispensador_shampoo_01.jpg",
    ],
    descripcion:
      "Cepillo de silicona que almacena shampoo en su interior y lo libera mientras masajeas a tu mascota durante el baño.",
    material: "Silicona suave de grado médico.",
    textura: "Cerdas de goma flexibles.",
    color: "Amarillo / Azul / Rosa",
    tamaño: "Estándar",
    beneficios: "Limpieza profunda y ahorro de shampoo.",
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
    descripcion:
      "Carda retráctil profesional. Con solo presionar el botón, el pelo acumulado se desprende automáticamente del cepillo.",
    material: "Plástico y cerdas de acero inoxidable.",
    textura: "Cerdas finas con puntas protegidas.",
    color: "Gris / Azul",
    tamaño: "Grande",
    beneficios: "Elimina nudos y pelo muerto sin esfuerzo.",
  },
  {
    nombre: "Cepillo Vapor",
    precio: 23000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Cepillo_Vapor_acc_dog_y_cat_02.jpg",
      rutaBaseGatosPerrosAcc + "Cepillo_Vapor_acc_dog_y_cat_01.jpg",
      rutaBaseGatosPerrosAcc + "Cepillo_Vapor_acc_dog_y_cat_03.jpg",
    ],
    video:
      "./videos_tienda/Videos_accesorios_perros_y_gatos/Cepillo_Vapor_video_01.mp4",
    descripcion:
      "Innovador cepillo 3 en 1 que utiliza vapor de agua para desinfectar, limpiar y peinar el pelaje de forma suave.",
    material: "Plástico y silicona.",
    textura: "Cerdas de silicona con salida de vapor.",
    color: "Amarillo / Verde",
    tamaño: "Compacto",
    beneficios: "Elimina olores y deja el pelaje brillante.",
  },
  {
    nombre: "Bolsas Biodegradable por Seis",
    precio: 13500,
    imagenes: [
      rutaBaseGatosPerrosAcc +
        "Bolsas_repuesto_paquete_dog_y_dat_x6_acc_01.jpg",
    ],
    descripcion:
      "Paquete de repuesto de bolsas para recolección de desechos. Amigables con el medio ambiente.",
    material: "Plástico biodegradable.",
    textura: "Delgada y resistente.",
    color: "Verde / Negro",
    tamaño: "6 rollos",
    beneficios: "Resistentes a goteos y eco-amigables.",
  },
  {
    nombre: "Comederos Flor",
    precio: 13000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Comedero_flor_dog_y_cat_acc_03.jpg",
      rutaBaseGatosPerrosAcc + "Comedero_flor_dog_y_cat_acc_01.jpg",
      rutaBaseGatosPerrosAcc + "Comedero_flor_dog_y_cat_acc_02.jpg",
    ],
    descripcion:
      "Plato con diseño de flor que permite colocar agua o alimento en compartimentos separados.",
    material: "Plástico de alta resistencia.",
    textura: "Lisa.",
    color: "Azul / Rosa / Verde",
    tamaño: "Pequeño",
    beneficios: "Diseño divertido y fácil de lavar.",
  },
  {
    nombre: "Bolsas Biodegradable por Tres",
    precio: 7000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Bolsas_repuesto_x3_acc_dog_y_dat_01.jpg",
    ],
    descripcion:
      "Paquete compacto de bolsas para desechos. Ideal para llevar en el dispensador de paseo.",
    material: "Plástico biodegradable.",
    textura: "Resistente.",
    color: "Verde",
    tamaño: "3 rollos",
    beneficios: "Prácticas para el uso diario.",
  },
  {
    nombre: "Vaso medidor de alimentos",
    precio: 3000,
    imagenes: [
      rutaBaseGatosPerrosAcc + "Vaso_medidor_de_alimentos_acc_dog_01.jpg",
      rutaBaseGatosPerrosAcc + "Vaso_medidor_de_alimentos_acc_dog_02.jpg",
    ],
    descripcion:
      "Vaso graduado para servir la cantidad justa de concentrado. Ayuda a mantener la dieta balanceada de tu mascota.",
    material: "Plástico transparente.",
    textura: "Rígida con marcas de medición.",
    color: "Transparente",
    tamaño: "250 ml",
    beneficios: "Precisión en la alimentación y bajo costo.",
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
  ...productosDosEspeciesJug,
  ...productosDosEspeciesAcc,
];
