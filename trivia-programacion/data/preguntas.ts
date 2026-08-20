export interface Pregunta {
  id: string;
  pregunta: string;
  opciones: string[];
  correcta: number;
}

export const preguntas: Pregunta[] = [
  {
    id: "1",
    pregunta: "¿Qué lenguaje utiliza React Native?",
    opciones: ["JavaScript", "HTML", "SQL", "CSS"],
    correcta: 0
  },
  {
    id: "2",
    pregunta: "¿Cuál posee sintaxis sencilla?",
    opciones: ["Python", "Assembly", "C", "Fortran"],
    correcta: 0
  },
  {
    id: "3",
    pregunta: "¿Cuál pertenece a .NET?",
    opciones: ["C#", "Ruby", "PHP", "Go"],
    correcta: 0
  }
];