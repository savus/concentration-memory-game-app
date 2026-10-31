import type { Card } from "./class/Card.js";
import type { GameMode } from "./class/GameMode.js";
import { mainMenuUI } from "./global.js";
import { GameConfig } from "./singleton/GameConfig.js";
import GameHandler from "./singleton/GameHandler.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";
import type { TCommandRegistry, TMenuUI } from "./types.js";

export function cardOnClickHandler(card: Card) {
  if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
    console.log("you may not click at this time");
    return;
  }
  GameHandler.handleUserChoice(card);
}

export function menuOnClickDelegation(
  ui: TMenuUI,
  e: MouseEvent,
  actionMap: TCommandRegistry,
) {
  for (const key of Object.keys(ui)) {
    const target = e.target as HTMLElement;
    if (target && target === ui[key]) {
      if (actionMap[key]) actionMap[key]();
    }
  }
}

export function startNewGame() {
  ScreenSwapper.swapScreens(GameScreenUI.screen);
}

export function goToSettingsMenu() {
  // ScreenSwapper.swapScreens(SettingsMenuUI.menu);
}

export function onBackButtonClick() {
  ScreenSwapper.swapScreens(mainMenuUI.menu);
}

export function quitApplication() {
  document.body.innerText = "";
}

export function handleSliderClick(e: MouseEvent, gameMode: GameMode) {
  const isElement = e.target instanceof HTMLElement;
  const isLeftArrow = isElement && e.target.matches(".left-arrow");
  const isRightArrow = isElement && e.target.matches(".right-arrow");
  if (isRightArrow) gameMode.slideToNewMode("next");
  if (isLeftArrow) gameMode.slideToNewMode("prev");
}

export function handleDifficultySliderClick(e: MouseEvent) {
  // const isElement = e.target instanceof HTMLElement;
  // const isLeftArrow = isElement && e.target.matches(".left-arrow");
  // const isRightArrow = isElement && e.target.matches(".right-arrow");
  // if (isRightArrow) GameConfig.difficulty.slideToNewMode("next");
  // if (isLeftArrow) GameConfig.difficulty.slideToNewMode("prev");
}
