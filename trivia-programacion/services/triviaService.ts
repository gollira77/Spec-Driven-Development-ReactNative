import { lenguajes, Lenguaje } from "../data/lenguajes";
import { preguntas, Pregunta } from "../data/preguntas";

function esperar(): Promise<void> {
  const tiempo = 500 + Math.random() * 500;

  return new Promise((resolve) => {
    setTimeout(resolve, tiempo);
  });
}

export async function obtenerLenguajes(): Promise<Lenguaje[]> {
  await esperar();
  return lenguajes;
}

export async function obtenerPreguntas(): Promise<Pregunta[]> {
  await esperar();
  return preguntas;
}

export async function obtenerLenguaje(id: string): Promise<Lenguaje | undefined> {
  await esperar();

  return lenguajes.find((item) => item.id === id);
}