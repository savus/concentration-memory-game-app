export class GameMode {
    modes;
    index = 0;
    textElement;
    actionMap;
    syncSettingsToCSS;
    constructor(modes, startIndex, element, actionMap, syncSettingsToCSS) {
        this.modes = modes;
        this.index = startIndex;
        this.textElement = element;
        this.actionMap = actionMap;
        this.syncSettingsToCSS = syncSettingsToCSS;
    }
    getCurrentMode = () => this.modes[this.index];
    slideToNewMode = (modeDirection) => {
        const nextMode = this.index < this.modes.length - 1 ? this.index + 1 : 0;
        const prevMode = this.index > 0 ? this.index - 1 : this.modes.length - 1;
        this.index = modeDirection === "prev" ? prevMode : nextMode;
        this.updateModeUI();
    };
    goToNewMode = (modeName) => {
        this.index = this.modes.indexOf(modeName);
        this.updateModeUI();
    };
    updateModeUI = () => {
        const newModeName = this.getCurrentMode();
        const modeNameCapitalized = `${newModeName?.substring(0, 1).toUpperCase()}${newModeName?.substring(1)}`;
        this.textElement.innerText = modeNameCapitalized;
        if (newModeName !== undefined) {
            this.syncSettingsToCSS(newModeName, this.actionMap);
        }
    };
}
//# sourceMappingURL=GameMode.js.map