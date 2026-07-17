export interface Tariff {
  id: string
  number: string
  category: 'privada' | 'especial'
  title: string
  subtitle?: string
  features: string[]
  price: string
  priceNote?: string
}

export const TARIFFS: Tariff[] = [
  {
    id: 'full-day',
    number: '01',
    category: 'privada',
    title: 'Full Day',
    subtitle: '8 horas cover',
    features: [
      'Jornada completa',
      '1-2 personas',
      'Particular y fuera de pista',
      'Instructor titulado',
      'Seguro de RC',
      'Atención personalizada',
    ],
    price: '400€',
  },
  {
    id: 'half-day',
    number: '02',
    category: 'privada',
    title: 'Half Day 4h',
    features: [
      '4 horas',
      '1-3 personas',
      'Particular y fuera de pista',
      'Instructor titulado',
      'Seguro de RC',
      'Atención personalizada',
    ],
    price: '250€',
  },
  {
    id: 'kaiten-2-5',
    number: '03',
    category: 'privada',
    title: 'Kaiten 2.5',
    features: [
      '2.5 horas',
      '1-4 personas',
      'Particular y fuera de pista',
      'Instructor titulado',
      'Seguro de RC',
      'Atención personalizada',
    ],
    price: '125€',
  },
  {
    id: 'safari',
    number: '04',
    category: 'especial',
    title: 'Safari 3h',
    features: [
      '3 horas',
      '1-4 personas',
      'Particular y fuera de pista',
      'Instructor titulado',
      'Seguro de RC',
      'Atención personalizada',
    ],
    price: '200€',
  },
  {
    id: 'freeride',
    number: '05',
    category: 'especial',
    title: 'Freeride 4h',
    features: [
      '4 horas',
      '1-2 personas',
      'Particular y fuera de pista',
      'Instructor titulado',
      'Seguro de RC',
      'Atención personalizada',
    ],
    price: '350€',
  },
  {
    id: 'kids-family',
    number: '06',
    category: 'especial',
    title: 'Kids & Family',
    features: [
      '4 horas',
      '1-3 personas',
      'Particular',
      'Instructor titulado',
      'Seguro de RC',
      'Atención personalizada',
    ],
    price: '65€',
    priceNote: '/ hora',
  },
]
