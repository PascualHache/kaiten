export type Color = 'verde' | 'naranja'

export interface Feature {
  emoji: string
  title: string
  desc: string | string[]
}

export interface InfoItem {
  emoji: string
  label: string
  content: string | string[]
}

export interface Activity {
  id: string
  calSlug: string
  title: string
  color: Color
  features: Feature[]
  info: InfoItem[]
  cta: {
    headline: string
    subline: string
    buttonText: string
  }
}

export const ACTIVITIES: Activity[] = [
  {
    id: 'full-day',
    calSlug: 'full-day-half-day-en-baqueira',
    title: 'Full Day | Half Day en Baqueira',
    color: 'verde',
    features: [
      {
        emoji: '🎿',
        title: 'Un día completo para mejorar de verdad',
        desc: 'Una experiencia de esquí intensiva en Baqueira Beret donde combinamos técnica, práctica y disfrute durante toda la jornada, siempre acompañado por un profesional.',
      },
      {
        emoji: '🦅',
        title: 'Evolución real en un solo día',
        desc: 'El trabajo continuo y el feedback constante permiten una mejora mucho más rápida y sólida que en sesiones cortas.',
      },
      {
        emoji: '⛰️',
        title: 'Esquí, aprendizaje y recorrido de estación',
        desc: 'No es una clase rígida. Es una experiencia dinámica donde alternamos técnica y exploración de diferentes zonas según condiciones y progresión.',
      },
    ],
    info: [
      {
        emoji: '🎯',
        label: 'Enfoque',
        content: 'Mejora técnica + conocimiento de la estación durante una jornada completa.',
      },
      {
        emoji: '⏱️',
        label: 'Duración',
        content: [
          'Half Day: media jornada de esquí con enfoque técnico y práctico.',
          'Full Day: día completo de esquí con progresión continua y adaptación al ritmo del cliente.',
        ],
      },
      {
        emoji: '🎿',
        label: 'Nivel',
        content: 'Todos los niveles. La experiencia se adapta completamente al nivel y objetivos del esquiador.',
      },
      {
        emoji: '👥',
        label: 'Participantes',
        content: 'Desde 1 persona hasta pequeños grupos (recomendado máximo 4 personas para un trabajo más efectivo).',
      },
      {
        emoji: '🎓',
        label: 'Qué lo diferencia del Safari',
        content: [
          'Safari → descubrir la estación con posibilidad de juntar miembros de diferentes niveles',
          'Full Day → mejorar tu esquí mientras la recorres',
        ],
      },
      {
        emoji: '🍽️',
        label: 'Pausa comida',
        content: 'Incluida en modalidad Full Day, con ritmo flexible según el grupo. (Comida no incluida)',
      },
      {
        emoji: '💡',
        label: 'Ventaja del formato',
        content: 'Más horas seguidas de práctica = evolución más rápida, estable y visible.',
      },
    ],
    cta: {
      headline: 'Un día para mejorar de verdad',
      subline: 'Esquí, progresión y disfrute en una experiencia completamente personalizada en Baqueira.',
      buttonText: 'Reserva tu Full Day / Half Day',
    },
  },
  {
    id: 'safari',
    calSlug: 'safari-en-baqueira',
    title: 'Safari en Baqueira',
    color: 'verde',
    features: [
      {
        emoji: '⛰️',
        title: 'Explora Baqueira como un local',
        desc: 'Descubre los mejores rincones, pistas y recorridos de la estación acompañado por expertos que conocen Baqueira al detalle.',
      },
      {
        emoji: '🦅',
        title: 'Más esquí, menos tiempo perdido',
        desc: 'Aprovecha cada minuto en la nieve. Te guiamos por las mejores zonas según las condiciones del día, evitando colas y desplazamientos innecesarios.',
      },
      {
        emoji: '✨',
        title: 'Una experiencia diseñada para ti',
        desc: 'Recorridos personalizados según tu nivel, ritmo e intereses. Tú solo te preocupas de disfrutar.',
      },
    ],
    info: [
      {
        emoji: '🎿',
        label: 'Nivel mínimo',
        content: 'Poder descender pistas azules con fluidez.',
      },
      {
        emoji: '⏱️',
        label: 'Duración',
        content: [
          '3 horas: descubrimiento de un sector (Beret o Bonaigua).',
          '6 horas: recorrido general por gran parte de la estación.',
        ],
      },
      {
        emoji: '👥',
        label: 'Participantes',
        content: 'Desde 1 persona - Recomendado hasta 4 participantes por grupo.',
      },
      {
        emoji: '🎓',
        label: 'No es una clase de esquí',
        content: 'Conoce la estación como un local, optimiza tu tiempo en la nieve y disfruta de una experiencia totalmente personalizada.',
      },
    ],
    cta: {
      headline: 'Descubre Baqueira como un local',
      subline: '',
      buttonText: 'Reserva tu Safari',
    },
  },
  {
    id: 'clases-particulares',
    calSlug: 'clases-particulares-en-baqueira',
    title: 'Clases Particulares en Baqueira',
    color: 'verde',
    features: [
      {
        emoji: '🎯',
        title: 'Mejora tu esquí desde el primer minuto',
        desc: 'Un servicio totalmente personalizado pensado para que progreses rápido y de forma eficaz. Analizamos tu nivel, detectamos lo que necesitas y trabajamos contigo en cada bajada.',
      },
      {
        emoji: '🦅',
        title: 'Atención total, corrección constante',
        desc: 'Todo gira en torno a ti. Recibes feedback continuo en tiempo real para corregir errores, ganar confianza y mejorar tu técnica de forma visible.',
      },
      {
        emoji: '🚀',
        title: 'La forma más rápida de evolucionar en la nieve',
        desc: 'Es el formato con mayor capacidad de mejora: más control, más seguridad y más disfrute en pista desde el primer día.',
      },
    ],
    info: [
      {
        emoji: '🎿',
        label: 'Nivel y edad',
        content: 'Sin mínimo ni máximo. Desde principiantes hasta esquiadores avanzados de cualquier edad.',
      },
      {
        emoji: '👥',
        label: 'Participantes',
        content: [
          'Desde 1 persona hasta 5 por grupo.',
          'Lo importante es que el nivel sea homogéneo para garantizar una progresión efectiva.',
        ],
      },
      {
        emoji: '⏱️',
        label: 'Duración',
        content: [
          'Sin mínimo ni máximo de horas.',
          'Recomendación: sesiones de al menos 2 horas y en varios días consecutivos para maximizar la evolución.',
        ],
      },
    ],
    cta: {
      headline: 'Aprende más en menos tiempo',
      subline: 'Más confianza, más control y una evolución real en cada sesión.',
      buttonText: 'Reserva tu clase particular',
    },
  },
  {
    id: 'freeride',
    calSlug: 'freeride-en-baqueira',
    title: 'Freeride en Baqueira',
    color: 'naranja',
    features: [
      {
        emoji: '❄️',
        title: 'Explora la montaña en su estado más puro',
        desc: 'Descubre Baqueira Beret más allá de las pistas. Una experiencia fuera de pista, donde cada bajada es un desafío.',
      },
      {
        emoji: '🦅',
        title: 'Más libertad, más control, más montaña',
        desc: 'Te guiamos por zonas junto a pista e itinerarios de freeride adaptados a tu nivel, combinando seguridad, progresión y disfrute en cada descenso.',
      },
      {
        emoji: '⛰️',
        title: 'Una experiencia para progresar en el fuera de pista',
        desc: 'Aprenderás a leer la montaña, elegir líneas y moverte con criterio en nieve no pisada, siempre acompañado por profesionales.',
      },
    ],
    info: [
      {
        emoji: '🎿',
        label: 'Nivel mínimo',
        content: 'Nivel intermedio-alto en pista (control en pistas rojas), no importa que sea tu primera vez haciendo freeride.',
      },
      {
        emoji: '⏱️',
        label: 'Duración',
        content: [
          '4 horas mínimo: iniciación o progresión en freeride en zonas controladas.',
          'Día completo: experiencia más completa con mayor recorrido y variedad de terrenos.',
        ],
      },
      {
        emoji: '👥',
        label: 'Participantes',
        content: 'Desde 1 persona. Recomendado hasta 4 personas (máximo 6 en grupos homogéneos de nivel similar).',
      },
      {
        emoji: '🎓',
        label: 'Qué es esta experiencia',
        content: 'No es solo esquiar fuera de pista: es aprender a moverse en montaña, leer el terreno y tomar decisiones en nieve no pisada.',
      },
      {
        emoji: '❌',
        label: 'No incluye',
        content: 'Desplazamientos, material de seguridad (ARVA, pala y sonda).',
      },
    ],
    cta: {
      headline: 'Vive la montaña de otra forma',
      subline: 'Sensación de libertad, líneas únicas y la experiencia de esquiar la nieve más pura de Baqueira Beret.',
      buttonText: 'Reserva tu Freeride',
    },
  },
  {
    id: 'friends-family',
    calSlug: 'friends-family',
    title: 'Kids & Friends & Family en Baqueira',
    color: 'verde',
    features: [
      {
        emoji: '🎿',
        title: 'Aprende y disfruta con los tuyos',
        desc: 'Una experiencia de esquí en grupo pensada para amigos o familia, donde combinas aprendizaje, diversión y la comodidad de estar acompañado por los tuyos.',
      },
      {
        emoji: '🦅',
        title: 'Progresión sin perder la parte social',
        desc: [
          'Cada persona progresa a su ritmo dentro de una dinámica flexible, adaptando la clase para que todos sumen, disfruten y evolucionen.',
          'Nivel iniciación → primeros pasos en la nieve',
          'Nivel intermedio → evolución y control',
          'Nivel avanzado → perfeccionamiento',
        ],
      },
      {
        emoji: '⛰️',
        title: 'Un equilibrio perfecto entre aprendizaje y diversión',
        desc: 'Un formato que combina evolución técnica real con un ambiente relajado y cercano en la nieve.',
      },
    ],
    info: [
      {
        emoji: '👥',
        label: 'Tipo de grupo',
        content: 'Grupos cerrados (no clases abiertas). Vas siempre con tu propio grupo de amigos o familia.',
      },
      {
        emoji: '🎿',
        label: 'Niveles',
        content: [
          'Iniciación, intermedio y avanzado.',
          'Es posible mezclar niveles, aunque se recomienda que sean lo más homogéneos posible para una mejor progresión.',
        ],
      },
      {
        emoji: '⏱️',
        label: 'Duración',
        content: [
          'Sin mínimo ni máximo de horas.',
          'Recomendación: sesiones de al menos 2 horas y en varios días consecutivos para maximizar la evolución.',
          'Cuanto más tiempo en pista, mayor será la evolución y el aprovechamiento.',
        ],
      },
      {
        emoji: '👥',
        label: 'Participantes',
        content: 'Recomendado entre 4 y 6 personas por grupo para mantener una buena atención y calidad de enseñanza.',
      },
      {
        emoji: '🎓',
        label: 'Qué es este formato',
        content: 'No es una clase colectiva abierta. Es un grupo privado donde se adapta la enseñanza al nivel y dinámica de tu propio grupo.',
      },
    ],
    cta: {
      headline: 'Comparte la nieve con los tuyos',
      subline: 'Aprende, mejora y disfruta en grupo con una experiencia flexible, divertida y totalmente adaptada.',
      buttonText: 'Reserva tu Friends & Family',
    },
  },
  {
    id: 'tardeo',
    calSlug: 'experiencia-de-tardeo-20',
    title: 'Experiencia Tardeo -15% en Baqueira',
    color: 'verde',
    features: [
      {
        emoji: '🎿',
        title: 'Esquí más tranquilo, fluido y agradable',
        desc: 'Una experiencia pensada para disfrutar de Baqueira Beret en horario de tarde, cuando la estación está más despejada y el ritmo es más relajado.',
      },
      {
        emoji: '📷',
        title: 'Mejor luz y menos afluencia',
        desc: 'Esquía con pistas más vacías y aprovecha una luz perfecta para disfrutar del paisaje y hacer fotos en un entorno más bonito y tranquilo.',
      },
      {
        emoji: '💰',
        title: 'Tarifa especial con 15% de descuento',
        desc: 'Disfruta de esta experiencia en horario de tarde con un precio reducido del 15% respecto al horario habitual.',
      },
    ],
    info: [
      {
        emoji: '🎿',
        label: 'Nivel',
        content: 'Sin mínimo ni máximo. Desde principiantes hasta esquiadores avanzados de cualquier edad.',
      },
      {
        emoji: '👥',
        label: 'Participantes',
        content: [
          'Desde 1 persona hasta 5 por grupo.',
          'Lo importante es que el nivel sea homogéneo para garantizar una progresión efectiva.',
        ],
      },
      {
        emoji: '⏱️',
        label: 'Duración',
        content: 'Sin mínimo ni máximo de horas. Experiencia en horario de tarde (desde las 2pm).',
      },
      {
        emoji: '🎓',
        label: 'Qué es esta experiencia',
        content: 'No es un producto técnico específico, sino una forma optimizada de esquiar en la estación en el mejor momento del día.',
      },
    ],
    cta: {
      headline: 'Esquí con más calma y mejores sensaciones',
      subline: 'Menos colas, más fluidez y una experiencia más relajada en Baqueira Beret.',
      buttonText: 'Reserva tu Experiencia Tarde',
    },
  },
  {
    id: 'kaiten-2-5',
    calSlug: 'experiencia-kaiten-2.5',
    title: 'Programas Kaiten',
    color: 'verde',
    features: [
      {
        emoji: '⭐',
        title: 'La experiencia Kaiten en 2 horas y media',
        desc: 'Una sesión intensiva diseñada para sacar el máximo partido a tu tiempo en la nieve con el sello Kaiten.',
      },
      {
        emoji: '🎿',
        title: 'Técnica y progresión concentrada',
        desc: 'Maximiza tu evolución en un formato de tiempo reducido, con seguimiento personalizado y un ritmo adaptado a tu nivel.',
      },
    ],
    info: [
      {
        emoji: '⏱️',
        label: 'Duración',
        content: '2 horas y 30 minutos.',
      },
      {
        emoji: '🎿',
        label: 'Nivel',
        content: 'Adaptado a todos los niveles.',
      },
    ],
    cta: {
      headline: 'Vive la experiencia Kaiten',
      subline: 'El sello Kaiten en un formato de 2.5 horas.',
      buttonText: 'Reserva tu Experiencia Kaiten 2.5',
    },
  },
  {
    id: 'equipment-consultancy',
    calSlug: 'asesoramiento-compra-material-ski',
    title: 'Asesoramiento online de compra de material de ski',
    color: 'verde',
    features: [
      {
        emoji: '🎯',
        title: 'Encuentra el material que realmente necesitas',
        desc: 'Te ayudamos a elegir el material de ski que mejor se adapta a tu nivel, estilo, objetivos y presupuesto. Sin marcas impuestas, solo lo que realmente necesitas.',
      },
      {
        emoji: '🔍',
        title: 'Buscamos y comparamos por ti',
        desc: 'Analizamos las mejores opciones disponibles en tiendas online especializadas para encontrar la mejor relación calidad-precio.',
      },
      {
        emoji: '🛒',
        title: 'Te recomendamos dónde comprar y qué necesitas',
        desc: 'Recibes una selección personalizada con enlaces directos, precios actualizados y nuestra recomendación clara de dónde comprar cada producto.',
      },
      {
        emoji: '⏱️',
        title: 'Ahorra tiempo, dinero y evita errores',
        desc: 'Evita compras poco acertadas y equípate con confianza con el asesoramiento de expertos que conocen el material y el mercado.',
      },
    ],
    info: [
      {
        emoji: '📋',
        label: 'Qué incluye',
        content: 'Asesoramiento personalizado online para recomendarte el material de ski que necesitas según tu perfil y objetivos.',
      },
      {
        emoji: '⚙️',
        label: 'Cómo funciona',
        content: 'Respondes a un breve cuestionario sobre tu nivel, estilo, objetivos y presupuesto. Analizamos opciones en tiendas online y te enviamos nuestras recomendaciones con enlaces y precios.',
      },
      {
        emoji: '👥',
        label: 'Para quién es',
        content: 'Esquiadores de todos los niveles que quieren comprar material nuevo o renovar su equipo con la mejor elección.',
      },
      {
        emoji: '💶',
        label: 'Precio',
        content: 'Desde XX € por asesoramiento completo.',
      },
    ],
    cta: {
      headline: 'Equípate con las mejores decisiones',
      subline: 'Asesoramiento experto para comprar el material de ski que realmente necesitas.',
      buttonText: 'Reserva tu asesoramiento',
    },
  },
]
