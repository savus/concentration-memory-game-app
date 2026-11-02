import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
import type { TPokeAPI, TUIRegistry } from "./types.js";
import SettingsScreen from "./class/SettingsScreen.js";
export declare const root: HTMLElement;
export declare const mainMenuScreen: Screen;
export declare const memoryGameScreen: MemoryGameScreen;
export declare const settingsScreen: SettingsScreen;
export declare let allPokemonData: TPokeAPI[];
export declare const allCards: Card[];
export declare const cardFactory: CardFactory;
export declare const user: Player;
export declare const computer: Player;
export declare let computerCheatMode: boolean;
export declare class OptionCarousel {
    htmlTag: HTMLElement;
    ui: TUIRegistry;
    carouselOptions: string[];
    settingIndex: number;
    constructor(htmlTag: HTMLElement, carouselOptions: string[], startingIndex: number);
    getCurrentOption: () => string | undefined;
    updateModeUI: () => void;
    goToNewOption: (option: string) => void;
    handleCarouselChange: (direction?: "next" | "prev") => void;
}
export declare const speedCarousel: OptionCarousel;
export declare const difficultyCarousel: OptionCarousel;
export declare const colorThemeCarousel: OptionCarousel;
//# sourceMappingURL=app.d.ts.map