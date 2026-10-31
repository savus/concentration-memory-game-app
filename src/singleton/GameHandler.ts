import type { Card } from "../class/Card.js";
import {
  allCards,
  computer,
  computerPointsDisplay,
  user,
  userPointsDisplay,
} from "../global.js";
import { displayGameScreenMessage, wait } from "../utility.js";
import GameConfig from "./GameConfig.js";

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

    await determineNextPhase();
  }
};

const handleComputerChoice = async () => {
  const getRandomCard = () => {
    const faceDownCards = allCards.filter(
      (card) => card.state.facePosition === "down",
    );
    let randomCard =
      faceDownCards[Math.floor(Math.random() * faceDownCards.length)]!;
    return randomCard;
  };

  await computer.setFirstChoice(getRandomCard());
  await wait(GameConfig.settings.computerChoicePause);
  await computer.setSecondChoice(getRandomCard());

  await determineNextPhase();
  await wait(500);
};

const areAllCardsUp = () =>
  allCards.every((card) => card.state.facePosition === "up");

const shouldGameEnd = () => {
  if (areAllCardsUp()) {
    return true;
  }
  return false;
};

const determineNextPhase = async () => {
  if (shouldGameEnd()) {
    state.phase = "game-end";
    await determineGameWinner();
    await wait(500);
    return;
  }

  if (state.phase === "choose-card") {
    state.phase = "computer's-turn";
    await handleComputerChoice();
  } else if (state.phase === "computer's-turn") {
    state.phase = "choose-card";
  }
};

const determineGameWinner = async () => {
  const gameIsDraw =
    userPointsDisplay.currentPoints === computerPointsDisplay.currentPoints;
  const userWon =
    userPointsDisplay.currentPoints > computerPointsDisplay.currentPoints;

  console.log(
    userPointsDisplay.currentPoints,
    computerPointsDisplay.currentPoints,
  );

  if (gameIsDraw) {
    await displayGameScreenMessage("Game", "Is a draw!");
    return;
  }

  if (userWon) {
    console.log("you won");
    await displayGameScreenMessage("You", "Won!");
    return;
  } else {
    console.log("you lose");
    await displayGameScreenMessage("Computer", "Won!");
    return;
  }
};

const GameHandler = {
  state,
  handleUserChoice,
};

export default GameHandler;
