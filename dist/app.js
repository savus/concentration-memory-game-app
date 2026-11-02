import { cacheElements, displayGameScreenMessage, initializeGlobalSettings, } from "./utility.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
import SettingsScreen from "./class/SettingsScreen.js";
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
export class OptionCarousel {
    htmlTag;
    ui = {};
    carouselOptions;
    settingIndex;
    constructor(htmlTag, carouselOptions, startingIndex) {
        this.htmlTag = htmlTag;
        cacheElements(this.htmlTag, this.ui);
        this.carouselOptions = carouselOptions;
        this.settingIndex = startingIndex;
        console.log(this.ui);
        this.updateModeUI();
        this.htmlTag.addEventListener("click", (e) => {
            const target = e.target;
            if (target.matches(".left-arrow"))
                this.handleCarouselChange("next");
            if (target.matches(".right-arrow"))
                this.handleCarouselChange("prev");
        });
    }
    getCurrentOption = () => this.carouselOptions[this.settingIndex];
    updateModeUI = () => {
        if (this.ui.settingName)
            this.ui.settingName.innerText = `${this.getCurrentOption()}`;
    };
    goToNewOption = (option) => {
        this.settingIndex = this.carouselOptions.indexOf(option);
        this.updateModeUI();
    };
    handleCarouselChange = (direction = "next") => {
        if (direction === "next") {
            this.settingIndex =
                this.settingIndex < this.carouselOptions.length - 1
                    ? this.settingIndex + 1
                    : 0;
        }
        else if (direction === "prev") {
            this.settingIndex =
                this.settingIndex > 0
                    ? this.settingIndex - 1
                    : this.carouselOptions.length - 1;
        }
        this.updateModeUI();
    };
}
export const speedCarousel = new OptionCarousel(document.querySelector(".speed-carousel"), ["slow", "medium", "fast"], 1);
export const difficultyCarousel = new OptionCarousel(document.querySelector(".difficulty-carousel"), ["easy", "medium", "hard"], 1);
export const colorThemeCarousel = new OptionCarousel(document.querySelector(".color-theme-carousel"), ["light", "dark"], 0);
await initializeGlobalSettings();
document.addEventListener("keyup", async (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
        await displayGameScreenMessage("test", "testing");
        console.log("pressed");
    }
});
//# sourceMappingURL=app.js.map