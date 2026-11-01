import { memoryGameScreen } from "../global.js";
import { displayGameScreenMessage, wait } from "../utility.js";
import type { Card } from "./Card.js";

type TChoices = {
  firstChoice: Card | null;
  secondChoice: Card | null;
};

type TType = "user" | "computer";

export class Player {
  choices: TChoices = {
    firstChoice: null,
    secondChoice: null,
  };

  name: string;
  type: TType;
  choicesMatched = false;

  constructor(name: string, type: TType) {
    this.name = name;
    this.type = type;
  }

  setFirstChoice = async (choice: Card) => {
    this.choices.firstChoice = choice;
    choice.select();
  };

  setSecondChoice = async (choice: Card) => {
    this.choices.secondChoice = choice;
    choice.select();
    this.choicesMatched = this.doChoicesMatch();
    await wait(500);
    await this.resetChoices();
  };

  doChoicesMatch = () => {
    const { name: firstName } = this.choices.firstChoice?.stats!;
    const { name: secondName } = this.choices.secondChoice?.stats!;
    return firstName === secondName;
  };

  resetChoices = async () => {
    if (!this.choicesMatched) {
      await displayGameScreenMessage("Oops!", "These two did not match!");
      this.choices.firstChoice?.deselect();
      this.choices.secondChoice?.deselect();
    } else {
      let gameMessage;
      if (this.type === "user") {
        gameMessage = "You got 1 point!";
        memoryGameScreen.userPointsDisplay.setAndAnimatePoints(1);
      } else {
        gameMessage = "The computer got 1";
        memoryGameScreen.computerPointsDisplay.setAndAnimatePoints(1);
      }
      await displayGameScreenMessage("Match!", gameMessage);
      await wait(500);
    }
    this.choices.firstChoice = null;
    this.choices.secondChoice = null;
  };
}
