export const PAIRS_QUANTITY = 8;

export const cardSet = [
    {img: '1', pairId: '1'},
    {img: '1', pairId: '1'},
    {img: '2', pairId: '2'},
    {img: '2', pairId: '2'},
    {img: '3', pairId: '3'},
    {img: '3', pairId: '3'},
    {img: '4', pairId: '4'},
    {img: '4', pairId: '4'},
    {img: '5', pairId: '5'},
    {img: '5', pairId: '5'},
    {img: '6', pairId: '6'},
    {img: '6', pairId: '6'},
    {img: '7', pairId: '7'},
    {img: '7', pairId: '7'},
    {img: '8', pairId: '8'},
    {img: '8', pairId: '8'}
]    

export function shuffleCardSet (cardSet) {
  for (let i = cardSet.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardSet[i], cardSet[j]] = [cardSet[j], cardSet[i]];
  }
  return cardSet;
}


export let gameState = {
    firstCardId: '',
    passCounter: 0,
    pairFoundedCounter: 0,
    disableOpeningCard: false,
    gameStarted: false
};