import { GameMode } from "../class/GameMode.js";
import { root } from "../global.js";
const settings = {
    animationDur: 2900,
    screenMessageDur: 1500,
    computerChoicePause: 500,
    tickDownPause: 10,
};
const syncSettingsToCSS = (mode, actionMap) => {
    if (actionMap[mode])
        actionMap[mode]();
    for (const [key, value] of Object.entries(settings)) {
        const camelToCss = key.replace(/[A-Z]/g, (g) => `-${g.toLowerCase()}`);
        root.style.setProperty(`--${camelToCss}`, `${value}ms`);
    }
};
const speedModes = ["slow", "medium", "fast"];
const speedCommands = {
    slow: () => {
        settings.animationDur = 3600;
        settings.screenMessageDur = 2000;
        settings.computerChoicePause = 1000;
    },
    medium: () => {
        settings.animationDur = 2900;
        settings.screenMessageDur = 1500;
        settings.computerChoicePause = 500;
    },
    fast: () => {
        settings.animationDur = 500;
        settings.screenMessageDur = 800;
        settings.computerChoicePause = 300;
    },
};
const speed = new GameMode(speedModes, 1, document.querySelector(".speed-slider .setting-name"), speedCommands, syncSettingsToCSS);
const difficultyModes = ["easy", "medium", "hard", "cheating"];
const difficultyCommands = {};
const difficulty = new GameMode(difficultyModes, 1, document.querySelector(".difficulty-slider .setting-name"), difficultyCommands, syncSettingsToCSS);
const colorThemes = ["light", "dark"];
const themeCommands = {
    colorThemeLeftArrow: () => {
        console.log("left arrow pressed");
    },
    colorThemeRightArrow: () => {
        console.log("right arrow pressed");
    },
};
const colorTheme = new GameMode(colorThemes, 1, document.querySelector(".color-theme-slider .setting-name"), themeCommands, syncSettingsToCSS);
export const GameConfig = {
    settings,
    syncSettingsToCSS,
    speed,
    difficulty,
    colorTheme,
};
//# sourceMappingURL=GameConfig.js.map