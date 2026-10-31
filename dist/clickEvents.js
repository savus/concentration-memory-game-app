import GameHandler from "./singleton/GameHandler.js";
export function cardOnClickHandler(card) {
    if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
        console.log("you may not click at this time");
        return;
    }
    GameHandler.handleUserChoice(card);
}
//# sourceMappingURL=clickEvents.js.map