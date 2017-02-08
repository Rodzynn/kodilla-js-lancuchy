// plik scripts.js

// *************** Zadanie 1 - prompt ***************

var name = prompt('Wpisz swoje imię'); // deklaracja zmiennej oi przypisanie jej wartości
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

// *************** Zadanie 2 - komentarze ***************

// var name = prompt('Wpisz swoje imię'); // deklaracja zmiennej oi przypisanie jej wartości
// alert('Witaj, ' + name);
/* console.log('Witaj, ' + name); */

// *************** Zadanie 3 - Pole trójkąta ***************

var a = prompt("podaj bok a"), 
h = prompt ("podaj bok b"),
triangleArea;

triangleArea = a * h / 2;
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log(triangleArea);

// *************** Zadanie 4 - Instrukcje warunkowe w praktyce ***************

var x = prompt("Podaj wartość x"),
y = prompt("Podaj wartość y");

var value = (x*x) + (2 * x * y) - (y*y);
console.log(value);

if (value > 0) {
console.log('Wartość działania jest liczbą dodatnią');
}

else if (value < 0) {
console.log('Wartość działania jest liczbą ujemną');
}

else {
console.log('Wartość działania wynosi ' + value);
}

// *************** Zadanie 5 - Funkcje ***************

function getTriangleArea(c, h) {

	if (c <= 0 || h <= 0) {
		alert('Nieprawidłowe dane!');
		console.log('Nieprawidłowe dane!');
	}
	else if (c > 0 && h > 0) {
		return wynik = c*h/2;
	}
}
console.log( getTriangleArea(10,6) )
var triangle1Area = getTriangleArea(1, 15);
var triangle2Area = getTriangleArea(10, 3);
var triangle3Area = getTriangleArea(8, 2);
console.log( triangle1Area, triangle2Area, triangle3Area );

// *************** Zadanie 6 - Papugi i słonie ***************

var girls = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var boys = ['Jan', 'Adam', "Krzysztof", "Edward", "Michał", "Damian"];

var names = girls.concat(boys);
console.log(names);

if (names.indexOf("Ola") >= 0)
{
	console.log("To imię juz istnieje w tablicy");
}
else {
	var namesNew = names.push("Ola");
	console.log(namesNew);
}
// *************** Zadanie 7 - Papugi i słonie ***************

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";

var upperAnimal = animal.toUpperCase();
console.log(upperAnimal);

var textAnimal = text.replace('Papugi', upperAnimal);
console.log(textAnimal);
console.log(textAnimal.substr(0, textAnimal.length/2));


