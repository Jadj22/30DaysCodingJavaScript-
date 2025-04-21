# 🚀 PROGRESSDAY02 - Conditions en JavaScript

## 📅 Date : Avril 2025
**👨‍💻 Auteur** : Mister Jo  

---

## 📖 Objectif du Jour

Approfondir la maîtrise des **structures conditionnelles** en JavaScript :

- Comprendre le fonctionnement de `if`, `else if`, `else`
- Explorer l'instruction `switch`
- Gérer les cas d'égalité stricte vs souple (`===` vs `==`)
- Mettre en place une logique de contrôle claire et lisible

---

## 🎯 Compétences ciblées

- Exécuter une logique conditionnelle en fonction de différentes valeurs
- Utiliser les bonnes structures pour des cas multiples
- Lire et prédire l'exécution d’un bloc conditionnel

---

## 🧪 Expériences et Exercices Réalisés

Le fichier `testConditions.js` regroupe les exercices suivants :

| Exercice | Sujet | Résultat | Analyse |
|---------|-------|----------|---------|
| 1 | Condition simple `if` | ✅ | Bonne anticipation des blocs exécutés |
| 2 | Chaîne `if`, `else if`, `else` | ✅ | Raisonnement progressif cohérent |
| 3 | Comparaison `==` vs `===` | ✅ | Compréhension de la différence type/valeur |
| 4 | `switch` avec `break` | ✅ | Bonne navigation dans les cas |
| 5 | `switch` sans `break` | ✅ | Compréhension du "fallthrough" |

---

## 💡 Concepts Clés Retenus

### ✅ Structure `if` de base
```js
if (condition) {
  // bloc exécuté si la condition est vraie
} else {
  // sinon
}
```

### ✅ `else if` pour les alternatives
```js
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Bien");
} else {
  console.log("À revoir");
}
```

### ✅ Comparaisons
- `==` compare **la valeur** (avec conversion de type)
- `===` compare **la valeur ET le type**

### ✅ `switch`
```js
switch (jour) {
  case "lundi":
    console.log("Début de semaine");
    break;
  case "vendredi":
    console.log("Presque le week-end");
    break;
  default:
    console.log("Jour normal");
}
```

- Sans `break`, les cas suivants s'exécutent aussi ➜ **fallthrough**

---

## 🧠 Expérience Personnelle

- Une forte **logique conditionnelle** déjà en place.
- Bonne capacité à lire les blocs imbriqués.
- Quelques erreurs d’inattention corrigées rapidement.
- Bonne intuition des priorités de comparaison.

---

## 🚀 Prochaine étape (Day03)

- Approfondir les **fonctions** :
  - Fonctions déclarées vs expressions
  - Paramètres et valeurs de retour
  - Scope dans les fonctions

---

**🗂️ Fichier principal** : `testConditions.js`  
**✍️ Auteur** : Mister Jo  
**📅 Date** : Avril 2025
