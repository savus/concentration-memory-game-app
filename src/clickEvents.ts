import type { Card } from "./class/Card.js";
import { user } from "./global.js";
import GameHandler from "./singleton/GameHandler.js";

export const cardOnClickHandler = (card: Card) => {
  if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
    console.log("you may not click at this time");
    return;
  }
  GameHandler.handleUserChoice(card);
};
