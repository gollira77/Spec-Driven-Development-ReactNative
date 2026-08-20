export interface Pregunta {
  id: string;
  lenguajeId: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
}

export const PREGUNTAS_BASE: Pregunta[] = [
  {
    id: 'js-1',
    lenguajeId: 'javascript',
    pregunta: '¿Qué método agrega elementos al final de un arreglo?',
    opciones: ['.push()', '.pop()', '.shift()', '.unshift()'],
    respuestaCorrecta: 0,
  },
  {
    id: 'js-2',
    lenguajeId: 'javascript',
    pregunta: '¿Cuál es el resultado de typeof NaN en JavaScript?',
    opciones: ['"undefined"', '"number"', '"NaN"', '"object"'],
    respuestaCorrecta: 1,
  },
  {
    id: 'js-3',
    lenguajeId: 'javascript',
    pregunta: '¿Qué palabra clave declara una variable con alcance de bloque y reasignable?',
    opciones: ['var', 'const', 'let', 'static'],
    respuestaCorrecta: 2,
  },
  {
    id: 'js-4',
    lenguajeId: 'javascript',
    pregunta: '¿Qué método convierte un objeto JavaScript a una cadena JSON?',
    opciones: ['JSON.parse()', 'JSON.toString()', 'JSON.stringify()', 'JSON.toObject()'],
    respuestaCorrecta: 2,
  },
  {
    id: 'js-5',
    lenguajeId: 'javascript',
    pregunta: '¿Qué operador se utiliza para la comparación estricta de valor y tipo?',
    opciones: ['==', '===', '=', '!='],
    respuestaCorrecta: 1,
  },

  // --- PYTHON ---
  {
    id: 'py-1',
    lenguajeId: 'python',
    pregunta: '¿Qué palabra clave se usa para definir una función en Python?',
    opciones: ['function', 'def', 'func', 'lambda'],
    respuestaCorrecta: 1,
  },
  {
    id: 'py-2',
    lenguajeId: 'python',
    pregunta: '¿Qué estructura de datos en Python es inmutable?',
    opciones: ['Lista', 'Diccionario', 'Tupla', 'Conjunto (Set)'],
    respuestaCorrecta: 2,
  },
  {
    id: 'py-3',
    lenguajeId: 'python',
    pregunta: '¿Cómo se obtiene la longitud de una lista en Python?',
    opciones: ['len(lista)', 'lista.length()', 'lista.size()', 'count(lista)'],
    respuestaCorrecta: 0,
  },
  {
    id: 'py-4',
    lenguajeId: 'python',
    pregunta: '¿Qué método se usa para añadir un elemento al final de una lista?',
    opciones: ['.add()', '.push()', '.append()', '.insert()'],
    respuestaCorrecta: 2,
  },
  {
    id: 'py-5',
    lenguajeId: 'python',
    pregunta: '¿Cuál es la salida de print(2 ** 3) en Python?',
    opciones: ['6', '8', '9', 'Error de sintaxis'],
    respuestaCorrecta: 1,
  },

  // --- REACT NATIVE ---
  {
    id: 'rn-1',
    lenguajeId: 'react-native',
    pregunta: '¿Qué componente reemplaza al equivalente <div> de React Web?',
    opciones: ['<Block>', '<Container>', '<View>', '<Section>'],
    respuestaCorrecta: 2,
  },
  {
    id: 'rn-2',
    lenguajeId: 'react-native',
    pregunta: '¿Qué hook se usa para manejar estados locales en un componente de función?',
    opciones: ['useEffect', 'useContext', 'useReducer', 'useState'],
    respuestaCorrecta: 3,
  },
  {
    id: 'rn-3',
    lenguajeId: 'react-native',
    pregunta: '¿Qué componente es el recomendado para renderizar listas largas eficientemente?',
    opciones: ['ScrollView', 'FlatList', 'ListView', 'MapView'],
    respuestaCorrecta: 1,
  },
  {
    id: 'rn-4',
    lenguajeId: 'react-native',
    pregunta: '¿Qué API se utiliza para guardar datos de manera persistente en el dispositivo?',
    opciones: ['LocalStorage', 'AsyncStorage', 'SessionStorage', 'SQLiteOnly'],
    respuestaCorrecta: 1,
  },
  {
    id: 'rn-5',
    lenguajeId: 'react-native',
    pregunta: '¿Cuál es la dirección de Flexbox por defecto (flexDirection) en React Native?',
    opciones: ['row', 'column', 'row-reverse', 'column-reverse'],
    respuestaCorrecta: 1,
  },

  // --- TYPESCRIPT ---
  {
    id: 'ts-1',
    lenguajeId: 'typescript',
    pregunta: '¿Qué tipo especial desactivaría la verificación de tipos en TypeScript?',
    opciones: ['unknown', 'never', 'any', 'void'],
    respuestaCorrecta: 2,
  },
  {
    id: 'ts-2',
    lenguajeId: 'typescript',
    pregunta: '¿Qué estructura se utiliza para definir la forma o contrato de un objeto?',
    opciones: ['interface', 'struct', 'schema', 'contract'],
    respuestaCorrecta: 0,
  },
  {
    id: 'ts-3',
    lenguajeId: 'typescript',
    pregunta: '¿Qué operador indica que una propiedad de una interfaz es opcional?',
    opciones: ['!', '?', ':', '*'],
    respuestaCorrecta: 1,
  },
  {
    id: 'ts-4',
    lenguajeId: 'typescript',
    pregunta: '¿Qué tipo representa un valor que nunca ocurre o una función que lanza un error?',
    opciones: ['null', 'undefined', 'never', 'void'],
    respuestaCorrecta: 2,
  },
  {
    id: 'ts-5',
    lenguajeId: 'typescript',
    pregunta: '¿Cómo se compila un archivo TypeScript individual desde la terminal?',
    opciones: ['node archivo.ts', 'tsc archivo.ts', 'ts-build archivo.ts', 'npm run ts'],
    respuestaCorrecta: 1,
  },
  
  // --- BACKEND Y BASES DE DATOS ---
  {
    id: 'db-1',
    lenguajeId: 'backend-db', 
    pregunta: '¿Qué comando SQL se utiliza para recuperar datos de una base de datos?',
    opciones: ['GET', 'FETCH', 'SELECT', 'EXTRACT'],
    respuestaCorrecta: 2,
  },
  {
    id: 'db-2',
    lenguajeId: 'backend-db',
    pregunta: '¿Qué tipo de base de datos es PostgreSQL?',
    opciones: ['NoSQL / Orientada a Documentos', 'Relacional (RDBMS)', 'Clave-Valor', 'En Grafos'],
    respuestaCorrecta: 1,
  },
  {
    id: 'db-3',
    lenguajeId: 'backend-db',
    pregunta: '¿Qué código de estado HTTP representa que un recurso fue creado con éxito?',
    opciones: ['200 OK', '201 Created', '204 No Content', '400 Bad Request'],
    respuestaCorrecta: 1,
  },
  {
    id: 'db-4',
    lenguajeId: 'backend-db',
    pregunta: '¿Qué concepto garantiza que un campo en una tabla identifique de forma única cada fila?',
    opciones: ['Clave Foránea (Foreign Key)', 'Índice Secundario', 'Clave Primaria (Primary Key)', 'Restricción CHECK'],
    respuestaCorrecta: 2,
  },
  {
    id: 'db-5',
    lenguajeId: 'backend-db',
    pregunta: 'En la arquitectura REST, ¿qué método HTTP se usa comúnmente para actualizar un recurso existente parcialmente?',
    opciones: ['PUT', 'POST', 'PATCH', 'UPDATE'],
    respuestaCorrecta: 2,
  },


]