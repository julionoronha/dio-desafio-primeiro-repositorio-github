// Variáveis
const cards = document.querySelectorAll('.card');
const totalPairs = cards.length / 2;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pairsFound = 0;

//Funções

function flipCard(){
    if(lockBoard){
        return;
    }
    if(this === firstCard){
        return;
    }

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkCards();
}

function checkCards(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
    }else{
        unflipCards();
    }

    if(pairsFound == totalPairs){
        unflipAllCardsAndShuffle();
    }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    pairsFound++;

    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
       
         resetBoard();
    }, 1500);
}

function unflipAllCardsAndShuffle(){
    setTimeout(() => {
        cards.forEach((card) =>{
            card.classList.remove('flip');
            card.addEventListener('click', flipCard);
            let randomPosition = Math.floor(Math.random() * 24);
            card.style.order = randomPosition;
        });
        resetBoard();
        pairsFound = 0;
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 24);
        card.style.order = randomPosition;
    });
})();

//Comandos a serem executados

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});