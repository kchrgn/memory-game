import { createUserElement } from "./create-element.js";
import { startGame } from "./game-engine.js";


export function createLiderTableWindow () {
    const liderTableContainer = createUserElement (document.body, 'dialog', 'lider-table-container', 'modal-window', 'Lider Table Window');
    
    createUserElement(liderTableContainer, 'h2', '', '', 'Лучшие 10 результатов');
    createUserElement(liderTableContainer, 'h3', '', '', 'Место     число ходов     Дата');
    createUserElement(liderTableContainer, 'div', 'lider-table', 'lider-table', '');



    const closeButton = createUserElement(liderTableContainer, 'div', 'close-button', 'modal-window-button', 'Закрыть');
    closeButton.addEventListener('click', () => {
        liderTableContainer.close();
    });
}

export function showLiderTable () {
    const liderTable = document.getElementById('lider-table')
    const lidersData = localStorage.getItem('memoryGameData');
    if (!lidersData) liderTable.textContent = 'Пока нет результатов'
    document.getElementById('lider-table-container').showModal();
} 