# Especificación del Proyecto: Trivia tipo Preguntados (Expo + React Native)

## 1. Visión General
Transformación de un proyecto base de trivia lineal a una aplicación interactiva tipo "Preguntados" sobre lenguajes de programación y desarrollo web. La aplicación utiliza una ruleta interactiva para seleccionar categorías al azar, gestiona el progreso mediante "quesitos" ganados por categoría, y ofrece persistencia local de preguntas creadas por el usuario.

## 2. Requerimientos Funcionales

### RF-01: Ruleta de Selección de Categoría
- La pantalla principal de trivia (`trivia.tsx`) debe incluir una ruleta visual dividida en 6 secciones.
- **Categorías obligatorias (6):**
  1. JavaScript (Color: Amarillo `#F7DF1E`, Ícono: `code-slash`)
  2. Python (Color: Azul `#3776AB`, Ícono: `terminal`)
  3. React / RN (Color: Cian `#61DAFB`, Ícono: `phone-portrait`)
  4. HTML/CSS (Color: Naranja `#E34F26`, Ícono: `logo-css3`)
  5. Backend/DB (Color: Verde `#339933`, Ícono: `server`)
  6. Git/DevOps (Color: Rojo `#F05032`, Ícono: `git-branch`)
- La ruleta debe girar mediante animación y seleccionar un ángulo aleatorio al presionar un botón.

### RF-02: Dinámica de Juego y "Quesitos"
- Una vez seleccionada la categoría por la ruleta, se presenta una pregunta asociada a esa categoría.
- Si el usuario responde **correctamente**:
  - Se le otorga el "quesito" (insignia) de esa categoría.
  - Si no poseía el quesito, se añade a su colección.
- Si el usuario responde **incorrectamente**:
  - Se muestra la respuesta correcta y se da la opción de volver a girar.
- **Condición de Victoria:** El usuario gana la partida completa cuando obtiene los 6 quesitos únicos.

### RF-03: Persistencia y Gestión de Preguntas
- Implementar `storageService.ts` utilizando `@react-native-async-storage/async-storage`.
- Las preguntas creadas en `agregar-pregunta.tsx` deben validarse con `ValidarPregunta.ts` y guardarse localmente.
- Las preguntas guardadas por el usuario deben integrarse dinámicamente al banco de preguntas del juego.

### RF-04: Navegación y Pantallas
1. `index.tsx` (Home): Inicio, estado de quesitos actuales y botón para iniciar trivia o agregar pregunta.
2. `categorias.tsx`: Listado de las 6 categorías con sus colores, íconos y estadísticas de preguntas disponibles.
3. `categoria/[id].tsx`: Detalle de categoría específica con lista de preguntas asociadas.
4. `trivia.tsx`: Pantalla principal de juego (Ruleta + Pregunta + Opciones + Quesitos ganados).
5. `resultado.tsx`: Resumen de partida, contador de aciertos/errores y visualización de quesitos ganados.
6. `agregar-pregunta.tsx`: Formulario de creación de preguntas con persistencia local.

## 3. Requerimientos No Funcionales

### RNF-01: Rendimiento y Feedback
- Los servicios de trivia deben simular latencia de red (`500ms - 1000ms`) mediante la función `esperar()`.
- Se deben incluir indicadores de carga (`ActivityIndicator`) durante la obtención de datos.
- Las animaciones de la ruleta deben ejecutarse de manera fluida utilizando el driver nativo o SVG.

### RNF-02: Diseño y Sistema de Estilos
- Definición de tokens centrales en `constants/colores.ts` (paleta global + colores temáticos por categoría).
- Tipografía legible y jerarquía clara mediante componentes reutilizables (`Boton.tsx`, `CategoriaCard.tsx`, `OpcionRespuesta.tsx`, etc.).

### RNF-03: Limpieza de Template
- Eliminación completa de archivos remanentes del template predeterminado (`(tabs)/`, `explore.tsx`, `modal.tsx`).