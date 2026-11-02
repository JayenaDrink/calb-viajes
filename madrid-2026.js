/* =========================================================
   DATOS DEL VIAJE
   Para un viaje nuevo, solo hay que cambiar este archivo.
   - Las fechas van en formato AAAA-MM-DD.
   - "foto" es opcional: la dirección (URL) de una imagen.
   - "tipo" de actividad: encuentro, bus, tren, metro, taxi,
     visita, compras, comida, actividad, libre, hotel, vuelta.
   - Si un campo no se usa, se puede dejar vacío ("").
   ========================================================= */
const WM = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";

window.VIAJE = {
  ejemplo: false,

  titulo: "Madrid en Navidad",
  subtitulo: "Viaje de socios · Calpe – Madrid",
  destino: "Madrid",
  inicio: "2026-11-23",
  fin: "2026-11-25",
  portada: WM + "5/58/Palacio_de_Comunicaciones_-_46.jpg/1280px-Palacio_de_Comunicaciones_-_46.jpg",

  encuentro: {
    lugar: "Calpe, salida hacia la estación de Alicante",
    hora: "07:40",
    nota: "Tren a Madrid a las 09:40 desde Alicante."
  },
  regreso: "Miércoles 25 · tren de vuelta a las 16:00 desde Madrid-Chamartín",
  organiza: "Amistades Belgas de Levante",
  contacto: "",
  precio: "",

  llevar: [
    "DNI y billetes de tren",
    "Abrigo y bufanda: en Madrid hace frío por la noche",
    "Calzado cómodo para pasear",
    "Tarjeta o algo de efectivo para compras",
    "Medicación personal"
  ],

  alojamiento: {
    nombre: "Hotel Puerta de Toledo",
    zona: "Glorieta de Puerta de Toledo · metro Puerta de Toledo (L5)",
    nota: "Dos noches, del lunes 23 al miércoles 25."
  },

  dias: [
    {
      fecha: "2026-11-23",
      titulo: "Llegada y luces de Navidad",
      resumen: "Tren a Madrid, bienvenida en el hotel y paseo en tuc-tuc por la iluminación navideña.",
      foto: "https://upload.wikimedia.org/wikipedia/commons/0/09/Fuente_de_Neptuno_%28Madrid%29_06.jpg",
      actividades: [
        { hora: "07:40", tipo: "encuentro", titulo: "Salida desde Calpe hacia Alicante", detalle: "" },
        { hora: "08:30", tipo: "comida", titulo: "Llegada a la estación de Alicante y desayuno", detalle: "" },
        { hora: "09:40", tipo: "tren", titulo: "Salida del tren a Madrid", detalle: "" },
        { hora: "12:08", tipo: "taxi", titulo: "Llegada a Madrid-Chamartín", detalle: "Traslado en taxis al hotel" },
        { hora: "13:00", tipo: "hotel", titulo: "Check-in en el Hotel Puerta de Toledo", detalle: "" },
        { hora: "13:15", tipo: "actividad", titulo: "Aperitivo de bienvenida", detalle: "" },
        { hora: "14:00", tipo: "comida", titulo: "Almuerzo en Makkila Toledo", detalle: "" },
        { hora: "15:15", tipo: "libre", titulo: "Tiempo libre en el hotel", detalle: "" },
        { hora: "17:00", tipo: "metro", titulo: "Metro al centro y merienda en Chocolat Madrid", detalle: "" },
        { hora: "18:40", tipo: "visita", titulo: "Breve paseo hacia la Fuente de Neptuno", detalle: "" },
        { hora: "19:00", tipo: "actividad", titulo: "Paseo en tuc-tuc por la iluminación navideña", detalle: "" },
        { hora: "20:30", tipo: "comida", titulo: "Cena del grupo en Ocafú Prado", detalle: "Taberna gallega" },
        { hora: "", tipo: "hotel", titulo: "Vuelta al hotel", detalle: "" }
      ]
    },
    {
      fecha: "2026-11-24",
      titulo: "Madrid de los Austrias y mercado navideño",
      resumen: "Rincones históricos, dulces de convento, Doña Manolita, mercado navideño del Bernabéu y cata de vino.",
      foto: WM + "c/c7/Plaza_de_la_Villa_%28Madrid%29_07.jpg/1280px-Plaza_de_la_Villa_%28Madrid%29_07.jpg",
      actividades: [
        { hora: "09:30", tipo: "metro", titulo: "Salida del hotel", detalle: "Metro L5 de Puerta de Toledo a Ópera, o paseo hacia el Madrid de los Austrias" },
        { hora: "09:45", tipo: "visita", titulo: "Plaza de la Villa y Calle del Codo", detalle: "Recorrido a pie por el conjunto histórico medieval" },
        { hora: "10:15", tipo: "visita", titulo: "Monasterio del Corpus Christi, «Las Carboneras»", detalle: "Iglesia conventual y compra de galletas y dulces en el torno" },
        { hora: "11:00", tipo: "compras", titulo: "La Tienda de los Deseos", detalle: "Calle de la Escalinata, a 3 minutos a pie del convento" },
        { hora: "11:45", tipo: "compras", titulo: "Calle del Arenal y Doña Manolita", detalle: "Parada en Turrones Vicens y lotería en Doña Manolita (calle del Carmen)" },
        { hora: "13:00", tipo: "metro", titulo: "Metro hacia el almuerzo", detalle: "L2 de Sol o Gran Vía a San Bernardo, para no caminar mucho" },
        { hora: "13:30", tipo: "comida", titulo: "Almuerzo canario en Detenderete", detalle: "Calle de Santa Cruz de Marcenado" },
        { hora: "15:00", tipo: "libre", titulo: "Descanso en el hotel", detalle: "Hasta las 17:00" },
        { hora: "17:00", tipo: "metro", titulo: "Salida hacia la zona norte", detalle: "Metro hacia Nuevos Ministerios / Bernabéu" },
        { hora: "17:45", tipo: "visita", titulo: "Mercado Navideño del Bernabéu", detalle: "Atracciones, casetas e iluminación hasta las 19:15" },
        { hora: "19:15", tipo: "actividad", titulo: "Cata de vino para el grupo", detalle: "Degustación guiada en un espacio reservado, hasta las 20:30" },
        { hora: "20:45", tipo: "comida", titulo: "Cena en Bar Mistela Chamartín", detalle: "" }
      ]
    },
    {
      fecha: "2026-11-25",
      titulo: "Lavapiés y vuelta a casa",
      resumen: "Mercado de San Fernando, cata de cerveza artesana, comida castiza y tren de regreso.",
      foto: WM + "8/8d/Mercado_de_San_Fernando_%28Madrid%29_02.jpg/1280px-Mercado_de_San_Fernando_%28Madrid%29_02.jpg",
      actividades: [
        { hora: "09:30", tipo: "hotel", titulo: "Check-out", detalle: "Las maletas se quedan en la recepción del hotel" },
        { hora: "10:00", tipo: "visita", titulo: "Paseo hacia el Mercado de San Fernando", detalle: "En Lavapiés" },
        { hora: "11:00", tipo: "actividad", titulo: "Cata de cerveza artesana", detalle: "En el mismo mercado, hasta las 12:00" },
        { hora: "12:00", tipo: "comida", titulo: "Almuerzo en la Taberna El Madroño", detalle: "Zona de Puerta Cerrada, hasta las 14:00" },
        { hora: "14:00", tipo: "hotel", titulo: "Café en el hotel y recogida de maletas", detalle: "" },
        { hora: "14:45", tipo: "taxi", titulo: "Taxi a la estación de Chamartín", detalle: "" },
        { hora: "16:00", tipo: "vuelta", titulo: "Tren de regreso a casa", detalle: "" }
      ]
    }
  ],

  // Puntos del mapa [nombre, latitud, longitud]
  mapa: [
    ["Hotel Puerta de Toledo", 40.4066, -3.7114],
    ["Fuente de Neptuno", 40.4154, -3.6942],
    ["Plaza de la Villa", 40.4153, -3.7101],
    ["Doña Manolita · Calle del Carmen", 40.4182, -3.7040],
    ["Mercado Navideño · Bernabéu", 40.4531, -3.6883],
    ["Mercado de San Fernando · Lavapiés", 40.4087, -3.7024],
    ["Estación de Chamartín", 40.4722, -3.6825]
  ]
};
