/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/*function checkLetter(arr) {
    let letteraUtente = prompt("Inserisci la lettera").toUpperCase();
    console.log("Hai scelto la lettera:" + " " + letteraUtente)
    let array2 = [];

    for (i = 0; i < arr.length; i++) {

        let lettera = arr[i];

        if (letteraUtente === lettera[0]) {
            array2.push(lettera);
        }
    }
    console.log(array2)
}*/


const checkLetter = (arr) => {
    let letteraUtente = prompt("Inserisci la lettera").toUpperCase();
    console.log("Hai scelto la lettera:" + " " + letteraUtente)
    let array2 = [];

    for (i = 0; i < arr.length; i++) {

        let lettera = arr[i];

        if (letteraUtente === lettera[0]) {
            array2.push(lettera);
        }
    }
    console.log(array2)
}


// Invoca la funzione qui e stampa il risultato in console

checkLetter(names);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]