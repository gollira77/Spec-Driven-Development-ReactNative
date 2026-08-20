import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="lenguajes" options={{ title: "Lenguajes" }} />
      <Stack.Screen name="lenguaje/[id]" options={{ title: "Detalle" }} />
      <Stack.Screen name="trivia" options={{ title: "Trivia" }} />
      <Stack.Screen name="resultado" options={{ title: "Resultado" }} />
      <Stack.Screen name="agregar-pregunta" options={{ title: "Agregar pregunta" }} />
    </Stack>
  );
}