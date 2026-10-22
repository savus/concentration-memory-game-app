import { handleSpeedSliderClick, onBackButtonClick } from "../clickEvents.js";

const screen = document.querySelector(".settings-menu.screen")! as HTMLElement;

const backButton = screen.querySelector(".back-button");
backButton?.addEventListener("click", onBackButtonClick);

const speedSlider = document.querySelector(
  ".menu-item .speed-slider",
)! as HTMLElement;

speedSlider.addEventListener("click", handleSpeedSliderClick);

const settingName = speedSlider.querySelector(".setting-name")! as HTMLElement;

const SettingsMenuUI = { screen, backButton, speedSlider, settingName };

export default SettingsMenuUI;
