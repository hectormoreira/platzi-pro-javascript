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

let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push("Hector");
peopleAndNumbers.push(3000);

// Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Negro = "Negro"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard"}

// Object
let someObject: object = { type: "object"}