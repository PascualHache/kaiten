export interface Level {
  code: string
  description: string
  reference: string
}

export const LEVELS: Level[] = [
  {
    code: 'A',
    description: 'Nunca he esquiado',
    reference: '—',
  },
  {
    code: 'A1',
    description: 'Mantengo la cuña',
    reference: 'Cinta guardería',
  },
  {
    code: 'A2',
    description: 'Empiezo a girar en cuña',
    reference: 'Cinta guardería o cinta azul',
  },
  {
    code: 'B',
    description: 'Giro en cuña en pistas verdes y azules',
    reference: 'Cintas o Cabana',
  },
  {
    code: 'B1',
    description: 'Cuña consolidada en pistas azules',
    reference: 'Cabana, PLA, vuelta a casa...',
  },
  {
    code: 'C',
    description: 'Inicio el paralelo en pistas azules y rojas',
    reference: 'PLA, vuelta a casa por rojas suaves',
  },
  {
    code: 'D',
    description: 'Paralelo en todo tipo de pistas',
    reference: 'Pistas rojas y negras fáciles',
  },
  {
    code: 'E',
    description: 'Paralelo conducido',
    reference: 'Pistas negras y fuera de pista suaves',
  },
  {
    code: 'F',
    description: 'Paralelo conducido en pistas y fuera de pistas',
    reference: 'Negras y fuera de pistas difíciles',
  },
]
