import { renderCardSet } from "./cards.js";
import { cardSet, shuffleCardSet } from "./game-data.js";
import { gameState } from "./game-data.js";
import { showLiderTable } from "./lider-table.js";

export function startGame () {
    const cards = shuffleCardSet(cardSet);
    renderCardSet(cards);
    gameState.firstCardId = '';
    gameState.passCounter = 0;
    gameState.pairFoundedCounter = 0;
}

export function cardHandler(cardId, pairId) {
    const currCard = document.getElementById(cardId);
    if (currCard.classList.contains('card-flipped')) return; 
    currCard.classList.add('card-flipped');
    if (!gameState.firstCardId) {
        gameState.firstCardId = cardId;
    } else {
        gameState.passCounter += 1;
        const prevCard = document.getElementById(gameState.firstCardId);
        if (prevCard.dataset.pairId !== pairId) {
            setTimeout(()=>{
                prevCard.classList.remove('card-flipped');
                currCard.classList.remove('card-flipped');
            }, 1000);
        } else {
            gameState.pairFoundedCounter += 1
            if (gameState.pairFoundedCounter === 8) showLiderTable();
        }

        gameState.firstCardId = '';
    }
}

