export class GameMode {
  modes: string[];
  index: number = 0;
  category: string;
  textElement: HTMLElement;
  settingsAction: (modeName: string) => void;

  constructor(
    modes: string[],
    startIndex: number,
    category: string,
    element: HTMLElement,
    settingsAction: (modeName: string) => void,
  ) {
    this.modes = modes;
    this.index = startIndex;
    this.category = category;
    this.textElement = element;
    this.settingsAction = settingsAction;
  }

  getCurrentMode = () => this.modes[this.index];

  slideToNewMode = (modeDirection: "prev" | "next") => {
    const nextMode = this.index < this.modes.length - 1 ? this.index + 1 : 0;
    const prevMode = this.index > 0 ? this.index - 1 : this.modes.length - 1;
    this.index = modeDirection === "prev" ? prevMode : nextMode;
    this.updateModeUI();
  };

  updateModeUI = () => {
    const newModeName = this.getCurrentMode();
    const modeNameCapitalized = `${newModeName?.substring(0, 1).toUpperCase()}${newModeName?.substring(1)}`;
    this.textElement.innerText = modeNameCapitalized;
    if (newModeName !== undefined) this.settingsAction(newModeName);
  };
}
