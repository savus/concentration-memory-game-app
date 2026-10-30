import type { Card } from "./class/Card.js";
import type { GameMode } from "./class/GameMode.js";
import type { TCommandRegistry, TMenuUI } from "./types.js";
export declare function cardOnClickHandler(card: Card): void;
export declare function menuOnClickDelegation(ui: TMenuUI, e: MouseEvent, actionMap: TCommandRegistry): void;
export declare function startNewGame(): void;
export declare function goToSettingsMenu(): void;
export declare function onBackButtonClick(): void;
export declare function quitApplication(): void;
export declare function handleSliderClick(e: MouseEvent, gameMode: GameMode): void;
export declare function handleDifficultySliderClick(e: MouseEvent): void;
//# sourceMappingURL=clickEvents.d.ts.map