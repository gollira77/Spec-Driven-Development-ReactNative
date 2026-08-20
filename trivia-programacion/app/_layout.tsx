import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#12131C' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#12131C' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Inicio' }} />
        <Stack.Screen name="trivia" options={{ title: 'Trivia Preguntados' }} />
        <Stack.Screen name="lenguajes" options={{ title: 'Categorías' }} />
        <Stack.Screen name="agregar-pregunta" options={{ title: 'Crear Pregunta' }} />
        <Stack.Screen name="resultado" options={{ title: 'Resultado' }} />
      </Stack>
    </>
  );
}