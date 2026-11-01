import type { Card } from "./class/Card.js";
import GameHandler from "./singleton/GameHandler.js";
import type { TCommandRegistry, TUIRegistry } from "./types.js";

export function cardOnClickHandler(card: Card) {
  if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
    console.log("you may not click at this time");
    return;
  }
  GameHandler.handleUserChoice(card);
}

export function onclickMenuDelegation(
  e: MouseEvent,
  elementRegistry: TUIRegistry,
  actionMap: TCommandRegistry,
) {
  const target = e.target as HTMLElement;
  for (const key of Object.keys(elementRegistry)) {
    if (target && target === elementRegistry[key]) {
      if (actionMap[key]) actionMap[key]();
    }
  }
}
