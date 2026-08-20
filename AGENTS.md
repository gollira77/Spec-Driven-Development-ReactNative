# AGENTS.md - Reglas y Convenciones del Proyecto

## Idioma y Estilo
- **Idioma principal:** Español (código, comentarios, documentación y UI).
- **Formato de nombres:** 
  - Archivos de componentes y pantallas: `PascalCase.tsx` o `kebab-case.tsx` según estándar Expo Router.
  - Funciones y variables: `camelCase`.
  - Interfaces y Tipos: `PascalCase`.

## Tech Stack
- **Framework:** Expo (React Native) con **expo-router** para la navegación por archivos.
- **Lenguaje:** TypeScript estricto.
- **Persistencia:** `@react-native-async-storage/async-storage`.
- **Gráficos/Animaciones:** `react-native-svg` / React Native Animated API.

## Reglas de Arquitectura
1. **Separación de responsabilidades:** Las pantallas (`app/`) no deben contener lógica de almacenamiento directamente; se debe invocar a los servicios (`services/`).
2. **Componentes Puros:** Los componentes de la carpeta `components/` deben ser reutilizables y recibir sus propiedades vía `props`.
3. **Manejo de Latencia:** Toda petición a servicios simulados debe usar la función `esperar()` de `triviaService.ts` para mantener la consistencia del RNF.
4. **Commits:** Mensajes claros con prefijos (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`).