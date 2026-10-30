import { GameMode } from "../class/GameMode.js";
import { root } from "../global.js";
import type { TCommandRegistry } from "../types.js";

const settings = {
  animationDur: 2900,
  screenMessageDur: 1500,
  computerChoicePause: 500,
  tickDownPause: 10,
};

const speedCommands: TCommandRegistry = {
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

const syncSettingsToCSS = (mode: string, actionMap: TCommandRegistry) => {
  if (actionMap[mode]) actionMap[mode]();

  for (const [key, value] of Object.entries(settings)) {
    const camelToCss = key.replace(/[A-Z]/g, (g) => `-${g.toLowerCase()}`);
    root.style.setProperty(`--${camelToCss}`, `${value}ms`);
  }

  console.log(
    "--animation-dur: ",
    window.getComputedStyle(root).getPropertyValue("--animation-dur"),
  );
  console.log(
    "--screen-message-dur:",
    window.getComputedStyle(root).getPropertyValue("--screen-message-dur"),
  );
  console.log(
    "--computer-choice-pause:",
    window.getComputedStyle(root).getPropertyValue("--computer-choice-pause"),
  );
};

const difficultyCommands: TCommandRegistry = {
  easy: () => {
    console.log("game is now easy");
  },
  medium: () => {
    console.log("game is now medium");
  },
  hard: () => {
    console.log("game is now Hard");
  },
  cheating: () => {
    console.log("you filthy cheater");
  },
};

const speedModes = ["slow", "medium", "fast"];

const speed = new GameMode(
  speedModes,
  1,
  document.querySelector(".speed-slider .setting-name")! as HTMLElement,
  speedCommands,
  syncSettingsToCSS,
);

const difficultyModes = ["easy", "medium", "hard", "cheating"];

const difficulty = new GameMode(
  difficultyModes,
  1,
  document.querySelector(".difficulty-slider .setting-name")! as HTMLElement,
  difficultyCommands,
  syncSettingsToCSS,
);

export const GameConfig = {
  settings,
  syncSettingsToCSS,
  speed,
  difficulty,
};
