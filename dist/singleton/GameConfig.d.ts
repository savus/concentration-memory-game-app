type TSpeedModes = "slow" | "medium" | "fast";
export declare const GameConfig: {
    ANIMATION_DURATION: number;
    SCREEN_MESSAGE_DURATION: number;
    COMPUTER_CHOICE_PAUSE: number;
    TICK_DOWN_PAUSE: number;
    setGameSpeed: (speed: string) => void;
    switchModes: (newMode: "prev" | "next") => void;
    getCurrentMode: () => string | undefined;
    setGameSpeedMode: (mode: TSpeedModes) => void;
};
export {};
//# sourceMappingURL=GameConfig.d.ts.map