// Declaration de variables
// var, let, const
// var : variable modifiable
// let : variable modifiable mais portée limitée
// const : variable non modifiable

// Types de données
// Primitifs : String, Number, Boolean, Undefined, Null, Symbol, BigInt
// References : Object, Array, Function



// Une varaible est une boite dans laquelle on peut stocker une valeur pour la reutiliser plus tard
// On peut declarer une variable avec var, let ou const
let prenom = "Jo";

console.log(prenom); // Jo
// On peut modifier la valeur de la variable
prenom = "Jean";
console.log(prenom); // Jean

// Type de données
// Un type de données est la nature de ce que tu met dans la boite
//String 
let nom = "Jean"; // String
// Number
let age = 25; // Number
let liter = 1.5; // Number
console.log(age); // 25
age = 30; // On peut modifier la valeur de la variable
console.log(age); // 30
// Boolean
let isTrue = true; // Boolean
let isFalse = false; // Boolean
console.log(isTrue); // true
// Undefined
let prenom2; // Undefined
console.log(prenom2); // undefined
// Null
let prenom3 = null; // Null
console.log(prenom3); // null
// Symbol
let sym = Symbol("sym"); // Symbol
console.log(sym); // Symbol(sym)
// BigInt
let bigInt = 1234567890123456789012345678901234567890n; // BigInt
console.log(bigInt); // 1234567890123456789012345678901234567890n
// Object
let obj = {
    nom: "Jean",
    age: 25,
    isTrue: true,
}
console.log(obj); // { nom: 'Jean', age: 25, isTrue: true }
// Array
let array = [1, "Jo", true, null]; // Array
console.log(array); // [ 1, 'Jo', true, null ]
// Function : Est du code que tu peux executer et reutiliser
function direBonjour() {
    let prenom = "Joel";
    console.log(`Bonjour ${prenom}`);
}
direBonjour(); // Bonjour Joel
// La fonction est un type de données particulier

//Les regles de declaration de variable
// La portée de var est fonctionnelle, global. Elle n'est accessible que dans la fonction dans laquelle elle a été déclarée

function maFonction () {
    var prenom = "Jo";
    console.log(prenom); // Jo
}
maFonction(); // Jo
console.log(prenom); // ReferenceError: prenom is not defined

// La portée de let est de bloc. Elle n'est accessible que dans le bloc dans lequel elle a été déclarée {}

if (true) {
    let test = "Joe";
    console.log(test); // Joe
}
// console.log(test); // ReferenceError: test is not defined


// La portée de let est de bloc. Elle n'est accessible que dans le bloc dans lequel elle a été déclarée
// La portée de const est de bloc. Elle n'est accessible que dans le bloc dans lequel elle a été déclarée


// Exemple visent à montrer la portée de var, let et const

function test() {
    var a = 1;
    let b = 2;
    const c = 3;

    if (true) {
        var a = 4; // redeclaration de a
        let b = 5; // declaration de b
        const c = 6; // declaration de c
        console.log("Dans le bloc if :", a, b, c); // 4 5 6
    }

    console.log("En dehors du bloc if :", a, b, c); // 4 2 3
}
test();

// 10 et 5
// 2 et 2