import { renderCardSet } from './cards.js';
import { createUserElement } from './create-element.js';
import { startGame } from './game-engine.js';
import { createLiderTableWindow, showLiderTable } from './lider-modal.js';
import { createResultWindow } from './result-modal.js';

export function createMainPage() {
    const body = document.body;

    const headerContainer = createUserElement(body, 'header', '', '', '');
    const headerMenu = createUserElement(headerContainer, 'div', '', 'header-menu', '');
    const newGameButton = createUserElement(headerMenu, 'div', 'new-game-button', 'header-button', 'Новая игра');
    newGameButton.addEventListener('click', () => {startGame()})
    createUserElement(headerMenu, 'h1', '', 'header-title', 'MEMORY GAME');
    const liderTableButton = createUserElement(headerMenu, 'div', 'lider-table-button', 'header-button', 'Таблица лидеров');
    liderTableButton.addEventListener('click', () => { showLiderTable() })

    const mainContainer = createUserElement(body, 'main', '', '', '');
    const mainWrapper = createUserElement(mainContainer, 'div', '', 'mainContainer', '');
    
    const passContainer = createUserElement(mainWrapper, 'div', '', 'pass-container', '');
    createUserElement(passContainer, 'div', 'game-status', 'game-status', 'ИГРА НАЧАТА');
    createUserElement(passContainer, 'div', 'pass-counter', 'text-counters', 'Выполнено ходов: 0');
    createUserElement(passContainer, 'div', 'pair-founded', 'text-counters', 'Найдено пар: 0');

    createUserElement(mainWrapper, 'div', 'card-grid', 'card-grid', '');

    createLiderTableWindow();
    createResultWindow();
}
