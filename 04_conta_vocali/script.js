/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/*function checkVowels(a) {
    parola = a.toLowerCase().split("");
    let contatoreVocali = "";
    let numeroVocali = 0;
    for (i = 0; i < parola.length; i++)
        if (parola[i] === "a" || parola[i] === "e" || parola[i] === "i" || parola[i] === "o" || parola[i] === "u") {
            contatoreVocali += parola[i]
            numeroVocali++;
        }
    console.log(`Le vocali sono: ${numeroVocali} ${contatoreVocali}`)
}*/


// ******** TRASFORMAZIONE IN FUNZIONE FRECCIA ********
const checkVowels = (a) =>{
    parola = a.toLowerCase().split("");
    let contatoreVocali = "";
    let numeroVocali = 0;
    for (i = 0; i < parola.length; i++)
        if (parola[i] === "a" || parola[i] === "e" || parola[i] === "i" || parola[i] === "o" || parola[i] === "u") {
            contatoreVocali += parola[i]
            numeroVocali++;
        }
    console.log(`Le vocali sono: ${numeroVocali} ${contatoreVocali}`)
}

// Invoca la funzione qui e stampa il risultato in console

checkVowels(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)