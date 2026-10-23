import { ACTIVE } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";
import GameScreenUI from "./GameScreenUI.js";
const memoryGameScreen = GameScreenUI.screen;
let prevScreen = null;
let currentScreen = null;
let nextScreen = null;
const screenHistory = [];
let screenHistoryIndex = screenHistory.length - 1;
const screenTransitionPause = 150;
const screenHistoryMax = 5;
const addToScreenHistory = (screen) => {
    screenHistory.push(screen);
    if (screenHistory.length > screenHistoryMax) {
        screenHistory.shift();
    }
    screenHistoryIndex = screenHistory.length - 1;
};
const swapScreens = async (nextScreen) => {
    if (currentScreen) {
        await waitForAnimation(currentScreen, "transition", () => {
            if (currentScreen)
                currentScreen.classList.remove(ACTIVE);
            prevScreen = currentScreen;
            currentScreen = nextScreen;
            addToScreenHistory(currentScreen);
        }, async () => {
            await wait(screenTransitionPause);
            if (currentScreen)
                currentScreen.classList.add(ACTIVE);
        });
    }
};
const init = (screen) => {
    currentScreen = screen;
};
const ScreenSwapper = { swapScreens, init };
export default ScreenSwapper;
//# sourceMappingURL=ScreenSwapper.js.map