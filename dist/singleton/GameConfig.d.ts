import { GameMode } from "../class/GameMode.js";
import type { TCommandRegistry } from "../types.js";
export declare const GameConfig: {
    settings: {
        animationDur: number;
        screenMessageDur: number;
        computerChoicePause: number;
        tickDownPause: number;
    };
    syncSettingsToCSS: (mode: string, actionMap: TCommandRegistry) => void;
    speed: GameMode;
    difficulty: GameMode;
};
//# sourceMappingURL=GameConfig.d.ts.map