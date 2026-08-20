import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated, Easing } from 'react-native';
import Svg, { Path, G, Text as SvgText } from 'react-native-svg';
import { Lenguaje, LENGUAJES } from '../data/lenguajes';

interface Props {
  alGirarFin: (lenguajeSeleccionado: Lenguaje) => void;
}

export const Ruleta: React.FC<Props> = ({ alGirarFin }) => {
  const [girando, setGirando] = useState(false);
  
  // Usamos un valor animado estándar de React Native (0 a 1)
  const valorAnimado = useRef(new Animated.Value(0)).current;
  const anguloAcumulado = useRef(0);

  const girar = () => {
    if (girando) return;
    setGirando(true);

    const totalLenguajes = LENGUAJES.length; // 6 categorías
    const anguloPorSector = 360 / totalLenguajes; // 60 grados por sector

    // 1. Elegimos un índice aleatorio
    const indiceGanador = Math.floor(Math.random() * totalLenguajes);

    // 2. Calculamos el ángulo para que el sector ganador quede centrado arriba (flecha)
    const centroSector = (indiceGanador * anguloPorSector) + (anguloPorSector / 2);
    const anguloDestinoNormalizado = (360 - centroSector) % 360;

    // 3. Le sumamos 5 vueltas completas (1800 grados) para dar efecto visual
    const vueltasCompletas = 5 * 360;
    const rotacionActualMod = anguloAcumulado.current % 360;
    
    let incremento = anguloDestinoNormalizado - rotacionActualMod;
    if (incremento <= 0) incremento += 360;

    const nuevoAnguloTotal = anguloAcumulado.current + vueltasCompletas + incremento;
    anguloAcumulado.current = nuevoAnguloTotal;

    // 4. Ejecutamos la animación
    valorAnimado.setValue(0);
    Animated.timing(valorAnimado, {
      toValue: 1,
      duration: 3500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      setGirando(false);
      alGirarFin(LENGUAJES[indiceGanador]); // Notificamos qué lenguaje tocó
    });
  };

  // Interpolamos la animación de 0 a 1 para convertirla en grados
  const interpolacionRotacion = valorAnimado.interpolate({
    inputRange: [0, 1],
    outputRange: [`${anguloAcumulado.current - 1800 - 360}deg`, `${anguloAcumulado.current}deg`],
  });

  // Configuración geométrica del gráfico circular
  const radio = 130;
  const centro = 140;
  const anguloPorSector = 360 / LENGUAJES.length;

  return (
    <View style={styles.contenedor}>
      {/* Flecha indicador fija en la parte superior */}
      <View style={styles.flecha} />

      {/* Ruleta Giratoria */}
      <Animated.View style={[styles.ruleta, { transform: [{ rotate: interpolacionRotacion }] }]}>
        <Svg height={centro * 2} width={centro * 2} viewBox={`0 0 ${centro * 2} ${centro * 2}`}>
          <G rotation="-90" origin={`${centro}, ${centro}`}>
            {LENGUAJES.map((lenguaje, i) => {
              const inicioRad = (i * anguloPorSector * Math.PI) / 180;
              const finRad = ((i + 1) * anguloPorSector * Math.PI) / 180;

              const x1 = centro + radio * Math.cos(inicioRad);
              const y1 = centro + radio * Math.sin(inicioRad);
              const x2 = centro + radio * Math.cos(finRad);
              const y2 = centro + radio * Math.sin(finRad);

              const pathD = `M${centro},${centro} L${x1},${y1} A${radio},${radio} 0 0,1 ${x2},${y2} Z`;

              // Posición del texto dentro de cada porción
              const medioRad = ((i + 0.5) * anguloPorSector * Math.PI) / 180;
              const textX = centro + (radio * 0.65) * Math.cos(medioRad);
              const textY = centro + (radio * 0.65) * Math.sin(medioRad);

              return (
                <G key={lenguaje.id}>
                  <Path d={pathD} fill={lenguaje.color} stroke="#12131C" strokeWidth="2" />
                  <SvgText
                    x={textX}
                    y={textY}
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    transform={`rotate(${i * anguloPorSector + anguloPorSector / 2 + 90}, ${textX}, ${textY})`}
                  >
                    {lenguaje.nombre}
                  </SvgText>
                </G>
              );
            })}
          </G>
        </Svg>
      </Animated.View>

      {/* Botón Central */}
      <TouchableOpacity
        style={[styles.boton, girando && styles.botonDeshabilitado]}
        onPress={girar}
        disabled={girando}
      >
        <Text style={styles.textoBoton}>{girando ? '...' : 'GIRAR'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  ruleta: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flecha: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFFFFF',
    zIndex: 10,
    marginBottom: -10,
  },
  boton: {
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#6C5CE7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    zIndex: 20,
    elevation: 5,
  },
  botonDeshabilitado: {
    backgroundColor: '#4A4A6A',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});