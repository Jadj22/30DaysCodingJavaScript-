// revision.js

/*
🧪 Expérience des Défis JavaScript : Scope et Hoisting
Auteur : Mister Jo
Date : Avril 2025
*/

// -----------------------------
// Partie 1 : Hoisting & portée
// -----------------------------

// Défi 1
console.log("maison :", maison); // undefined (réponse correcte)
var maison = "Maison principale";

// Défi 2 (décommenter pour test)
// console.log("pièce :", pièce); // ReferenceError (TDZ)
// console.log("objet :", objet); // ReferenceError (TDZ)
let pièce = "Salon";
const objet = "Télévision";

// Analyse réponse :
// Mister Jo a bien expliqué que "maison" est undefined à cause du hoisting avec var ✅
// Et il a anticipé une erreur pour pièce et objet à cause de let/const dans la TDZ ✅
// Note : 2/2

// -----------------------------
// Partie 2 : Bloc if
// -----------------------------

if (true) {
  var maison = "Maison secondaire";
  let pièce = "Cuisine";
  const objet = "Frigo";

  console.log("2️⃣ Bloc IF");
  console.log("maison :", maison);      // Maison secondaire ✅
  console.log("pièce :", pièce);        // Cuisine ✅
  console.log("objet :", objet);        // Frigo ✅
}

console.log("3️⃣ Après IF");
console.log("maison :", maison);        // Maison secondaire ✅
console.log("pièce :", pièce);          // ReferenceError ❌ (hors portée)
console.log("objet :", objet);          // ReferenceError ❌ (hors portée)

// Analyse réponse :
// Mister Jo a bien vu que maison est modifié même en dehors du if ✅
// Bonne distinction entre var (fonctionnelle) et let/const (bloc) ✅
// Note : 3/3

// -----------------------------
// Partie 3 : Boucles & setTimeout
// -----------------------------

// Défi 6 : var dans une boucle
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("⌛ Avec var dans boucle :", i);
  }, (i + 1) * 1000);
}

// Défi 7 : let dans une boucle
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("⌛ Avec let dans boucle :", i);
  }, (i + 1) * 1000);
}

// Défi 8 : Const et réassignation
const outil = "marteau";
// outil = "tournevis"; // TypeError : Assignment to constant variable ❌

// Analyse réponse :
// ✅ Bonne compréhension du comportement de let avec setTimeout
// ❌ Mauvaise prédiction sur var dans la boucle (devait être 3 3 3)
// ✅ Bonne réponse sur const (non réassignable)
// Note : 2/3

// -----------------------------
// Résumé final des notes
// -----------------------------
// Partie 1 : 2/2
// Partie 2 : 3/3
// Partie 3 : 2/3
// ✅ Total : 7/8

console.log("\n✅ Note finale de Mister Jo : 7 / 8");
console.log("👏 Bravo pour la progression et les bonnes intuitions !");
