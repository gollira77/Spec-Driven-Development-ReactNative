import { useEffect, useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { router, Href } from "expo-router";
import { obtenerPreguntas } from "../services/triviaService";
import { Pregunta } from "../data/preguntas";

export default function Trivia() {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [indice, setIndice] = useState<number>(0);
  const [respuesta, setRespuesta] = useState<number | null>(null);
  const [puntaje, setPuntaje] = useState<number>(0);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const datos = await obtenerPreguntas();
    setPreguntas(datos);
    setCargando(false);
  }

  function seleccionar(opcion: number) {
    if (respuesta !== null) return;
    setRespuesta(opcion);
  }

  function siguiente() {
    const actual = preguntas[indice];
    let nuevoPuntaje = puntaje;

    if (respuesta === actual.correcta) {
      nuevoPuntaje = puntaje + 1;
      setPuntaje(nuevoPuntaje);
    }

   if (indice === preguntas.length - 1) {
  router.replace(`/resultado?puntaje=${nuevoPuntaje}&total=${preguntas.length}` as any);
  return;
}
    setIndice(indice + 1);
    setRespuesta(null);
  }

  if (cargando) {
    return (
      <View>
        <ActivityIndicator size="large" />
        <Text>Cargando preguntas...</Text>
      </View>
    );
  }

  const actual = preguntas[indice];

  return (
    <View style={{ padding: 20 }}>
      <Text>
        Pregunta {indice + 1} de {preguntas.length}
      </Text>

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        {actual.pregunta}
      </Text>

      {actual.opciones.map((opcion, index) => (
        <Pressable
          key={index}
          onPress={() => seleccionar(index)}
          style={{
            padding: 15,
            marginVertical: 5,
            borderWidth: 1
          }}
        >
          <Text>{opcion}</Text>
        </Pressable>
      ))}

      {respuesta !== null && (
        <Text>
          {respuesta === actual.correcta ? "Correcto" : "Incorrecto"}
        </Text>
      )}

      <Pressable onPress={siguiente} disabled={respuesta === null}>
        <Text>Siguiente</Text>
      </Pressable>
    </View>
  );
}