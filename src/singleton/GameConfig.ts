import { GLOBAL_ANIMATION_DUR, SCREEN_MESSAGE_PROP } from "../constants.js";
import { root } from "../global.js";
let ANIMATION_DURATION = 2900;
let SCREEN_MESSAGE_DURATION = 1500;
let COMPUTER_CHOICE_PAUSE = 500;
let TICK_DOWN_PAUSE = 10;
let cssProps = buildCustomCSSProperties();

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

const setGameSpeed = (speed: "slow" | "medium" | "fast") => {
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

export const GameConfig = {
  ANIMATION_DURATION,
  SCREEN_MESSAGE_DURATION,
  COMPUTER_CHOICE_PAUSE,
  TICK_DOWN_PAUSE,
  setGameSpeed,
};
