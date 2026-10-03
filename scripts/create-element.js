export function createUserElement (node, tag, id, cssClass, content) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (cssClass) element.classList.add(cssClass);
    if (content) element.textContent = content;
    return node.appendChild(element);
}
