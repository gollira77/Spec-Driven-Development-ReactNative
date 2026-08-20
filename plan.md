# Plan de Arquitectura e Implementación

## 1. Arquitectura del Sistema

app/
├── _layout.tsx           # Layout global con Stack Navigator
├── index.tsx             # Home de la aplicación
├── categorias.tsx        # Catálogo de categorías
├── categoria/
│   └── [id].tsx          # Detalle de categoría
├── trivia.tsx            # Juego principal + Ruleta
├── resultado.tsx         # Pantalla de resultados
└── agregar-pregunta.tsx  # Formulario con AsyncStorage

data/
├── categorias.ts         # Definición de las 6 categorías con color e ícono
└── preguntas.ts          # Banco base de preguntas con categoriaId

services/
├── triviaService.ts      # Servicio de mock con latencia
└── storageService.ts     # Persistencia local con AsyncStorage

components/
├── Boton.tsx             # Botón estilizado reutilizable
├── Ruleta.tsx            # Componente de ruleta interactiva
├── CategoriaCard.tsx     # Card temática de categoría
├── OpcionRespuesta.tsx   # Botón de opción para preguntas
├── BarraProgreso.tsx     # Indicador visual de progreso
└── QuesitosGanados.tsx   # Barra de insignias/quesitos del usuario

constants/
└── colores.ts            # Palette de colores global y por categoría