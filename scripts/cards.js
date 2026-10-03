import { createUserElement } from "./create-element.js";
import { cardHandler } from "./game-engine.js";

function createCard ( container, data, index ) {
    const cardContainer = createUserElement (container, 'div', '', 'card-container');
    const card = createUserElement (cardContainer, 'div', `card${index}`, 'card');
    card.dataset.pairId = data.pairId;
    createUserElement (card, 'div', '', 'card-front', data.img);
    createUserElement (card, 'div', '', 'card-back', data.img);
    return card;
}

export function renderCardSet (data) {
    const container = document.getElementById('card-grid');
    if (container.hasChildNodes()) container.replaceChildren();
    for (let i = 0; i < 16; i++) {
        const card = createCard(container, data[i], i);
        card.addEventListener('click', () => {
            cardHandler(`card${i}`, data[i].pairId);
        });
    }
}