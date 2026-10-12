import { allCards, computer, user } from "./app.js";
import type { Card } from "./class/Card.js";
import GameHandler from "./singleton/GameHandler.js";

export const cardOnClickHandler = (card: Card) => {
  if (!card.state.isClickable) {
    console.log("you may not click at this time");
    return;
  }
  GameHandler.handleUserChoice(card, user, computer, allCards);
};
