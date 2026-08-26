export interface Tariff {
  id: string
  number: string
  /** calSlug of the matching activity (links tariff → actividad). */
  slug: string
  title: string
  subtitle?: string
  features: string[]
  price: string
  priceNote?: string
}

export const TARIFFS: Tariff[] = [
  {
    id: 'clases-privadas',
    number: '01',
    slug: 'clases-particulares-en-baqueira',
    title: 'Clases Privadas',
    features: [
      'Duración flexible',
      'Máximo 4 personas (consultar para más personas)',
      '+10€ persona/hora extra',
      'Todos los niveles',
    ],
    price: '68€',
    priceNote: '/ hora',
  },
  {
    id: 'kids-family',
    number: '02',
    slug: 'friends-family',
    title: 'Kids & Friends & Family',
    features: [
      'Grupos cerrados (no abiertos)',
      'Máximo 4 personas (consultar para más personas)',
      '+10€ persona/hora extra',
      'Todos los niveles',
    ],
    price: '68€',
    priceNote: '/ hora',
  },
  {
    id: 'kaiten-programs',
    number: '03',
    slug: 'experiencia-kaiten-2.5',
    title: 'Kaiten Programs',
    subtitle: 'programas de mejora',
    features: [
      'Kaiten 2.3 · 200€',
      'Kaiten 3.2 · 388€',
      'Kaiten 3.3 · 550€',
      'Máximo 4 personas (consultar para más personas)',
      '+10€ persona/hora extra',
    ],
    price: '200€ – 550€',
    priceNote: 'según programa',
  },
  {
    id: 'tardeo',
    number: '04',
    slug: 'experiencia-de-tardeo-20',
    title: 'Tardeo (-15%)',
    features: [
      'Horario de tarde (desde 14:00)',
      'Máximo 4 personas (consultar para más personas)',
      '+10€ persona/hora extra',
      '-15% de descuento aplicado',
    ],
    price: '50€',
    priceNote: '/ hora',
  },
  {
    id: 'full-day',
    number: '05',
    slug: 'full-day-half-day-en-baqueira',
    title: 'Full Day / Half Day',
    subtitle: 'full day incluye 1h para comer',
    features: [
      'Full Day: jornada completa · 400€',
      'Half Day: media jornada · 250€',
      'Máximo 4 personas (consultar para más personas)',
      '+5€ persona/hora extra',
      'Técnica + recorrido de estación',
    ],
    price: '400€ / 250€',
  },
  {
    id: 'safari',
    number: '06',
    slug: 'safari-en-baqueira',
    title: 'Safari 3h',
    features: [
      '3 horas',
      'Máximo 4 personas (consultar para más personas)',
      '+5€ persona/hora extra',
      'Recorrido de la estación',
    ],
    price: '200€',
  },
  {
    id: 'freeride',
    number: '07',
    slug: 'freeride-en-baqueira',
    title: 'Freeride 4h / Full Day',
    features: [
      'Freeride 4h · 250€',
      'Freeride Full Day · 400€',
      'Máximo 4 personas (consultar para más personas)',
      '+10€ persona/hora extra',
      'Nivel intermedio-alto requerido',
    ],
    price: '250€ / 400€',
  },
  {
    id: 'equipment-consultancy',
    number: '08',
    slug: 'asesoramiento-compra-material-ski',
    title: 'Asesoramiento de Material',
    features: [
      'Asesoramiento: 20€',
      'Asesoramiento y compra: 30€',
      'Selección personalizada',
      'Comparativa de tiendas y enlaces actualizados',
    ],
    price: '20€ – 30€',
    priceNote: 'según servicio',
  },
]
