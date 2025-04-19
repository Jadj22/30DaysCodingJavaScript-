// ─────────────────────────────────────────────────────────────
// testExoDefi.js
// 🔥 Série de défis pour maîtriser le scope, var, let, const et hoisting en JavaScript
// 💡 Par Mister Jo 💪
// Ce fichier inclut les réponses de Mister Jo et les corrections avec explications détaillées.
// ─────────────────────────────────────────────────────────────


// 🔥 Défi 1 : Comprendre la portée dans un bloc
function testScope() {
    let x = 5;
  
    if (true) {
      let x = 10;
      console.log("🔹 Dans le bloc :", x); // Affiche 10
    }
  
    console.log("🔸 En dehors du bloc :", x); // Affiche 5
  }
  
  console.log("=== Défi 1 ===");
  testScope();
  // Réponse de Mister Jo :
  // Q1 : "Dans le bloc : 10, En dehors : 5"
  // Q2 : "Parce que la variable x n'est accessible et modifiable que dans son bloc de fonction
  //       mais pas dans la condition if. La portée de let est protégée par son mur (bloc)."
  // ✅ Correct !
  // Explication : `let` a une portée de bloc. Le `x = 10` dans le `if` est une nouvelle variable
  // distincte du `x = 5` dans la fonction. Ils ne s’affectent pas.
  
  
  // 🔥 Défi 2 : `var` et re-déclaration
  function varTest() {
    var a = 1;
  
    if (true) {
      var a = 2;
      console.log("🔹 Bloc if :", a); // Affiche 2
    }
  
    console.log("🔸 En dehors du bloc :", a); // Affiche 2
  }
  
  console.log("\n=== Défi 2 ===");
  varTest();
  // Réponse de Mister Jo :
  // Q1 : "`a` ne garde pas sa valeur 1 car elle a été redéclarée dans le `if`."
  // Q2 : "Ça montre que `var` est une portée fonctionnelle."
  // ✅ Correct !
  // Explication : `var` a une portée fonctionnelle. La redéclaration de `a = 2` dans le `if`
  // modifie la même variable `a` de la fonction, car `var` ignore les blocs.
  
  
  // 🔥 Défi 3 : `const` et réaffectation
  function testConst() {
    const message = "Hello Mister Jo";
    // message = "Coucou"; // Décommentez pour voir l'erreur : TypeError
    console.log(message); // Affiche "Hello Mister Jo"
  }
  
  console.log("\n=== Défi 3 ===");
  testConst();
  // Réponse de Mister Jo :
  // Q1 : "Le code ne fonctionne pas."
  // Q2 : "Parce que `message` est déclaré avec `const` qui est constante.
  //       On ne peut pas réassigner une variable `const`."
  // ✅ Correct !
  // Explication : `const` empêche la réassignation. Tenter de changer `message` provoque
  // une erreur : TypeError: Assignment to constant variable.
  
  
  // 🔥 Défi 4 : `let` dans une boucle – logique de piège
  function testLoopLet() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log("let i:", i); // Affiche 0, 1, 2 (après 1s)
      }, 1000);
    }
  }
  
  console.log("\n=== Défi 4 ===");
  testLoopLet();
  // Réponse de Mister Jo :
  // Q1 : "La console va afficher 0, 1, 2 chaque 1000ms."
  // Q2 : "Il ne va pas afficher trois fois la même valeur car `i` est incrémenté."
  // Q3 : "La variable `let i` est déclarée dans un bloc, accessible seulement là-dedans."
  // ✅ Correct !
  // Explication : `let` crée une nouvelle variable `i` à chaque itération (portée de bloc).
  // Chaque `setTimeout` capture son propre `i`, donc on obtient 0, 1, 2 après 1 seconde.
  
  
  // 🔥 Défi 5 : `var` dans une boucle – attention danger
  function testLoopVar() {
    for (var i = 0; i < 3; i++) {
      setTimeout(() => {
        console.log("var i:", i); // Affiche 3, 3, 3 (après 1s)
      }, 1000);
    }
  }
  
  console.log("\n=== Défi 5 ===");
  testLoopVar();
  // Réponse de Mister Jo :
  // Q1 : "Elle va afficher 0, 1, 2."
  // Q2 : "Il n’y a pas vraiment de différence car elles sont dans la même portée."
  // ❌ Incorrect.
  // Correction :
  // Q1 : La console affiche `3, 3, 3`.
  // Q2 : `var` a une portée fonctionnelle, donc un seul `i` est partagé par toutes les
  // itérations. Quand `setTimeout` s'exécute (après 1s), la boucle est finie et `i = 3`.
  // Explication : Contrairement à `let`, `var` ne crée pas une nouvelle variable à chaque
  // tour. Tous les `setTimeout` partagent le même `i`, qui vaut 3 à la fin de la boucle.
  
  
  // 🔥 Défi 6 : Re-déclaration invisible avec `var`
  function demo() {
    console.log(x); // Affiche undefined
    var x = 7;
    console.log(x); // Affiche 7
  }
  
  console.log("\n=== Défi 6 ===");
  demo();
  // Réponse de Mister Jo :
  // Q1 : "Le premier `console.log` va afficher une erreur : 'Quel est la valeur de x ?'"
  // Q2 : "Car le code est exécuté de haut en bas et `x` n’est pas encore déclaré."
  // Q3 : "JS échoue au premier `console.log`, puis déclare `x` pour le second."
  // ❌ Incorrect.
  // Correction :
  // Q1 : Le premier `console.log(x)` affiche `undefined`.
  // Q2 : Pas d’erreur car `var x` est **hoisté** (déplacé en haut de la fonction).
  // Q3 : JS traite `var` en déclarant `x` en haut, mais sans valeur (`undefined`).
  // Explication : Le hoisting fait que `var x` est déclaré avant l’exécution, mais
  // l’initialisation (`x = 7`) reste à sa place.
  
  
  // 🔥 Défi 7 : Le mix explosif – `var`, `let`, `const`, portée + hoisting
  function test() {
    console.log(a); // Affiche undefined
    // console.log(b); // Provoque une erreur : ReferenceError (décommentez pour tester)
    var a = 10;
    let b = 20;
    const c = 30;
  
    if (true) {
      var a = 100;
      let b = 200;
      const c = 300;
      console.log("IF BLOCK:", a, b, c); // Affiche IF BLOCK: 100 200 300
    }
  
    console.log("OUTSIDE IF:", a, b, c); // Affiche OUTSIDE IF: 100 20 30
  }
  
  console.log("\n=== Défi 7 ===");
  test();
  // Réponse de Mister Jo :
  // Q1 : "`console.log(a)` affiche `undefined`."
  // Q2 : "`console.log(b)` affiche `undefined` comme le premier."
  // Q3 : "`IF BLOCK: 100 200 300`."
  // Q4 : "`OUTSIDE IF: 100 20 30`."
  // Q5 : "`a` a changé car il a été redéclaré dans le `if`."
  // ✅/❌ Partiellement correct.
  // Correction :
  // Q1 : ✅ Correct, `var a` est hoisté → `undefined`.
  // Q2 : ❌ Incorrect, `console.log(b)` provoque une `ReferenceError` car `let b` est dans
  // la TDZ (Temporal Dead Zone) jusqu’à sa déclaration.
  // Q3 : ✅ Correct, dans le `if`, `var a = 100`, `let b = 200`, `const c = 300` sont locaux.
  // Q4 : ✅ Correct, hors `if`, `a = 100` (modifié par `var`), `b = 20`, `c = 30`.
  // Q5 : ✅ Correct, `var a` a une portée fonctionnelle, donc `a = 100` dans le `if` modifie
  // le `a` global.
  // Explication :
  // - `var a` est hoisté, donc `undefined` au début.
  // - `let b` et `const c` sont dans la TDZ → erreur si accédés avant déclaration.
  // - Dans le `if`, `var a = 100` modifie le `a` global, mais `let b` et `const c` sont locaux.
  
  
  // 💡 Résumé des concepts fondamentaux
  // ┌─────────┬────────────┬────────────┬──────────────┬────────────────┐
  // │ Mot-clé │ Portée     │ Hoisting   │ Redeclarable │ Réassignable   │
  // ├─────────┼────────────┼────────────┼──────────────┼────────────────┤
  // │ var     │ Fonction   │ Oui (undefined) │ Oui     │ Oui            │
  // │ let     │ Bloc       │ Oui (TDZ)  │ Non          │ Oui            │
  // │ const   │ Bloc       │ Oui (TDZ)  │ Non          │ Non            │
  // └─────────┴────────────┴────────────┴──────────────┴────────────────┘
  