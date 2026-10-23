import { GLOBAL_ANIMATION_DUR, SCREEN_MESSAGE_PROP } from "../constants.js";
import { root } from "../global.js";
import SettingsMenuUI from "./SettingsMenuUI.js";
type TSpeedModes = "slow" | "medium" | "fast";
type TCategory = "speed" | "difficulty";
let ANIMATION_DURATION = 2900;
let SCREEN_MESSAGE_DURATION = 1500;
let COMPUTER_CHOICE_PAUSE = 500;
let TICK_DOWN_PAUSE = 10;
let cssProps = buildCustomCSSProperties();

class GameMode {
  modes: string[];
  index: number = 0;
  category: string;
  textElement: HTMLElement;
  executeSettings: (modeName: string) => void;

  constructor(
    modes: string[],
    startIndex: number,
    category: string,
    element: HTMLElement,
    executeSettings: (modeName: string) => void,
  ) {
    this.modes = modes;
    this.index = startIndex;
    this.category = category;
    this.textElement = element;
    this.executeSettings = executeSettings;
  }

  getCurrentMode = () => this.modes[this.index];

  slideToNewMode = (modeDirection: "prev" | "next") => {
    const nextMode = this.index < this.modes.length - 1 ? this.index + 1 : 0;
    const prevMode = this.index > 0 ? this.index - 1 : this.modes.length - 1;
    this.index = modeDirection === "prev" ? prevMode : nextMode;
    this.updateModeUI();
  };

  updateModeUI = () => {
    const newModeName = this.getCurrentMode();
    const modeCapitalized = `${newModeName?.substring(0, 1).toUpperCase()}${newModeName?.substring(1)}`;
    this.textElement.innerText = modeCapitalized;
    if (newModeName !== undefined) this.executeSettings(newModeName);
  };
}

function buildCustomCSSProperties() {
  const array = [
    {
      propName: GLOBAL_ANIMATION_DUR,
      propValue: `${ANIMATION_DURATION}ms`,
    },
    {
      propName: SCREEN_MESSAGE_PROP,
      propValue: `${SCREEN_MESSAGE_DURATION}ms`,
    },
  ];
  return array;
}

const setGameSpeed = (speed: string) => {
  switch (speed) {
    case "slow":
      ANIMATION_DURATION = 3600;
      SCREEN_MESSAGE_DURATION = 2000;
      COMPUTER_CHOICE_PAUSE = 1000;
      cssProps = buildCustomCSSProperties();
      break;
    case "medium":
      ANIMATION_DURATION = 2900;
      SCREEN_MESSAGE_DURATION = 1500;
      COMPUTER_CHOICE_PAUSE = 500;
      cssProps = buildCustomCSSProperties();
      break;
    case "fast":
      ANIMATION_DURATION = 500;
      SCREEN_MESSAGE_DURATION = 800;
      COMPUTER_CHOICE_PAUSE = 300;
      cssProps = buildCustomCSSProperties();
      break;
  }

  cssProps.forEach((property) => {
    const { propName, propValue } = property;
    root.style.setProperty(propName, propValue);
  });
};

const setGameDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case "easy":
      console.log("game is now easy");
      break;
    case "hard":
      console.log("game is now hard");
  }
};

const speedModes = ["slow", "medium", "fast"];
let speedModeIndex = 1;

const speed = new GameMode(
  speedModes,
  speedModeIndex,
  "speed",
  SettingsMenuUI.speedSliderName,
  setGameSpeed,
);

const difficultyModes = ["easy", "medium", "hard", "cheating"];
let difficultyModeIndex = 1;

const difficulty = new GameMode(
  difficultyModes,
  difficultyModeIndex,
  "difficulty",
  SettingsMenuUI.difficultySliderName,
  setGameDifficulty,
);

// const setGameSpeedMode = (mode: TSpeedModes) => {
//   speedModeIndex = speedModes.indexOf(mode);
//   const newModeName = getCurrentMode();
//   const modeCapitalized = `${newModeName?.substring(0, 1).toUpperCase()}${newModeName?.substring(1)}`;
//   SettingsMenuUI.settingName.innerText = modeCapitalized;
//   if (newModeName !== undefined) setGameSpeed(newModeName);
// };

export const GameConfig = {
  ANIMATION_DURATION,
  SCREEN_MESSAGE_DURATION,
  COMPUTER_CHOICE_PAUSE,
  TICK_DOWN_PAUSE,
  speed,
  difficulty,
};
