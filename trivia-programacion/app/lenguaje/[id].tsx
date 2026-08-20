import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Lenguaje } from '../../data/lenguajes';
import { triviaService } from '../../services/triviaService';

export default function DetalleLenguajeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [lenguaje, setLenguaje] = useState<Lenguaje | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (id) {
      cargarDetalle();
    }
  }, [id]);

  const cargarDetalle = async () => {
    if (!id) return;
    setCargando(true);
    const dato = await triviaService.obtenerLenguaje(id);
    setLenguaje(dato || null);
    setCargando(false);
  };

  if (cargando) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator size="large" color="#6C5CE7" />
      </View>
    );
  }

  if (!lenguaje) {
    return (
      <View style={styles.centrado}>
        <Text style={styles.errorTexto}>Lenguaje no encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.contenedor}>
      <View style={[styles.encabezado, { backgroundColor: lenguaje.color }]}>
        <Ionicons name={lenguaje.icono as any} size={60} color="#12131C" />
        <Text style={styles.titulo}>{lenguaje.nombre}</Text>
      </View>

      <View style={styles.contenido}>
        <Text style={styles.label}>Descripción</Text>
        <Text style={styles.descripcion}>{lenguaje.descripcion}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#12131C' },
  centrado: { flex: 1, backgroundColor: '#12131C', justifyContent: 'center', alignItems: 'center' },
  errorTexto: { color: '#FFF', fontSize: 16 },
  encabezado: {
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  titulo: { color: '#12131C', fontSize: 26, fontWeight: 'bold', marginTop: 10 },
  contenido: { padding: 20 },
  label: { color: '#A0A5B5', fontSize: 13, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 8 },
  descripcion: { color: '#FFF', fontSize: 16, lineHeight: 24 },
});