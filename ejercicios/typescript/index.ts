//Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado: number = numerador / denominador;

// String
let nombre: string = "Hector";
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
//people.push("600")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Hector");
peopleAndNumbers.push(3000);

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Negro = "Negro",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

// Object
let someObject: object = { type: "object" };

// Funciones
function add(a: number, b: number): number {
  return a + b;
}
const sum = add(2, 40);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// parametros opcionales
function fullName(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`;
}

const nombreCompleto = fullName("Agente");
//console.log(nombreCompleto)

// Interfaces

interface Rectangulo {
  ancho: number;
  alto: number;
  //color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 5,
};

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
//console.log(areaRect);

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

//console.log(rect.toString());
