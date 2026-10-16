import type { LevelTexts, ServiceTexts, TariffTexts } from "./types";

export const servicesCa: ServiceTexts = {
  particulares: {
    title: "Classes Privades",
    tagline: "Atenció 100% personalitzada",
    description:
      "Atenció total i correcció constant. Treballem amb tu a cada baixada perquè progressis ràpid, guanyis confiança i milloris la teva tècnica des del primer moment.",
  },
  "friends-family": {
    title: "Kids & Friends & Family",
    tagline: "Gaudiu junts, al mateix nivell",
    description:
      "Experiència d'esquí en grup pensada per a amics o família, on combines aprenentatge, diversió i la comoditat d'estar acompanyat pels teus. Cada persona progressa al seu ritme dins d'una dinàmica flexible.",
  },
  "kaiten-2-5": {
    title: "Kaiten Programs",
    tagline: "Els nostres programes de millora intensiva",
    description:
      "El segell Kaiten en un format de 2 hores i mitja. Una sessió intensiva per treure el màxim partit al teu temps a la neu amb seguiment personalitzat.",
  },
  tardeo: {
    title: "Tardeo (-25%)",
    tagline: "Esquí de tarda, més per menys",
    description:
      "Gaudeix de Baqueira Beret en horari de tarda, quan l'estació està més buida i el ritme és més relaxat. Millor llum, menys afluència i una tarifa especial amb un 25% de descompte.",
  },
  "full-half-day": {
    title: "Full Day",
    tagline: "Una jornada completa d'esquí",
    description:
      "Una jornada completa o mitja jornada d'esquí intensiu a Baqueira Beret. Tècnica, pràctica i recorregut d'estació, sempre acompanyat per un professional adaptat al teu ritme.",
  },
  safari: {
    title: "Safari",
    tagline: "Explora els millors racons",
    description:
      "Explora Baqueira com un local. Et guiem pels millors racons i zones de l'estació segons les condicions del dia, sense cues ni temps perdut.",
  },
  freeride: {
    title: "Freeride",
    tagline: "La muntanya en estat pur",
    description:
      "Descobreix Baqueira més enllà de les pistes. Aprèn a llegir la muntanya, triar línies i moure't amb criteri en neu no trepitjada, sempre acompanyat per professionals.",
  },
  "equipment-consultancy": {
    title: "Assessorament de Material",
    tagline: "T'ajudem a triar el que millor et va",
    description:
      "Assessorament online personalitzat per comprar el material d'esquí que realment necessites: busquem, comparem i et diem què i on comprar segons el teu nivell i pressupost.",
  },
};

const PER_HOUR = "/ hora";
const EXTRA = "5€ / persona i hora";

export const tariffsCa: TariffTexts = {
  "clases-privadas": {
    title: "Classes Privades",
    priceNote: PER_HOUR,
    extra: EXTRA,
    maxPeople: "Màxim 4 persones",
  },
  "kids-family": {
    title: "Kids & Friends & Family",
    priceNote: PER_HOUR,
    extra: EXTRA,
    maxPeople: "Màxim 6 persones",
  },
  tardeo: {
    title: "Tardeo Kaiten (-25%)",
    priceNote: PER_HOUR,
    extra: EXTRA,
    maxPeople: "Màxim 4 persones",
  },
  "kaiten-2-5": {
    title: "Kaiten Programs",
    extra: EXTRA,
    maxPeople: "Màxim 4 persones",
  },
  "safari-3h": {
    title: "Safari 3h",
    extra: EXTRA,
    maxPeople: "Màxim 6 persones",
  },
  "safari-6h": {
    title: "Safari 6h",
    extra: EXTRA,
    maxPeople: "Màxim 6 persones",
  },
  "half-day": {
    title: "Half Day 4h",
    extra: EXTRA,
    maxPeople: "Màxim 4 persones",
  },
  "full-day": {
    title: "Full Day",
    extra: EXTRA,
    maxPeople: "Màxim 4 persones",
  },
  "freeride-4h": {
    title: "Freeride 4h",
    extra: EXTRA,
    maxPeople: "Màxim 4 persones",
  },
  "freeride-full-day": {
    title: "Freeride Full Day",
    extra: EXTRA,
    maxPeople: "Màxim 4 persones",
  },
  "equipment-consultancy": {
    title: "Assessorament de Material",
    maxPeople: "Màxim 1 persona / hora",
  },
};

export const levelsCa: LevelTexts = {
  A: { description: "Mai no he esquiat", reference: "—" },
  A1: { description: "Mantinc la falca", reference: "Cinta guarderia" },
  A2: {
    description: "Començo a girar en falca",
    reference: "Cinta guarderia o cinta blava",
  },
  B: {
    description: "Giro en falca en pistes verdes i blaves",
    reference: "Cintes o Cabana",
  },
  B1: {
    description: "Falca consolidada en pistes blaves",
    reference: "Cabana, PLA, tornada a casa...",
  },
  C: {
    description: "Inicio el paral·lel en pistes blaves i vermelles",
    reference: "PLA, tornada a casa per vermelles suaus",
  },
  D: {
    description: "Paral·lel en tot tipus de pistes",
    reference: "Pistes vermelles i negres fàcils",
  },
  E: {
    description: "Paral·lel conduït",
    reference: "Pistes negres i fora de pista suau",
  },
  F: {
    description: "Paral·lel conduït en pistes i fora de pistes",
    reference: "Negres i fora de pistes difícils",
  },
};
