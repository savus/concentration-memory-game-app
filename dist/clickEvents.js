import GameHandler from "./singleton/GameHandler.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import MainMenuUI from "./singleton/MainMenuUI.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";
import SettingsMenuUI from "./singleton/SettingsMenuUI.js";
export function cardOnClickHandler(card) {
    if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
        console.log("you may not click at this time");
        return;
    }
    GameHandler.handleUserChoice(card);
}
export async function handleNewGameClick() {
    ScreenSwapper.swapScreens(GameScreenUI.screen);
}
export function handleSettingsClick() {
    ScreenSwapper.swapScreens(SettingsMenuUI.screen);
}
export function onBackButtonClick() {
    ScreenSwapper.swapScreens(MainMenuUI.screen);
}
export function quitApplication() {
    window.close();
}
//# sourceMappingURL=clickEvents.js.map