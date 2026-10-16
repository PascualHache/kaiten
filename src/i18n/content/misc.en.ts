import type { LevelTexts, ServiceTexts, TariffTexts } from "./types";

export const servicesEn: ServiceTexts = {
  particulares: {
    title: "Private Lessons",
    tagline: "100% personal attention",
    description:
      "Full attention and constant correction. We work with you on every descent so you progress fast, build confidence and improve your technique from the very first moment.",
  },
  "friends-family": {
    title: "Kids & Friends & Family",
    tagline: "Enjoy it together, at the same level",
    description:
      "A group ski experience designed for friends or family, combining learning, fun and the comfort of being with your own people. Everyone progresses at their own pace within a flexible format.",
  },
  "kaiten-2-5": {
    title: "Kaiten 2.5",
    tagline: "Our intensive improvement program",
    description:
      "The Kaiten signature in a two-and-a-half-hour format. An intensive session to get the most out of your time on the snow, with personal follow-up.",
  },
  tardeo: {
    title: "Afternoon (-25%)",
    tagline: "Afternoon skiing, more for less",
    description:
      "Enjoy Baqueira Beret in the afternoon, when the resort is quieter and the pace is more relaxed. Better light, fewer people and a special rate with 25% off.",
  },
  "full-half-day": {
    title: "Full Day",
    tagline: "A full day of skiing",
    description:
      "A full or half day of intensive skiing in Baqueira Beret. Technique, practice and exploring the resort, always alongside a professional who adapts to your pace.",
  },
  safari: {
    title: "Safari",
    tagline: "Explore the best corners",
    description:
      "Explore Baqueira like a local. We guide you through the best corners and areas of the resort for the day's conditions, with no queues or time wasted.",
  },
  freeride: {
    title: "Freeride",
    tagline: "The mountain at its purest",
    description:
      "Discover Baqueira beyond the pistes. Learn to read the mountain, choose your lines and move with judgement on untracked snow, always alongside professionals.",
  },
  "equipment-consultancy": {
    title: "Equipment Advice",
    tagline: "We help you choose what suits you best",
    description:
      "Personalised online advice for buying the ski equipment you really need: we search, compare and tell you what to buy and where, based on your level and budget.",
  },
};

const PER_HOUR = "/ hour";
const EXTRA = "€5 / person per hour";

export const tariffsEn: TariffTexts = {
  "clases-privadas": {
    title: "Private Lessons",
    priceNote: PER_HOUR,
    extra: EXTRA,
    maxPeople: "Maximum 4 people",
  },
  "kids-family": {
    title: "Kids & Friends & Family",
    priceNote: PER_HOUR,
    extra: EXTRA,
    maxPeople: "Maximum 6 people",
  },
  tardeo: {
    title: "Kaiten Afternoon (-25%)",
    priceNote: PER_HOUR,
    extra: EXTRA,
    maxPeople: "Maximum 4 people",
  },
  "kaiten-2-5": {
    title: "Kaiten 2.5",
    extra: EXTRA,
    maxPeople: "Maximum 4 people",
  },
  "safari-3h": {
    title: "Safari 3h",
    extra: EXTRA,
    maxPeople: "Maximum 6 people",
  },
  "safari-6h": {
    title: "Safari 6h",
    extra: EXTRA,
    maxPeople: "Maximum 6 people",
  },
  "half-day": {
    title: "Half Day 4h",
    extra: EXTRA,
    maxPeople: "Maximum 4 people",
  },
  "full-day": {
    title: "Full Day",
    extra: EXTRA,
    maxPeople: "Maximum 4 people",
  },
  "freeride-4h": {
    title: "Freeride 4h",
    extra: EXTRA,
    maxPeople: "Maximum 4 people",
  },
  "freeride-full-day": {
    title: "Freeride Full Day",
    extra: EXTRA,
    maxPeople: "Maximum 4 people",
  },
  "equipment-consultancy": {
    title: "Equipment Advice",
    maxPeople: "Maximum 1 person / hour",
  },
};

export const levelsEn: LevelTexts = {
  A: { description: "I have never skied", reference: "—" },
  A1: { description: "I can hold a snowplough", reference: "Magic carpet" },
  A2: {
    description: "I'm starting to turn in a snowplough",
    reference: "Magic carpet or blue carpet",
  },
  B: {
    description: "I turn in a snowplough on green and blue runs",
    reference: "Carpets or Cabana",
  },
  B1: {
    description: "Solid snowplough on blue runs",
    reference: "Cabana, PLA, the run home...",
  },
  C: {
    description: "I'm starting parallel turns on blue and red runs",
    reference: "PLA, the run home on gentle reds",
  },
  D: {
    description: "Parallel turns on all kinds of runs",
    reference: "Red runs and easy blacks",
  },
  E: {
    description: "Carved parallel turns",
    reference: "Black runs and gentle off-piste",
  },
  F: {
    description: "Carved parallel turns on piste and off-piste",
    reference: "Blacks and difficult off-piste",
  },
};
