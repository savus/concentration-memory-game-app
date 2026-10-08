import type { TPokeAPI } from "../types.js";
type TState = {
    facePosition: "up" | "down";
    isClickable: boolean;
    isFlippable: boolean;
};
export declare class Card {
    id: number;
    html: HTMLElement;
    stats: TPokeAPI;
    state: TState;
    constructor(cardHTML: HTMLElement, pokemonData: TPokeAPI, id: number);
    flipUp: () => void;
    flipDown: () => void;
    flip: (direction: "up" | "down" | "toggle") => void;
    select: () => Promise<void>;
    deselect: () => Promise<void>;
    onClick: () => void;
}
export {};
//# sourceMappingURL=Card.d.ts.map