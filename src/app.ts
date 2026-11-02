import {
  cacheElements,
  displayGameScreenMessage,
  initializeGlobalSettings,
} from "./utility.js";

import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
import type {
  TCommandRegistry,
  TPointsDisplayData,
  TPokeAPI,
  TUIRegistry,
} from "./types.js";
import SettingsScreen from "./class/SettingsScreen.js";
import GameConfig from "./singleton/GameConfig.js";

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

export class OptionCarousel {
  htmlTag;
  ui: TUIRegistry = {};
  carouselOptions;
  settingIndex: number;

  constructor(
    htmlTag: HTMLElement,
    carouselOptions: string[],
    startingIndex: number,
  ) {
    this.htmlTag = htmlTag;
    cacheElements(this.htmlTag, this.ui);
    this.carouselOptions = carouselOptions;

    this.settingIndex = startingIndex;
    console.log(this.ui);
    this.updateModeUI();

    this.htmlTag.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches(".left-arrow")) this.handleCarouselChange("next");
      if (target.matches(".right-arrow")) this.handleCarouselChange("prev");
    });
  }

  getCurrentOption = () => this.carouselOptions[this.settingIndex];

  updateModeUI = () => {
    if (this.ui.settingName)
      this.ui.settingName.innerText = `${this.getCurrentOption()}`;
  };

  goToNewOption = (option: string) => {
    this.settingIndex = this.carouselOptions.indexOf(option);
    this.updateModeUI();
  };

  handleCarouselChange(direction: "next" | "prev" = "next") {
    if (direction === "next") {
      this.settingIndex =
        this.settingIndex < this.carouselOptions.length - 1
          ? this.settingIndex + 1
          : 0;
    } else if (direction === "prev") {
      this.settingIndex =
        this.settingIndex > 0
          ? this.settingIndex - 1
          : this.carouselOptions.length - 1;
    }
    this.updateModeUI();
  }
}

export class SettingsCarousel extends OptionCarousel {
  optionCommands: TCommandRegistry = {};
  constructor(
    htmlTag: HTMLElement,
    carouselOptions: string[],
    startingIndex: number,
    optionCommands: TCommandRegistry,
  ) {
    super(htmlTag, carouselOptions, startingIndex);
    this.optionCommands = optionCommands;
  }

  handleCarouselChange(direction: "next" | "prev" = "next") {
    super.handleCarouselChange(direction);
    const commandOption = this.optionCommands[`${this.getCurrentOption()}`];
    if (commandOption) commandOption();
  }
}

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

export const colorThemeCarousel = new OptionCarousel(
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
