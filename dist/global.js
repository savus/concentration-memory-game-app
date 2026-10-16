import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { GameScreenUI } from "./singleton/GameScreenUI.js";
export const root = document.documentElement;
export let allPokemonData = [];
export const allCards = [];
export const userPointsDisplay = new PointsDisplay(GameScreenUI.playerPoints, "you");
export const computerPointsDisplay = new PointsDisplay(GameScreenUI.computerPoints, "computer");
export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
//# sourceMappingURL=global.js.map