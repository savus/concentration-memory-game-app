import type { TCommandRegistry } from "../types.js";
import OptionsCarousel from "./OptionsCarousel.js";
declare class SettingsCarousel extends OptionsCarousel {
    optionCommand: TCommandRegistry | ((...args: any[]) => void);
    constructor(htmlTag: HTMLElement, carouselOptions: string[], startingIndex: number, optionCommand: TCommandRegistry | ((...args: any[]) => void));
    handleCarouselChange(direction?: "next" | "prev"): void;
}
export default SettingsCarousel;
//# sourceMappingURL=SettingsCarousel.d.ts.map