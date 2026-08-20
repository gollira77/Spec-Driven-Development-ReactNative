## Bienvenidos al proyecto DevTrivia 

Es una aplicación móvil tipo "Preguntados" desarrollada con Expo, React Native y TypeScript. Pon a prueba tus conocimientos sobre lenguajes de programación y tecnologías web haciendo girar la ruleta para ganar todos los "quesitos".

---

## 🛠️ Tecnologías Utilizadas

- **Expo** & **React Native**
- **TypeScript**
- **Expo Router** (Navegación basada en archivos)
- **AsyncStorage** (Persistencia de preguntas creadas por el usuario)
- **React Native SVG** (Visualización interactiva de la ruleta)

---

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Aplicación **Expo Go** en tu dispositivo móvil (iOS/Android) o un emulador instalado.

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio:**
```bash
git clone https://github.com/gollira77/Spec-Driven-Development-ReactNative
cd trivia-programacion
```

**Instalar dependencias**
```
npm install
```

**Iniciar el servidor de desarrollo de Expo**
```
npx expo start 
```

**Ejecutar en tu dispositivo:**

Escanea el código QR desde la app Expo Go (Android) o la cámara (iOS).
O presiona a para abrir en emulador Android, i para simulador iOS.

## Mecánica del Juego
- Gira la Ruleta: En la pantalla de Trivia, presiona el botón para hacer girar la ruleta.
- Responde la Pregunta: Se seleccionará 1 de las 6 categorías disponibles.
- Gana Quesitos: Si respondes correctamente, obtendrás el quesito correspondiente a esa categoría.
- ¡Completa la Colección!: La partida se gana cuando logras coleccionar los 6 quesitos de las distintas categorías.
- Crea tus Preguntas: Accede a la pantalla "Agregar Pregunta" para registrar tus propias preguntas, las cuales se guardarán localmente en tu dispositivo.

