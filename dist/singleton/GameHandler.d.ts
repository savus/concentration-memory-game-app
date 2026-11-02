import type { Card } from "../class/Card.js";
type TState = {
    phase: "choose-card" | "busy" | "computer's-turn" | "game-end";
};
declare const handleUserChoice: (choice: Card) => Promise<void>;
declare const GameHandler: {
    state: TState;
    handleUserChoice: typeof handleUserChoice;
};
export default GameHandler;
//# sourceMappingURL=GameHandler.d.ts.map