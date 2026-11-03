import { cacheElements } from "../utility.js";
class OptionsCarousel {
    htmlTag;
    ui = {};
    carouselOptions;
    settingIndex;
    constructor(htmlTag, carouselOptions, startingIndex) {
        this.htmlTag = htmlTag;
        cacheElements(this.htmlTag, this.ui);
        this.carouselOptions = carouselOptions;
        this.settingIndex = startingIndex;
        this.updateModeUI();
        this.htmlTag.addEventListener("click", (e) => {
            const target = e.target;
            if (target.matches(".left-arrow"))
                this.handleCarouselChange("prev");
            if (target.matches(".right-arrow"))
                this.handleCarouselChange("next");
        });
    }
    getCurrentOption = () => this.carouselOptions[this.settingIndex];
    updateModeUI = () => {
        if (this.ui.settingName)
            this.ui.settingName.innerText = `${this.getCurrentOption()}`;
    };
    goToNewOption = (option) => {
        this.settingIndex = this.carouselOptions.indexOf(option);
        this.updateModeUI();
    };
    handleCarouselChange(direction = "next") {
        if (direction === "next") {
            this.settingIndex =
                this.settingIndex < this.carouselOptions.length - 1
                    ? this.settingIndex + 1
                    : 0;
        }
        else if (direction === "prev") {
            this.settingIndex =
                this.settingIndex > 0
                    ? this.settingIndex - 1
                    : this.carouselOptions.length - 1;
        }
        this.updateModeUI();
    }
}
export default OptionsCarousel;
//# sourceMappingURL=OptionsCarousel.js.map