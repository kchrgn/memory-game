import { renderCardSet } from './cards.js';
import { createUserElement } from './create-element.js';
import { startGame } from './game-engine.js';
import { createLiderTableWindow } from './lider-table.js';

export function createMainPage() {
    const body = document.body;

    const headerContainer = createUserElement(body, 'header', '', '', '');
    const headerMenu = createUserElement(headerContainer, 'div', '', 'header-menu', '');;
    const newGameButton = createUserElement(headerMenu, 'div', 'new-game-button', 'header-button', 'Новая игра');
    newGameButton.addEventListener('click', () => {startGame()})
    createUserElement(headerMenu, 'h1', '', 'header-title', 'MEMORY GAME');
    createUserElement(headerMenu, 'div', 'lider-table-button', 'header-button', 'Таблица лидеров');

    const mainContainer = createUserElement(body, 'main', '', '', '');
    const mainWrapper = createUserElement(mainContainer, 'div', '', 'mainContainer', '');
    createUserElement(mainWrapper, 'div', 'card-grid', 'card-grid', '');

    createLiderTableWindow();

    const liderTable = document.getElementById('lider-table');
    const liderTableButton = document.getElementById('lider-table-button');
    liderTableButton.addEventListener('click', () => { liderTable.showModal() })
}
