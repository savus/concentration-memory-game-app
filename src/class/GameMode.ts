import type { TCommandRegistry } from "../types.js";

export class GameMode {
  modes: string[];
  index: number = 0;
  textElement: HTMLElement;
  actionMap: TCommandRegistry;
  syncSettingsToCSS: (mode: string, actionMap: TCommandRegistry) => void;

  constructor(
    modes: string[],
    startIndex: number,
    element: HTMLElement,
    actionMap: TCommandRegistry,
    syncSettingsToCSS: (mode: string, actionMap: TCommandRegistry) => void,
  ) {
    this.modes = modes;
    this.index = startIndex;
    this.textElement = element;
    this.actionMap = actionMap;
    this.syncSettingsToCSS = syncSettingsToCSS;
  }

  getCurrentMode = () => this.modes[this.index];

  slideToNewMode = (modeDirection: "prev" | "next") => {
    const nextMode = this.index < this.modes.length - 1 ? this.index + 1 : 0;
    const prevMode = this.index > 0 ? this.index - 1 : this.modes.length - 1;
    this.index = modeDirection === "prev" ? prevMode : nextMode;
    this.updateModeUI();
  };

  goToNewMode = (modeName: string) => {
    this.index = this.modes.indexOf(modeName);
    this.updateModeUI();
  };

  updateModeUI = () => {
    const newModeName = this.getCurrentMode();
    const modeNameCapitalized = `${newModeName?.substring(0, 1).toUpperCase()}${newModeName?.substring(1)}`;
    this.textElement.innerText = modeNameCapitalized;
    if (newModeName !== undefined) {
      this.syncSettingsToCSS(newModeName, this.actionMap);
      console.log(newModeName);
    }
  };
}
