/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

/*function saluto(nameFunction) {
    nameFunction = 'Ciao' + ' ' + nameFunction;
    console.log(nameFunction)}*/


// ******** TRASFORMAZIONE IN FUNZIONE FRECCIA ********
const saluto = (nameFunction) => {
    nameFunction = 'Ciao' + ' ' + nameFunction;
    console.log(nameFunction)
}


// Invoca la funzione qui e stampa il risultato in console

saluto(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario


