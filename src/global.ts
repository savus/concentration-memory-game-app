import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import {
  CARD_CONTAINER,
  GLOBAL_ANIMATION_DUR,
  SCREEN_MESSAGE_CONTAINER,
  SCREEN_MESSAGE_PROP,
} from "./constants.js";
import type { TPokeAPI } from "./types.js";

export const root = document.documentElement;

class GameScreenUI {
  screenMessageContainer;
  playerPoints;
  computerPoints;
  cardContainer;

  constructor() {
    this.screenMessageContainer = document.querySelector(
      `.${SCREEN_MESSAGE_CONTAINER}`,
    )! as HTMLElement;
    this.playerPoints = document.querySelector(
      '[data-player="user"] .points',
    )! as HTMLElement;
    this.computerPoints = document.querySelector(
      '[data-player="computer"] .points',
    )! as HTMLElement;
    this.cardContainer = document.querySelector(
      `.${CARD_CONTAINER}`,
    )! as HTMLElement;
  }
}

class GameConfig {
  ANIMATION_DURATION = 2900;
  SCREEN_MESSAGE_DURATION = 1500;
  COMPUTER_CHOICE_PAUSE = 500;
  TICK_DOWN_PAUSE = 10;

  setGameSpeed = (speed: "slow" | "medium" | "fast") => {
    const customCSSProperties = () => {
      const array = [
        {
          propName: GLOBAL_ANIMATION_DUR,
          propValue: `${this.ANIMATION_DURATION}ms`,
        },
        {
          propName: SCREEN_MESSAGE_PROP,
          propValue: `${this.SCREEN_MESSAGE_DURATION}ms`,
        },
      ];
      return array;
    };

    let cssProps = customCSSProperties();

    switch (speed) {
      case "slow":
        this.ANIMATION_DURATION = 3600;
        this.SCREEN_MESSAGE_DURATION = 2000;
        this.COMPUTER_CHOICE_PAUSE = 1000;
        cssProps = customCSSProperties();
        break;
      case "medium":
        this.ANIMATION_DURATION = 2900;
        this.SCREEN_MESSAGE_DURATION = 1500;
        this.COMPUTER_CHOICE_PAUSE = 500;
        cssProps = customCSSProperties();
        break;
      case "fast":
        this.ANIMATION_DURATION = 800;
        this.SCREEN_MESSAGE_DURATION = 1000;
        this.COMPUTER_CHOICE_PAUSE = 300;
        cssProps = customCSSProperties();
        break;
    }

    cssProps.forEach((property) => {
      const { propName, propValue } = property;
      root.style.setProperty(propName, propValue);
    });
  };
}

export let allPokemonData: TPokeAPI[] = [];
export const allCards: Card[] = [];
export const gameScreenUI = new GameScreenUI();
export const gameConfig = new GameConfig();
export const userPointsDisplay = new PointsDisplay(
  gameScreenUI.playerPoints,
  "you",
);
export const computerPointsDisplay = new PointsDisplay(
  gameScreenUI.computerPoints,
  "computer",
);
export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
