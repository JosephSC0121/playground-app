import { useParams } from 'react-router-dom'
import { MarkdownCard } from '@renderer/components/Markdown-Card'
import { CodeEditor } from '@renderer/components/Editor'
import Sidebar from '@renderer/components/Sidebar'

const markdownContent = `
## Aprende Python: Conceptos Básicos

### Variables en Python

En Python, las variables se pueden definir y asignar valores de forma sencilla. Puedes usar nombres descriptivos para tus variables y asignarles valores de diferentes tipos de datos.

\`\`\`python
# Ejemplo de definición de variables
x = 10
nombre = "Juan"
\`\`\`

### Tipos de Datos en Python

Python es un lenguaje de programación dinámico, lo que significa que no es necesario declarar explícitamente el tipo de dato de una variable. Algunos de los tipos de datos básicos en Python incluyen:

- **Enteros (int):** Números enteros sin punto decimal.
- **Flotantes (float):** Números con punto decimal.
- **Cadenas (str):** Secuencias de caracteres encerradas entre comillas simples o dobles.

\`\`\`python
# Ejemplo de diferentes tipos de datos
entero = 10
flotante = 3.14
cadena = "Hola, mundo!"
\`\`\`

### Estructuras de Control en Python

Python ofrece diversas estructuras de control que te permiten controlar el flujo de ejecución de tu programa. Algunas de las estructuras de control más comunes son:

- **Condicionales (if, elif, else):** Permite ejecutar bloques de código basados en condiciones.
- **Bucles (for, while):** Permiten ejecutar bloques de código de forma repetida.

\`\`\`python
# Ejemplo de estructuras de control
if x > 5:
    print("x es mayor que 5")
elif x == 5:
    print("x es igual a 5")
else:
    print("x es menor que 5")
\`\`\`

¡Estos son solo algunos conceptos básicos para comenzar a programar en Python! Practica con ejemplos y sigue explorando para mejorar tus habilidades.
`

function Post() {
  const { exercise } = useParams()

  return (
    <div className="flex flex-col">
      <Sidebar />
      <h2 className="mb-4">Post ID: {exercise}</h2>
      <div className="flex">
        <MarkdownCard>{markdownContent}</MarkdownCard>
        <CodeEditor />
      </div>
    </div>
  )
}

export default Post
