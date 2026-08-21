import { View, Text, StyleSheet } from "react-native";
import { router, Href } from "expo-router";
import Boton from "../../components/Boton";

export default function Inicio() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Trivia Programación
      </Text>

      <Boton
        titulo="Comenzar Trivia"
        onPress={() => router.push("/trivia" as Href)}
      />

      <Boton
        titulo="Ver Lenguajes"
        onPress={() => router.push("/lenguajes" as Href)}
      />

      <Boton
        titulo="Agregar Pregunta"
        onPress={() => router.push("/agregar-pregunta" as Href)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30
  }
});