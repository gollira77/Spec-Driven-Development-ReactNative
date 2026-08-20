export interface Lenguaje {
  id: string;
  nombre: string;
  anio: number;
  descripcion: string;
}

export const lenguajes: Lenguaje[] = [
  {
    id: "javascript",
    nombre: "JavaScript",
    anio: 1995,
    descripcion: "Lenguaje utilizado para desarrollo web y React Native."
  },
  {
    id: "python",
    nombre: "Python",
    anio: 1991,
    descripcion: "Lenguaje conocido por su sintaxis sencilla."
  },
  {
    id: "java",
    nombre: "Java",
    anio: 1995,
    descripcion: "Lenguaje orientado a objetos."
  },
  {
    id: "csharp",
    nombre: "C#",
    anio: 2000,
    descripcion: "Lenguaje utilizado dentro del ecosistema .NET."
  }
];