import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { obtenerLenguaje } from "../../services/triviaService";
import { Lenguaje } from "../../data/lenguajes";

export default function Detalle() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [lenguaje, setLenguaje] = useState<Lenguaje | null>(null);

  useEffect(() => {
    if (id) {
      buscar();
    }
  }, [id]);

  async function buscar() {
    if (!id) return;
    const dato = await obtenerLenguaje(id);
    setLenguaje(dato || null);
  }

  if (!lenguaje) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        {lenguaje.nombre}
      </Text>
      <Text>Año: {lenguaje.anio}</Text>
      <Text>{lenguaje.descripcion}</Text>
    </View>
  );
}