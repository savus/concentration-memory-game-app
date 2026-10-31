import { memoryGameScreen, settingsScreen } from "./global.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";

export const mainMenuActions = {
  newGame: () => {
    ScreenSwapper.swapScreens(memoryGameScreen.screenTag);
  },
  settings: () => {
    ScreenSwapper.swapScreens(settingsScreen.screenTag);
  },
  quit: () => console.log("you quit"),
};

export const memoryGameActions = {};

export const settingScreenActions = {};
