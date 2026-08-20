import { View, Text } from "react-native";
import { router, useLocalSearchParams, Href } from "expo-router";

export default function Resultado() {
  const { puntaje, total } = useLocalSearchParams<{ puntaje: string; total: string }>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 30 }}>Resultado</Text>

      <Text style={{ fontSize: 50 }}>
        {puntaje}/{total}
      </Text>

      <Text onPress={() => router.replace("/trivia" as Href)}>
        Jugar nuevamente
      </Text>

      <Text onPress={() => router.replace("/" as Href)}>
        Volver al inicio
      </Text>
    </View>
  );
}