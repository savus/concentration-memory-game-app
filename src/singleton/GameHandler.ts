import { allCards, computer } from "../app.js";
import type { Card } from "../class/Card.js";
import { Player } from "../class/Player.js";
import { wait } from "../utility.js";

type TState = {
  phase: "choose-card" | "busy" | "computer's-turn" | "game-end";
};

const state: TState = {
  phase: "choose-card",
};

const handleUserChoice = async (
  choice: Card,
  user: Player,
  computer: Player,
  cardsArray: Card[],
) => {
  if (state.phase === "choose-card") {
    if (user.choices.firstChoice === null) {
      user.setFirstChoice(choice);
      return;
    }
    state.phase = "busy";
    await user.setSecondChoice(choice);
    await wait(1000);
  } else if (state.phase === "computer's-turn") {
    await handleComputerChoice(cardsArray, computer);
  }
  if (shouldGameEnd(cardsArray)) {
    state.phase = "game-end";
    return;
  }
  if (state.phase === "computer's-turn") {
    state.phase = "choose-card";
    return;
  }
  state.phase = "choose-card";
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

  await computer.setFirstChoice(getRandomCard());
  await wait(3000);
  await computer.setSecondChoice(getRandomCard());
};

const areAllCardsUp = (cardsArray: Card[]) =>
  cardsArray.every((card) => card.state.facePosition === "up");

const shouldGameEnd = (cardsArray: Card[]) => areAllCardsUp(cardsArray);

const GameHandler = {
  handleUserChoice,
};

export default GameHandler;
