import { handleNewGameClick, quitApplication } from "../clickEvents.js";

const mainMenuScreen = document.querySelector(
  ".main-menu.screen",
)! as HTMLElement;

const newGameButton = document.getElementById("new-game");
newGameButton?.addEventListener("click", handleNewGameClick);

const quitAppButton = document.getElementById("quit");
quitAppButton?.addEventListener("click", quitApplication);

const MainMenuUI = {
  mainMenuScreen,
  newGameButton,
};

export default MainMenuUI;
