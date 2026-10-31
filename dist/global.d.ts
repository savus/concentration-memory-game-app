import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import Screen from "./class/Screen.js";
import type { TPokeAPI } from "./types.js";
export declare const root: HTMLElement;
export declare const mainMenuScreen: Screen;
export declare const memoryGameScreen: Screen;
export declare const settingsScreen: Screen;
export declare let allPokemonData: TPokeAPI[];
export declare const allCards: Card[];
export declare const userPointsDisplay: PointsDisplay;
export declare const computerPointsDisplay: PointsDisplay;
export declare const cardFactory: CardFactory;
export declare const user: Player;
export declare const computer: Player;
export declare let computerCheatMode: boolean;
//# sourceMappingURL=global.d.ts.map