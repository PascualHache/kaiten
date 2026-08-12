import type { Level as SkillLevel } from './activities'

export interface Level {
  code: string
  description: string
  reference: string
  tier: SkillLevel
}

export const LEVELS: Level[] = [
  {
    code: 'A',
    description: 'Nunca he esquiado',
    reference: '—',
    tier: 'principiante',
  },
  {
    code: 'A1',
    description: 'Mantengo la cuña',
    reference: 'Cinta guardería',
    tier: 'principiante',
  },
  {
    code: 'A2',
    description: 'Empiezo a girar en cuña',
    reference: 'Cinta guardería o cinta azul',
    tier: 'principiante',
  },
  {
    code: 'B',
    description: 'Giro en cuña en pistas verdes y azules',
    reference: 'Cintas o Cabana',
    tier: 'principiante',
  },
  {
    code: 'B1',
    description: 'Cuña consolidada en pistas azules',
    reference: 'Cabana, PLA, vuelta a casa...',
    tier: 'intermedio',
  },
  {
    code: 'C',
    description: 'Inicio el paralelo en pistas azules y rojas',
    reference: 'PLA, vuelta a casa por rojas suaves',
    tier: 'intermedio',
  },
  {
    code: 'D',
    description: 'Paralelo en todo tipo de pistas',
    reference: 'Pistas rojas y negras fáciles',
    tier: 'intermedio',
  },
  {
    code: 'E',
    description: 'Paralelo conducido',
    reference: 'Pistas negras y fuera de pista suaves',
    tier: 'avanzado',
  },
  {
    code: 'F',
    description: 'Paralelo conducido en pistas y fuera de pistas',
    reference: 'Negras y fuera de pistas difíciles',
    tier: 'avanzado',
  },
]
