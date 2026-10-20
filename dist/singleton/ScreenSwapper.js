import { ACTIVE } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";
import GameScreenUI from "./GameScreenUI.js";
import MainMenuUI from "./MainMenuUI.js";
const mainMenuScreen = MainMenuUI.screen;
const memoryGameScreen = GameScreenUI.screen;
let prevScreen = null;
let currentScreen = mainMenuScreen;
let nextScreen = null;
const screenHistory = [mainMenuScreen];
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
    await waitForAnimation(currentScreen, "transition", () => {
        currentScreen.classList.remove(ACTIVE);
        prevScreen = currentScreen;
        currentScreen = nextScreen;
        addToScreenHistory(currentScreen);
    }, async () => {
        await wait(screenTransitionPause);
        currentScreen.classList.add(ACTIVE);
    });
};
const ScreenSwapper = { swapScreens };
export default ScreenSwapper;
//# sourceMappingURL=ScreenSwapper.js.map