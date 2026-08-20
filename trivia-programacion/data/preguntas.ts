export interface Pregunta {
  id: string;
  lenguajeId: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
}

export const PREGUNTAS_BASE: Pregunta[] = [
  {
    id: '1',
    lenguajeId: 'javascript',
    pregunta: '¿Qué método agrega elementos al final de un arreglo?',
    opciones: ['.push()', '.pop()', '.shift()', '.unshift()'],
    respuestaCorrecta: 0,
  },
  {
    id: '2',
    lenguajeId: 'python',
    pregunta: '¿Qué palabra clave se usa para definir una función en Python?',
    opciones: ['function', 'def', 'func', 'lambda'],
    respuestaCorrecta: 1,
  },
  // Agrega tus demás preguntas aquí usando sus respectivos lenguajeId...
];