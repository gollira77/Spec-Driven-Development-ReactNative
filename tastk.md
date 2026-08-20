# Lista de Tareas (Tasks)

## Fase 1: Documentación Spec-Driven Development
- [x] Crear `spec.md` con requerimientos funcionales y no funcionales.
- [x] Crear `plan.md` con arquitectura y modelo de datos.
- [x] Crear `tasks.md` con el checklist de implementación.
- [x] Actualizar `AGENTS.md` con reglas del proyecto.
- [x] Reemplazar `README.md` con instrucciones completas de instalación y ejecución.

## Fase 2: Configuración de Datos y Estilos
- [ ] Crear `constants/colores.ts` con la paleta de colores global y por categoría.
- [ ] Crear `data/categorias.ts` con las 6 categorías (ID, nombre, color, ícono).
- [ ] Actualizar `data/preguntas.ts` asociando cada pregunta a su `categoriaId`.

## Fase 3: Servicios y Persistencia Local
- [ ] Instalar `@react-native-async-storage/async-storage`.
- [ ] Crear `services/storageService.ts` para guardar y cargar preguntas del usuario.
- [ ] Actualizar `services/triviaService.ts` para unificar preguntas base + preguntas del usuario con latencia simulada.

## Fase 4: Componentes Reutilizables
- [ ] Rediseñar `components/Boton.tsx`.
- [ ] Crear `components/Ruleta.tsx` (Animación/SVG para selección aleatoria).
- [ ] Crear `components/QuesitosGanados.tsx` (Muestra los 6 quesitos coleccionables).
- [ ] Crear `components/CategoriaCard.tsx` y `components/OpcionRespuesta.tsx`.

## Fase 5: Pantallas y Navegación
- [ ] Limpiar archivos heredados del template (`app/(tabs)/`, `explore.tsx`, `modal.tsx`).
- [ ] Configurar `app/_layout.tsx` con Stack Navigator y header estilizado.
- [ ] Refactorizar `app/index.tsx` con el dashboard principal y estado de quesitos.
- [ ] Refactorizar `app/categorias.tsx` y `app/categoria/[id].tsx`.
- [ ] Implementar la nueva dinámica en `app/trivia.tsx` (Ruleta -> Pregunta -> Recompensa).
- [ ] Refactorizar `app/resultado.tsx` y `app/agregar-pregunta.tsx` (guardado real en AsyncStorage).