import type { Card } from "../class/Card.js";
type TState = {
    phase: "choose-card" | "busy" | "computer's-turn" | "game-end";
};
declare const GameHandler: {
    state: TState;
    handleUserChoice: (choice: Card) => Promise<void>;
};
export default GameHandler;
//# sourceMappingURL=GameHandler.d.ts.map