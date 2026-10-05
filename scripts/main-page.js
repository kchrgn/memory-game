import { renderCardSet } from './cards.js';
import { createUserElement } from './create-element.js';
import { gameState } from './game-data.js';
import { startGame } from './game-engine.js';
import { createLiderTableWindow, showLiderTable } from './lider-window.js';
import { createResultWindow } from './result-window.js';

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

export function renderCounters () {
    const gameStatus = document.getElementById('game-status');
    const passCounter = document.getElementById('pass-counter');
    const pairFounded = document.getElementById('pair-founded');
    if (gameState.gameStarted) {
        gameStatus.textContent = 'ИГРА НАЧАТА'
    } else {
        gameStatus.textContent = 'ИГРА ЗАКОНЧЕНА'      
    }
    passCounter.textContent = `Выполнено ходов: ${gameState.passCounter}`;
    pairFounded.textContent = `Найдено пар: ${gameState.pairFoundedCounter} из 8`
}
