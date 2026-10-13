import { allCards, computer, user, userPointsDisplay } from "./global.js";
import GameHandler from "./singleton/GameHandler.js";
export const cardOnClickHandler = (card) => {
    if (!card.state.isClickable) {
        console.log("you may not click at this time");
        return;
    }
    GameHandler.handleUserChoice(card, user);
};
//# sourceMappingURL=clickEvents.js.map