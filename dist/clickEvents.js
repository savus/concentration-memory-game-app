import { mainMenuUI } from "./global.js";
import { GameConfig } from "./singleton/GameConfig.js";
import GameHandler from "./singleton/GameHandler.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";
import SettingsMenuUI from "./singleton/SettingsMenuUI.js";
export function cardOnClickHandler(card) {
    if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
        console.log("you may not click at this time");
        return;
    }
    GameHandler.handleUserChoice(card);
}
export function mainMenuOnClickDelegation(ui, e) {
    const newGamePressed = e.target === ui.newGame;
    const settingsPressed = e.target === ui.settings;
    const quitPressed = e.target === ui.quit;
    if (newGamePressed)
        handleNewGameClick();
    if (settingsPressed)
        handleSettingsClick();
    if (quitPressed)
        quitApplication();
}
export function handleNewGameClick() {
    ScreenSwapper.swapScreens(GameScreenUI.screen);
}
export function handleSettingsClick() {
    ScreenSwapper.swapScreens(SettingsMenuUI.screen);
}
export function onBackButtonClick() {
    ScreenSwapper.swapScreens(mainMenuUI.menu);
}
export function quitApplication() {
    document.body.innerText = "";
}
export function handleSpeedSliderClick(e) {
    const isElement = e.target instanceof HTMLElement;
    const isLeftArrow = isElement && e.target.matches(".left-arrow");
    const isRightArrow = isElement && e.target.matches(".right-arrow");
    if (isRightArrow)
        GameConfig.speed.slideToNewMode("next");
    if (isLeftArrow)
        GameConfig.speed.slideToNewMode("prev");
}
export function handleDifficultySliderClick(e) {
    const isElement = e.target instanceof HTMLElement;
    const isLeftArrow = isElement && e.target.matches(".left-arrow");
    const isRightArrow = isElement && e.target.matches(".right-arrow");
    if (isRightArrow)
        GameConfig.difficulty.slideToNewMode("next");
    if (isLeftArrow)
        GameConfig.difficulty.slideToNewMode("prev");
}
//# sourceMappingURL=clickEvents.js.map