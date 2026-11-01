import { displayGameScreenMessage, initializeGlobalSettings, } from "./utility.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
export const root = document.documentElement;
export const mainMenuScreen = new Screen(document.querySelector(".screen.main-menu"));
const userPointsDisplay = {
    element: document.querySelector('[data-player="user"] .points'),
    name: "you",
};
const computerPointsDisplay = {
    element: document.querySelector('[data-player="computer"] .points'),
    name: "computer",
};
export const memoryGameScreen = new MemoryGameScreen(document.querySelector(".screen.memory-game"), userPointsDisplay, computerPointsDisplay);
export const settingsScreen = new Screen(document.querySelector(".screen.settings-menu"));
export let allPokemonData = [];
export const allCards = [];
export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
await initializeGlobalSettings();
document.addEventListener("keyup", async (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
        await displayGameScreenMessage("test", "testing");
        console.log("pressed");
    }
});
//# sourceMappingURL=app.js.map