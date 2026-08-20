import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Lenguaje, LENGUAJES } from '../data/lenguajes';

interface Props {
  quesitosObtenidos: string[]; // Arreglo de IDs ganados, ej: ['javascript', 'python']
}

export const QuesitosGanados: React.FC<Props> = ({ quesitosObtenidos }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Insignias Coleccionadas</Text>
      
      <View style={styles.fila}>
        {LENGUAJES.map((lenguaje: Lenguaje) => {
          // Verificamos si este lenguaje ya fue ganado
          const loTiene = quesitosObtenidos.includes(lenguaje.id);

          return (
            <View
              key={lenguaje.id}
              style={[
                styles.circulo,
                { backgroundColor: loTiene ? lenguaje.color : '#2A2C3D' },
              ]}
            >
              <Ionicons
                name={lenguaje.icono as any}
                size={18}
                color={loTiene ? '#12131C' : '#666666'}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    marginVertical: 15,
  },
  titulo: {
    color: '#A0A5B5',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  fila: {
    flexDirection: 'row',
    gap: 12,
  },
  circulo: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
});