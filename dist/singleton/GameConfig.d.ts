declare class GameMode {
    modes: string[];
    index: number;
    category: string;
    textElement: HTMLElement;
    executeSettings: (modeName: string) => void;
    constructor(modes: string[], startIndex: number, category: string, element: HTMLElement, executeSettings: (modeName: string) => void);
    getCurrentMode: () => string | undefined;
    slideToNewMode: (modeDirection: "prev" | "next") => void;
    updateModeUI: () => void;
}
export declare const GameConfig: {
    ANIMATION_DURATION: number;
    SCREEN_MESSAGE_DURATION: number;
    COMPUTER_CHOICE_PAUSE: number;
    TICK_DOWN_PAUSE: number;
    speed: GameMode;
    difficulty: GameMode;
};
export {};
//# sourceMappingURL=GameConfig.d.ts.map