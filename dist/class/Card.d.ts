type TState = {
    facePosition: "up" | "down";
    isClickable: boolean;
    isFlippable: boolean;
};
export declare class Card {
    html: HTMLElement;
    state: TState;
    constructor(cardHTML: HTMLElement);
    flipUp: () => void;
    flipDown: () => void;
    flip: (direction: "up" | "down" | "toggle") => void;
    onClick: () => void;
}
export {};
//# sourceMappingURL=Card.d.ts.map