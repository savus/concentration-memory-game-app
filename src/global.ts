import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import Screen from "./class/Screen.js";
import type { TPokeAPI } from "./types.js";

export const root = document.documentElement;

export const mainMenuScreen = new Screen(
  document.querySelector(".screen.main-menu")! as HTMLElement,
);

export const memoryGameScreen = new Screen(
  document.querySelector(".screen.memory-game")! as HTMLElement,
);

export const settingsScreen = new Screen(
  document.querySelector(".screen.settings-menu")! as HTMLElement,
);

export let allPokemonData: TPokeAPI[] = [];
export const allCards: Card[] = [];

export const userPointsDisplay = new PointsDisplay(
  document.querySelector('[data-player="user"] .points')! as HTMLElement,
  "you",
);

export const computerPointsDisplay = new PointsDisplay(
  document.querySelector('[data-player="computer"] .points')! as HTMLElement,
  "computer",
);

export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
