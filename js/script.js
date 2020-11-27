// Obiettivi dell'esercizio:
// 1 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
// 2 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// 3 - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(
  function () {
// 1 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
var firstObjectStudent = {
  name : "Mario",
  surname : "Rossi",
  age : 20
};

for (var key in firstObjectStudent) {
  console.log(firstObjectStudent[key]);
}

// 2 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// var arrayStudents = [
//   {
//     name : "Francesco",
//     surname : "Ferrari"
//   },
//   {
//     name : "Luca",
//     surname : "Bianchi"
//   },
//   {
//     name : "Giuseppe",
//     surname : "Romano"
//   },
// ];
//
//
// for (var i = 0; i < arrayStudents.length; i++) {
//   var student =+ arrayStudents[i].name, arrayStudents[i].surname\n ;
// }
// console.log(student);








  }
);
