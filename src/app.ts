import {
  displayGameScreenMessage,
  initializeGlobalSettings,
} from "./utility.js";

import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
import type { TPokeAPI } from "./types.js";
import SettingsScreen from "./class/SettingsScreen.js";
import GameConfig from "./singleton/GameConfig.js";
import SettingsCarousel from "./class/SettingsCarousel.js";
import OptionsCarousel from "./class/OptionsCarousel.js";

export const root = document.documentElement;

export const mainMenuScreen = new Screen(
  document.querySelector(".screen.main-menu")! as HTMLElement,
);

export const memoryGameScreen = new MemoryGameScreen(
  document.querySelector(".screen.memory-game")! as HTMLElement,
  {
    element: document.querySelector(
      '[data-player="user"] .points',
    )! as HTMLElement,
    name: "you",
  },
  {
    element: document.querySelector(
      '[data-player="computer"] .points',
    )! as HTMLElement,
    name: "computer",
  },
);

export const settingsScreen = new SettingsScreen(
  document.querySelector(".screen.settings-menu")! as HTMLElement,
);

export let allPokemonData: TPokeAPI[] = [];
export const allCards: Card[] = [];

export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;

export const speedCarousel = new SettingsCarousel(
  document.querySelector(".speed-carousel")!,
  ["slow", "medium", "fast"],
  1,
  GameConfig.speedCommands,
);

export const difficultyCarousel = new SettingsCarousel(
  document.querySelector(".difficulty-carousel")!,
  ["easy", "medium", "hard"],
  1,
  GameConfig.difficultyCommands,
);

export const colorThemeCarousel = new OptionsCarousel(
  document.querySelector(".color-theme-carousel")!,
  ["light", "dark"],
  0,
);

await initializeGlobalSettings();

document.addEventListener("keyup", async (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    await displayGameScreenMessage("test", "testing");
    console.log("pressed");
  }
});
