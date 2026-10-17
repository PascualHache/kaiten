import type { LegalSection } from "../../data/terminos";

export const cookiesCa: LegalSection[] = [
  {
    id: "intro",
    title: "",
    blocks: [
      { kind: "p", text: "En compliment del que disposen la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), el Reglament (UE) 2016/679 (RGPD), la Llei Orgànica 3/2018 (LOPDGDD) i les directrius publicades per l'Agència Espanyola de Protecció de Dades (AEPD), KAITEN informa els usuaris sobre l'ús de galetes i tecnologies similars en aquest lloc web." },
      { kind: "p", text: "La present Política de Galetes té com a finalitat explicar de manera clara què són les galetes, quins tipus utilitzem, amb quina finalitat s'empren i com pot l'usuari configurar-les o deshabilitar-les." },
    ],
  },
  {
    id: "que-son",
    title: "1. Què són les galetes?",
    blocks: [
      { kind: "p", text: "Les galetes són petits arxius de text que es descarreguen al dispositiu de l'usuari (ordinador, mòbil o tauleta) quan visita una pàgina web." },
      { kind: "p", text: "La seva funció principal és reconèixer l'usuari en futures visites, recordar determinades preferències de navegació i recopilar informació estadística que permeti millorar el funcionament i l'experiència del lloc web." },
      { kind: "p", text: "Les galetes no fan malbé el dispositiu de l'usuari i, utilitzades correctament, permeten oferir un servei més segur, ràpid i personalitzat." },
      { kind: "p", text: "A més de les galetes, aquest lloc web pot utilitzar altres tecnologies similars d'emmagatzematge local quan resulti tècnicament necessari per al correcte funcionament de determinats serveis." },
    ],
  },
  {
    id: "para-que",
    title: "2. Per a què utilitzem les galetes?",
    blocks: [
      { kind: "p", text: "A KAITEN utilitzem galetes per a diferents finalitats:" },
      { kind: "ul", items: [
        "Garantir el correcte funcionament de la pàgina web.",
        "Recordar les preferències de navegació de l'usuari.",
        "Analitzar de manera anònima l'ús que els visitants fan del lloc web.",
        "Millorar contínuament l'experiència de navegació.",
        "Facilitar la reserva de classes i l'ús de formularis.",
        "Integrar serveis externs com Google Maps, Instagram, YouTube o WhatsApp quan escaigui.",
        "Mesurar l'eficàcia de les nostres campanyes de màrqueting digital.",
      ]},
      { kind: "p", text: "Mai no utilitzarem galetes per recollir informació personal sense el consentiment de l'usuari quan aquest sigui legalment exigible." },
    ],
  },
  {
    id: "tipos",
    title: "3. Tipus de galetes",
    blocks: [
      { kind: "h3", text: "Segons la titularitat" },
      { kind: "p", text: "Galetes pròpies: són les enviades al dispositiu de l'usuari des d'un domini gestionat directament per KAITEN." },
      { kind: "p", text: "Galetes de tercers: són les gestionades per entitats externes que presten serveis necessaris per al funcionament del lloc web, com Google, Meta o plataformes tecnològiques similars." },
      { kind: "h3", text: "Segons la durada" },
      { kind: "p", text: "Galetes de sessió: s'eliminen automàticament quan l'usuari tanca el navegador." },
      { kind: "p", text: "Galetes persistents: romanen emmagatzemades durant un període determinat i permeten recordar preferències en futures visites." },
      { kind: "h3", text: "Segons la finalitat" },
      { kind: "p", text: "Galetes tècniques: són imprescindibles per al funcionament del lloc web. Permeten:" },
      { kind: "ul", items: [
        "Navegar per la pàgina.",
        "Accedir a àrees segures.",
        "Enviar formularis.",
        "Gestionar reserves.",
        "Recordar el consentiment sobre galetes.",
        "Garantir la seguretat del lloc.",
      ]},
      { kind: "p", text: "Aquestes galetes no requereixen consentiment." },
      { kind: "p", text: "Galetes de preferències: permeten recordar configuracions triades per l'usuari, com l'idioma o preferències de navegació." },
      { kind: "p", text: "Galetes analítiques: ens permeten conèixer com utilitzen els usuaris la pàgina web amb l'objectiu de millorar contínuament els nostres continguts i serveis. Aquestes galetes només s'instal·laran quan l'usuari les accepti expressament. Actualment aquest lloc web no utilitza galetes analítiques: les estadístiques d'ús s'obtenen mitjançant una eina de mesurament sense galetes (Vercel Web Analytics), que no emmagatzema informació al dispositiu de l'usuari ni permet identificar-lo." },
      { kind: "p", text: "Galetes de màrqueting: es poden utilitzar per mesurar l'eficàcia de campanyes publicitàries o mostrar continguts més rellevants per a l'usuari. Aquestes galetes només s'instal·laran amb consentiment previ." },
    ],
  },
  {
    id: "tabla",
    title: "4. Galetes utilitzades en aquest lloc web",
    blocks: [
      { kind: "p", text: "Actualment KAITEN pot utilitzar les galetes següents. La informació detallada sobre cada galeta (nom, proveïdor, durada i finalitat) es manté actualitzada i es pot consultar a través del panell de configuració de galetes disponible al lloc web." },
    ],
  },
  {
    id: "base-juridica",
    title: "5. Base jurídica",
    blocks: [
      { kind: "p", text: "La utilització de galetes tècniques es basa en l'interès legítim de garantir el correcte funcionament del lloc web." },
      { kind: "p", text: "La utilització de galetes analítiques, de personalització o màrqueting es basa exclusivament en el consentiment atorgat per l'usuari mitjançant el panell de configuració de galetes." },
      { kind: "p", text: "L'usuari podrà modificar o retirar aquest consentiment en qualsevol moment." },
    ],
  },
  {
    id: "consentimiento",
    title: "6. Gestió del consentiment",
    blocks: [
      { kind: "p", text: "Quan l'usuari accedeix per primera vegada al lloc web apareix un panell de configuració des del qual pot:" },
      { kind: "ul", items: [
        "Acceptar totes les galetes.",
        "Rebutjar-les.",
        "Configurar individualment cada categoria.",
      ]},
      { kind: "p", text: "L'elecció feta es podrà modificar posteriorment mitjançant l'enllaç «Configurar galetes» disponible al lloc web." },
    ],
  },
  {
    id: "desactivar",
    title: "7. Com desactivar o eliminar les galetes",
    blocks: [
      { kind: "p", text: "L'usuari pot permetre, bloquejar o eliminar les galetes mitjançant la configuració del seu navegador. Els principals navegadors ofereixen aquesta possibilitat:" },
      { kind: "ul", items: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari", "Opera"] },
      { kind: "p", text: "Cal tenir en compte que la desactivació de determinades galetes pot afectar el correcte funcionament d'algunes funcionalitats del lloc web, especialment les relacionades amb formularis de contacte, reserves online o contingut multimèdia." },
    ],
  },
  {
    id: "terceros",
    title: "8. Galetes de tercers",
    blocks: [
      { kind: "p", text: "Aquest lloc web pot integrar serveis proporcionats per tercers, entre ells:" },
      { kind: "ul", items: ["Google Maps", "YouTube", "Instagram", "WhatsApp"] },
      { kind: "p", text: "Cadascun d'aquests proveïdors disposa de la seva pròpia política de privacitat i de galetes, i és responsable del tractament de la informació obtinguda mitjançant els seus serveis. KAITEN no controla les galetes gestionades directament per aquests tercers." },
    ],
  },
  {
    id: "transferencias",
    title: "9. Transferències internacionals de dades",
    blocks: [
      { kind: "p", text: "Alguns dels proveïdors tecnològics utilitzats per aquest lloc web poden trobar-se fora de l'Espai Econòmic Europeu." },
      { kind: "p", text: "Quan hi hagi una transferència internacional de dades, aquesta es farà amb les garanties previstes pel Reglament General de Protecció de Dades, utilitzant, quan sigui necessari, les Clàusules Contractuals Tipus aprovades per la Comissió Europea o altres mecanismes legalment vàlids." },
    ],
  },
  {
    id: "responsabilidades",
    title: "10. Responsabilitats",
    blocks: [
      { kind: "p", text: "Ni aquesta pàgina web ni els seus representants legals es fan responsables ni del contingut ni de la veracitat de les polítiques de privacitat o polítiques de galetes que puguin tenir els tercers esmentats en aquesta política de galetes." },
      { kind: "p", text: "Els navegadors web són les eines encarregades d'emmagatzemar les galetes i és des d'aquí on cal exercir el dret a eliminar-les o desactivar-les. Ni aquesta pàgina web ni els seus representants legals poden garantir la correcta o incorrecta manipulació de les galetes per part dels esmentats navegadors." },
      { kind: "p", text: "En cas de bloquejar o eliminar les galetes, la pàgina web no podrà mantenir les preferències de l'usuari i és possible que algunes característiques de la pàgina web no estiguin operatives, o que calgui demanar de nou a l'usuari autorització per al seu ús." },
    ],
  },
  {
    id: "modificaciones",
    title: "11. Modificacions d'aquesta política",
    blocks: [
      { kind: "p", text: "KAITEN podrà actualitzar la present Política de Galetes quan sigui necessari per canvis legislatius, tècnics o derivats de la incorporació de nous serveis." },
      { kind: "p", text: "Es recomana revisar periòdicament aquesta política per conèixer qualsevol modificació." },
    ],
  },
  {
    id: "contacto",
    title: "12. Contacte",
    blocks: [
      { kind: "p", text: "Si teniu qualsevol dubte relacionat amb l'ús de galetes en aquest lloc web podeu posar-vos en contacte amb nosaltres a través de les dades de contacte publicades a l'apartat d'Avís Legal o mitjançant el correu electrònic: kaitenski@gmail.com" },
    ],
  },
];
