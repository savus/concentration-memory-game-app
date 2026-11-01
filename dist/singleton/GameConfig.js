import SettingsScreen from "../class/SettingsScreen.js";
const settings = {
    animationDur: 2900,
    screenMessageDur: 1500,
    computerChoicePause: 500,
    tickDownPause: 10,
};
// const speedCommands: TCommandRegistry = {
//   slow: () => {
//     settings.animationDur = 3600;
//     settings.screenMessageDur = 2000;
//     settings.computerChoicePause = 1000;
//   },
//   medium: () => {
//     settings.animationDur = 2900;
//     settings.screenMessageDur = 1500;
//     settings.computerChoicePause = 500;
//   },
//   fast: () => {
//     settings.animationDur = 500;
//     settings.screenMessageDur = 800;
//     settings.computerChoicePause = 300;
//   },
// };
const settingsScreen = new SettingsScreen(document.querySelector(".screen.settings-menu"));
const GameConfig = {
    settings,
    settingsScreen,
};
export default GameConfig;
//# sourceMappingURL=GameConfig.js.map