export declare class GameMode {
    modes: string[];
    index: number;
    category: string;
    textElement: HTMLElement;
    settingsAction: (modeName: string) => void;
    constructor(modes: string[], startIndex: number, category: string, element: HTMLElement, settingsAction: (modeName: string) => void);
    getCurrentMode: () => string | undefined;
    slideToNewMode: (modeDirection: "prev" | "next") => void;
    updateModeUI: () => void;
}
//# sourceMappingURL=GameMode.d.ts.map