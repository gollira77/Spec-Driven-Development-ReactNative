import { Lenguaje, LENGUAJES } from '@/data/lenguajes';
import { PREGUNTAS_BASE, Pregunta } from '../data/preguntas';
import { storageService } from './storageService';

// Función para simular la latencia de red (RNF-01)
const esperar = (ms: number = 600) => new Promise((resolve) => setTimeout(resolve, ms));

export const triviaService = {
  // 1. Obtener TODAS las preguntas (Base + AsyncStorage)
  obtenerTodasLasPreguntas: async (): Promise<Pregunta[]> => {
    await esperar();
    try {
      const preguntasUsuario = await storageService.obtenerPreguntas();
      // Unificamos las preguntas fijas del juego con las creadas por el usuario
      return [...PREGUNTAS_BASE, ...preguntasUsuario];
    } catch (error) {
      console.error('Error al cargar preguntas:', error);
      return PREGUNTAS_BASE;
    }
  },

  // 2. Obtener preguntas filtradas por una categoría/lenguaje específico
  obtenerPreguntasPorLenguaje: async (lenguajeId: string): Promise<Pregunta[]> => {
    await esperar();
    const todas = await triviaService.obtenerTodasLasPreguntas();
    return todas.filter((p) => p.lenguajeId === lenguajeId);
  },

  // 3. Obtener UNA pregunta aleatoria según el lenguaje seleccionado por la Ruleta
  obtenerPreguntaAleatoria: async (lenguajeId: string): Promise<Pregunta | null> => {
    await esperar();
    const preguntasCategoria = (await triviaService.obtenerTodasLasPreguntas()).filter(
      (p) => p.lenguajeId === lenguajeId
    );

    if (preguntasCategoria.length === 0) return null;

    // Selección al azar
    const indiceAleatorio = Math.floor(Math.random() * preguntasCategoria.length);
    return preguntasCategoria[indiceAleatorio];
  },

  // Obtener la información de un solo lenguaje por su ID
  obtenerLenguaje: async (id: string): Promise<Lenguaje | undefined> => {
    await esperar();
    return LENGUAJES.find((l) => l.id === id);
  },
};