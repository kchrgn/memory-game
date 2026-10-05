import { createUserElement } from "./create-element.js";
import { gameState } from "./game-data.js";
import { startGame } from "./game-engine.js";
import { closeModalWindow, createModalWindow, showModalWindow } from "./modal.js";


export function createResultWindow () {
    const resultContainer = createModalWindow('result-window');
    createUserElement (resultContainer, 'h1', '', '', 'YOU WIN!');
    createUserElement (resultContainer, 'h3', 'result-pass-counter', '', '');

    const newGameButton = createUserElement(resultContainer, 'div', 'new-game-button', 'modal-window-button', 'Новая игра');
    newGameButton.addEventListener('click', () => {
        closeModalWindow('result-window');
        startGame();
    });
    const closeButton = createUserElement(resultContainer, 'div', 'close-button', 'modal-window-button', 'Закрыть');
    closeButton.addEventListener('click', () => {
        closeModalWindow('result-window');
    });
}

export function showResultWindow () {
    const resultPassCounter = document.getElementById('result-pass-counter');
    resultPassCounter.textContent = `Количество ходов ${gameState.passCounter}. Все карточки открыты`;
    showModalWindow('result-window');

} 