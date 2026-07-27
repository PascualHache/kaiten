import kaitenBg from '../assets/images/kaiten_bg.png'
import clasesPrivadas from '../assets/images/clases_privadas.png'
import clasesFriendsFamily from '../assets/images/clases_friends_family.png'
import clasesKaiten25 from '../assets/images/clases_kaiten25.png'
import clasesTardeo from '../assets/images/clases_tardeo.png'
import clasesFreeride from '../assets/images/clases_freeride.png'
import clasesEquipment from '../assets/images/clases_equipment.png'

export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  backgroundColor: string
  textColor: string
  reservasPath: string
}

export const SERVICES: Service[] = [
  {
    id: 'particulares',
    title: 'Clases Privadas',
    tagline: 'Atención 100% personalizada',
    description:
      'Atención total y corrección constante. Trabajamos contigo en cada bajada para que progreses rápido, ganes confianza y mejores tu técnica desde el primer momento.',
    image: clasesPrivadas,
    backgroundColor: 'var(--color-lavender)',
    textColor: 'var(--color-lime)',
    reservasPath: '/reservas/clases-particulares-en-baqueira',
  },
  {
    id: 'friends-family',
    title: 'Kids & Friends & Family',
    tagline: 'Disfrutad juntos, al mismo nivel.',
    description:
      'Experiencia de esquí en grupo pensada para amigos o familia, donde combinas aprendizaje, diversión y la comodidad de estar acompañado por los tuyos. Cada persona progresa a su ritmo dentro de una dinámica flexible.',
    image: clasesFriendsFamily,
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/friends-family',
  },
  {
    id: 'kaiten-2-5',
    title: 'Programas Kaiten',
    tagline: 'El sello Kaiten en 2.5 h',
    description:
      'El sello Kaiten en un formato de 2 horas y media. Una sesión intensiva para sacar el máximo partido a tu tiempo en la nieve con seguimiento personalizado.',
    image: clasesKaiten25,
    backgroundColor: 'var(--color-forest)',
    textColor: 'var(--color-magenta)',
    reservasPath: '/reservas/experiencia-kaiten-2.5',
  },
  {
    id: 'tardeo',
    title: 'Tardeo (-15%)',
    tagline: 'Esquí de tarde, más por menos.',
    description:
      'Disfruta de Baqueira Beret en horario de tarde, cuando la estación está más despejada y el ritmo es más relajado. Mejor luz, menos afluencia y una tarifa especial con un 15% de descuento.',
    image: clasesTardeo,
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/experiencia-de-tardeo-20',
  },
  {
    id: 'full-half-day',
    title: 'Full o half day',
    tagline: 'Una jornada completa de esquí',
    description:
      'Una jornada completa o media jornada de esquí intensivo en Baqueira Beret. Técnica, práctica y recorrido de estación, siempre acompañado por un profesional adaptado a tu ritmo.',
    image: kaitenBg,
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/full-day-half-day-en-baqueira',
  },
  {
    id: 'safari',
    title: 'Safari',
    tagline: 'Explora los mejores rincones',
    description:
      'Explora Baqueira como un local. Te guiamos por los mejores rincones y zonas de la estación según las condiciones del día, sin colas ni tiempo perdido.',
    image: kaitenBg,
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/safari-en-baqueira',
  },
  {
    id: 'freeride',
    title: 'Freeride',
    tagline: 'La montaña en estado puro',
    description:
      'Descubre Baqueira más allá de las pistas. Aprende a leer la montaña, elegir líneas y moverte con criterio en nieve no pisada, siempre acompañado por profesionales.',
    image: clasesFreeride,
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/freeride-en-baqueira',
  },
  {
    id: 'equipment-consultancy',
    title: 'Equipment Consultancy',
    tagline: 'Te ayudamos a elegir lo que mejor va contigo.',
    description:
      'Asesoramiento online personalizado para comprar el material de ski que realmente necesitas: buscamos, comparamos y te decimos qué y dónde comprar según tu nivel y presupuesto.',
    image: clasesEquipment,
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/asesoramiento-compra-material-ski',
  },
]
