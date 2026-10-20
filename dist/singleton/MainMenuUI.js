import { handleNewGameClick, handleSettingsClick, quitApplication, } from "../clickEvents.js";
const screen = document.querySelector(".main-menu.screen");
const newGameButton = document.getElementById("new-game");
newGameButton?.addEventListener("click", handleNewGameClick);
const settingsButton = document.getElementById("menu-settings");
settingsButton?.addEventListener("click", handleSettingsClick);
const quitAppButton = document.getElementById("quit");
quitAppButton?.addEventListener("click", quitApplication);
const MainMenuUI = {
    screen,
    newGameButton,
    settingsButton,
};
export default MainMenuUI;
//# sourceMappingURL=MainMenuUI.js.map