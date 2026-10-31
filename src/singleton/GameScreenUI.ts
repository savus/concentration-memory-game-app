import { CARD_CONTAINER, SCREEN_MESSAGE_CONTAINER } from "../constants.js";

const screen = document.querySelector(".memory-game.screen")! as HTMLElement;

const screenMessageContainer = document.querySelector(
  `.${SCREEN_MESSAGE_CONTAINER}`,
)! as HTMLElement;

const cardContainer = document.querySelector(
  `.${CARD_CONTAINER}`,
)! as HTMLElement;

const GameScreenUI = {
  screen,
  screenMessageContainer,
  cardContainer,
};

export default GameScreenUI;
