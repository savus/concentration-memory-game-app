import { allCards, computer } from "../app.js";
import type { Card } from "../class/Card.js";
import { Player } from "../class/Player.js";
import { wait } from "../utility.js";

type TState = {
  phase: "choose-card" | "waiting" | "computer's-turn";
};
const state: TState = {
  phase: "choose-card",
};

const handleUserChoice = async (
  choice: Card,
  user: Player,
  computer: Player,
) => {
  if (state.phase !== "choose-card") return;
  if (user.choices.firstChoice === null) {
    user.setFirstChoice(choice);
  } else if (user.choices.secondChoice === null) {
    await user.setSecondChoice(choice);
    // handleComputerChoice(allCards, computer);
  }
};

const handleComputerChoice = async (cardsArray: Card[], computer: Player) => {
  const getRandomCard = () => {
    let randomCard: Card | null = null;
    while (randomCard === null) {
      let random = cardsArray[Math.floor(Math.random() * cardsArray.length)];
      if (random && random?.state.facePosition !== "up") randomCard = random;
    }
    return randomCard;
  };

  computer.setFirstChoice(getRandomCard());
  await wait(3000);
  computer.setSecondChoice(getRandomCard());
};

const GameHandler = {
  handleUserChoice,
};

export default GameHandler;
