// plik scripts.js

// *************** Zadanie 7 - Papugi i słonie ***************

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";

var upperAnimal = animal.toUpperCase();
console.log(upperAnimal);

var textAnimal = text.replace('Papugi', upperAnimal);
console.log(textAnimal);
console.log(textAnimal.substr(0, textAnimal.length/2));


