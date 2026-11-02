import type { TCommandRegistry } from "../types.js";
import OptionsCarousel from "./OptionsCarousel.js";

class SettingsCarousel extends OptionsCarousel {
  optionCommands: TCommandRegistry = {};
  constructor(
    htmlTag: HTMLElement,
    carouselOptions: string[],
    startingIndex: number,
    optionCommands: TCommandRegistry,
  ) {
    super(htmlTag, carouselOptions, startingIndex);
    this.optionCommands = optionCommands;
  }

  handleCarouselChange(direction: "next" | "prev" = "next") {
    super.handleCarouselChange(direction);
    const commandOption = this.optionCommands[`${this.getCurrentOption()}`];
    if (commandOption) commandOption();
  }
}

export default SettingsCarousel;
