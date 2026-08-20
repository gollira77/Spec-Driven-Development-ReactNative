export interface DatosPreguntaForm {
  pregunta: string;
  opciones: string[];
  correcta: string | number;
}

export interface ErroresPregunta {
  pregunta?: string;
  correcta?: string;
  [key: number]: string;
}

export function validarPregunta(datos: DatosPreguntaForm): ErroresPregunta {
  const errores: ErroresPregunta = {};

  if (!datos.pregunta.trim()) {
    errores.pregunta = "Campo obligatorio";
  }

  datos.opciones.forEach((item, i) => {
    if (!item.trim()) {
      errores[i] = "Complete esta opción";
    }
  });

  const numCorrecta = Number(datos.correcta);

  if (isNaN(numCorrecta) || numCorrecta < 1 || numCorrecta > 4) {
    errores.correcta = "Debe ser 1,2,3 o 4";
  }

  return errores;
}