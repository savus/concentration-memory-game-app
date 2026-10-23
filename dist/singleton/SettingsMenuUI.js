import { handleDifficultySliderClick, handleSpeedSliderClick, onBackButtonClick, } from "../clickEvents.js";
import { GameConfig } from "./GameConfig.js";
const screen = document.querySelector(".settings-menu.screen");
const backButton = screen.querySelector(".back-button");
backButton?.addEventListener("click", onBackButtonClick);
const speedSlider = document.querySelector(".menu-item .speed-slider");
speedSlider.addEventListener("click", handleSpeedSliderClick);
const speedSliderName = speedSlider.querySelector(".setting-name");
const difficultySlider = document.querySelector(".menu-item .difficulty-slider");
difficultySlider.addEventListener("click", handleDifficultySliderClick);
const difficultySliderName = difficultySlider.querySelector(".setting-name");
const init = () => {
    GameConfig.speed.updateModeUI();
    GameConfig.difficulty.updateModeUI();
};
const SettingsMenuUI = {
    screen,
    backButton,
    speedSlider,
    speedSliderName,
    difficultySlider,
    difficultySliderName,
    init,
};
export default SettingsMenuUI;
//# sourceMappingURL=SettingsMenuUI.js.map