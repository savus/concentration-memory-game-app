import { GameMode } from "../class/GameMode.js";
import type { TCommandRegistry } from "../types.js";
declare const syncSettingsToCSS: (mode: string, actionMap: TCommandRegistry) => void;
export declare const GameConfig: {
    settings: {
        animationDur: number;
        screenMessageDur: number;
        computerChoicePause: number;
        tickDownPause: number;
    };
    syncSettingsToCSS: typeof syncSettingsToCSS;
    speed: GameMode;
    difficulty: GameMode;
    colorTheme: GameMode;
};
export {};
//# sourceMappingURL=GameConfig.d.ts.map