import { handleNewGameClick } from "../clickEvents.js";
const mainMenuScreen = document.querySelector(".main-menu.screen");
const newGameButton = document.getElementById("new-game");
newGameButton?.addEventListener("click", handleNewGameClick);
const quitAppButton = document.getElementById("quit");
quitAppButton?.addEventListener("click", () => {
    window.close();
});
const MainMenuUI = {
    mainMenuScreen,
    newGameButton,
};
export default MainMenuUI;
//# sourceMappingURL=MainMenuUI.js.map