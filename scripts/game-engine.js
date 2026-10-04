import { renderCardSet } from "./cards.js";
import { cardSet, shuffleCardSet } from "./game-data.js";
import { gameState } from "./game-data.js";
import { showLiderTable } from "./lider-modal.js";
import { showResultWindow } from "./result-modal.js";

export function startGame () {
    gameState.firstCardId = '';
    gameState.passCounter = 0;
    gameState.pairFoundedCounter = 0;
    gameState.disableOpeningCard = false;
    const cards = shuffleCardSet(cardSet);
    renderCardSet(cards);
    renderCounters();
}

export function passHandler(cardId, pairId) {
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
            if (gameState.pairFoundedCounter === 8) showResultWindow();
        }

        gameState.firstCardId = '';
    }
    renderCounters();
}

function renderCounters () {
    const passCounter = document.getElementById('pass-counter');
    const pairFounded = document.getElementById('pair-founded');
    passCounter.textContent = `Выполнено ходов: ${gameState.passCounter}`;
    pairFounded.textContent = `Найдено пар: ${gameState.pairFoundedCounter}`
}
