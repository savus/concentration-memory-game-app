import { handleSpeedSliderClick, onBackButtonClick } from "../clickEvents.js";
const screen = document.querySelector(".settings-menu.screen");
const backButton = screen.querySelector(".back-button");
backButton?.addEventListener("click", onBackButtonClick);
const speedSlider = document.querySelector(".menu-item .speed-slider");
speedSlider.addEventListener("click", handleSpeedSliderClick);
const settingName = speedSlider.querySelector(".setting-name");
const SettingsMenuUI = { screen, backButton, speedSlider, settingName };
export default SettingsMenuUI;
//# sourceMappingURL=SettingsMenuUI.js.map