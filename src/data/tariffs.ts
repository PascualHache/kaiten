export interface Tariff {
  id: string;
  /** Row number — repeated when one experience has several formats. */
  number: string;
  /** calSlug of the matching activity (links tarifa → actividad). */
  slug: string;
  title: string;
  /** "Tarifa por persona" column. */
  price: string;
  /** Unit appended to the price, e.g. "/ hora". */
  priceNote?: string;
  /** "Extra / persona" column — omitted when the row has no extra. */
  extra?: string;
  /** Group limit, shown under the extra. */
  maxPeople: string;
}

/** First tariff row matching an activity's calSlug (rows share a slug when
    one activity has several formats — the cheapest/shortest comes first). */
export function findTariff(slug: string): Tariff | undefined {
  return TARIFFS.find((t) => t.slug === slug);
}

/** "Desde 64€ / hora" — the entry price shown next to an activity. */
export function formatFromPrice(slug: string): string {
  const tariff = findTariff(slug);
  if (!tariff) return "—";
  return `Desde ${tariff.price}${tariff.priceNote ? ` ${tariff.priceNote}` : ""}`;
}

export const TARIFFS: Tariff[] = [
  {
    id: "clases-privadas",
    number: "01",
    slug: "clases-particulares-en-baqueira",
    title: "Clases Privadas",
    price: "64€",
    priceNote: "/ hora",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 4 personas",
  },
  {
    id: "kids-family",
    number: "02",
    slug: "friends-family",
    title: "Kids & Friends & Family",
    price: "64€",
    priceNote: "/ hora",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 6 personas",
  },
  {
    id: "tardeo",
    number: "03",
    slug: "experiencia-de-tardeo-20",
    title: "Tardeo Kaiten (-25%)",
    price: "48€",
    priceNote: "/ hora",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 4 personas",
  },
  {
    id: "kaiten-2-5",
    number: "04",
    slug: "experiencia-kaiten-2.5",
    title: "Kaiten 2.5",
    price: "162€",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 4 personas",
  },
  {
    id: "safari-3h",
    number: "05",
    slug: "safari-en-baqueira",
    title: "Safari 3h",
    price: "200€",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 6 personas",
  },
  {
    id: "safari-6h",
    number: "05",
    slug: "safari-en-baqueira",
    title: "Safari 6h",
    price: "350€",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 6 personas",
  },
  {
    id: "half-day",
    number: "06",
    slug: "full-day-half-day-en-baqueira",
    title: "Half Day 4h",
    price: "250€",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 4 personas",
  },
  {
    id: "full-day",
    number: "06",
    slug: "full-day-half-day-en-baqueira",
    title: "Full Day",
    price: "400€",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 4 personas",
  },
  {
    id: "freeride-4h",
    number: "07",
    slug: "freeride-en-baqueira",
    title: "Freeride 4h",
    price: "250€",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 4 personas",
  },
  {
    id: "freeride-full-day",
    number: "07",
    slug: "freeride-en-baqueira",
    title: "Freeride Full Day",
    price: "400€",
    extra: "5€ / persona y hora",
    maxPeople: "Máximo 4 personas",
  },
  {
    id: "equipment-consultancy",
    number: "08",
    slug: "asesoramiento-compra-material-ski",
    title: "Asesoramiento de Material",
    price: "30€",
    maxPeople: "Máximo 1 persona / hora",
  },
];
