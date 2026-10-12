import type { Card } from "../class/Card.js";
import { Player } from "../class/Player.js";
declare const handleUserChoice: (choice: Card, user: Player, computer: Player) => Promise<void>;
declare const GameHandler: {
    handleUserChoice: typeof handleUserChoice;
};
export default GameHandler;
//# sourceMappingURL=GameHandler.d.ts.map