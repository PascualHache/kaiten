import type { ActivityTexts } from "./types";

export const activitiesCa: ActivityTexts = {
  "full-day": {
    title: "Full Day | Half Day",
    summary: { duration: "Mig dia · Dia complet", people: "1 – 4" },
    features: [
      {
        emoji: "🎿",
        title: "Un dia complet per millorar de debò",
        desc: "Una experiència d'esquí intensiva a Baqueira Beret on combinem tècnica, pràctica i gaudi durant tota la jornada, sempre acompanyat per un professional.",
      },
      {
        emoji: "🦅",
        title: "Evolució real en un sol dia",
        desc: "El treball continu i el feedback constant permeten una millora molt més ràpida i sòlida que en sessions curtes.",
      },
      {
        emoji: "⛰️",
        title: "Esquí, aprenentatge i recorregut d'estació",
        desc: "No és una classe rígida. És una experiència dinàmica on alternem tècnica i exploració de diferents zones segons condicions i progressió.",
      },
    ],
    info: [
      {
        emoji: "🎯",
        label: "Enfocament",
        content:
          "Millora tècnica + coneixement de l'estació durant una jornada completa.",
      },
      {
        emoji: "⏱️",
        label: "Durada",
        content: [
          "Half Day: mitja jornada d'esquí amb enfocament tècnic i pràctic.",
          "Full Day: dia complet d'esquí amb progressió contínua i adaptació al ritme del client.",
        ],
      },
      {
        emoji: "🎿",
        label: "Nivell",
        content:
          "Tots els nivells. L'experiència s'adapta completament al nivell i objectius de l'esquiador.",
      },
      {
        emoji: "👥",
        label: "Participants",
        content:
          "Des d'1 persona fins a grups petits (recomanat màxim 4 persones per a un treball més efectiu).",
      },
      {
        emoji: "🎓",
        label: "Què el diferencia del Safari",
        content: [
          "Safari → descobrir l'estació amb possibilitat de reunir membres de diferents nivells",
          "Full Day → millorar el teu esquí mentre la recorres",
        ],
      },
      {
        emoji: "🍽️",
        label: "Pausa dinar",
        content:
          "Inclosa en modalitat Full Day, amb ritme flexible segons el grup. (Menjar no inclòs)",
      },
      {
        emoji: "💡",
        label: "Avantatge del format",
        content:
          "Més hores seguides de pràctica = evolució més ràpida, estable i visible.",
      },
    ],
    cta: {
      headline: "Un dia per millorar de debò",
      subline:
        "Esquí, progressió i gaudi en una experiència completament personalitzada a Baqueira.",
      buttonText: "Reservar",
    },
  },

  safari: {
    title: "Safari",
    summary: { duration: "3 h · 6 h", people: "1 – 6" },
    features: [
      {
        emoji: "⛰️",
        title: "Explora Baqueira com un local",
        desc: "Descobreix els millors racons, pistes i recorreguts de l'estació acompanyat per experts que coneixen Baqueira al detall.",
      },
      {
        emoji: "🦅",
        title: "Més esquí, menys temps perdut",
        desc: "Aprofita cada minut a la neu. Et guiem per les millors zones segons les condicions del dia, evitant cues i desplaçaments innecessaris.",
      },
      {
        emoji: "✨",
        title: "Una experiència dissenyada per a tu",
        desc: "Recorreguts personalitzats segons el teu nivell, ritme i interessos. Tu només t'has de preocupar de gaudir.",
      },
    ],
    info: [
      {
        emoji: "🎿",
        label: "Nivell mínim",
        content: "Poder baixar pistes blaves amb fluïdesa.",
      },
      {
        emoji: "⏱️",
        label: "Durada",
        content: [
          "3 hores: descobriment d'un sector (Beret o Bonaigua).",
          "6 hores: recorregut general per gran part de l'estació.",
        ],
      },
      {
        emoji: "👥",
        label: "Participants",
        content: "Des d'1 persona - Recomanat fins a 4 participants per grup.",
      },
      {
        emoji: "🎓",
        label: "No és una classe d'esquí",
        content:
          "Coneix l'estació com un local, optimitza el teu temps a la neu i gaudeix d'una experiència totalment personalitzada.",
      },
    ],
    cta: {
      headline: "Descobreix Baqueira com un local",
      subline: "",
      buttonText: "Reservar",
    },
  },

  "clases-particulares": {
    title: "Classes Privades",
    summary: { duration: "Hores a la teva mida", people: "1 – 4" },
    features: [
      {
        emoji: "🎯",
        title: "Millora el teu esquí des del primer minut",
        desc: "Un servei totalment personalitzat pensat perquè progressis ràpid i de manera eficaç. Analitzem el teu nivell, detectem el que necessites i treballem amb tu a cada baixada.",
      },
      {
        emoji: "🦅",
        title: "Atenció total, correcció constant",
        desc: "Tot gira al teu voltant. Reps feedback continu en temps real per corregir errors, guanyar confiança i millorar la teva tècnica de manera visible.",
      },
      {
        emoji: "🚀",
        title: "La manera més ràpida d'evolucionar a la neu",
        desc: "És el format amb més capacitat de millora: més control, més seguretat i més gaudi a pista des del primer dia.",
      },
    ],
    info: [
      {
        emoji: "🎿",
        label: "Nivell i edat",
        content:
          "Sense mínim ni màxim. Des de principiants fins a esquiadors avançats de qualsevol edat.",
      },
      {
        emoji: "👥",
        label: "Participants",
        content: [
          "Des d'1 persona fins a 4 per grup (consultar per a més persones).",
          "L'important és que el nivell sigui homogeni per garantir una progressió efectiva.",
        ],
      },
      {
        emoji: "⏱️",
        label: "Durada",
        content: [
          "Sense mínim ni màxim d'hores.",
          "Recomanació: sessions de com a mínim 2 hores i en diversos dies consecutius per maximitzar l'evolució.",
        ],
      },
    ],
    cta: {
      headline: "Aprèn més en menys temps",
      subline: "Més confiança, més control i una evolució real a cada sessió.",
      buttonText: "Reservar",
    },
  },

  freeride: {
    title: "Freeride",
    summary: { duration: "4 h · Dia complet", people: "1 – 4" },
    features: [
      {
        emoji: "❄️",
        title: "Explora la muntanya en el seu estat més pur",
        desc: "Descobreix Baqueira Beret més enllà de les pistes. Una experiència fora de pista, on cada baixada és un repte.",
      },
      {
        emoji: "🦅",
        title: "Més llibertat, més control, més muntanya",
        desc: "Et guiem per zones al costat de pista i itineraris de freeride adaptats al teu nivell, combinant seguretat, progressió i gaudi a cada descens.",
      },
      {
        emoji: "⛰️",
        title: "Una experiència per progressar en el fora de pista",
        desc: "Aprendràs a llegir la muntanya, triar línies i moure't amb criteri en neu no trepitjada, sempre acompanyat per professionals.",
      },
    ],
    info: [
      {
        emoji: "🎿",
        label: "Nivell mínim",
        content:
          "Nivell intermedi-alt a pista (control en pistes vermelles), tant se val que sigui el teu primer cop fent freeride.",
      },
      {
        emoji: "⏱️",
        label: "Durada",
        content: [
          "4 hores mínim: iniciació o progressió en freeride en zones controlades.",
          "Dia complet: experiència més completa amb més recorregut i varietat de terrenys.",
        ],
      },
      {
        emoji: "👥",
        label: "Participants",
        content: "Des d'1 persona fins a 4 (consultar per a més persones).",
      },
      {
        emoji: "🎓",
        label: "Què és aquesta experiència",
        content:
          "No és només esquiar fora de pista: és aprendre a moure's en muntanya, llegir el terreny i prendre decisions en neu no trepitjada.",
      },
      {
        emoji: "❌",
        label: "No inclou",
        content: "Desplaçaments, material de seguretat (ARVA, pala i sonda).",
      },
    ],
    cta: {
      headline: "Viu la muntanya d'una altra manera",
      subline:
        "Sensació de llibertat, línies úniques i l'experiència d'esquiar la neu més pura de Baqueira Beret.",
      buttonText: "Reservar",
    },
  },

  "friends-family": {
    title: "Kids & Friends & Family",
    summary: { duration: "Hores a la teva mida", people: "1 – 6" },
    features: [
      {
        emoji: "🎿",
        title: "Aprèn i gaudeix amb els teus",
        desc: "Una experiència d'esquí en grup pensada per a amics o família, on combines aprenentatge, diversió i la comoditat d'estar acompanyat pels teus.",
      },
      {
        emoji: "🦅",
        title: "Progressió sense perdre la part social",
        desc: [
          "Cada persona progressa al seu ritme dins d'una dinàmica flexible, adaptant la classe perquè tothom hi sumi, gaudeixi i evolucioni.",
          "Nivell iniciació → primeres passes a la neu",
          "Nivell intermedi → evolució i control",
          "Nivell avançat → perfeccionament",
        ],
      },
      {
        emoji: "⛰️",
        title: "Un equilibri perfecte entre aprenentatge i diversió",
        desc: "Un format que combina evolució tècnica real amb un ambient relaxat i proper a la neu.",
      },
    ],
    info: [
      {
        emoji: "👥",
        label: "Tipus de grup",
        content:
          "Grups tancats (no classes obertes). Vas sempre amb el teu propi grup d'amics o família.",
      },
      {
        emoji: "🎿",
        label: "Nivells",
        content: [
          "Iniciació, intermedi i avançat.",
          "És possible barrejar nivells, encara que es recomana que siguin com més homogenis millor per a una millor progressió.",
        ],
      },
      {
        emoji: "⏱️",
        label: "Durada",
        content: [
          "Sense mínim ni màxim d'hores.",
          "Recomanació: sessions de com a mínim 2 hores i en diversos dies consecutius per maximitzar l'evolució.",
          "Com més temps a pista, més gran serà l'evolució i l'aprofitament.",
        ],
      },
      {
        emoji: "👥",
        label: "Participants",
        content: "Màxim 4 persones per grup (consultar per a més persones).",
      },
      {
        emoji: "🎓",
        label: "Què és aquest format",
        content:
          "No és una classe col·lectiva oberta. És un grup privat on s'adapta l'ensenyament al nivell i la dinàmica del teu propi grup.",
      },
    ],
    cta: {
      headline: "Comparteix la neu amb els teus",
      subline:
        "Aprèn, millora i gaudeix en grup amb una experiència flexible, divertida i totalment adaptada.",
      buttonText: "Reservar",
    },
  },

  tardeo: {
    title: "Tardeo (-25%)",
    summary: { duration: "A partir de les 14:00", people: "1 – 4" },
    features: [
      {
        emoji: "🎿",
        title: "Esquí més tranquil, fluid i agradable",
        desc: "Una experiència pensada per gaudir de Baqueira Beret en horari de tarda, quan l'estació està més buida i el ritme és més relaxat.",
      },
      {
        emoji: "📷",
        title: "Millor llum i menys afluència",
        desc: "Esquia amb pistes més buides i aprofita una llum perfecta per gaudir del paisatge i fer fotos en un entorn més bonic i tranquil.",
      },
      {
        emoji: "💰",
        title: "Tarifa especial amb un 25% de descompte",
        desc: "Gaudeix d'aquesta experiència en horari de tarda amb un preu reduït del 25% respecte a l'horari habitual.",
      },
    ],
    info: [
      {
        emoji: "🎿",
        label: "Nivell",
        content:
          "Sense mínim ni màxim. Des de principiants fins a esquiadors avançats de qualsevol edat.",
      },
      {
        emoji: "👥",
        label: "Participants",
        content: [
          "Des d'1 persona fins a 4 per grup (consultar per a més persones).",
          "L'important és que el nivell sigui homogeni per garantir una progressió efectiva.",
        ],
      },
      {
        emoji: "⏱️",
        label: "Durada",
        content:
          "Sense mínim ni màxim d'hores. Experiència en horari de tarda (a partir de les 2 pm).",
      },
      {
        emoji: "🎓",
        label: "Què és aquesta experiència",
        content:
          "No és un producte tècnic específic, sinó una manera optimitzada d'esquiar a l'estació en el millor moment del dia.",
      },
    ],
    cta: {
      headline: "Esquí amb més calma i millors sensacions",
      subline:
        "Menys cues, més fluïdesa i una experiència més relaxada a Baqueira Beret.",
      buttonText: "Reservar",
    },
  },

  "kaiten-2-5": {
    title: "Kaiten 2.5",
    subtitle: "El nostre programa de millora intensiva",
    summary: { duration: "2 – 3 dies", people: "1 – 4" },
    features: [
      {
        emoji: "🎿",
        title: "Aprofita al màxim la neu",
        desc: "Aquest format està pensat per a qui vol aprofitar al màxim la neu, evitant les primeres cues i gaudint d'una classe més completa a un preu més ajustat.",
      },
      {
        emoji: "🔁",
        title: "Comença abans que la resta",
        desc: "Començar abans que comencin la majoria de classes. D'aquesta manera, podem aprofitar les pistes evitant les primeres cues.",
      },
      {
        emoji: "⭐",
        title: "Millor relació qualitat-preu",
        desc: "A més, les 2 hores i mitja ofereixen una millor relació qualitat-preu.",
      },
    ],
    info: [
      {
        emoji: "👥",
        label: "Participants",
        content: "Des d'1 persona fins a 4 (consultar per a més persones).",
      },
      {
        emoji: "🎿",
        label: "Nivell i edat",
        content: "Tots els nivells. Adaptem el programa als teus objectius.",
      },
      {
        emoji: "⏱️",
        label: "Durada",
        content:
          "Segons el format triat. Horaris flexibles dins de la franja disponible.",
      },
      {
        emoji: "🎓",
        label: "Què inclou",
        content:
          "Professor expert, seguiment tècnic, consells personalitzats i molt més.",
      },
      {
        emoji: "🏆",
        label: "Avantatge Kaiten",
        content:
          "Mètode propi, progrés real i gaudi assegurat a cada sessió.",
      },
    ],
    cta: {
      headline: "Tria el teu programa Kaiten",
      subline: "Progrés real amb el nostre mètode de millora intensiva.",
      buttonText: "Reservar",
    },
  },

  "equipment-consultancy": {
    title: "Assessorament de Material",
    summary: { duration: "Online", people: "Individual" },
    features: [
      {
        emoji: "🎯",
        title: "Troba el material que realment necessites",
        desc: "T'ajudem a triar el material d'esquí que millor s'adapta al teu nivell, estil, objectius i pressupost. Sense marques imposades, només el que realment necessites.",
      },
      {
        emoji: "🔍",
        title: "Busquem i comparem per tu",
        desc: "Analitzem les millors opcions disponibles en botigues online especialitzades per trobar la millor relació qualitat-preu.",
      },
      {
        emoji: "🛒",
        title: "Et recomanem on comprar i què necessites",
        desc: "Reps una selecció personalitzada amb enllaços directes, preus actualitzats i la nostra recomanació clara d'on comprar cada producte.",
      },
      {
        emoji: "⏱️",
        title: "Estalvia temps, diners i evita errors",
        desc: "Evita compres poc encertades i equipa't amb confiança amb l'assessorament d'experts que coneixen el material i el mercat.",
      },
    ],
    info: [
      {
        emoji: "📋",
        label: "Què inclou",
        content:
          "Assessorament personalitzat online per recomanar-te el material d'esquí que necessites segons el teu perfil i objectius.",
      },
      {
        emoji: "⚙️",
        label: "Com funciona",
        content:
          "Respons un breu qüestionari sobre el teu nivell, estil, objectius i pressupost. Analitzem opcions en botigues online i t'enviem les nostres recomanacions amb enllaços i preus.",
      },
      {
        emoji: "👥",
        label: "Per a qui és",
        content:
          "Esquiadors de tots els nivells que volen comprar material nou o renovar el seu equip amb la millor elecció.",
      },
      {
        emoji: "💶",
        label: "Preu",
        content: "Assessorament: 20€ · Assessorament i compra: 30€.",
      },
    ],
    cta: {
      headline: "Equipa't amb les millors decisions",
      subline:
        "Assessorament expert per comprar el material d'esquí que realment necessites.",
      buttonText: "Reservar",
    },
  },
};
