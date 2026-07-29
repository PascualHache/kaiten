export interface TeamMember {
  id: string
  name: string
  role: string
  quote: string
  bio: string
  skills: string[]
  pillars: string[]
}

const AITOR: Omit<TeamMember, 'id'> = {
  name: 'Aitor',
  role: 'Técnico Deportivo Superior en Esquí Alpino (TD3)',
  quote: 'La montaña es mi forma de vida.',
  bio: 'Soy Aitor, profesor de esquí y guía de montaña. Tras años de experiencia en diferentes estaciones y valles del Pirineo, el Valle de Aran se convirtió en mi hogar. Si se busca, mejora por una cima.',
  skills: [
    'Técnica & Aprendizaje',
    'Seguridad & Confianza',
    'Salida en Freeride',
    'Motivación',
  ],
  pillars: ['Técnica', 'Seguridad', 'Experiencia Personalizada'],
}

export const TEAM: TeamMember[] = [
  { id: 'aitor-1', ...AITOR },
  { id: 'aitor-2', ...AITOR },
  { id: 'aitor-3', ...AITOR },
]
