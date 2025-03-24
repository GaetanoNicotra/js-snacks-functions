/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/*function firstLetter(arr) {
    array2 = [];
    for (i = 0; i < arr.length; i++) {
        let lettera = arr[i];
        array2.push(lettera[0]);
    }
    console.log(array2);
}*/

// ******** TRASFORMAZIONE IN FUNZIONE FRECCIA ********
const firstLetter = (arr) =>{
    array2 = [];
    for (i = 0; i < arr.length; i++) {
        let lettera = arr[i];
        array2.push(lettera[0]);
    }
    console.log(array2);
} 


// Invoca la funzione qui e stampa il risultato in console

firstLetter(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]