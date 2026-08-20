import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LENGUAJES } from '../data/lenguajes';

export default function LenguajesScreen() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Categorías Disponibles</Text>

      <FlatList
        data={LENGUAJES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.tarjeta, { borderLeftColor: item.color }]}>
            <View style={[styles.iconoContenedor, { backgroundColor: item.color }]}>
              <Ionicons name={item.icono as any} size={24} color="#12131C" />
            </View>
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.descripcion}>Preguntas de {item.nombre}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#12131C', padding: 20 },
  titulo: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E202E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderWidth: 1,
    borderColor: '#2A2C3D',
  },
  iconoContenedor: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  info: { flex: 1 },
  nombre: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  descripcion: { color: '#A0A5B5', fontSize: 12, marginTop: 2 },
});