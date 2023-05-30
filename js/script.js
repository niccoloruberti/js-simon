'use strict';

//dichiaro le variabili
let drawnNumbers = [];
let display = document.getElementById('display');
let guessedNumbers = [];

//scrivo la funzione per generare numeri casuali
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//scrivo il ciclo che crea un array con 5 numeri casuali e li fa apparire a schermo
for (let i = 1; i <= 5; i++) {
    let randomNumber = randomIntFromInterval(1,100);
    drawnNumbers.push(randomNumber);
    display.innerText += ` ${randomNumber},`;
}

console.log(drawnNumbers);

//dopo 30 secondi faccio sparire i numeri
setTimeout(function() {
    display.innerText = '';
}, 30000);

//funzione che chiede all'utente i numeri e verifica quali sono corretti
setTimeout(function() {
    //creo un ciclo che chiede all'utente i numeri e inserisce in un array quelli corretti
    for (let i = 1; i <= 5; i++) {
        let number = parseInt(prompt('Inserisci un numero che ti ricordi'));
        if (drawnNumbers.includes(number) && !guessedNumbers.includes(number)) {
            guessedNumbers.push(number);
        };
    }
    //mostro a schermo i numeri che sono stati indovinati
    console.log(guessedNumbers)
    display.innerText = `Hai indovinato ${guessedNumbers.length} numeri e sono: ${guessedNumbers};`
}, 30500);