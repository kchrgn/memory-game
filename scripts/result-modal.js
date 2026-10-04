import { createUserElement } from "./create-element.js";
import { gameState } from "./game-data.js";
import { startGame } from "./game-engine.js";


export function createResultWindow () {
    const resultContainer = createUserElement (document.body, 'dialog', 'result-window', 'modal-window', '');
    createUserElement (resultContainer, 'h1', '', '', 'YOU WIN!');
    createUserElement (resultContainer, 'h3', 'result-pass-counter', '', '');

    const newGameButton = createUserElement(resultContainer, 'div', 'new-game-button', 'modal-window-button', 'Новая игра');
    newGameButton.addEventListener('click', () => {
        resultContainer.close();
        startGame()
    });
    const closeButton = createUserElement(resultContainer, 'div', 'close-button', 'modal-window-button', 'Закрыть');
    closeButton.addEventListener('click', () => {
        resultContainer.close();
    });
}

export function showResultWindow () {
    const resultPassCounter = document.getElementById('result-pass-counter');
    resultPassCounter.textContent = `Вы открыли все карточки за ${gameState.passCounter} ходов`;
    document.getElementById('result-window').showModal();

} 