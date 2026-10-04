import { gameState } from "./game-data.js";

export function saveResult() {
    const currDate = new Date();
    let liderData = JSON.parse(localStorage.getItem('memoryGameData'));
    if (!liderData) liderData = [];
    liderData.push({
        passCount: gameState.passCounter,
        date: `${String(currDate.getDate()).padStart(2, '0')}.${String(currDate.getMonth() + 1).padStart(2, '0')}.${currDate.getFullYear()}`}) 
    localStorage.setItem('memoryGameData', JSON.stringify(liderData.sort((a,b) => a.passCount - b.passCount).slice(0,10)));
}