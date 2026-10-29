import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import { GameMode } from "./class/GameMode.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { UIMap } from "./class/UIMap.js";
import {
  startNewGame,
  goToSettingsMenu,
  quitApplication,
} from "./clickEvents.js";
import { GameConfig, setGameSpeed } from "./singleton/GameConfig.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import type { TPokeAPI } from "./types.js";

export const root = document.documentElement;

const mainMenuActionMap = {
  newGame: () => startNewGame(),
  settings: () => goToSettingsMenu(),
  quit: () => quitApplication(),
};

export const mainMenuUI = new UIMap(
  document.querySelector(".main-menu.screen")! as HTMLElement,
  mainMenuActionMap,
);

const settingsMenuActionMap = {
  speedLeftArrow: () => GameConfig.speed.slideToNewMode("prev"),
  speedRightArrow: () => GameConfig.speed.slideToNewMode("next"),
  difficultyLeftArrow: () => GameConfig.difficulty.slideToNewMode("prev"),
  difficultyRightArrow: () => GameConfig.difficulty.slideToNewMode("next"),
};

export const settingsMenuUI = new UIMap(
  document.querySelector(".settings-menu.screen")! as HTMLElement,
  settingsMenuActionMap,
);

export let allPokemonData: TPokeAPI[] = [];
export const allCards: Card[] = [];
export const userPointsDisplay = new PointsDisplay(
  GameScreenUI.playerPoints,
  "you",
);
export const computerPointsDisplay = new PointsDisplay(
  GameScreenUI.computerPoints,
  "computer",
);

export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
