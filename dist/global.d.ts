import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import MemoryGameScreen from "./class/MemoryGameScreen.js";
import { Player } from "./class/Player.js";
import Screen from "./class/Screen.js";
import type { TPokeAPI } from "./types.js";
export declare const root: HTMLElement;
export declare const mainMenuScreen: Screen;
export declare const memoryGameScreen: MemoryGameScreen;
export declare const settingsScreen: Screen;
export declare let allPokemonData: TPokeAPI[];
export declare const allCards: Card[];
export declare const cardFactory: CardFactory;
export declare const user: Player;
export declare const computer: Player;
export declare let computerCheatMode: boolean;
//# sourceMappingURL=global.d.ts.map