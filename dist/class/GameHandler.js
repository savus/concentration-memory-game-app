import { Player } from "./Player.js";
const user = new Player("you", "user");
const computer = new Player("computer", "computer");
const handlePlayerChoice = (choice, player) => {
    if (player.choices.firstChoice === null) {
        player.setFirstChoice(choice);
    }
    else if (player.choices.secondChoice === null) {
        player.setSecondChoice(choice);
    }
};
const GameHandler = {
    handlePlayerChoice,
};
export default GameHandler;
//# sourceMappingURL=GameHandler.js.map