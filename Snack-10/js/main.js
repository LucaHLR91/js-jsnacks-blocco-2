// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
var array_l = [3, 5, 78, 56, 78, 45, 90, 3, 55, 87];
var array_s = [54, 67, 5, 4, 33];

do {
    array_s.push(parseInt(prompt('inserisci un numero')));
} while (array_s.length != array_l.length);


console.log(array_l);
console.log(array_s);