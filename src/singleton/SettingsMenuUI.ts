import {
  handleDifficultySliderClick,
  handleSpeedSliderClick,
  onBackButtonClick,
} from "../clickEvents.js";
import { GameConfig } from "./GameConfig.js";

const screen = document.querySelector(".settings-menu.screen")! as HTMLElement;

const backButton = screen.querySelector(".back-button");
backButton?.addEventListener("click", onBackButtonClick);

const speedSlider = document.querySelector(
  ".menu-item .speed-slider",
)! as HTMLElement;

speedSlider.addEventListener("click", handleSpeedSliderClick);

const speedSliderName = speedSlider.querySelector(
  ".setting-name",
)! as HTMLElement;

const difficultySlider = document.querySelector(
  ".menu-item .difficulty-slider",
)! as HTMLElement;

difficultySlider.addEventListener("click", handleDifficultySliderClick);

const difficultySliderName = difficultySlider.querySelector(
  ".setting-name",
)! as HTMLElement;

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
