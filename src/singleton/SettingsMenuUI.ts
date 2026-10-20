import { onBackButtonClick } from "../clickEvents.js";

const screen = document.querySelector(".settings-menu.screen")! as HTMLElement;

const backButton = screen.querySelector(".back-button");
backButton?.addEventListener("click", onBackButtonClick);

const SettingsMenuUI = { screen, backButton };

export default SettingsMenuUI;
