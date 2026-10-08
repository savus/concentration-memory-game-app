import type { Card } from "../class/Card.js";
import { Player } from "../class/Player.js";

const handlePlayerChoice = (choice: Card, player: Player) => {
  if (player.choices.firstChoice === null) {
    player.setFirstChoice(choice);
  } else if (player.choices.secondChoice === null) {
    player.setSecondChoice(choice);
  }
};

const GameHandler = {
  handlePlayerChoice,
};

export default GameHandler;
