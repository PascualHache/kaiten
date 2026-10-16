import type { UiDict } from "./es";

/** Diccionari d'interfície en català. La forma la mana `ui/es.ts`. */
export const ca: UiDict = {
  common: {
    reserve: "Reservar",
    close: "Tancar",
    from: "Des de",
    duration: "Durada",
    people: "Persones",
    level: "Nivell",
    whatsappAria: "Contactar per WhatsApp per a descomptes exclusius",
    levels: {
      principiante: "Principiant",
      intermedio: "Intermedi",
      avanzado: "Avançat",
    },
    experienceTypes: {
      jornada: "Jornada",
      guiado: "Guiat",
      clase: "Classe",
      "fuera-pista": "Fora de pista",
      grupo: "En grup",
      especial: "Especial",
      programa: "Programa",
      online: "Online",
    },
    waDiscounts: "DESCOMPTES EXCLUSIUS",
    waInfo: "Hola, voldria informació sobre les vostres experiències",
    waBooking: "Hola, voldria reservar una experiència",
  },

  nav: {
    openMenu: "Obrir menú",
    closeMenu: "Tancar menú",
    menuAria: "Menú",
    language: "Idioma",
    contact: "Contacte",
    address: "Baqueira Beret · Val d'Aran",
    links: {
      home: "Inici",
      nosotros: "Nosaltres",
      reservas: "Reserves",
      tarifas: "Tarifes",
      niveles: "Nivells",
      faq: "Preguntes freqüents",
    },
  },

  hero: {
    titleLines: ["R-evoluciona", "la teva manera", "d'esquiar"],
    photoAlt: "Esquiador a Baqueira Beret",
    tagline: "Escola d'esquí a Baqueira Beret",
    seeExperiences: "Veure experiències",
  },

  experiences: {
    eyebrow: "Experiències",
    title: "Tria la teva experiència",
    lead: "Vuit maneres de viure Baqueira, totes amb instructor titulat i atenció personalitzada",
    see: "Veure experiència",
    prevAria: "Veure experiències anteriors",
    nextAria: "Veure més experiències",
  },

  expDetail: {
    quickInfo: "Informació ràpida",
    formatsTitle: "{n} formats per a tu",
    mostChosen: "El més triat",
  },

  reviews: {
    eyebrow: "Ressenyes verificades",
    title: "El que diuen els nostres clients",
    badge: "Google Reviews",
    starsAria: "{n} de 5 estrelles",
    phraseTitle: "Una bona classe no s'acaba quan et treus els esquís.",
    phraseText: "Comença quan vols tornar demà.",
    phraseLink: "Reserva la teva experiència",
    items: [
      {
        author: "Laura M.",
        text: "Experiència increïble. L'Aitor té una paciència i una pedagogia excepcionals. En dos dies vaig millorar més que en els últims tres anys d'esquí.",
        date: "Gener 2025",
      },
      {
        author: "Carlos R.",
        text: "El Full Day va ser perfecte. Vam recórrer zones de Baqueira que mai hauria trobat sol. Completament personalitzat al nivell de cadascú.",
        date: "Febrer 2025",
      },
    ],
  },

  bookingBand: {
    eyebrow: "Reserves",
    title: "Resol-ho per WhatsApp en dos missatges",
    text: "Si vols **agilitzar la teva reserva**, **consultar-nos qualsevol dubte** o rebre una **atenció més personalitzada**, escriu-nos: parles directament amb nosaltres, t'ajudem a triar l'experiència que encaixa amb el teu nivell i ho deixem tancat sense formularis",
    steps: [
      "Escriu-nos i explica'ns què busques",
      "Et proposem experiència, data i horari",
      "Tanquem la reserva i et donem el punt de trobada",
    ],
    button: "Reservar per WhatsApp",
  },

  waPill: {
    text: "T'ajudem a triar?",
  },

  footer: {
    ctaEyebrow: "Temporada 2026 · 27",
    ctaHeading: "A punt per començar?",
    experiences: "Experiències",
    experienceLinks: {
      privadas: "Classes Privades",
      family: "Kids & Friends & Family",
      programs: "Kaiten Programs",
      tardeo: "Tardeo (-25%)",
      otras: "Full Day · Safari · Freeride",
      material: "Assessorament de material",
    },
    spotify: "Playlist Spotify",
    slopes: "Estat de les pistes",
    slopesText:
      "Consulta les càmeres de Baqueira Beret en directe abans de pujar",
    slopesBtn: "Baqueira Live Cams",
    ratingAria: "Valoració 5 de 5 a Google",
    terms: "Termes i condicions",
    privacy: "Política de privacitat",
    legal: "Avís legal",
    cookies: "Galetes",
  },

  error: {
    title: "Alguna cosa ha fallat",
    text: "No hem pogut carregar aquesta pàgina. Pots tornar-ho a provar o escriure'ns directament: et reservem l'experiència a mà",
    retry: "Tornar-ho a provar",
    home: "Tornar a l'inici",
  },

  notFound: {
    documentTitle: "Pàgina no trobada — Kaiten",
    eyebrow: "Error 404",
    title: "Aquesta pista no existeix",
    lead: "La pàgina que busques s'ha mogut o mai no va ser aquí. Et deixem els camins més transitats",
    suggestionsAria: "Pàgines suggerides",
    suggestions: {
      reservas: "Tria experiència, data i reserva online",
      tarifas: "Preus de classes privades i experiències especials",
      niveles: "Troba el teu nivell i l'experiència que hi encaixa",
      faq: "Punt de trobada, material, cancel·lacions",
    },
    home: "Tornar a l'inici",
    whatsapp: "Escriu-nos per WhatsApp",
  },

  reservas: {
    eyebrow: "Reserves · Baqueira Beret",
    title: "Reserva la teva experiència",
    lead: "Tria'n una i et portem directe a dates i hores.",
    viewAria: "Vista",
    viewCards: "Targetes",
    viewCompare: "Comparar",
    tableAria: "Experiències disponibles",
    colExperience: "Experiència",
    colActions: "Accions",
    customTitle: "Sou més de 6 o busques alguna cosa a mida?",
    customText:
      "Grups grans, diversos dies o dates especials: escriu-nos i ho preparem amb tu.",
    call: "Truca'ns",
    back: "Totes les experiències",
    detailEyebrow: "Reservar · Baqueira Beret",
    meetingTitle: "Punt de trobada",
    meetingText:
      "Baqueira 1800, a la sortida del telecabina. T'enviem la ubicació amb la confirmació.",
    passTitle: "Forfet i material",
    passText:
      "No inclosos. El forfet es compra a l'estació o online; el material es lloga a Baqueira.",
    levelTitle: "El teu nivell",
    levelText:
      "Indica'l en reservar perquè el teu instructor prepari la sessió des del primer minut.",
    levelLink: "Guia de nivells",
    switch: "Canviar d'experiència",
    whenTitle: "Tria data i hora",
    trustPayment: "Pagament segur online",
    trustConfirmation: "Confirmació immediata",
    help: "Dubtes?",
    helpLink: "Escriu-nos per WhatsApp",
  },

  bookeo: {
    slow: "El calendari està trigant més del normal. Pots continuar esperant — apareixerà així que respongui — o escriure'ns i el reservem amb tu.",
    retry: "Tornar-ho a provar",
    bookWhatsapp: "Reservar per WhatsApp",
    failedBefore: "No hem pogut carregar el sistema de reserves.",
    failedOr: "o",
    failedLink: "escriu-nos per WhatsApp",
    failedAfter: "i ho gestionem amb tu.",
  },

  tarifas: {
    eyebrow: "Baqueira Beret",
    title: "Tarifes",
    includes:
      "Totes les experiències inclouen: Instructor titulat · Atenció personalitzada",
    colExperience: "Experiència",
    colPrice: "Tarifa per persona",
    colExtra: "Extra / persona",
    note: "*Consultar per a grups de més persones",
  },

  niveles: {
    eyebrow: "Referència a Baqueira Beret",
    title: "Nivells",
    colDescription: "Descripció",
    colReference: "Referència a Baqueira",
    colLevel: "Nivell",
  },

  faq: {
    eyebrow: "Preguntes freqüents",
    title: "Tot el que necessites saber",
    leadBefore: "Tens algun dubte més? Escriu-nos per",
    leadMiddle: "o truca'ns al",
    copyLinkAria: "Copiar enllaç a: {q}",
    copyLink: "Copiar enllaç",
    copied: "Enllaç copiat",
    copiedShort: "Copiat",
    mapAlt:
      "Sortida del telecabina TC. Baqueira, amb una fletxa groga assenyalant el punt de trobada",
    mapText: "T'esperem just on marca la fletxa, a peu de telecabina",
    mapBtn: "Obrir a Google Maps",
    ctaText: "A punt per reservar?",
    ctaBtn: "Veure totes les experiències",
    items: {
      "punto-de-encuentro": {
        q: "On és el punt de trobada?",
        a: [
          "El punt de trobada és a Baqueira 1800, just a la sortida del telecabina.",
        ],
      },
      "forfait-y-material": {
        q: "El forfet i el material estan inclosos?",
        a: [
          "No estan inclosos en el preu de la classe.",
          "El forfet l'hauràs d'adquirir pel teu compte a la mateixa estació o de manera online.",
          "El material d'esquí (esquís, botes, casc) es pot llogar a qualsevol botiga de Baqueira. Si necessites recomanacions, et podem orientar.",
        ],
      },
      "mal-tiempo": {
        q: "Què passa si fa mal temps o les condicions de neu són dolentes?",
        a: [
          "La seguretat és sempre la nostra prioritat. Si les condicions de neu, vent o visibilitat són perilloses, l'experiència es reprograma o es cancel·la sense cost.",
          "T'avisarem amb la màxima antelació possible. En cas de dubte, consulta'ns el dia abans.",
        ],
      },
      cancelacion: {
        q: "Quina és la política de cancel·lació i reemborsament?",
        a: [
          "Cancel·lació amb més de 7 dies d'antelació: reemborsament complet.",
          "Cancel·lació amb menys de 24 h: sense reemborsament (excepte causa de força major o mal temps declarat per l'estació).",
          "Cancel·lació per part nostra (força major, malaltia): reemborsament complet o reprogramació.",
        ],
      },
      seguro: {
        q: "Quina assegurança inclou l'experiència?",
        a: [
          "Totes les experiències inclouen assegurança de Responsabilitat Civil (RC) de l'instructor. Et recomanem contractar addicionalment una assegurança d'esquí personal que cobreixi accidents, assistència a pista i despeses mèdiques.",
        ],
      },
      idiomas: {
        q: "En quins idiomes s'imparteixen les classes?",
        a: [
          "Les classes s'imparteixen principalment en castellà. També et podem atendre en anglès i català. Si tens alguna necessitat específica d'idioma, indica-ho en reservar.",
        ],
      },
      "edad-minima": {
        q: "Quina és l'edat mínima per als nens?",
        a: [
          "Per a classes amb nens acceptem a partir de 4 anys.",
          "Per a menors de 4 anys recomanem la guarderia de la mateixa estació de Baqueira.",
          "L'experiència Kids & Friends & Family està especialment dissenyada per a grups mixtos amb nens.",
        ],
      },
      pago: {
        q: "Com es fa el pagament?",
        a: [
          "El pagament es fa en el moment de la reserva, mitjançant targeta de crèdit o dèbit.",
          "Si prefereixes un altre mètode, consulta'ns per WhatsApp.",
        ],
      },
      "que-llevar": {
        q: "Què he de portar el dia de la classe?",
        a: [
          "Roba tècnica d'esquí per capes (base tèrmica, capa intermèdia, anorac impermeable).",
          "Guants d'esquí, casc (obligatori a moltes pistes), ulleres de neu o goggles.",
          "Protecció solar (l'altitud augmenta l'exposició UV).",
          "Aigua i algun snack energètic.",
          "Forfet vàlid per al dia.",
        ],
      },
    },
  },

  nosotros: {
    eyebrow: "La nostra història",
    titleLines: ["L'origen", "de Kaiten"],
    subtitle: "No vam néixer per crear una altra escola d'esquí",
    lead: "Vam néixer perquè crèiem que existia una manera millor d'ensenyar.",
    heroAlt: "Muntanyes nevades de la Val d'Aran",
    heroCaption: "Tot va començar a la Val d'Aran",
    statement:
      "És l'estat mental en què la tècnica deixa de ser pensament per convertir-se en intuïció. La muntanya deixa de ser un lloc pel qual baixes per convertir-se en un llenguatge que entens.",
    slogan: "We call it The KAITEN Line",
    founderEyebrow: "Fundador",
    founderAlt: "Aitor Bellver, fundador de Kaiten",
    founderQuote:
      "L'Aitor Bellver volia una escola d'esquí que oferís una experiència totalment nova.",
    founderCredential:
      "Tècnic Esportiu Superior en Esquí Alpí (TD3) · ROPEC 052315",
    naiaraAlt: "La Naiara contemplant les muntanyes de la Val d'Aran",
    valuesEyebrow: "Els nostres valors",
    valuesTitle: "El que ens guia",
    valuesAlt: "Instructors de Kaiten xocant els punys sobre la neu",
    manifesto:
      "No creiem a vendre classes. Creiem a canviar la manera de viure la muntanya.",
    manifestoCta: "Veure experiències",
    story: {
      eleccion: {
        meta: "2020",
        heading: "Tot va començar amb una elecció",
        display: [],
        paragraphs: [
          "Vaig decidir deixar enrere la vida a la ciutat, la rutina, els horaris i aquella sensació que el temps s'escapa.",
          "El 2020 vaig prendre una decisió que canviaria la meva vida.",
          "Em vaig mudar a la Val d'Aran per dedicar-me a una cosa que sempre havia estat dins meu: **la muntanya i l'esquí.**",
          "El que va començar com un canvi de lloc va acabar convertint-se en **un canvi de mentalitat.**",
        ],
      },
      evolucion: {
        meta: "Sis anys",
        heading: "Sis anys d'evolució",
        display: ["Aprendre.", "Créixer.", "Evolucionar."],
        paragraphs: [
          "Durant aquests anys vaig completar la meva formació d'Esquí Alpí, vaig continuar aprenent temporada rere temporada i vaig descobrir una manera diferent d'entendre la feina, la muntanya i la vida.",
          "Vaig deixar enrere una roda que mai no s'aturava per començar a construir alguna cosa amb propòsit.",
          "**Sense deixar que el camí cap a algun lloc em fes oblidar gaudir del camí.**",
        ],
      },
      kaiten: {
        meta: "Japó",
        heading: "Una paraula ho va canviar tot",
        display: ["Kaiten."],
        paragraphs: [
          "Al Japó vaig trobar una paraula que resumia exactament el que feia anys que vivia.",
          "KAITEN parla de **canvi, transformació i evolució.**",
          "De no quedar-se immòbil.\nDe qüestionar l'establert.\nD'entendre que sempre podem continuar aprenent i reinventar-nos.",
          "No era simplement el nom d'un projecte.",
          "**Era una manera d'entendre el camí.**",
        ],
      },
      naiara: {
        meta: "Naiara",
        heading: "Però res d'això existiria sense la Naiara",
        display: [],
        paragraphs: [
          "Ella és darrere de gran part del que no es veu.",
          "La Naiara ha estat la meva companya durant tot aquest viatge. La persona que sosté l'essencial i que és darrere de cada detall, cada decisió i cada pas que ens ha portat fins aquí.",
          "Ella també va triar canviar de vida.",
          "Deixar enrere aquella mateixa roda i apostar per construir una manera diferent de viure.",
          "**I a poc a poc, allò que havia començat com una decisió personal va deixar de ser el meu camí per convertir-se en el nostre.**",
        ],
      },
    },
    values: {
      curiosidad: {
        title: "Curiositat",
        tagline: "Mai deixem d'explorar",
        body: "Continuem preguntant. Continuem aprenent. La muntanya sempre ensenya.",
      },
      precision: {
        title: "Precisió",
        tagline: "Ens importa cada detall",
        body: "Petits ajustos. Grans diferències. Millor cada dia.",
      },
      respeto: {
        title: "Respecte",
        tagline: "Per la muntanya. Per les persones. Pel moment",
        body: "Cuidem el que estimem perquè les generacions futures també en puguin gaudir.",
      },
      estilo: {
        title: "Estil",
        tagline: "Menys soroll. Més intenció",
        body: "Valorem la simplicitat, la funció i el bon gust en tot el que fem.",
      },
      comunidad: {
        title: "Comunitat",
        tagline: "Pugem junts",
        body: "No som clients. No som professors. Som persones que comparteixen la mateixa passió.",
      },
    },
  },

  valores: {
    eyebrow: "Els nostres valors",
    titleLines: ["El que", "ens guia"],
    more: "El nostre manifest",
    bigTitle: "Més que aprendre a esquiar",
    paragraphs: [
      "A KAITEN ensenyem tècnica. Però també t'ajudem a superar els teus límits, a guanyar seguretat i passió per la muntanya.",
      "Creiem que cada descens és una oportunitat per millorar, gaudir i connectar amb l'esquí.",
      "Perquè al final, la millor classe no és la que acaba amb les cames perfectes. És la que fa que vulguis tornar a esquiar l'endemà.",
    ],
    mediaAlt: "Professor de Kaiten acompanyant una esquiadora a Baqueira",
    difference: [
      {
        title: "Educació / Professió",
        desc: "Coneixes a fons l'esquí i la muntanya.",
      },
      { title: "Transparència", desc: "Sense intermediaris. Sense sorpreses." },
      {
        title: "Personalització",
        desc: "Cada persona aprèn al seu ritme i a la seva manera.",
      },
      {
        title: "Diferència",
        desc: "El millor ensenyament d'Espanya. La millor manera de descobrir-ho.",
      },
    ],
    philosophy:
      "No creiem a vendre classes. Creiem a canviar la manera de viure la muntanya.",
  },

  legalPages: {
    updated: "Legal · Última actualització: juliol 2026",
    legal: "Legal",
    cookiesTitle: "Política de galetes",
    privacidadTitle: "Política de privacitat",
    terminosTitle: "Condicions generals de contractació",
    avisoTitle: "Avís legal",
  },
};
