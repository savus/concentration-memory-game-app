import { mainMenuScreen, memoryGameScreen, settingsScreen } from "./app.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";
import { quitApplication } from "./utility.js";
export const mainMenuActions = {
    newGame: () => {
        ScreenSwapper.swapScreens(memoryGameScreen.screenTag);
    },
    settings: () => {
        ScreenSwapper.swapScreens(settingsScreen.screenTag);
    },
    quit: () => quitApplication(),
};
export const memoryGameActions = {};
export const settingScreenActions = {
    backButton: () => {
        ScreenSwapper.swapScreens(mainMenuScreen.screenTag);
    },
};
//# sourceMappingURL=commandRegistries.js.map