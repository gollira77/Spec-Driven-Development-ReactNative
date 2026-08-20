import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { LENGUAJES } from '../data/lenguajes';
import { storageService } from '../services/storageService';

export default function AgregarPreguntaScreen() {
  const router = useRouter();

  // Estados del formulario
  const [pregunta, setPregunta] = useState('');
  const [lenguajeId, setLenguajeId] = useState(LENGUAJES[0].id);
  const [opciones, setOpciones] = useState(['', '', '', '']);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(0);

  // Actualizar una opción específica
  const cambiarOpcion = (texto: string, indice: number) => {
    const nuevasOpciones = [...opciones];
    nuevasOpciones[indice] = texto;
    setOpciones(nuevasOpciones);
  };

  // Validar y guardar la pregunta
  const guardar = async () => {
    // Validaciones básicas
    if (!pregunta.trim()) {
      Alert.alert('Error', 'Escribe el enunciado de la pregunta.');
      return;
    }
    if (opciones.some((op) => !op.trim())) {
      Alert.alert('Error', 'Completa las 4 opciones de respuesta.');
      return;
    }

    // Estructura de la nueva pregunta
    const nuevaPregunta = {
      id: Date.now().toString(), // ID único basado en tiempo
      lenguajeId,
      pregunta,
      opciones,
      respuestaCorrecta,
    };

    await storageService.guardarPregunta(nuevaPregunta);
    Alert.alert('¡Éxito!', 'Pregunta guardada correctamente.');
    router.back(); // Regresamos a la pantalla anterior
  };

  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.titulo}>Crear Nueva Pregunta</Text>

      {/* Selector de Lenguaje */}
      <Text style={styles.label}>Categoría / Lenguaje</Text>
      <View style={styles.selectorContenedor}>
        {LENGUAJES.map((leng) => (
          <TouchableOpacity
            key={leng.id}
            style={[
              styles.botonSeleccion,
              lenguajeId === leng.id && { backgroundColor: leng.color },
            ]}
            onPress={() => setLenguajeId(leng.id)}
          >
            <Text
              style={[
                styles.textoSeleccion,
                lenguajeId === leng.id && { color: '#12131C', fontWeight: 'bold' },
              ]}
            >
              {leng.nombre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Enunciado */}
      <Text style={styles.label}>Enunciado de la Pregunta</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: ¿Qué método agrega un elemento al final de un Array?"
        placeholderTextColor="#666"
        value={pregunta}
        onChangeText={setPregunta}
        multiline
      />

      {/* Opciones */}
      <Text style={styles.label}>Opciones (Toca el círculo de la correcta)</Text>
      {opciones.map((op, index) => (
        <View key={index} style={styles.filaOpcion}>
          <TouchableOpacity
            style={[
              styles.radio,
              respuestaCorrecta === index && styles.radioSeleccionado,
            ]}
            onPress={() => setRespuestaCorrecta(index)}
          />
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
            placeholder={`Opción ${index + 1}`}
            placeholderTextColor="#666"
            value={op}
            onChangeText={(texto) => cambiarOpcion(texto, index)}
          />
        </View>
      ))}

      {/* Botón Guardar */}
      <TouchableOpacity style={styles.botonGuardar} onPress={guardar}>
        <Text style={styles.textoBotonGuardar}>Guardar Pregunta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#12131C', padding: 20 },
  titulo: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { color: '#A0A5B5', fontSize: 13, fontWeight: 'bold', marginTop: 15, marginBottom: 8 },
  input: {
    backgroundColor: '#1E202E',
    color: '#FFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#2A2C3D',
    marginBottom: 10,
  },
  selectorContenedor: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  botonSeleccion: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#1E202E',
    borderWidth: 1,
    borderColor: '#2A2C3D',
  },
  textoSeleccion: { color: '#A0A5B5', fontSize: 12 },
  filaOpcion: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6C5CE7',
  },
  radioSeleccionado: { backgroundColor: '#6C5CE7' },
  botonGuardar: {
    backgroundColor: '#6C5CE7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  textoBotonGuardar: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
});