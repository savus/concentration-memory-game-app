import SettingsScreen from "../class/SettingsScreen.js";
const settings = {
    animationDur: 2900,
    screenMessageDur: 1500,
    computerChoicePause: 500,
    tickDownPause: 10,
};
const logSettings = () => {
    console.log(settings.animationDur, settings.screenMessageDur, settings.computerChoicePause);
};
const speedCommands = {
    slow: () => {
        settings.animationDur = 3600;
        settings.screenMessageDur = 2000;
        settings.computerChoicePause = 1000;
        logSettings();
    },
    medium: () => {
        settings.animationDur = 2900;
        settings.screenMessageDur = 1500;
        settings.computerChoicePause = 500;
        logSettings();
    },
    fast: () => {
        settings.animationDur = 500;
        settings.screenMessageDur = 800;
        settings.computerChoicePause = 300;
        logSettings();
    },
};
const difficultyCommands = {
    easy: () => {
        console.log("this is easy");
    },
    medium: () => {
        console.log("this is medium");
    },
    hard: () => {
        console.log("this is hard");
    },
};
const GameConfig = {
    settings,
    speedCommands,
    difficultyCommands,
};
export default GameConfig;
//# sourceMappingURL=GameConfig.js.map