import type { TUIRegistry } from "../types.js";
declare class OptionsCarousel {
    htmlTag: HTMLElement;
    ui: TUIRegistry;
    carouselOptions: string[];
    settingIndex: number;
    constructor(htmlTag: HTMLElement, carouselOptions: string[], startingIndex: number);
    getCurrentOption: () => string | undefined;
    updateModeUI: () => void;
    goToNewOption: (option: string) => void;
    handleCarouselChange(direction?: "next" | "prev"): void;
}
export default OptionsCarousel;
//# sourceMappingURL=OptionsCarousel.d.ts.map