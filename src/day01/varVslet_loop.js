// 📁 Résumé des différences entre var et let dans une boucle avec setTimeout

// --- Exemple avec var ---
console.log("--- Exemple avec var ---");
for (var i = 0; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Résultat attendu (après 1 seconde):
// 4
// 4
// 4
// 4

// Pourquoi ?
// - var a une portée fonctionnelle : i est partagée dans toute la boucle
// - Les fonctions setTimeout sont appelées après la fin de la boucle
// - À la fin, i vaut 4, donc elles affichent toutes 4


// --- Exemple avec let ---
console.log("--- Exemple avec let ---");
for (let i = 0; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Résultat attendu (après 1 seconde):
// 0
// 1
// 2
// 3

// Pourquoi ?
// - let a une portée de bloc : chaque itération a sa propre copie de i
// - Les fonctions setTimeout capturent la valeur de i au moment de l'itération

// 🧠 Retenir :
// - var => même variable partagée
// - let => nouvelle variable à chaque tour de boucle

// 🔁 Et la boucle ?
// - Elle continue tant que la condition est vraie
// - Quand la condition est fausse, la boucle s'arrête mais la variable i garde sa valeur finale
// - Exemple : i <= 3 → la boucle s'arrête quand i vaut 4
