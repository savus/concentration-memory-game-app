import {
  displayGameScreenMessage,
  initializeGlobalSettings,
} from "./utility.js";

import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
import type { TPointsDisplayData, TPokeAPI } from "./types.js";

export const root = document.documentElement;

export const mainMenuScreen = new Screen(
  document.querySelector(".screen.main-menu")! as HTMLElement,
);

const userPointsDisplay: TPointsDisplayData = {
  element: document.querySelector(
    '[data-player="user"] .points',
  )! as HTMLElement,
  name: "you",
};

const computerPointsDisplay: TPointsDisplayData = {
  element: document.querySelector(
    '[data-player="computer"] .points',
  )! as HTMLElement,
  name: "computer",
};

export const memoryGameScreen = new MemoryGameScreen(
  document.querySelector(".screen.memory-game")! as HTMLElement,
  userPointsDisplay,
  computerPointsDisplay,
);

export const settingsScreen = new Screen(
  document.querySelector(".screen.settings-menu")! as HTMLElement,
);

export let allPokemonData: TPokeAPI[] = [];
export const allCards: Card[] = [];

export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;

await initializeGlobalSettings();

document.addEventListener("keyup", async (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    await displayGameScreenMessage("test", "testing");
    console.log("pressed");
  }
});
