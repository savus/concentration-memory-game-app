import { GLOBAL_ANIMATION_DUR, SCREEN_MESSAGE_PROP } from "../constants.js";
import { root } from "../global.js";
import SettingsMenuUI from "./SettingsMenuUI.js";
type TSpeedModes = "slow" | "medium" | "fast";
let ANIMATION_DURATION = 2900;
let SCREEN_MESSAGE_DURATION = 1500;
let COMPUTER_CHOICE_PAUSE = 500;
let TICK_DOWN_PAUSE = 10;
let cssProps = buildCustomCSSProperties();
const speedModes = ["slow", "medium", "fast"];
let speedModeIndex = 1;

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

const switchModes = (newMode: "prev" | "next") => {
  if (newMode === "prev") {
    speedModeIndex =
      speedModeIndex > 0 ? speedModeIndex - 1 : speedModes.length - 1;
  } else {
    speedModeIndex =
      speedModeIndex < speedModes.length - 1 ? speedModeIndex + 1 : 0;
  }
  updateModeUI();
};

const updateModeUI = () => {
  const newModeName = getCurrentMode();
  const modeCapitalized = `${newModeName?.substring(0, 1).toUpperCase()}${newModeName?.substring(1)}`;
  SettingsMenuUI.settingName.innerText = modeCapitalized;
  if (newModeName !== undefined) setGameSpeed(newModeName);
};

const setGameSpeedMode = (mode: TSpeedModes) => {
  speedModeIndex = speedModes.indexOf(mode);
  updateModeUI();
};

const getCurrentMode = () => speedModes[speedModeIndex];

export const GameConfig = {
  ANIMATION_DURATION,
  SCREEN_MESSAGE_DURATION,
  COMPUTER_CHOICE_PAUSE,
  TICK_DOWN_PAUSE,
  setGameSpeed,
  switchModes,
  getCurrentMode,
  setGameSpeedMode,
};
