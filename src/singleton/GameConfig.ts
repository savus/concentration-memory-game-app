import { root } from "../app.js";
import type { TCommandRegistry } from "../types.js";
import { camelToKebab, changeTheme } from "../utility.js";

const settings = {
  cssProps: {
    animationDur: 2900,
    screenMessageDur: 1500,
  },
  computerChoicePause: 500,
  tickDownPause: 10,
  gameDifficulty: "medium",
};

const logSettings = () => {
  console.log(
    settings.cssProps.animationDur,
    settings.cssProps.screenMessageDur,
    settings.computerChoicePause,
  );
};

const speedModes = ["slow", "medium", "fast"];

const speedCommands: TCommandRegistry = {
  slow: () => {
    settings.cssProps.animationDur = 4000;
    settings.cssProps.screenMessageDur = 3000;
    settings.computerChoicePause = 2000;
    syncSettingsToCSSCustomProps();
  },
  medium: () => {
    settings.cssProps.animationDur = 2900;
    settings.cssProps.screenMessageDur = 1500;
    settings.computerChoicePause = 500;
    syncSettingsToCSSCustomProps();
  },
  fast: () => {
    settings.cssProps.animationDur = 500;
    settings.cssProps.screenMessageDur = 800;
    settings.computerChoicePause = 300;
    syncSettingsToCSSCustomProps();
  },
};

const difficultyModes = ["easy", "medium", "hard"];

const difficultyCommand = (mode: string) => {
  settings.gameDifficulty = mode;
};

const themeModes = ["dark", "light"];

const themeCommands: TCommandRegistry = {
  light: () => {
    changeTheme("light");
  },
  dark: () => {
    changeTheme("dark");
  },
};

const syncSettingsToCSSCustomProps = () => {
  for (const [key, value] of Object.entries(settings.cssProps)) {
    const kebabCase = camelToKebab(key);
    const customCssPropertyFormat = `--${kebabCase}`;
    root.style.setProperty(customCssPropertyFormat, `${value}ms`);
  }
};

const GameConfig = {
  settings,
  speedModes,
  speedCommands,
  difficultyModes,
  themeModes,
  themeCommands,
  difficultyCommand,
  syncSettingsToCSSCustomProps,
};

export default GameConfig;
