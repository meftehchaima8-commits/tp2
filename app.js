
"use strict";

// Exercice 1

document.getElementById("resultat").textContent = "Bonjour les étudiants";
console.log("Bonjour les étudiants");


// Exercice 2

let prenom = prompt("Donner votre prénom");

if (prenom != null && prenom.trim() != "") {
    document.getElementById("resultat").innerHTML = "Bonjour " + prenom;
} else {
    document.getElementById("resultat").innerHTML = "Prénom non valide";
}


// Exercice 3

let ch = "";

for (let i = 1; i <= 5; i++) {
    ch = ch + "Log " + i + "<br>";
}

document.getElementById("resultat3").innerHTML = ch;


// Exercice 4

function sommeEntre(a, b) {
    let s = 0;

    if (a > b) {
        let t = a;
        a = b;
        b = t;
    }

    for (let i = Math.floor(a) + 1; i < b; i++) {
        s = s + i;
    }

    return s;
}

function sommePairsEntre(a, b) {
    let s = 0;

    if (a > b) {
        let t = a;
        a = b;
        b = t;
    }

    for (let i = Math.floor(a) + 1; i < b; i++) {
        if (i % 2 == 0) {
            s = s + i;
        }
    }

    return s;
}

let a = Number(prompt("Donner a"));
let b = Number(prompt("Donner b"));

if (Number.isFinite(a) && Number.isFinite(b)) {
    document.getElementById("resultat4").innerHTML =
        "Somme = " + sommeEntre(a, b) +
        "<br>Somme des pairs = " + sommePairsEntre(a, b);
} else {
    document.getElementById("resultat4").innerHTML = "Valeurs invalides";
}


// Exercice 5

function moyenne(dc1, dc2, ds) {
    return dc1 * 0.3 + dc2 * 0.3 + ds * 0.4;
}

let dc1 = Number(prompt("Donner DC1"));
let dc2 = Number(prompt("Donner DC2"));
let ds = Number(prompt("Donner DS"));

if (dc1 >= 0 && dc1 <= 20 &&
    dc2 >= 0 && dc2 <= 20 &&
    ds >= 0 && ds <= 20) {

    let m = moyenne(dc1, dc2, ds);

    if (m >= 10) {
        document.getElementById("resultat5").innerHTML =
            "Moyenne = " + m.toFixed(2) + "<br>Admis";
    } else {
        document.getElementById("resultat5").innerHTML =
            "Moyenne = " + m.toFixed(2) + "<br>Ajourné";
    }

} else {
    document.getElementById("resultat5").innerHTML = "Notes invalides";
}


// Exercice 6

let notes = [];
let note = Number(prompt("Donner une note (négative pour arrêter)"));

while (note >= 0) {
    notes.push(note);
    note = Number(prompt("Donner une autre note"));
}

if (notes.length > 0) {
    let somme = 0;
    let min = notes[0];
    let max = notes[0];

    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];

        if (notes[i] < min) {
            min = notes[i];
        }

        if (notes[i] > max) {
            max = notes[i];
        }
    }

    let moy = somme / notes.length;

    document.getElementById("resultat6").innerHTML =
        "Nombre de notes = " + notes.length +
        "<br>Moyenne = " + moy.toFixed(2) +
        "<br>Note minimale = " + min +
        "<br>Note maximale = " + max;

} else {
    document.getElementById("resultat6").innerHTML = "Aucune note saisie";
}
