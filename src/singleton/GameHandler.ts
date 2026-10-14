import type { Card } from "../class/Card.js";
import { COMPUTER_CHOICE_PAUSE } from "../constants.js";
import { allCards, computer, user } from "../global.js";
import { displayGameScreenMessage, wait } from "../utility.js";

type TState = {
  phase: "choose-card" | "busy" | "computer's-turn" | "game-end";
};

const state: TState = {
  phase: "choose-card",
};

const handleUserChoice = async (choice: Card) => {
  if (state.phase === "game-end") return;
  if (state.phase === "choose-card") {
    if (user.choices.firstChoice === null) {
      user.setFirstChoice(choice);
      return;
    }
    state.phase = "busy";
    await user.setSecondChoice(choice);
    state.phase = "choose-card";

    determineNextPhase();
  }
};

const handleComputerChoice = async () => {
  const getRandomCard = () => {
    let randomCard: Card | null = null;
    while (randomCard === null) {
      let random = allCards[Math.floor(Math.random() * allCards.length)];
      if (random && random?.state.facePosition !== "up") randomCard = random;
    }
    return randomCard;
  };

  await computer.setFirstChoice(getRandomCard());
  await wait(COMPUTER_CHOICE_PAUSE);
  await computer.setSecondChoice(getRandomCard());

  determineNextPhase();
};

const areAllCardsUp = () =>
  allCards.every((card) => card.state.facePosition === "up");

const shouldGameEnd = () => {
  if (areAllCardsUp()) {
    displayGameScreenMessage("Game", "Over");
    return true;
  }
  return false;
};

const determineNextPhase = () => {
  if (shouldGameEnd()) {
    state.phase = "game-end";
    return;
  }

  if (state.phase === "choose-card") {
    state.phase = "computer's-turn";
    handleComputerChoice();
  } else if (state.phase === "computer's-turn") {
    state.phase = "choose-card";
  }
};

const GameHandler = {
  state,
  handleUserChoice,
};

export default GameHandler;
