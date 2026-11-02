import type { TCommandRegistry } from "../types.js";
declare const syncSettingsToCSSCustomProps: () => void;
declare const GameConfig: {
    settings: {
        animationDur: number;
        screenMessageDur: number;
        computerChoicePause: number;
        tickDownPause: number;
    };
    speedCommands: TCommandRegistry;
    difficultyCommands: TCommandRegistry;
    syncSettingsToCSSCustomProps: typeof syncSettingsToCSSCustomProps;
};
export default GameConfig;
//# sourceMappingURL=GameConfig.d.ts.map