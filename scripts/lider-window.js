import { createUserElement } from "./create-element.js";
import { startGame } from "./game-engine.js";
import { closeModalWindow, createModalWindow, showModalWindow } from "./modal.js";


export function createLiderTableWindow () {
    const liderTableContainer = createModalWindow('lider-window');

    createUserElement(liderTableContainer, 'h2', '', '', 'Лучшие 10 результатов');
    createUserElement(liderTableContainer, 'h3', '', '', `Место             Число ходов             Дата`);
    createUserElement(liderTableContainer, 'div', 'lider-table', '', '');

    const closeButton = createUserElement(liderTableContainer, 'div', 'close-button', 'modal-window-button', 'Закрыть');
    closeButton.addEventListener('click', () => {
        closeModalWindow('lider-window');
    });
}

export function showLiderTable () {
    const liderTable = document.getElementById('lider-table')
    const liderData = localStorage.getItem('memoryGameData');
    if (!liderData) {
        liderTable.textContent = 'Пока нет результатов' 
    } else {
        const content = JSON.parse(localStorage.getItem('memoryGameData'));
        liderTable.replaceChildren()
        content.map((data, index) => {
            createUserElement(liderTable, 'p', '', '', `         ${index+1}                               ${data.passCount}                           ${data.date}`)
        });
    }
    showModalWindow('lider-window');
} 