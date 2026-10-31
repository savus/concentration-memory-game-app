import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import Screen from "./class/Screen.js";
export const root = document.documentElement;
export const mainMenuScreen = new Screen(document.querySelector(".screen.main-menu"));
export const memoryGameScreen = new Screen(document.querySelector(".screen.memory-game"));
export const settingsScreen = new Screen(document.querySelector(".screen.settings-menu"));
export let allPokemonData = [];
export const allCards = [];
export const userPointsDisplay = new PointsDisplay(memoryGameScreen.ui.playerPoints, "you");
export const computerPointsDisplay = new PointsDisplay(memoryGameScreen.ui.computerPoints, "computer");
export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
//# sourceMappingURL=global.js.map