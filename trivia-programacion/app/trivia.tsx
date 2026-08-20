import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ruleta } from '../components/Ruleta';
import { QuesitosGanados } from '../components/QuesitosGanados';
import { Lenguaje } from '../data/lenguajes';
import { Pregunta } from '../data/preguntas';
import { triviaService } from '../services/triviaService';

export default function TriviaScreen() {
  const router = useRouter();
  
  // Estados simples de la pantalla
  const [quesitos, setQuesitos] = useState<string[]>([]);
  const [lenguajeActual, setLenguajeActual] = useState<Lenguaje | null>(null);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta | null>(null);
  const [cargando, setCargando] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<number | null>(null);

  // 1. Evento cuando la ruleta termina de girar
  const alGirarFin = async (lenguajeSeleccionado: Lenguaje) => {
    setLenguajeActual(lenguajeSeleccionado);
    setOpcionSeleccionada(null);
    setCargando(true);

    // Pedimos la pregunta al servicio simulado
    const pregunta = await triviaService.obtenerPreguntaAleatoria(lenguajeSeleccionado.id);
    setPreguntaActual(pregunta);
    setCargando(false);

    if (!pregunta) {
      Alert.alert('Sin preguntas', `No hay preguntas disponibles para ${lenguajeSeleccionado.nombre}`);
    }
  };

  // 2. Evento al seleccionar una respuesta
  const responder = (indiceOpcion: number) => {
    if (opcionSeleccionada !== null || !preguntaActual || !lenguajeActual) return;
    
    setOpcionSeleccionada(indiceOpcion);

    const esCorrecta = indiceOpcion === preguntaActual.respuestaCorrecta;

    setTimeout(() => {
      if (esCorrecta) {
        // Si no tenía el quesito, se lo agregamos
        if (!quesitos.includes(lenguajeActual.id)) {
          setQuesitos([...quesitos, lenguajeActual.id]);
        }
        Alert.alert('¡Correcto! 🎉', `¡Ganaste el quesito de ${lenguajeActual.nombre}!`);
      } else {
        Alert.alert('Incorrecto ❌', 'Sigue intentando en el próximo giro.');
      }
      
      // Reiniciamos la pregunta para el siguiente giro
      setPreguntaActual(null);
      setLenguajeActual(null);
      setOpcionSeleccionada(null);
    }, 800);
  };

  return (
    <View style={styles.contenedor}>
      {/* Componente de insignias obtenidas */}
      <QuesitosGanados quesitosObtenidos={quesitos} />

      {/* Si no hay pregunta activa, mostramos la ruleta para girar */}
      {!preguntaActual && !cargando && (
        <View style={styles.seccionRuleta}>
          <Text style={styles.instruccion}>¡Gira la ruleta para elegir categoría!</Text>
          <Ruleta alGirarFin={alGirarFin} />
        </View>
      )}

      {/* Indicador de carga simulado */}
      {cargando && (
        <View style={styles.cargandoContenedor}>
          <ActivityIndicator size="large" color="#6C5CE7" />
          <Text style={styles.textoCargando}>Buscando pregunta de {lenguajeActual?.nombre}...</Text>
        </View>
      )}

      {/* Tarjeta de la Pregunta */}
      {preguntaActual && !cargando && (
        <View style={styles.tarjetaPregunta}>
          <View style={[styles.badgeCategoria, { backgroundColor: lenguajeActual?.color }]}>
            <Text style={styles.textoBadge}>{lenguajeActual?.nombre}</Text>
          </View>

          <Text style={styles.textoPregunta}>{preguntaActual.pregunta}</Text>

          {/* Opciones de respuesta */}
          {preguntaActual.opciones.map((opcion, index) => {
            let colorBoton = '#1E202E';
            if (opcionSeleccionada !== null) {
              if (index === preguntaActual.respuestaCorrecta) colorBoton = '#00B894'; // Verde acierto
              else if (index === opcionSeleccionada) colorBoton = '#D63031'; // Rojo error
            }

            return (
              <TouchableOpacity
                key={index}
                style={[styles.botonOpcion, { backgroundColor: colorBoton }]}
                onPress={() => responder(index)}
                disabled={opcionSeleccionada !== null}
              >
                <Text style={styles.textoOpcion}>{opcion}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#12131C',
    padding: 20,
    justifyContent: 'center',
  },
  seccionRuleta: {
    alignItems: 'center',
  },
  instruccion: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cargandoContenedor: {
    alignItems: 'center',
    marginVertical: 40,
  },
  textoCargando: {
    color: '#A0A5B5',
    marginTop: 10,
    fontSize: 14,
  },
  tarjetaPregunta: {
    backgroundColor: '#1A1C29',
    padding: 20,
    borderRadius: 16,
    marginTop: 10,
  },
  badgeCategoria: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  textoBadge: {
    color: '#12131C',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textoPregunta: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 20,
  },
  botonOpcion: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#2A2C3D',
  },
  textoOpcion: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
});