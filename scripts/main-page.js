export function createMainPage() {
    const body = document.body;

    const headerContainer = createUserElement(body, 'header', '', '', '');
    const headerMenu = createUserElement(headerContainer, 'div', '', 'header-menu', '');;
    createUserElement(headerMenu, 'div', 'new-game-button', 'header-button', 'Новая игра');
    createUserElement(headerMenu, 'h1', '', 'header-title', 'MEMORY GAME');
    createUserElement(headerMenu, 'div', 'lider-table-button', 'header-button', 'Таблица лидеров');

    const mainContainer = createUserElement(body, 'main', '', '', '');
    const mainWrapper = createUserElement(mainContainer, 'div', '', 'mainContainer', '');
    const cardGrid = createUserElement(mainWrapper, 'div', '', 'card-grid', '');

    createUserElement(cardGrid, 'div', '', 'card', '1');
    createUserElement(cardGrid, 'div', '', 'card', '2');
    createUserElement(cardGrid, 'div', '', 'card', '3');
    createUserElement(cardGrid, 'div', '', 'card', '4');
    createUserElement(cardGrid, 'div', '', 'card', '5');
    createUserElement(cardGrid, 'div', '', 'card', '6');
    createUserElement(cardGrid, 'div', '', 'card', '7');
    createUserElement(cardGrid, 'div', '', 'card', '8');
    createUserElement(cardGrid, 'div', '', 'card', '9');
    createUserElement(cardGrid, 'div', '', 'card', '10');
    createUserElement(cardGrid, 'div', '', 'card', '11');
    createUserElement(cardGrid, 'div', '', 'card', '12');
    createUserElement(cardGrid, 'div', '', 'card', '13');
    createUserElement(cardGrid, 'div', '', 'card', '14');
    createUserElement(cardGrid, 'div', '', 'card', '15');
    createUserElement(cardGrid, 'div', '', 'card', '16');
}

function createUserElement (node, tag, id, cssClass, content) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (cssClass) element.classList.add(cssClass);
    if (content) element.textContent = content;
    return node.appendChild(element);
}

