import { Pressable, Text, StyleSheet } from "react-native";

interface BotonProps {
  titulo: string;
  onPress: () => void;
}

export default function Boton({ titulo, onPress }: BotonProps) {
  return (
    <Pressable style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8
  },
  texto: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});