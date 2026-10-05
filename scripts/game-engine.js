import { renderCardSet } from "./cards.js";
import { cardSet, shuffleCardSet } from "./game-data.js";
import { gameState } from "./game-data.js";
import { saveResult } from "./local-storage.js";
import { showResultWindow } from "./result-modal.js";

export function startGame () {
    gameState.firstCardId = '';
    gameState.passCounter = 0;
    gameState.pairFoundedCounter = 0;
    gameState.disableOpeningCard = false;
    gameState.gameStarted = true;
    const cards = shuffleCardSet(cardSet);
    renderCardSet(cards);
    renderCounters();
}

export function passHandler(cardId, pairId) {
    const PAIRS_QUANTITY = 8;

    if (gameState.disableOpeningCard) return;
    
    const currCard = document.getElementById(cardId);
    if (currCard.classList.contains('card-flipped')) return; 

    currCard.classList.add('card-flipped');
    if (!gameState.firstCardId) {
        gameState.firstCardId = cardId;
    } else {
        gameState.passCounter += 1;
        const prevCard = document.getElementById(gameState.firstCardId);
        if (prevCard.dataset.pairId !== pairId) {
            gameState.disableOpeningCard = true;
            setTimeout(()=>{
                prevCard.classList.remove('card-flipped');
                currCard.classList.remove('card-flipped');
                gameState.disableOpeningCard = false;
            }, 1000);
        } else {
            gameState.pairFoundedCounter += 1
            if (gameState.pairFoundedCounter === PAIRS_QUANTITY) {
                gameState.gameStarted = false;
                saveResult();
                showResultWindow();
             };
        }
        gameState.firstCardId = '';
    }
    renderCounters();
}

function renderCounters () {
    const gameStatus = document.getElementById('game-status');
    const passCounter = document.getElementById('pass-counter');
    const pairFounded = document.getElementById('pair-founded');
    if (gameState.gameStarted) {
        gameStatus.textContent = 'ИГРА НАЧАТА'
    } else {
        gameStatus.textContent = 'ИГРА ЗАКОНЧЕНА'      
    }
    passCounter.textContent = `Выполнено ходов: ${gameState.passCounter}`;
    pairFounded.textContent = `Найдено пар: ${gameState.pairFoundedCounter} из 8`
}
