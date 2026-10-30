import type { TCommandRegistry } from "../types.js";
export declare class GameMode {
    modes: string[];
    index: number;
    textElement: HTMLElement;
    actionMap: TCommandRegistry;
    syncSettingsToCSS: (mode: string, actionMap: TCommandRegistry) => void;
    constructor(modes: string[], startIndex: number, element: HTMLElement, actionMap: TCommandRegistry, syncSettingsToCSS: (mode: string, actionMap: TCommandRegistry) => void);
    getCurrentMode: () => string | undefined;
    slideToNewMode: (modeDirection: "prev" | "next") => void;
    goToNewMode: (modeName: string) => void;
    updateModeUI: () => void;
}
//# sourceMappingURL=GameMode.d.ts.map