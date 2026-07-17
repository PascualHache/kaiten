export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  backgroundColor: string
  textColor: string
  reservasPath: string
}

export const SERVICES: Service[] = [
  {
    id: 'full-half-day',
    title: 'Full o half day',
    tagline: 'Una jornada completa de esquí',
    description:
      'Una jornada completa o media jornada de esquí intensivo en Baqueira Beret. Técnica, práctica y recorrido de estación, siempre acompañado por un profesional adaptado a tu ritmo.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/full-day-half-day-en-baqueira',
  },
  {
    id: 'particulares',
    title: 'Particulares',
    tagline: 'Atención 100% personalizada',
    description:
      'Atención total y corrección constante. Trabajamos contigo en cada bajada para que progreses rápido, ganes confianza y mejores tu técnica desde el primer momento.',
    backgroundColor: 'var(--color-lavender)',
    textColor: 'var(--color-lime)',
    reservasPath: '/reservas/clases-particulares-en-baqueira',
  },
  {
    id: 'safari',
    title: 'Safari',
    tagline: 'Explora los mejores rincones',
    description:
      'Explora Baqueira como un local. Te guiamos por los mejores rincones y zonas de la estación según las condiciones del día, sin colas ni tiempo perdido.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/safari-en-baqueira',
  },
  {
    id: 'kaiten-2-5',
    title: 'KAITEN 2.5',
    tagline: 'El sello Kaiten en 2.5 h',
    description:
      'El sello Kaiten en un formato de 2 horas y media. Una sesión intensiva para sacar el máximo partido a tu tiempo en la nieve con seguimiento personalizado.',
    backgroundColor: 'var(--color-forest)',
    textColor: 'var(--color-magenta)',
    reservasPath: '/reservas/experiencia-kaiten-2.5',
  },
  {
    id: 'freeride',
    title: 'Freeride',
    tagline: 'La montaña en estado puro',
    description:
      'Descubre Baqueira más allá de las pistas. Aprende a leer la montaña, elegir líneas y moverte con criterio en nieve no pisada, siempre acompañado por profesionales.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/freeride-en-baqueira',
  },
]
