

// Les strucutures conditionnelles
// if, else if, else
// switch

// let age = 20;

// if (age >= 18) {
//     console.log("Vous êtes majeur.");
// }

// let heure = 20;

// if (heure < 12) {
//     console.log("Bonjour !");
// } else {
//     console.log("Bon apres midi et dormez bien !");
// }

// let note = 17;

// if (note >= 18) {
//     console.log("Mention très bien");
// } else if (note >= 10) {
//     console.log("Moyen.");
// } else {
//     console.log("Mauvais.");
// }


// let fruit = "orange";

// switch (fruit) {
//     case "banana":
//         console.log("C'est une banane.");
//         break;
//     case "orange":
//         console.log("C'est une orange.");
//         break;
//     case "pomme":
//         console.log("C'est une pomme.");
//         break;
//     default:
//         console.log("Fruit inconnu.");
//         break;
// }

// Operateur ternaire

// let estConnecté = false;
// let message = estConnecté ? "Bienvenue !" : "Veuillez vous connecter.";
// console.log(message);

// let estPublique = false;
// let message2 = estPublique ? "Accès public" : "Accès privé";
// console.log(message2);


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let f = 0;

// do {
//     console.log(f);
//     f++;
// } while (f < 5);

// for ( let i = 1; i <= 10; i++ ) {
//     console.log(i);
// }


for (let i = 1 ; i <= 20 ; i++) {
    if( i % 2 === 0) {
        console.log(i + " est pair");
    }
    else {
        console.log(i + " est impair");
    }
}


let m = 7;

for (let i = 1; i <= 10; i++) {
    console.log(m + " x " + i + " = " + m * i);
}


const fruits = ["banane", "orange", "pomme", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}