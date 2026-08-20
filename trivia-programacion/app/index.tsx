import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.contenedor}>
      {/* Encabezado */}
      <View style={styles.encabezado}>
        <Ionicons name="code-slash" size={60} color="#6C5CE7" />
        <Text style={styles.titulo}>DevTrivia</Text>
        <Text style={styles.subtitulo}>Pon a prueba tus conocimientos de programación</Text>
      </View>

      {/* Menú de Opciones */}
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.botonMenu, styles.botonPrincipal]}
          onPress={() => router.push('/trivia')}
        >
          <Ionicons name="play" size={24} color="#FFF" />
          <Text style={styles.textoBotonPrincipal}>Jugar Trivia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonMenu}
          onPress={() => router.push('/lenguajes')}
        >
          <Ionicons name="list" size={22} color="#A0A5B5" />
          <Text style={styles.textoBoton}>Ver Categorías</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonMenu}
          onPress={() => router.push('/agregar-pregunta')}
        >
          <Ionicons name="add-circle-outline" size={22} color="#A0A5B5" />
          <Text style={styles.textoBoton}>Crear Pregunta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#12131C',
    padding: 24,
    justifyContent: 'space-around',
  },
  encabezado: {
    alignItems: 'center',
    marginTop: 20,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitulo: {
    color: '#A0A5B5',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  menu: {
    gap: 14,
  },
  botonMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E202E',
    padding: 16,
    borderRadius: 12,
    gap: 10,
    borderWidth: 1,
    borderColor: '#2A2C3D',
  },
  botonPrincipal: {
    backgroundColor: '#6C5CE7',
    borderColor: '#6C5CE7',
  },
  textoBotonPrincipal: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
});