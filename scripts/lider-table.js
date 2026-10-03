import { createUserElement } from "./create-element.js";

export function createLiderTableWindow () {
    const liderTableContainer = createUserElement (document.body, 'dialog', 'lider-table', 'modal-window', 'Lider Table Window');
    const closeButton = createUserElement(liderTableContainer, 'div', 'close-button', 'lider-close-button', 'Close');
    closeButton.addEventListener('click', () => {
        liderTableContainer.close();
    });
}

export function showLiderTable () {
    document.getElementById('lider-table').showModal();
} 