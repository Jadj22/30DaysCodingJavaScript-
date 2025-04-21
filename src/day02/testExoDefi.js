

// let age = 16;

// if (age >= 18) {
//     console.log("Tu peux passer le permis de conduire.");
// } else {
//     console.log("Tu dois attendre d'avoir 18 ans.");
// }

// let note = 17;

// if (note >= 16 && note <= 20) {
//     console.log("Mention très bien");
// }
// else if (note >= 12 && note < 16) {
//     console.log("Mention bien");
// }
// else if (note >= 10 && note < 12) {
//     console.log("Mention passable");
// }
// else if (note >= 0 && note < 10) {
//     console.log("Mention insuffisante");
// }
// else if ( Number.isNaN(note) ) {
//     console.log("Note invalide");
// } else {
//     console.log("Note invalide");
// }


// let motDePasse = "qwerty1234";

// if ( motDePasse == "qwerty1234") {
//     console.log("Mot de passe correct.");
// } else {
//     console.log("Mot de passe incorrect.");
// }


// let nombre = 13;

// if (nombre % 2 === 0) {
//     console.log("Le nombre est pair.");
// }
// else {
//     console.log("Le nombre est impair.");
// }

// let age = 16;

// if (age >= 0 && age <= 4) {
//     console.log("Gratuit");
// }
// else if (age < 18) {
//     console.log("Tarif jeune");
// }
// else if (age >= 19 && age <= 64) {
//     console.log("Tarif plein");
// }
// else if (age >= 65) {
//     console.log("Tarif senior");
// }
// else {
//     console.log("Âge invalide");
// }

// let password = "Az3!ty234";
// let confirmPassword = "Az3!ty234";

// if (password.length < 8) {
//     console.log("Le mot de passe doit contenir au moins 8 caractères.");
// }
// else if (password !== confirmPassword) {
//     console.log("Les mots de passe ne correspondent pas, non identiques.");
// }
// else {
//     console.log("Mot de passe valide.");
// }



// let temperature = 39;
// let tension = 8;

// if ( temperature > 40 || tension < 6) {
//     console.log("Urgence absolue");
// }
// else if (temperature >= 38) {
//     console.log("Urgence detectée");
// }
// else if (temperature < 10) {
//     console.log("Tension basse")
// }
// else {
//     console.log("État normal ou normale");
// }

// Exercice 1 :
// Créez une fonction qui vérifie si un nombre est premier ou non.

// function nbrePremier(n) {

//     if (n < 1 && n / 1 !== n && n / n !== 1) {
//         return console.log("Ce n'est pas un nombre premier");
//     }
//     else if (n > 1 && n / 1 === n && n / n === 1) {
//         return console.log("C'est un nombre premier");
//     }
// }

// nbrePremier(43);

// // Exercice 2 :
// //  Calculer la factorielle d’un nombre

// function factorielle(f) {

//     let fact = 1;
//     for (let i = 1; i <= f; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorielle(5)); // 120

// // Exercice 3 :
// // Calculer le maximum et le minimum dans un tableau

// function maxMin(tableau) {
//     let max = tableau[0];
//     let min = tableau[0];

//     for (let i = 1; i < tableau.length; i++) {
//         if(tableau[i] > max) {
//             max = tableau[i];
//         }
//         if(tableau[i] < min) {
//             min = tableau[i];
//         }
//     }
//     return { max, min };
// }
// const tableau = [5, 12, 3, 8, 20];
// const result = maxMin(tableau);
// console.log("Maximum :", result.max); // 20
// console.log("Minimum :", result.min); // 3


// function nbrePremier(n) {

//     if (n <= 1){
//         return console.log("Ce n'est pas un nombre premier");
//     }

//     for (let i = 2; i < n ; i++) {
//         if (n % i === 0) {
//             return console.log("Ce n'est pas un nombre premier");
//         }
//     }

// }

// nbrePremier(43);
// nbrePremier(0);
// nbrePremier(1);

// // Exercice 4 : Vérification d’un palindrome

// function estPalindrome(chaine) {
//     let inverse = chaine.split("").reverse().join("");
//     return inverse === chaine;
// }
// console.log(estPalindrome("radar")); // true
// console.log(estPalindrome("hello")); // false
// console.log(estPalindrome("level")); // true
// console.log(estPalindrome("world")); // false


// function genererMotPasse(taille) {

//     const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
//     let motDePasse = "";

//     for (let i = 0; i < taille; i++) {
//         const index = Math.floor(Math.random() * caracteres.length);
//         motDePasse += caracteres[index];
//     }

//     return motDePasse;
// }

// console.log(genererMotPasse(12)); // Exemple de mot de passe généré



// À tester dans un navigateur
// const nombreMagique = Math.floor(Math.random() * 100) + 1;
// let proposition;
// let essais = 0;

// while (proposition !== nombreMagique) {
//     proposition = parseInt(prompt("Devine le nombre entre 1 et 100 :"));
//     essais++;

//     if (proposition > nombreMagique) {
//         alert("Trop grand !");
//     } else if (proposition < nombreMagique) {
//         alert("Trop petit !");
//     } else {
//         alert(`Bravo ! Tu as trouvé en ${essais} essais.`);
//     }
// }

// Exercice 5 :
const notes = [12, 8, 15, 17, 5, 10, 14];

let somme = 0;
let max = notes[0];
let nbMoyenne = 0;

for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
    
    if (notes[i] > max) {
        max = notes[i];
    }

    if (notes[i] >= 10) {
        nbMoyenne++;
    }
}

const moyenne = somme / notes.length;

console.log("Moyenne :", moyenne.toFixed(2));
console.log("Note la plus élevée :", max);
console.log("Nombre d'élèves ayant la moyenne :", nbMoyenne);



