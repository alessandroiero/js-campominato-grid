'use strict';

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. 
// Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// ---------- FUNCTIONS ----------
// Creiamo la funzione per creare le varie celle
function myCreateElement(htmlElement, htmlValue) {
    const element = document.createElement('div')
    element.className = 'cell';
    htmlElement.append(element);
    element.addEventListener('click', function () {
        element.classList.add('selected');
        element.innerText = htmlValue;
    })
    return element;
};
// ---------- FUNCTIONS ----------

// seleziono il bottone
const pressHere = document.getElementById('difficolta');
//seleziono il container dentro al main che conterrà le diverse celle
const containerBoard = document.querySelector('.board');

// evento al click del bottone che genererà tot celle
pressHere.addEventListener('click', function () {
    containerBoard.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        myCreateElement(containerBoard, i)
    }
});

