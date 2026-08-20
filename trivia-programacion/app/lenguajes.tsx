import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { router, Href } from "expo-router";
import { obtenerLenguajes } from "../services/triviaService.ts";
import { Lenguaje } from "../data/lenguajes.ts";

export default function Lenguajes() {
  const [datos, setDatos] = useState<Lenguaje[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const respuesta = await obtenerLenguajes();
    setDatos(respuesta);
    setCargando(false);
  }

  if (cargando) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (datos.length === 0) {
    return (
      <View>
        <Text>No existen lenguajes</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={datos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text
          onPress={() => router.push(`/lenguaje/${item.id}` as Href)}
          style={{ fontSize: 20, padding: 20 }}
        >
          {item.nombre}
        </Text>
      )}
    />
  );
}