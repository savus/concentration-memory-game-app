import type { Card } from "./Card.js";
type TChoices = {
    firstChoice: Card | null;
    secondChoice: Card | null;
};
type TType = "user" | "computer";
export declare class Player {
    choices: TChoices;
    name: string;
    type: TType;
    choicesMatched: boolean;
    constructor(name: string, type: TType);
    setFirstChoice: (choice: Card) => Promise<void>;
    setSecondChoice: (choice: Card) => Promise<void>;
    doChoicesMatch: () => boolean;
    resetChoices: () => void;
}
export {};
//# sourceMappingURL=Player.d.ts.map