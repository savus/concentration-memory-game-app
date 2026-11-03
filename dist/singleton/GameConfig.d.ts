import type { TCommandRegistry } from "../types.js";
declare const difficultyCommand: (mode: string) => void;
declare const syncSettingsToCSSCustomProps: () => void;
declare const GameConfig: {
    settings: {
        cssProps: {
            animationDur: number;
            screenMessageDur: number;
        };
        computerChoicePause: number;
        tickDownPause: number;
        gameDifficulty: string;
    };
    speedModes: string[];
    speedCommands: TCommandRegistry;
    difficultyModes: string[];
    themeModes: string[];
    themeCommands: TCommandRegistry;
    difficultyCommand: typeof difficultyCommand;
    syncSettingsToCSSCustomProps: typeof syncSettingsToCSSCustomProps;
};
export default GameConfig;
//# sourceMappingURL=GameConfig.d.ts.map