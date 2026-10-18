import type { UiDict } from "./es";

/** English UI dictionary. The shape is owned by `ui/es.ts`. */
export const en: UiDict = {
  common: {
    reserve: "Book now",
    close: "Close",
    from: "From",
    duration: "Duration",
    people: "People",
    level: "Level",
    whatsappAria: "Contact us on WhatsApp for exclusive discounts",
    levels: {
      principiante: "Beginner",
      intermedio: "Intermediate",
      avanzado: "Advanced",
    },
    experienceTypes: {
      jornada: "Full day",
      guiado: "Guided",
      clase: "Lesson",
      "fuera-pista": "Off-piste",
      grupo: "Group",
      especial: "Special",
      programa: "Program",
      online: "Online",
    },
    waDiscounts: "EXCLUSIVE DISCOUNTS",
    waInfo: "Hi, I'd like information about your experiences",
    waBooking: "Hi, I'd like to book an experience",
  },

  nav: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuAria: "Menu",
    language: "Language",
    contact: "Contact",
    address: "Baqueira Beret · Val d'Aran",
    links: {
      home: "Home",
      nosotros: "About us",
      reservas: "Booking",
      tarifas: "Prices",
      niveles: "Levels",
      faq: "FAQ",
    },
  },

  hero: {
    titleLines: ["R-evolve", "the way", "you ski"],
    photoAlt: "Skier in Baqueira Beret",
    tagline: "Ski school in Baqueira Beret",
    seeExperiences: "See experiences",
  },

  experiences: {
    eyebrow: "Experiences",
    title: "Choose your experience",
    lead: "Eight ways to live Baqueira, all with a certified instructor and personal attention",
    see: "See experience",
    prevAria: "See previous experiences",
    nextAria: "See more experiences",
  },

  expDetail: {
    quickInfo: "Quick info",
    formatsTitle: "{n} formats for you",
    mostChosen: "Most chosen",
  },

  reviews: {
    eyebrow: "Verified reviews",
    title: "What our clients say",
    badge: "Google Reviews",
    starsAria: "{n} out of 5 stars",
    phraseTitle: "A good lesson doesn't end when you take your skis off.",
    phraseText: "It starts when you want to come back tomorrow.",
    phraseLink: "Book your experience",
    items: [
      {
        author: "Laura M.",
        text: "Incredible experience. Aitor has exceptional patience and teaching skills. In two days I improved more than in my last three years of skiing.",
        date: "January 2025",
      },
      {
        author: "Carlos R.",
        text: "The Full Day was perfect. We skied parts of Baqueira I would never have found on my own. Completely tailored to each person's level.",
        date: "February 2025",
      },
    ],
  },

  bookingBand: {
    eyebrow: "Booking",
    title: "Book by talking to us",
    text: "**No forms**: we help you pick and confirm it right away",
    steps: [
      "Tell us what you're after",
      "We suggest an experience and a time",
      "We confirm the booking",
    ],
    button: "Book on WhatsApp",
  },

  waPill: {
    text: "Need help choosing?",
  },

  footer: {
    ctaEyebrow: "2026 · 27 season",
    ctaHeading: "Ready to start?",
    experiences: "Experiences",
    experienceLinks: {
      privadas: "Private Lessons",
      family: "Kids & Friends & Family",
      programs: "Kaiten 2.5",
      tardeo: "Afternoon (-25%)",
      otras: "Full Day · Safari · Freeride",
      material: "Equipment advice",
    },
    spotify: "Spotify playlist",
    slopes: "Slope conditions",
    slopesText: "Check the Baqueira Beret live cams before heading up",
    slopesBtn: "Baqueira Live Cams",
    ratingAria: "Rated 5 out of 5 on Google",
    terms: "Terms and conditions",
    privacy: "Privacy policy",
    legal: "Legal notice",
    cookies: "Cookies",
  },

  error: {
    title: "Something went wrong",
    text: "We couldn't load this page. You can try again or write to us directly: we'll book your experience by hand",
    retry: "Try again",
    home: "Back to home",
  },

  notFound: {
    documentTitle: "Page not found — Kaiten",
    eyebrow: "Error 404",
    title: "This page doesn't exist",
    lead: "The page you're looking for has moved or was never here. Here are the busiest routes",
    suggestionsAria: "Suggested pages",
    suggestions: {
      reservas: "Pick an experience and a date, and book online",
      tarifas: "Prices for private lessons and special experiences",
      niveles: "Find your level and the experience that fits it",
      faq: "Meeting point, equipment, cancellations",
    },
    shortLinks: {
      reservas: "Booking",
      tarifas: "Prices",
      niveles: "Levels",
      faq: "FAQ",
    },
    home: "Back to home",
    whatsapp: "WhatsApp",
    game: {
      aria: "Mini game",
      title: "In the meantime, take a run",
      hintKeyboard: "← → arrows · Enter to start or pause",
      hintTouch: "Tap to turn",
      meters: "Metres",
      record: "Best {n} m",
      idleTitle: "Fancy a run?",
      idleTextKeyboard: "Turn with the arrow keys",
      idleTextTouch: "Press and hold left or right to turn",
      idleButton: "Drop in",
      pausedTitle: "Paused",
      pausedButton: "Resume",
      overTitle: "Tree. That's the end of the run",
      overRecord: "New best: {n} m",
      overScore: "{n} m this time",
      overButton: "Another run",
    },
  },

  reservas: {
    eyebrow: "Booking · Baqueira Beret",
    title: "Book your experience",
    lead: "Pick one and we'll take you straight to dates and times.",
    viewAria: "View",
    viewCards: "Experiences",
    viewCompare: "Compare",
    tableAria: "Available experiences",
    colExperience: "Experience",
    colActions: "Actions",
    customTitle: "More than 6 of you, or after something tailor-made?",
    customText:
      "Large groups, several days or special dates: message us and we'll put it together with you.",
    call: "Call us",
    back: "All experiences",
    detailEyebrow: "Book · Baqueira Beret",
    photoAlt: "{name} with Kaiten in Baqueira Beret",
    meetingTitle: "Meeting point",
    meetingText:
      "Baqueira 1800, at the gondola exit. We send you the location with your confirmation.",
    passTitle: "Lift pass and equipment",
    passText:
      "Not included. The lift pass is bought at the resort or online; equipment is rented in Baqueira.",
    levelTitle: "Your level",
    levelText:
      "Tell us when you book so your instructor can plan the session from minute one.",
    levelLink: "Level guide",
    switch: "Change experience",
    whenTitle: "Choose date and time",
    trustPayment: "Secure online payment",
    trustConfirmation: "Instant confirmation",
    help: "Questions?",
    helpLink: "Message us on WhatsApp",
  },

  bookeo: {
    slow: "The calendar is taking longer than usual. You can keep waiting — it will show up as soon as it responds — or message us and we'll book it with you.",
    retry: "Try again",
    bookWhatsapp: "Book on WhatsApp",
    failedBefore: "We couldn't load the booking system.",
    failedOr: "or",
    failedLink: "message us on WhatsApp",
    failedAfter: "and we'll sort it out with you.",
  },

  tarifas: {
    eyebrow: "Baqueira Beret",
    title: "Prices",
    includes:
      "Every experience includes: Certified instructor · Personal attention",
    colExperience: "Experience",
    colPrice: "Price per person",
    colExtra: "Extra / person",
    note: "*Ask us about larger groups",
  },

  niveles: {
    eyebrow: "Reference in Baqueira Beret",
    title: "Levels",
    colDescription: "Description",
    colReference: "Reference in Baqueira",
    colLevel: "Level",
    matchTitle: "So which experience should you pick?",
    matchLead:
      "Every one adapts to your level. These are the levels each of them works with",
    matchLevelsAria: "Levels",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Everything you need to know",
    leadBefore: "Still have a question? Message us on",
    leadMiddle: "or call us on",
    copyLinkAria: "Copy link to: {q}",
    copyLink: "Copy link",
    copied: "Link copied",
    copiedShort: "Copied",
    mapAlt:
      "Exit of the TC. Baqueira gondola, with a yellow arrow pointing at the meeting point",
    mapText: "We'll be waiting right where the arrow points, at the gondola",
    mapBtn: "Open in Google Maps",
    ctaText: "Ready to book?",
    ctaBtn: "See all experiences",
    items: {
      "punto-de-encuentro": {
        q: "Where is the meeting point?",
        a: ["The meeting point is Baqueira 1800, right at the gondola exit."],
      },
      "forfait-y-material": {
        q: "Are the lift pass and equipment included?",
        a: [
          "They are not included in the price of the lesson.",
          "You'll need to buy the lift pass yourself, at the resort or online.",
          "Ski equipment (skis, boots, helmet) can be rented at any shop in Baqueira. If you need recommendations, we're happy to help.",
        ],
      },
      "mal-tiempo": {
        q: "What happens if the weather or snow conditions are bad?",
        a: [
          "Safety always comes first. If snow, wind or visibility conditions are dangerous, the experience is rescheduled or cancelled at no cost.",
          "We'll let you know as early as we can. If in doubt, check with us the day before.",
        ],
      },
      cancelacion: {
        q: "What is the cancellation and refund policy?",
        a: [
          "Cancellation more than 7 days in advance: full refund.",
          "Cancellation less than 24h in advance: no refund (except force majeure or bad weather declared by the resort).",
          "Cancellation on our side (force majeure, illness): full refund or rescheduling.",
        ],
      },
      seguro: {
        q: "What insurance does the experience include?",
        a: [
          "Every experience includes the instructor's public liability insurance. We recommend also taking out personal ski insurance covering accidents, on-slope assistance and medical expenses.",
        ],
      },
      idiomas: {
        q: "What languages are the lessons taught in?",
        a: [
          "Lessons are mainly taught in Spanish. We can also look after you in English and Catalan. If you have a specific language need, let us know when booking.",
        ],
      },
      "edad-minima": {
        q: "What is the minimum age for children?",
        a: [
          "For lessons with children we take them from 4 years old.",
          "For under-4s we recommend the resort's own nursery in Baqueira.",
          "The Kids & Friends & Family experience is designed specially for mixed groups with children.",
        ],
      },
      pago: {
        q: "How is payment made?",
        a: [
          "Payment is made at the time of booking, by credit or debit card.",
          "If you'd rather use another method, ask us on WhatsApp.",
        ],
      },
      "que-llevar": {
        q: "What should I bring on the day of the lesson?",
        a: [
          "Technical ski clothing in layers (thermal base, mid layer, waterproof jacket).",
          "Ski gloves, helmet (compulsory on many slopes), snow goggles.",
          "Sun protection (altitude increases UV exposure).",
          "Water and an energy snack.",
          "A valid lift pass for the day.",
        ],
      },
    },
  },

  nosotros: {
    eyebrow: "Our story",
    titleLines: ["The origin", "of Kaiten"],
    subtitle: "We weren't born to create another ski school",
    lead: "We were born because we believed there was a better way to teach.",
    heroAlt: "Snow-covered mountains of the Val d'Aran",
    heroCaption: "It all started in the Val d'Aran",
    statement:
      "It's the state of mind where technique stops being thought and becomes intuition. The mountain stops being a place you descend and becomes a language you understand.",
    slogan: "We call it The KAITEN Line",
    founderEyebrow: "Founder",
    founderAlt: "Aitor Bellver, founder of Kaiten",
    founderQuote:
      "Aitor Bellver wanted a ski school that offered a completely new experience.",
    founderCredential: "Senior Alpine Ski Instructor (TD3) · ROPEC 052315",
    naiaraAlt: "Naiara looking out over the mountains of the Val d'Aran",
    valuesEyebrow: "Our values",
    valuesTitle: "What guides us",
    valuesAlt: "Kaiten instructors bumping fists on the snow",
    manifesto:
      "We don't believe in selling lessons. We believe in changing the way you live the mountain.",
    manifestoCta: "See experiences",
    story: {
      eleccion: {
        meta: "2020",
        heading: "It all started with a choice",
        display: [],
        paragraphs: [
          "I decided to leave behind city life, the routine, the schedules and that feeling of time slipping away.",
          "In 2020 I made a decision that would change my life.",
          "I moved to the Val d'Aran to devote myself to something that had always been inside me: **the mountain and skiing.**",
          "What began as a change of place ended up becoming **a change of mindset.**",
        ],
      },
      evolucion: {
        meta: "Six years",
        heading: "Six years of evolution",
        display: ["Learn.", "Grow.", "Evolve."],
        paragraphs: [
          "Over these years I completed my Alpine Ski training, kept learning season after season and discovered a different way of understanding work, the mountain and life.",
          "I left behind a wheel that never stopped to start building something with purpose.",
          "**Without letting the road to somewhere make me forget to enjoy the road itself.**",
        ],
      },
      kaiten: {
        meta: "Japan",
        heading: "One word changed everything",
        display: ["Kaiten."],
        paragraphs: [
          "In Japan I found a word that summed up exactly what I had been living for years.",
          "KAITEN speaks of **change, transformation and evolution.**",
          "Of not standing still.\nOf questioning what is established.\nOf understanding that we can always keep learning and reinvent ourselves.",
          "It wasn't simply the name of a project.",
          "**It was a way of understanding the journey.**",
        ],
      },
      naiara: {
        meta: "Naiara",
        heading: "But none of this\nwould exist\nwithout Naiara",
        display: [],
        paragraphs: [
          "She is behind much of what you don't see.",
          "Naiara has been my partner throughout this journey. The person who holds up what matters and who is behind every detail, every decision and every step that has brought us here.",
          "She also chose to change her life.",
          "To leave that same wheel behind and bet on building a different way of living.",
          "**And little by little, what had started as a personal decision stopped being my path and became ours.**",
        ],
      },
    },
    values: {
      curiosidad: {
        title: "Curiosity",
        tagline: "We never stop exploring",
        body: "We keep asking. We keep learning. The mountain always teaches.",
      },
      precision: {
        title: "Precision",
        tagline: "Every detail matters to us",
        body: "Small adjustments. Big differences. Better every day.",
      },
      respeto: {
        title: "Respect",
        tagline: "For the mountain. For people. For the moment",
        body: "We look after what we love so future generations can enjoy it too.",
      },
      estilo: {
        title: "Style",
        tagline: "Less noise. More intent",
        body: "We value simplicity, function and good taste in everything we do.",
      },
      comunidad: {
        title: "Community",
        tagline: "We go up together",
        body: "We're not clients. We're not teachers. We're people who share the same passion.",
      },
    },
  },

  valores: {
    eyebrow: "Our values",
    titleLines: ["What", "guides us"],
    more: "Our manifesto",
    bigTitle: "More than learning to ski",
    paragraphs: [
      "At KAITEN we teach technique. But we also help you push past your limits, gain confidence and fall for the mountain.",
      "We believe every descent is a chance to improve, enjoy yourself and connect with skiing.",
      "Because in the end, the best lesson isn't the one that leaves your legs perfect. It's the one that makes you want to ski again tomorrow.",
    ],
    mediaAlt: "A Kaiten instructor skiing alongside a student in Baqueira",
    difference: [
      {
        title: "Training / Profession",
        desc: "You get instructors who know skiing and the mountain inside out.",
      },
      { title: "Transparency", desc: "No middlemen. No surprises." },
      {
        title: "Personalisation",
        desc: "Everyone learns at their own pace and in their own way.",
      },
      {
        title: "Difference",
        desc: "The best teaching in Spain. The best way to find out.",
      },
    ],
    philosophy:
      "We don't believe in selling lessons. We believe in changing the way you live the mountain.",
  },

  legalPages: {
    updated: "Legal · Last updated: July 2026",
    legal: "Legal",
    cookiesTitle: "Cookie policy",
    privacidadTitle: "Privacy policy",
    terminosTitle: "General terms and conditions",
    avisoTitle: "Legal notice",
  },
};
