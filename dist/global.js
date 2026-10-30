import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { UIMap } from "./class/UIMap.js";
import { startNewGame, goToSettingsMenu, quitApplication, } from "./clickEvents.js";
import { GameConfig } from "./singleton/GameConfig.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
export const root = document.documentElement;
const mainMenuActionMap = {
    newGame: () => startNewGame(),
    settings: () => goToSettingsMenu(),
    quit: () => quitApplication(),
};
export const mainMenuUI = new UIMap(document.querySelector(".main-menu.screen"), mainMenuActionMap);
const settingsMenuActionMap = {
    speedLeftArrow: () => GameConfig.speed.slideToNewMode("prev"),
    speedRightArrow: () => GameConfig.speed.slideToNewMode("next"),
    difficultyLeftArrow: () => GameConfig.difficulty.slideToNewMode("prev"),
    difficultyRightArrow: () => GameConfig.difficulty.slideToNewMode("next"),
};
export const settingsMenuUI = new UIMap(document.querySelector(".settings-menu.screen"), settingsMenuActionMap);
export let allPokemonData = [];
export const allCards = [];
export const userPointsDisplay = new PointsDisplay(GameScreenUI.playerPoints, "you");
export const computerPointsDisplay = new PointsDisplay(GameScreenUI.computerPoints, "computer");
export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
//# sourceMappingURL=global.js.map