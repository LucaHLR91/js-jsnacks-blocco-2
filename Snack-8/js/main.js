// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
var name_list = ['Luca', 'Vittoria', 'Patrizio', 'Giacomo', 'Alessandro', 'Paolo', 'Giulia', 'Giorgia'];
var surname_list = ['Rossi', 'Bianchi', 'Neri', 'Viola', 'Sanmarco', 'Kioshi', 'Troiani', 'Romano'];

for (i = 0; i < 16; i++ ) {
    var random_surname = name_list[Math.floor(Math.random() * name_list.length)] + ' ' + surname_list[Math.floor(Math.random() * surname_list.length)];
    console.log(random_surname);
}