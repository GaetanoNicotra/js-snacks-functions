/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const myName = 'Mario';


// Dichiara la funzione qui.

const helloUser = (nameUser) =>{
    let ora = new Date().getHours();

    let salutoOutput;

    if( ora >= 6 && ora < 13){
      
   salutoOutput = "Buongiorno"
    }
    else if(ora >= 13 && ora < 17){

   salutoOutput = "Buon pomeriggio"
   }
   else{
    salutoOutput = "Buona sera"
   }

   return `${salutoOutput}, ${nameUser}`;
}
// Invoca la funzione qui e stampa il risultato in console


console.log(helloUser (myName))
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.