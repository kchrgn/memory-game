import { createUserElement } from "./create-element.js";

export function createModalWindow (id) {
    const dialogElement = createUserElement (document.body, 'dialog', id, 'modal-window', '');

    dialogElement.addEventListener ('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModalWindow (id);
        }
    })
    dialogElement.addEventListener ('click', (event) => {
        if (event.target === dialogElement) {
            closeModalWindow (id);
        }
    })
    const dialogInnerContainer = createUserElement (dialogElement, 'div', '', 'modal-inner-container', '');
    return dialogInnerContainer;
}

export function closeModalWindow (id) {
    document.getElementById(id).close();
    document.body.classList.remove('scroll-locked');
}

export function showModalWindow (id) {
    document.getElementById(id).showModal();
    document.body.classList.add('scroll-locked')
}