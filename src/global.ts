import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import { GameMode } from "./class/GameMode.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { UIMap } from "./class/UIMap.js";
import {
  handleNewGameClick,
  handleSettingsClick,
  quitApplication,
} from "./clickEvents.js";
import { setGameSpeed } from "./singleton/GameConfig.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import type { TPokeAPI } from "./types.js";

export const root = document.documentElement;

const mainMenuActionMap = {
  newGame: () => handleNewGameClick(),
  settings: () => handleSettingsClick(),
  quit: () => quitApplication(),
};

export const mainMenuUI = new UIMap(
  document.querySelector(".main-menu.screen")! as HTMLElement,
  mainMenuActionMap,
);

const speedModes = ["slow", "medium", "fast"];

const speed = new GameMode(
  speedModes,
  1,
  "speed",
  document.querySelector(".speed-slider .setting-name")! as HTMLElement,
  setGameSpeed,
);

const settingsMenuActionMap = {
  speedLeftArrow: () => speed.slideToNewMode("prev"),
  speedRightArrow: () => speed.slideToNewMode("next"),
  settingsName: () => console.log("this is the behavior of the settings name"),
  difficultyLeftArrow: () =>
    console.log("this is the behavior of the difficulty left arrow"),
};

const settingsMenuUI = new UIMap(
  document.querySelector(".settings-menu.screen")! as HTMLElement,
  settingsMenuActionMap,
);

console.log(speed.textElement);
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
