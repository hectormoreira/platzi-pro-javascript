# platzi-pro-javascript
[Curso profesional de JavaScript](https://platzi.com/clases/javascript-profesional/) en Platzi

- [Slides del curso](https://static.platzi.com/media/public/uploads/slides-curso-profesional-de-javascript_3dde967c-8534-4041-891d-317d033e2724.pdf)

## Conceptos
- El **Scope** o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.
**Global Scope**
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.
**Function Scope**
Variables declaradas dentro de una función sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).
**Block Scope**
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.
**Module Scope**
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.
- **Closures** Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope. Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.
- **This** this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código. No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos.
- **Los métodos call, apply y bind** Estas funciones nos sirven para establecer el valor de this, es decir cambiar el contexto que se va usar cuando la función sea llamada. Las funciones call, apply y bind son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones. 
**functionName.call()**. Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
**functionName.apply()**. Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
**functionName.bind()**. Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.
- **function curring** permite guardar argumentos parciales.
## Crear entorno
```sh
npm init -y
npm i -D live-server

```