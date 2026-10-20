import { CARD_CONTAINER, SCREEN_MESSAGE_CONTAINER } from "../constants.js";

const screen = document.querySelector(".memory-game.screen")! as HTMLElement;

const screenMessageContainer = document.querySelector(
  `.${SCREEN_MESSAGE_CONTAINER}`,
)! as HTMLElement;

const playerPoints = document.querySelector(
  '[data-player="user"] .points',
)! as HTMLElement;

const computerPoints = document.querySelector(
  '[data-player="computer"] .points',
)! as HTMLElement;

const cardContainer = document.querySelector(
  `.${CARD_CONTAINER}`,
)! as HTMLElement;

const GameScreenUI = {
  screen,
  screenMessageContainer,
  playerPoints,
  computerPoints,
  cardContainer,
};

export default GameScreenUI;
