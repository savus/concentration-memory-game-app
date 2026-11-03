import OptionsCarousel from "./OptionsCarousel.js";
class SettingsCarousel extends OptionsCarousel {
    optionCommand;
    constructor(htmlTag, carouselOptions, startingIndex, optionCommand) {
        super(htmlTag, carouselOptions, startingIndex);
        this.optionCommand = optionCommand;
    }
    handleCarouselChange(direction = "next") {
        super.handleCarouselChange(direction);
        if (this.optionCommand) {
            if (typeof this.optionCommand === "object") {
                this.optionCommand[`${this.getCurrentOption()}`]?.();
            }
            else if (typeof this.optionCommand === "function") {
                this.optionCommand(this.getCurrentOption());
            }
        }
    }
}
export default SettingsCarousel;
//# sourceMappingURL=SettingsCarousel.js.map