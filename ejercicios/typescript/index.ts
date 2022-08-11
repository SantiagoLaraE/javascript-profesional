//Boolean
let muted: boolean = true;
muted = false;
// muted = "callado";

//Números

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String

let nombre: string = "Santiago";
let saludo = `Me llamo ${nombre}`;

console.log(saludo);

// Arreglos

let people: string[] = [];
people = ["Isabel", "Santiago"];

let peopleAndNumbers: Array <string | number>;

// Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde", 
    Azul = "Azul",
}

let colorFavorito :Color = Color.Verde;

console.log(colorFavorito);

//Any

let comodin: any = "Joker";
comodin = {type: "Wildcard"}

// Object

let someObject : object = {name: 'Santiago'};
