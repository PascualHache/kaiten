export interface Tariff {
  id: string
  number: string
  category: 'privada' | 'especial'
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
    category: 'privada',
    slug: 'clases-particulares-en-baqueira',
    title: 'Clases Privadas',
    features: [
      'Duración flexible',
      '1-5 personas',
      'Todos los niveles',
    ],
    price: '-€',
  },
  {
    id: 'safari',
    number: '02',
    category: 'especial',
    slug: 'safari-en-baqueira',
    title: 'Safari 3h',
    features: [
      '3 horas',
      '1-4 personas',
      'Recorrido de la estación',
    ],
    price: '200€',
  },
  {
    id: 'full-day',
    number: '03',
    category: 'privada',
    slug: 'full-day-half-day-en-baqueira',
    title: 'Full Day',
    subtitle: '8 horas cover',
    features: [
      'Jornada completa (8h)',
      '1-2 personas',
      'Técnica + recorrido de estación',
    ],
    price: '400€',
  },
  {
    id: 'half-day',
    number: '04',
    category: 'privada',
    slug: 'full-day-half-day-en-baqueira',
    title: 'Half Day 4h',
    features: [
      'Media jornada (4h)',
      '1-3 personas',
      'Técnica + recorrido de estación',
    ],
    price: '250€',
  },
  {
    id: 'freeride',
    number: '05',
    category: 'especial',
    slug: 'freeride-en-baqueira',
    title: 'Freeride 4h',
    features: [
      '4 horas mínimo',
      '1-4 personas',
      'Nivel intermedio-alto requerido',
    ],
    price: '350€',
  },
  {
    id: 'kids-family',
    number: '06',
    category: 'especial',
    slug: 'friends-family',
    title: 'Kids & Friends & Family',
    features: [
      'Grupos cerrados (no abiertos)',
      '4-6 personas recomendado',
      'Todos los niveles',
    ],
    price: '65€',
    priceNote: '/ hora',
  },
  {
    id: 'kaiten-programs',
    number: '07',
    category: 'privada',
    slug: 'experiencia-kaiten-2.5',
    title: 'Kaiten Programs',
    subtitle: 'programas de mejora',
    features: [
      'Kaiten 2.3 · 2 días · 3 h/día',
      'Kaiten 2.5 · 3 días · 2,5 h/día',
      'Kaiten 3.2 · 3 días · 2 h/día',
      'Kaiten 3.3 · 3 días · 3 h/día',
    ],
    price: '-€',
  },
  {
    id: 'tardeo',
    number: '08',
    category: 'especial',
    slug: 'experiencia-de-tardeo-20',
    title: 'Tardeo (-15%)',
    features: [
      'Horario de tarde (desde 14:00)',
      '1-5 personas',
      '-15% de descuento aplicado',
    ],
    price: '-€',
  },
  {
    id: 'equipment-consultancy',
    number: '09',
    category: 'especial',
    slug: 'asesoramiento-compra-material-ski',
    title: 'Equipment Consultancy',
    features: [
      'Asesoramiento 100% online',
      'Selección personalizada',
      'Comparativa de tiendas',
      'Enlaces y precios actualizados',
      'Para todos los niveles',
    ],
    price: '-€',
  },
]
