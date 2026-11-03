import type { TCommandRegistry } from "../types.js";
import OptionsCarousel from "./OptionsCarousel.js";

class SettingsCarousel extends OptionsCarousel {
  optionCommand: TCommandRegistry | ((...args: any[]) => void);
  constructor(
    htmlTag: HTMLElement,
    carouselOptions: string[],
    startingIndex: number,
    optionCommand: TCommandRegistry | ((...args: any[]) => void),
  ) {
    super(htmlTag, carouselOptions, startingIndex);
    this.optionCommand = optionCommand;
  }

  handleCarouselChange(direction: "next" | "prev" = "next") {
    super.handleCarouselChange(direction);
    if (this.optionCommand) {
      if (typeof this.optionCommand === "object") {
        this.optionCommand[`${this.getCurrentOption()}`]?.();
      } else if (typeof this.optionCommand === "function") {
        this.optionCommand(this.getCurrentOption());
      }
    }
  }
}

export default SettingsCarousel;
