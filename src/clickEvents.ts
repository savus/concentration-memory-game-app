import type { Card } from "./class/Card.js";
import GameHandler from "./singleton/GameHandler.js";

export function cardOnClickHandler(card: Card) {
  if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
    console.log("you may not click at this time");
    return;
  }
  GameHandler.handleUserChoice(card);
}
