import { memoryGameScreen } from "./app.js";
import GameConfig from "./singleton/GameConfig.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";
export const mainMenuActions = {
    newGame: () => {
        ScreenSwapper.swapScreens(memoryGameScreen.screenTag);
    },
    settings: () => {
        ScreenSwapper.swapScreens(GameConfig.settingsScreen.screenTag);
    },
    quit: () => console.log("you quit"),
};
export const memoryGameActions = {};
export const settingScreenActions = {};
//# sourceMappingURL=commandRegistries.js.map