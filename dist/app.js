import { initializeGlobalSettings } from "./utility.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
import SettingsScreen from "./class/SettingsScreen.js";
import GameConfig from "./singleton/GameConfig.js";
import SettingsCarousel from "./class/SettingsCarousel.js";
import OptionsCarousel from "./class/OptionsCarousel.js";
export const root = document.documentElement;
export const mainMenuScreen = new Screen(document.querySelector(".screen.main-menu"));
export const memoryGameScreen = new MemoryGameScreen(document.querySelector(".screen.memory-game"), {
    element: document.querySelector('[data-player="user"] .points'),
    name: "you",
}, {
    element: document.querySelector('[data-player="computer"] .points'),
    name: "computer",
});
export const settingsScreen = new SettingsScreen(document.querySelector(".screen.settings-menu"));
export let allPokemonData = [];
export const allCards = [];
export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
export let computerCheatMode = true;
export const speedCarousel = new SettingsCarousel(document.querySelector(".speed-carousel"), GameConfig.speedModes, 1, GameConfig.speedCommands);
export const difficultyCarousel = new SettingsCarousel(document.querySelector(".difficulty-carousel"), GameConfig.difficultyModes, 1, GameConfig.difficultyCommand);
export const colorThemeCarousel = new SettingsCarousel(document.querySelector(".color-theme-carousel"), GameConfig.themeModes, 1, GameConfig.themeCommands);
await initializeGlobalSettings();
document.addEventListener("keyup", async (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
        await memoryGameScreen.displayGameScreenMessage("test", "testing");
        console.log("pressed");
    }
});
//# sourceMappingURL=app.js.map