import { ReactNode } from "react";

export interface Lenguaje {
  descripcion: ReactNode;
  id: string;
  nombre: string;
  color: string;
  icono: string;
}

export const LENGUAJES: Lenguaje[] = [
  {
    id: 'javascript', nombre: 'JavaScript', color: '#F7DF1E', icono: 'code-slash',
    descripcion: undefined
  },
  {
    id: 'python', nombre: 'Python', color: '#3776AB', icono: 'terminal',
    descripcion: undefined
  },
  {
    id: 'react', nombre: 'React / RN', color: '#61DAFB', icono: 'phone-portrait',
    descripcion: undefined
  },
  {
    id: 'htmlcss', nombre: 'HTML / CSS', color: '#E34F26', icono: 'logo-css3',
    descripcion: undefined
  },
  {
    id: 'backend', nombre: 'Backend / DB', color: '#339933', icono: 'server',
    descripcion: undefined
  },
  {
    id: 'git', nombre: 'Git / DevOps', color: '#F05032', icono: 'git-branch',
    descripcion: undefined
  },
];