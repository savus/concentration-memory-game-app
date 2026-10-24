import type { Card } from "./class/Card.js";
import type { TCommandRegistry, TMenuUI } from "./types.js";
export declare function cardOnClickHandler(card: Card): void;
export declare function menuOnClickDelegation(ui: TMenuUI, e: MouseEvent, actionMap: TCommandRegistry): void;
export declare function handleNewGameClick(): void;
export declare function handleSettingsClick(): void;
export declare function onBackButtonClick(): void;
export declare function quitApplication(): void;
export declare function handleSpeedSliderClick(e: MouseEvent): void;
export declare function handleDifficultySliderClick(e: MouseEvent): void;
//# sourceMappingURL=clickEvents.d.ts.map