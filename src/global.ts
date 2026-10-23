import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { UIMap } from "./class/UIMap.js";
import { mainMenuOnClickDelegation } from "./clickEvents.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import type { TPokeAPI } from "./types.js";

export const root = document.documentElement;

export const mainMenuUI = new UIMap(
  document.querySelector(".main-menu.screen")! as HTMLElement,
  ["new-game", "settings", "quit"],
  mainMenuOnClickDelegation,
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
