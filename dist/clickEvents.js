import { ACTIVE } from "./constants.js";
import GameHandler from "./singleton/GameHandler.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import MainMenuUI from "./singleton/MainMenuUI.js";
import { swapScreens, waitForAnimation } from "./utility.js";
export function cardOnClickHandler(card) {
    if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
        console.log("you may not click at this time");
        return;
    }
    GameHandler.handleUserChoice(card);
}
export async function handleNewGameClick() {
    swapScreens(MainMenuUI.mainMenuScreen, GameScreenUI.memoryGameScreen);
}
export function quitApplication() {
    window.close();
}
//# sourceMappingURL=clickEvents.js.map