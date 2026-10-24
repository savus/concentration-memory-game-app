export class GameMode {
    modes;
    index = 0;
    category;
    textElement;
    settingsAction;
    constructor(modes, startIndex, category, element, settingsAction) {
        this.modes = modes;
        this.index = startIndex;
        this.category = category;
        this.textElement = element;
        this.settingsAction = settingsAction;
    }
    getCurrentMode = () => this.modes[this.index];
    slideToNewMode = (modeDirection) => {
        const nextMode = this.index < this.modes.length - 1 ? this.index + 1 : 0;
        const prevMode = this.index > 0 ? this.index - 1 : this.modes.length - 1;
        this.index = modeDirection === "prev" ? prevMode : nextMode;
        this.updateModeUI();
    };
    updateModeUI = () => {
        const newModeName = this.getCurrentMode();
        const modeCapitalized = `${newModeName?.substring(0, 1).toUpperCase()}${newModeName?.substring(1)}`;
        this.textElement.innerText = modeCapitalized;
        if (newModeName !== undefined)
            this.settingsAction(newModeName);
    };
}
//# sourceMappingURL=GameMode.js.map