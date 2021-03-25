# platzi-pro-javascript
[Curso profesional de JavaScript](https://platzi.com/clases/javascript-profesional/) en Platzi

- [Slides del curso](https://static.platzi.com/media/public/uploads/slides-curso-profesional-de-javascript_3dde967c-8534-4041-891d-317d033e2724.pdf)

# Crear entorno
```sh
npm init -y
npm i -D live-server

```

## Conceptos
### Scope
Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.
### Global Scope
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.
### Function Scope
Variables declaradas dentro de una función sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).
### Block Scope
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.
### Module Scope
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.
### Closures
Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope. Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.
### This
This se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código. No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos.
### Los métodos call, apply y bind
Estas funciones nos sirven para establecer el valor de this, es decir cambiar el contexto que se va usar cuando la función sea llamada. Las funciones call, apply y bind son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones. 
**functionName.call()**. Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
**functionName.apply()**. Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
**functionName.bind()**. Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.
### function curring
Permite guardar argumentos parciales.
### Prototype
Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la prototype chain.La keyword new crea un nuevo objeto que “hereda” todas las propiedades del prototype de otro objeto. No confundir prototype con proto que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.

### Herencia Prototipal
Por default los objetos en JavaScript tienen cómo prototipo a Object que es el punto de partida de todos los objetos, es el prototipo padre. Object es la raíz de todo, por lo tanto tiene un prototipo padre undefined.
Cuando se llama a una función o variable que no se encuentra en el mismo objeto que la llamó, se busca en toda la prototype chain hasta encontrarla o regresar undefined.
La función hasOwnProperty sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.

### Parsers y el Abstract Syntax Tree
El JS Engine recibe el código fuente y lo procesa de la siguiente manera:
- El parser descompone y crea tokens que integran el AST.
- Se compila a bytecode y se ejecuta.
- Lo que se pueda se optimiza a machine code y se reemplaza el código base.
Un **SyntaxError** es lanzado cuando el motor JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que se tiene un AST generado por el parser.
El parser es del 15% al 20% del proceso de ejecución por lo que hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.

**AST** Es una estructura que hace más fácil el análisis de código

### Cómo funciona el JavaScript Engine
Una vez tenemos el AST ahora hay que convertirlo a **Bytecode**.
Bytecode es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador.

**Machine code** es el más bajo nivel, es código binario que va directo al procesador.

**El profiler** se sitúa en medio del bytecode y el optimizador

Cada máquina virtual tiene sus particularidades, por ejemplo V8 tiene algo llamado **Hot Functions**.
Cuando una sentencia función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.

Cada navegador tiene su implementación de JavaScript Engine:

- SpiderMonkey - Firefox
- Chackra - Edge
- JavaScriptCore - Safari
- V8 - Chrome

### El Event Loop
Hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

**Stack**. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.

**Memory Heap**. De forma desorganizada se guarda información de las variables y del scope.

**Schedule Tasks**. Aquí se agregan a la cola, las tareas programadas para su ejecución.

**Task Queue**. Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.

**MicroTask Queue**. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

> El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.

### Promesas
Para crear las promesas usamos la clase Promise. El constructor de Promise recibe un sólo argumento, un callback con dos parámetros, **resolve** y **reject**. resolve es la función a ejecutar cuando se resuelve y reject cuando se rechaza.

El async/await es sólo syntax sugar de una promesa, por debajo es exactamente lo mismo.

La clase Promise tiene algunos métodos estáticos bastante útiles:

**Promise.all**. Da error si una de las promesas es rechazada.

**Promise.race**. Regresa sólo la promesa que se resuelva primero.

### Getters y setters
Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords set y get para crear estas propiedades.

Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más dentro del objeto.

### Proxy
El proxy sirve para interceptar la lectura de propiedades de un objeto (los get, y set) entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica que nosotros definamos.

### Generators
Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

**Algunas de sus características:**

- Los generadores regresan una función.
- Empiezan suspendidos y se tiene que llamar next para que ejecuten.
- Regresan un value y un boolean done que define si ya terminaron.
- yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

### Fetch - Cómo cancelar peticiones
La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función **fetch** para esto.

Con **fetch** tenemos algo llamado **AbortController** que nos permite enviar una señal a una petición en plena ejecución para detenerla.

### IntersectionObserver
Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.

El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.

### VisibilityChange
El **visibilityChange** forma parte del API del DOM llamado **Page Visibility** y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

### Service Workers
Sirven para hacer que nuestras aplicaciones funcionen Offline.

Muy usados en las **Progressive Web Apps** (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.

## TypeScript - Introducción
**TypeScript** es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

### Tipos básicos
Tipos:
- **boolean**. Valor verdadero o falso.
- **number**. Números.
- **string**. Cadenas de texto.
- **string[]**. Arreglo del tipo cadena de texto.
- **Array**. Arreglo multi-tipo, acepta cadenas de texto o números.
- **enum**. Es un tipo especial llamado enumeración.
- **any**. Cualquier tipo.
- **object**. Del tipo objeto.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.
### Funciones
En Typescript podemos ser explícitos con el tipo de los argumentos y el tipo de retorno de una función.

### Interfaces
Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

### Clases
En las clases en TypeScript sí existen las propiedades privadas.

## Patrones de diseño
Son soluciones generales ya probadas dentro de un contexto que las limita a problemas frecuentes que nos encontramos en el desarrollo de software.

### Categorías de patrones de diseño
- **Creacionales**. Proveen diferentes mecanismos para crear objetos.
    - Abstract Factory
    - Builder
    - Factory Method
    - Prototype
    - Singleton
- **Estructurales**. Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
    - Adapter
    - Bridge
    - Composite
    - Decorator
    - Facade
    - Flyweight
    - Proxy
- **De Comportamiento**. Gestionan algoritmos y responsabilidades entre objetos.
    - Chain of Responsibility
    - Command
    - Interpreter
    - Iterator
    - Mediator
    - Memento
    - Observer
    - State
    - Strategy
    - Template Method
    - Visitor
### Patrón Singleton (Creacional) y Casos de Uso
Es un patrón que te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.

### Patrón Observer
El patrón observer se compone de un sujeto que ofrece mecanismos de suscripción y desuscripción a múltiples observadores que quieren ser notificados de los cambios en dicho sujeto. Cada observador expone un método de update que es usado por el sujeto para notificar cualquier cambio a todos los suscritos.

Es uno de los patrones más utilizados, algunos ejemplos típicos son:

- Newsletter
- Sockets
- Listeners en páginas web

### Patrón Decorator
Añade nuevas responsabilidades a un objeto de forma dinámica permitiendo así extender su funcionalidad sin tener que usar subclases.









## Recursos
- [AST Explorer](https://astexplorer.net/#/gist/16fc27fc420f705455f2b42b6c804aa1/d9cc7988c2c743d7edfbb3c3b1abed866c975ee4)
- [ASLint](https://eslint.org/)

### Dependencias
```sh
npm install -D parcel-bundler
npm rm live-server
npm i -D typescript
```

Borrar caché Parcel
```
rm -rf .cache dist
```

Registrarse y publicar en npm
```
npm login
npm whoami
npm publish --access=public
```