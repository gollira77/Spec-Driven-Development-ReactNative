import { useState } from "react";
import { ScrollView, Text, TextInput, Alert } from "react-native";
import { validarPregunta, DatosPreguntaForm } from "../utils/ValidarPregunta";

export default function AgregarPregunta() {
  const [pregunta, setPregunta] = useState<string>("");
  const [opciones, setOpciones] = useState<string[]>(["", "", "", ""]);
  const [correcta, setCorrecta] = useState<string>("");

  function cambiar(index: number, texto: string) {
    const copia = [...opciones];
    copia[index] = texto;
    setOpciones(copia);
  }

  function guardar() {
    const datos: DatosPreguntaForm = {
      pregunta,
      opciones,
      correcta
    };

    const errores = validarPregunta(datos);

    if (Object.keys(errores).length > 0) {
      Alert.alert("Error", "Revise los campos");
      return;
    }

    Alert.alert("Éxito", "Pregunta validada correctamente");
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Pregunta</Text>

      <TextInput
        placeholder="Escriba la pregunta"
        value={pregunta}
        onChangeText={setPregunta}
      />

      {opciones.map((item, index) => (
        <TextInput
          key={index}
          placeholder={`Opción ${index + 1}`}
          value={item}
          onChangeText={(texto) => cambiar(index, texto)}
        />
      ))}

      <TextInput
        placeholder="Respuesta correcta 1-4"
        keyboardType="numeric"
        value={correcta}
        onChangeText={setCorrecta}
      />

      <Text
        onPress={guardar}
        style={{
          marginTop: 20,
          fontSize: 20
        }}
      >
        Guardar
      </Text>
    </ScrollView>
  );
}