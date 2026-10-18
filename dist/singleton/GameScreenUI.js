import { CARD_CONTAINER, SCREEN_MESSAGE_CONTAINER } from "../constants.js";
const memoryGameScreen = document.querySelector(".memory-game.screen");
const screenMessageContainer = document.querySelector(`.${SCREEN_MESSAGE_CONTAINER}`);
const playerPoints = document.querySelector('[data-player="user"] .points');
const computerPoints = document.querySelector('[data-player="computer"] .points');
const cardContainer = document.querySelector(`.${CARD_CONTAINER}`);
const GameScreenUI = {
    memoryGameScreen,
    screenMessageContainer,
    playerPoints,
    computerPoints,
    cardContainer,
};
export default GameScreenUI;
//# sourceMappingURL=GameScreenUI.js.map