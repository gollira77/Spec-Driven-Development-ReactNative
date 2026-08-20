import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pregunta } from '../data/preguntas';

const CLAVE_PREGUNTAS_USUARIO = '@preguntas_usuario';

export const storageService = {
  // 1. Guardar una nueva pregunta creada por el usuario
  guardarPregunta: async (nuevaPregunta: Pregunta): Promise<void> => {
    try {
      // Obtenemos las preguntas existentes
      const preguntasExistentes = await storageService.obtenerPreguntas();
      
      // Agregamos la nueva pregunta al arreglo
      const preguntasActualizadas = [...preguntasExistentes, nuevaPregunta];
      
      // Convertimos el arreglo a string JSON y lo guardamos
      await AsyncStorage.setItem(
        CLAVE_PREGUNTAS_USUARIO,
        JSON.stringify(preguntasActualizadas)
      );
    } catch (error) {
      console.error('Error al guardar la pregunta:', error);
    }
  },

  // 2. Obtener todas las preguntas guardadas por el usuario
  obtenerPreguntas: async (): Promise<Pregunta[]> => {
    try {
      const jsonPreguntas = await AsyncStorage.getItem(CLAVE_PREGUNTAS_USUARIO);
      return jsonPreguntas != null ? JSON.parse(jsonPreguntas) : [];
    } catch (error) {
      console.error('Error al obtener las preguntas:', error);
      return [];
    }
  },

  // 3. Limpiar las preguntas de la memoria (opcional para pruebas)
  limpiarPreguntas: async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(CLAVE_PREGUNTAS_USUARIO);
    } catch (error) {
      console.error('Error al limpiar las preguntas:', error);
    }
  },
};