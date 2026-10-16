/**
 * Diccionario de interfaz en castellano.
 *
 * Es la fuente de verdad de la forma: `ca.ts` y `en.ts` se declaran como
 * `UiDict` (= `typeof es`), así que añadir una clave aquí obliga a traducirla
 * en los otros dos idiomas o el build falla.
 *
 * El texto admite un marcado mínimo, resuelto por <RichText>:
 *   **negrita**   y   \n para salto de línea.
 */
export const es = {
  common: {
    reserve: "Reservar",
    close: "Cerrar",
    from: "Desde",
    duration: "Duración",
    people: "Personas",
    level: "Nivel",
    whatsappAria: "Contactar por WhatsApp para descuentos exclusivos",
    levels: {
      principiante: "Principiante",
      intermedio: "Intermedio",
      avanzado: "Avanzado",
    },
    experienceTypes: {
      jornada: "Jornada",
      guiado: "Guiado",
      clase: "Clase",
      "fuera-pista": "Fuera de pista",
      grupo: "En grupo",
      especial: "Especial",
      programa: "Programa",
      online: "Online",
    },
    /** Mensajes ya redactados de los enlaces de WhatsApp. */
    waDiscounts: "DESCUENTOS EXCLUSIVOS",
    waInfo: "Hola, quiero información sobre vuestras experiencias",
    waBooking: "Hola, quiero reservar una experiencia",
  },

  nav: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuAria: "Menú",
    language: "Idioma",
    contact: "Contacto",
    address: "Baqueira Beret · Val d'Aran",
    links: {
      home: "Inicio",
      nosotros: "Nosotros",
      reservas: "Reservas",
      tarifas: "Tarifas",
      niveles: "Niveles",
      faq: "Preguntas frecuentes",
    },
  },

  hero: {
    titleLines: ["R-evoluciona", "tu forma", "de esquiar"],
    photoAlt: "Esquiador en Baqueira Beret",
    tagline: "Escuela de esquí en Baqueira Beret",
    seeExperiences: "Ver experiencias",
  },

  experiences: {
    eyebrow: "Experiencias",
    title: "Elige tu experiencia",
    lead: "Ocho formas de vivir Baqueira, todas con instructor titulado y atención personalizada",
    see: "Ver experiencia",
    prevAria: "Ver experiencias anteriores",
    nextAria: "Ver más experiencias",
  },

  expDetail: {
    quickInfo: "Información rápida",
    formatsTitle: "{n} formatos para ti",
    mostChosen: "Más elegido",
  },

  reviews: {
    eyebrow: "Reseñas verificadas",
    title: "Lo que dicen nuestros clientes",
    badge: "Google Reviews",
    starsAria: "{n} de 5 estrellas",
    phraseTitle: "Una buena clase no termina cuando te quitas los esquís.",
    phraseText: "Empieza cuando quieres volver mañana.",
    phraseLink: "Reserva tu experiencia",
    items: [
      {
        author: "Laura M.",
        text: "Experiencia increíble. Aitor tiene una paciencia y una pedagogía excepcionales. En dos días mejoré más que en los últimos tres años de esquí.",
        date: "Enero 2025",
      },
      {
        author: "Carlos R.",
        text: "El Full Day fue perfecto. Recorrimos zonas de Baqueira que jamás hubiera encontrado solo. Completamente personalizado al nivel de cada uno.",
        date: "Febrero 2025",
      },
    ],
  },

  bookingBand: {
    eyebrow: "Reservas",
    title: "Agiliza tu reserva contactando directamente",
    text: "Si quieres **agilizar tu reserva**, **consultarnos cualquier duda** o recibir una **atención más personalizada**, escríbenos: hablas directamente con nosotros, te ayudamos a elegir la experiencia que encaja con tu nivel y lo dejamos cerrado sin formularios",
    steps: [
      "Escríbenos y cuéntanos qué buscas",
      "Te proponemos experiencia, fecha y horario",
      "Cerramos la reserva y te damos el punto de encuentro",
    ],
    button: "Reservar por WhatsApp",
  },

  waPill: {
    text: "¿Te ayudamos a elegir?",
  },

  footer: {
    ctaEyebrow: "Temporada 2026 · 27",
    ctaHeading: "¿Listo para empezar?",
    experiences: "Experiencias",
    experienceLinks: {
      privadas: "Clases Privadas",
      family: "Kids & Friends & Family",
      programs: "Kaiten 2.5",
      tardeo: "Tardeo (-25%)",
      otras: "Full Day · Safari · Freeride",
      material: "Asesoramiento de material",
    },
    spotify: "Playlist Spotify",
    slopes: "Estado de las pistas",
    slopesText:
      "Consulta las cámaras de Baqueira Beret en directo antes de subir",
    slopesBtn: "Baqueira Live Cams",
    ratingAria: "Valoración 5 de 5 en Google",
    terms: "Términos y condiciones",
    privacy: "Política de privacidad",
    legal: "Aviso legal",
    cookies: "Cookies",
  },

  error: {
    title: "Algo se ha torcido",
    text: "No hemos podido cargar esta página. Puedes volver a intentarlo o escribirnos directamente: te reservamos la experiencia a mano",
    retry: "Reintentar",
    home: "Volver al inicio",
  },

  notFound: {
    documentTitle: "Página no encontrada — Kaiten",
    eyebrow: "Error 404",
    title: "Esta pista no existe",
    lead: "La página que buscas se ha movido o nunca estuvo aquí. Te dejamos los caminos más transitados",
    suggestionsAria: "Páginas sugeridas",
    suggestions: {
      reservas: "Elige experiencia, fecha y reserva online",
      tarifas: "Precios de clases privadas y experiencias especiales",
      niveles: "Encuentra tu nivel y la experiencia que le encaja",
      faq: "Punto de encuentro, material, cancelaciones",
    },
    home: "Volver al inicio",
    whatsapp: "Escríbenos por WhatsApp",
  },

  reservas: {
    eyebrow: "Reservas · Baqueira Beret",
    title: "Reserva tu experiencia",
    lead: "Elige una y te llevamos directo a fechas y horas.",
    viewAria: "Vista",
    viewCards: "Experiencias",
    viewCompare: "Comparar",
    tableAria: "Experiencias disponibles",
    colExperience: "Experiencia",
    colActions: "Acciones",
    customTitle: "¿Sois más de 6 o buscas algo a medida?",
    customText:
      "Grupos grandes, varios días o fechas especiales: escríbenos y lo preparamos contigo.",
    call: "Llámanos",
    back: "Todas las experiencias",
    detailEyebrow: "Reservar · Baqueira Beret",
    meetingTitle: "Punto de encuentro",
    meetingText:
      "Baqueira 1800, a la salida del telecabina. Te enviamos la ubicación con la confirmación.",
    passTitle: "Forfait y material",
    passText:
      "No incluidos. El forfait se compra en la estación u online; el material se alquila en Baqueira.",
    levelTitle: "Tu nivel",
    levelText:
      "Indícalo al reservar para que tu instructor prepare la sesión desde el primer minuto.",
    levelLink: "Guía de niveles",
    switch: "Cambiar de experiencia",
    whenTitle: "Elige fecha y hora",
    trustPayment: "Pago seguro online",
    trustConfirmation: "Confirmación inmediata",
    help: "¿Dudas?",
    helpLink: "Escríbenos por WhatsApp",
  },

  bookeo: {
    slow: "El calendario está tardando más de lo normal. Puedes seguir esperando — aparecerá en cuanto responda — o escribirnos y lo reservamos contigo.",
    retry: "Reintentar",
    bookWhatsapp: "Reservar por WhatsApp",
    failedBefore: "No hemos podido cargar el sistema de reservas.",
    failedOr: "o",
    failedLink: "escríbenos por WhatsApp",
    failedAfter: "y lo gestionamos contigo.",
  },

  tarifas: {
    eyebrow: "Baqueira Beret",
    title: "Tarifas",
    includes:
      "Todas las experiencias incluyen: Instructor titulado · Atención personalizada",
    colExperience: "Experiencia",
    colPrice: "Tarifa por persona",
    colExtra: "Extra / persona",
    note: "*Consultar para grupos de más personas",
  },

  niveles: {
    eyebrow: "Referencia en Baqueira Beret",
    title: "Niveles",
    colDescription: "Descripción",
    colReference: "Referencia en Baqueira",
    colLevel: "Nivel",
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Todo lo que necesitas saber",
    leadBefore: "¿Tienes alguna duda más? Escríbenos por",
    leadMiddle: "o llámanos al",
    copyLinkAria: "Copiar enlace a: {q}",
    copyLink: "Copiar enlace",
    copied: "Enlace copiado",
    copiedShort: "Copiado",
    mapAlt:
      "Salida del telecabina TC. Baqueira, con una flecha amarilla señalando el punto de encuentro",
    mapText: "Te esperamos justo donde marca la flecha, a pie de telecabina",
    mapBtn: "Abrir en Google Maps",
    ctaText: "¿Listo para reservar?",
    ctaBtn: "Ver todas las experiencias",
    items: {
      "punto-de-encuentro": {
        q: "¿Dónde es el punto de encuentro?",
        a: [
          "El punto de encuentro es en Baqueira 1800, justo a la salida del telecabina.",
        ],
      },
      "forfait-y-material": {
        q: "¿El forfait y el material están incluidos?",
        a: [
          "No están incluidos en el precio de la clase.",
          "El forfait deberás adquirirlo por tu cuenta en la propia estación o de forma online.",
          "El material de esquí (esquís, botas, casco) se puede alquilar en cualquier tienda de Baqueira. Si necesitas recomendaciones, podemos orientarte.",
        ],
      },
      "mal-tiempo": {
        q: "¿Qué pasa si hace mal tiempo o las condiciones de nieve son malas?",
        a: [
          "La seguridad es siempre nuestra prioridad. Si las condiciones de nieve, viento o visibilidad son peligrosas, la experiencia se reprograma o cancela sin coste.",
          "Te avisaremos con la mayor antelación posible. En caso de duda, consulta con nosotros el día anterior.",
        ],
      },
      cancelacion: {
        q: "¿Cuál es la política de cancelación y reembolso?",
        a: [
          "Cancelación con más de 7 días de antelación: reembolso completo.",
          "Cancelación con menos de 24h: sin reembolso (salvo causa de fuerza mayor o mal tiempo declarado por la estación).",
          "Cancelación por nuestra parte (fuerza mayor, enfermedad): reembolso completo o reprogramación.",
        ],
      },
      seguro: {
        q: "¿Qué seguro incluye la experiencia?",
        a: [
          "Todas las experiencias incluyen seguro de Responsabilidad Civil (RC) del instructor. Te recomendamos contratar adicionalmente un seguro de esquí personal que cubra accidentes, asistencia en pista y gastos médicos.",
        ],
      },
      idiomas: {
        q: "¿En qué idiomas se imparten las clases?",
        a: [
          "Las clases se imparten principalmente en español. También podemos atenderte en inglés y catalán. Si tienes alguna necesidad específica de idioma, indícalo al reservar.",
        ],
      },
      "edad-minima": {
        q: "¿Cuál es la edad mínima para los niños?",
        a: [
          "Para clases con niños aceptamos a partir de 4 años.",
          "Para menores de 4 años recomendamos la guardería de la propia estación de Baqueira.",
          "La experiencia Kids & Friends & Family está especialmente diseñada para grupos mixtos con niños.",
        ],
      },
      pago: {
        q: "¿Cómo se realiza el pago?",
        a: [
          "El pago se realiza en el momento de la reserva, mediante tarjeta de crédito o débito.",
          "Si prefieres otro método consúltanos por WhatsApp.",
        ],
      },
      "que-llevar": {
        q: "¿Qué debo llevar el día de la clase?",
        a: [
          "Ropa técnica de esquí en capas (base térmica, capa intermedia, anorak impermeable).",
          "Guantes de esquí, casco (obligatorio en muchas pistas), gafas de nieve o goggles.",
          "Protección solar (la altitud aumenta la exposición UV).",
          "Agua y algún snack energético.",
          "Forfait válido para el día.",
        ],
      },
    },
  },

  nosotros: {
    eyebrow: "Nuestra historia",
    titleLines: ["El origen", "de Kaiten"],
    subtitle: "No nacimos para crear otra escuela de esquí",
    lead: "Nacimos porque creíamos que existía una forma mejor de enseñar.",
    heroAlt: "Montañas nevadas del Valle de Arán",
    heroCaption: "Todo comenzó en el Valle de Arán",
    statement:
      "Es el estado mental en el que la técnica deja de ser pensamiento para convertirse en intuición. La montaña deja de ser un lugar por el que desciendes para convertirse en un lenguaje que entiendes.",
    slogan: "We call it The KAITEN Line",
    founderEyebrow: "Fundador",
    founderAlt: "Aitor Bellver, fundador de Kaiten",
    founderQuote:
      "Aitor Bellver quería una escuela de esquí que brindara una experiencia totalmente nueva.",
    founderCredential:
      "Técnico Deportivo Superior en Esquí Alpino (TD3) · ROPEC 052315",
    naiaraAlt: "Naiara contemplando las montañas del Valle de Arán",
    valuesEyebrow: "Nuestros valores",
    valuesTitle: "Lo que nos guía",
    valuesAlt: "Instructores de Kaiten chocando los puños sobre la nieve",
    manifesto:
      "No creemos en vender clases. Creemos en cambiar la manera de vivir la montaña.",
    manifestoCta: "Ver experiencias",
    story: {
      eleccion: {
        meta: "2020",
        heading: "Todo comenzó con una elección",
        display: [],
        paragraphs: [
          "Decidí dejar atrás la vida en la ciudad, la rutina, los horarios y esa sensación de que el tiempo se escapa.",
          "En 2020 tomé una decisión que cambiaría mi vida.",
          "Me mudé al Valle de Arán para dedicarme a algo que siempre había estado dentro de mí: **la montaña y el esquí.**",
          "Lo que empezó como un cambio de lugar terminó convirtiéndose en **un cambio de mentalidad.**",
        ],
      },
      evolucion: {
        meta: "Seis años",
        heading: "Seis años de evolución",
        display: ["Aprender.", "Crecer.", "Evolucionar."],
        paragraphs: [
          "Durante estos años completé mi formación de Esquí Alpino, seguí aprendiendo temporada tras temporada y descubrí una forma diferente de entender el trabajo, la montaña y la vida.",
          "Dejé atrás una rueda que nunca se detenía para empezar a construir algo con propósito.",
          "**Sin dejar que el camino hacia algún lugar me hiciera olvidar disfrutar del camino.**",
        ],
      },
      kaiten: {
        meta: "Japón",
        heading: "Una palabra cambió todo",
        display: ["Kaiten."],
        paragraphs: [
          "En Japón encontré una palabra que resumía exactamente lo que llevaba años viviendo.",
          "KAITEN habla de **cambio, transformación y evolución.**",
          "De no permanecer inmóvil.\nDe cuestionar lo establecido.\nDe entender que siempre podemos seguir aprendiendo y reinventarnos.",
          "No era simplemente el nombre de un proyecto.",
          "**Era una forma de entender el camino.**",
        ],
      },
      naiara: {
        meta: "Naiara",
        heading: "Pero nada de esto\nexistiría sin\nNaiara",
        display: [],
        paragraphs: [
          "Ella está detrás de gran parte de lo que no se ve.",
          "Naiara ha sido mi compañera durante todo este viaje. La persona que sostiene lo esencial y que está detrás de cada detalle, cada decisión y cada paso que nos ha traído hasta aquí.",
          "Ella también eligió cambiar de vida.",
          "Dejar atrás aquella misma rueda y apostar por construir una forma diferente de vivir.",
          "**Y poco a poco, aquello que había empezado como una decisión personal dejó de ser mi camino para convertirse en el nuestro.**",
        ],
      },
    },
    values: {
      curiosidad: {
        title: "Curiosidad",
        tagline: "Nunca dejamos de explorar",
        body: "Seguimos preguntando. Seguimos aprendiendo. La montaña siempre enseña.",
      },
      precision: {
        title: "Precisión",
        tagline: "Nos importa cada detalle",
        body: "Pequeños ajustes. Grandes diferencias. Mejor cada día.",
      },
      respeto: {
        title: "Respeto",
        tagline: "Por la montaña. Por las personas. Por el momento",
        body: "Cuidamos lo que amamos para que las futuras generaciones también puedan disfrutarlo.",
      },
      estilo: {
        title: "Estilo",
        tagline: "Menos ruido. Más intención",
        body: "Valoramos la simplicidad, la función y el buen gusto en todo lo que hacemos.",
      },
      comunidad: {
        title: "Comunidad",
        tagline: "Subimos juntos",
        body: "No somos clientes. No somos profesores. Somos personas que comparten la misma pasión.",
      },
    },
  },

  valores: {
    eyebrow: "Nuestros valores",
    titleLines: ["Lo que", "nos guía"],
    more: "Nuestro manifiesto",
    bigTitle: "Más que aprender a esquiar",
    paragraphs: [
      "En KAITEN enseñamos técnica. Pero también te ayudamos a superar tus límites, a ganar seguridad y pasión por la montaña.",
      "Creemos que cada descenso es una oportunidad para mejorar, disfrutar y conectar con el esquí.",
      "Porque al final, la mejor clase no es la que termina con las piernas perfectas. Es la que hace que quieras volver a esquiar al día siguiente.",
    ],
    mediaAlt: "Profesor de Kaiten acompañando a una esquiadora en Baqueira",
    difference: [
      {
        title: "Educación / Profesión",
        desc: "Conoces a fondo el esquí y la montaña.",
      },
      { title: "Transparencia", desc: "Sin intermediarios. Sin sorpresas." },
      {
        title: "Personalización",
        desc: "Cada persona aprende a su ritmo y a su forma.",
      },
      {
        title: "Diferencia",
        desc: "La mejor enseñanza de España. La mejor forma de descubrirlo.",
      },
    ],
    philosophy:
      "No creemos en vender clases. Creemos en cambiar la manera de vivir la montaña.",
  },

  legalPages: {
    updated: "Legal · Última actualización: julio 2026",
    legal: "Legal",
    cookiesTitle: "Política de cookies",
    privacidadTitle: "Política de privacidad",
    terminosTitle: "Condiciones generales de contratación",
    avisoTitle: "Aviso legal",
  },
};

export type UiDict = typeof es;
