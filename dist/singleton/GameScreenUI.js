import { CARD_CONTAINER, SCREEN_MESSAGE_CONTAINER } from "../constants.js";
const screenMessageContainer = document.querySelector(`.${SCREEN_MESSAGE_CONTAINER}`);
const playerPoints = document.querySelector('[data-player="user"] .points');
const computerPoints = document.querySelector('[data-player="computer"] .points');
const cardContainer = document.querySelector(`.${CARD_CONTAINER}`);
export const GameScreenUI = {
    screenMessageContainer,
    playerPoints,
    computerPoints,
    cardContainer,
};
//# sourceMappingURL=GameScreenUI.js.map