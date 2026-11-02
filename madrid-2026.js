/* =========================================================
   DATOS DEL VIAJE / REISGEGEVENS
   Cada texto puede ir en los dos idiomas: { nl: "...", es: "..." }
   Elk tekstveld kan in twee talen: { nl: "...", es: "..." }
   - Fechas / data: AAAA-MM-DD
   - tipo: encuentro, bus, tren, metro, taxi, visita, compras,
           comida, actividad, libre, hotel, vuelta
   ========================================================= */
const WM = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";

window.VIAJE = {
  ejemplo: false,

  titulo:    { nl: "Madrid in kerstsfeer", es: "Madrid en Navidad" },
  subtitulo: { nl: "Ledenreis · Calpe – Madrid", es: "Viaje de socios · Calpe – Madrid" },
  destino: "Madrid",
  inicio: "2026-11-23",
  fin: "2026-11-25",
  portada: WM + "5/58/Palacio_de_Comunicaciones_-_46.jpg/1280px-Palacio_de_Comunicaciones_-_46.jpg",

  encuentro: {
    lugar: { nl: "Calpe, vertrek naar het station van Alicante", es: "Calpe, salida hacia la estación de Alicante" },
    hora: "07:40",
    nota:  { nl: "Trein naar Madrid om 09:40 vanuit Alicante.", es: "Tren a Madrid a las 09:40 desde Alicante." }
  },
  regreso: { nl: "Woensdag 25 · trein terug om 16:00 vanuit Madrid-Chamartín", es: "Miércoles 25 · tren de vuelta a las 16:00 desde Madrid-Chamartín" },
  organiza: "Amistades Belgas de Levante",
  contacto: "",
  precio: "",

  llevar: [
    { nl: "Identiteitskaart en treinkaartjes", es: "DNI y billetes de tren" },
    { nl: "Jas en sjaal: 's avonds is het koud in Madrid", es: "Abrigo y bufanda: en Madrid hace frío por la noche" },
    { nl: "Comfortabele schoenen om te wandelen", es: "Calzado cómodo para pasear" },
    { nl: "Bankkaart of wat cash voor aankopen", es: "Tarjeta o algo de efectivo para compras" },
    { nl: "Persoonlijke medicatie", es: "Medicación personal" }
  ],

  alojamiento: {
    nombre: "Hotel Puerta de Toledo",
    zona: { nl: "Glorieta de Puerta de Toledo · metro Puerta de Toledo (lijn 5)", es: "Glorieta de Puerta de Toledo · metro Puerta de Toledo (L5)" },
    nota: { nl: "Twee nachten, van maandag 23 tot woensdag 25.", es: "Dos noches, del lunes 23 al miércoles 25." }
  },

  dias: [
    {
      fecha: "2026-11-23",
      titulo:  { nl: "Aankomst en kerstverlichting", es: "Llegada y luces de Navidad" },
      resumen: { nl: "Trein naar Madrid, welkom in het hotel en een tuktukrit langs de kerstverlichting.", es: "Tren a Madrid, bienvenida en el hotel y paseo en tuc-tuc por la iluminación navideña." },
      foto: "https://upload.wikimedia.org/wikipedia/commons/0/09/Fuente_de_Neptuno_%28Madrid%29_06.jpg",
      actividades: [
        { hora: "07:40", tipo: "encuentro", titulo: { nl: "Vertrek uit Calpe naar Alicante", es: "Salida desde Calpe hacia Alicante" } },
        { hora: "08:30", tipo: "comida", titulo: { nl: "Aankomst in het station van Alicante en ontbijt", es: "Llegada a la estación de Alicante y desayuno" } },
        { hora: "09:40", tipo: "tren", titulo: { nl: "Vertrek van de trein naar Madrid", es: "Salida del tren a Madrid" } },
        { hora: "12:08", tipo: "taxi", titulo: { nl: "Aankomst in Madrid-Chamartín", es: "Llegada a Madrid-Chamartín" }, detalle: { nl: "Met de taxi naar het hotel", es: "Traslado en taxis al hotel" } },
        { hora: "13:00", tipo: "hotel", titulo: { nl: "Inchecken in Hotel Puerta de Toledo", es: "Check-in en el Hotel Puerta de Toledo" } },
        { hora: "13:15", tipo: "actividad", titulo: { nl: "Welkomstaperitief", es: "Aperitivo de bienvenida" } },
        { hora: "14:00", tipo: "comida", titulo: { nl: "Middagmaal in Makkila Toledo", es: "Almuerzo en Makkila Toledo" } },
        { hora: "15:15", tipo: "libre", titulo: { nl: "Vrije tijd in het hotel", es: "Tiempo libre en el hotel" } },
        { hora: "17:00", tipo: "metro", titulo: { nl: "Met de metro naar het centrum, vieruurtje bij Chocolat Madrid", es: "Metro al centro y merienda en Chocolat Madrid" } },
        { hora: "18:40", tipo: "visita", titulo: { nl: "Korte wandeling naar de Neptunusfontein", es: "Breve paseo hacia la Fuente de Neptuno" } },
        { hora: "19:00", tipo: "actividad", titulo: { nl: "Tuktukrit langs de kerstverlichting", es: "Paseo en tuc-tuc por la iluminación navideña" } },
        { hora: "20:30", tipo: "comida", titulo: { nl: "Groepsdiner in Ocafú Prado", es: "Cena del grupo en Ocafú Prado" }, detalle: { nl: "Galicische taverne", es: "Taberna gallega" } },
        { hora: "", tipo: "hotel", titulo: { nl: "Terug naar het hotel", es: "Vuelta al hotel" } }
      ]
    },
    {
      fecha: "2026-11-24",
      titulo:  { nl: "Habsburgs Madrid en de kerstmarkt", es: "Madrid de los Austrias y mercado navideño" },
      resumen: { nl: "Historische hoekjes, kloosterkoekjes, Doña Manolita, de kerstmarkt van El Corte Inglés en een wijnproeverij aan het Bernabéu.", es: "Rincones históricos, dulces de convento, Doña Manolita, mercado navideño de El Corte Inglés y cata de vino en el Bernabéu." },
      foto: WM + "c/c7/Plaza_de_la_Villa_%28Madrid%29_07.jpg/1280px-Plaza_de_la_Villa_%28Madrid%29_07.jpg",
      actividades: [
        { hora: "09:30", tipo: "metro", titulo: { nl: "Vertrek uit het hotel", es: "Salida del hotel" }, detalle: { nl: "Metro lijn 5 van Puerta de Toledo naar Ópera, of wandelen naar het Madrid van de Habsburgers", es: "Metro L5 de Puerta de Toledo a Ópera, o paseo hacia el Madrid de los Austrias" } },
        { hora: "09:45", tipo: "visita", titulo: { nl: "Plaza de la Villa en Calle del Codo", es: "Plaza de la Villa y Calle del Codo" }, detalle: { nl: "Wandeling door het middeleeuwse historische centrum", es: "Recorrido a pie por el conjunto histórico medieval" } },
        { hora: "10:15", tipo: "visita", titulo: { nl: "Klooster Corpus Christi, «Las Carboneras»", es: "Monasterio del Corpus Christi, «Las Carboneras»" }, detalle: { nl: "Kloosterkerk, en koekjes en zoetigheden kopen aan het draailuik", es: "Iglesia conventual y compra de galletas y dulces en el torno" } },
        { hora: "11:00", tipo: "compras", titulo: "La Tienda de los Deseos", detalle: { nl: "Calle de la Escalinata, 3 minuten wandelen van het klooster", es: "Calle de la Escalinata, a 3 minutos a pie del convento" } },
        { hora: "11:45", tipo: "compras", titulo: { nl: "Calle del Arenal en Doña Manolita", es: "Calle del Arenal y Doña Manolita" }, detalle: { nl: "Stop bij Turrones Vicens en loterij bij Doña Manolita (calle del Carmen)", es: "Parada en Turrones Vicens y lotería en Doña Manolita (calle del Carmen)" } },
        { hora: "13:00", tipo: "metro", titulo: { nl: "Met de metro naar het middagmaal", es: "Metro hacia el almuerzo" }, detalle: { nl: "Lijn 2 van Sol of Gran Vía naar San Bernardo, om niet te veel te wandelen", es: "L2 de Sol o Gran Vía a San Bernardo, para no caminar mucho" } },
        { hora: "13:30", tipo: "comida", titulo: { nl: "Canarisch middagmaal in Detenderete", es: "Almuerzo canario en Detenderete" }, detalle: "Calle de Santa Cruz de Marcenado" },
        { hora: "15:00", tipo: "libre", titulo: { nl: "Rust in het hotel", es: "Descanso en el hotel" }, detalle: { nl: "Tot 17:00", es: "Hasta las 17:00" } },
        { hora: "17:00", tipo: "metro", titulo: { nl: "Vertrek naar het noorden van de stad", es: "Salida hacia la zona norte" }, detalle: { nl: "Met de metro tot Nuevos Ministerios", es: "Metro hasta Nuevos Ministerios" } },
        { hora: "17:45", tipo: "visita", titulo: { nl: "Kerstmarkt van El Corte Inglés", es: "Mercado Navideño de El Corte Inglés" }, detalle: { nl: "Paseo de la Castellana, bij Nuevos Ministerios. Attracties, kraampjes en verlichting tot 19:15", es: "Paseo de la Castellana, junto a Nuevos Ministerios. Atracciones, casetas e iluminación hasta las 19:15" } },
        { hora: "19:15", tipo: "actividad", titulo: { nl: "Wijnproeverij voor de groep aan het Bernabéu", es: "Cata de vino para el grupo en el Bernabéu" }, detalle: { nl: "Begeleide proeverij in een gereserveerde ruimte, tot 20:30", es: "Degustación guiada en un espacio reservado, hasta las 20:30" } },
        { hora: "20:45", tipo: "comida", titulo: { nl: "Diner in Bar Mistela Chamartín", es: "Cena en Bar Mistela Chamartín" } }
      ]
    },
    {
      fecha: "2026-11-25",
      titulo:  { nl: "Lavapiés en terug naar huis", es: "Lavapiés y vuelta a casa" },
      resumen: { nl: "Mercado de San Fernando, proeverij van ambachtelijk bier, een traditioneel middagmaal en de trein terug.", es: "Mercado de San Fernando, cata de cerveza artesana, comida castiza y tren de regreso." },
      foto: WM + "8/8d/Mercado_de_San_Fernando_%28Madrid%29_02.jpg/1280px-Mercado_de_San_Fernando_%28Madrid%29_02.jpg",
      actividades: [
        { hora: "09:30", tipo: "hotel", titulo: { nl: "Uitchecken", es: "Check-out" }, detalle: { nl: "De koffers blijven aan de receptie van het hotel", es: "Las maletas se quedan en la recepción del hotel" } },
        { hora: "10:00", tipo: "visita", titulo: { nl: "Wandeling naar de Mercado de San Fernando", es: "Paseo hacia el Mercado de San Fernando" }, detalle: { nl: "In Lavapiés", es: "En Lavapiés" } },
        { hora: "11:00", tipo: "actividad", titulo: { nl: "Proeverij van ambachtelijk bier", es: "Cata de cerveza artesana" }, detalle: { nl: "In dezelfde markt, tot 12:00", es: "En el mismo mercado, hasta las 12:00" } },
        { hora: "12:00", tipo: "comida", titulo: { nl: "Middagmaal in Taberna El Madroño", es: "Almuerzo en la Taberna El Madroño" }, detalle: { nl: "Buurt van Puerta Cerrada, tot 14:00", es: "Zona de Puerta Cerrada, hasta las 14:00" } },
        { hora: "14:00", tipo: "hotel", titulo: { nl: "Koffie in het hotel en koffers ophalen", es: "Café en el hotel y recogida de maletas" } },
        { hora: "14:45", tipo: "taxi", titulo: { nl: "Taxi naar het station van Chamartín", es: "Taxi a la estación de Chamartín" } },
        { hora: "16:00", tipo: "vuelta", titulo: { nl: "Trein terug naar huis", es: "Tren de regreso a casa" } }
      ]
    }
  ],

  // Kaart / mapa: [naam, breedte, lengte]
  mapa: [
    ["Hotel Puerta de Toledo", 40.4066, -3.7114],
    [{ nl: "Neptunusfontein", es: "Fuente de Neptuno" }, 40.4154, -3.6942],
    ["Plaza de la Villa", 40.4153, -3.7101],
    ["Doña Manolita · Calle del Carmen", 40.4182, -3.7040],
    [{ nl: "Kerstmarkt · El Corte Inglés Castellana", es: "Mercado Navideño · El Corte Inglés Castellana" }, 40.4471, -3.6921],
    [{ nl: "Wijnproeverij · Bernabéu", es: "Cata de vino · Bernabéu" }, 40.4531, -3.6883],
    ["Mercado de San Fernando · Lavapiés", 40.4087, -3.7024],
    [{ nl: "Station Chamartín", es: "Estación de Chamartín" }, 40.4722, -3.6825]
  ]
};
