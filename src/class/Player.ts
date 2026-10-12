import { userPointsDisplay } from "../app.js";
import { ANIMATION_DURATION } from "../constants.js";
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
    await wait(ANIMATION_DURATION);
    this.resetChoices();
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
      userPointsDisplay.setAndAnimatePoints(1);
      await displayGameScreenMessage("Match!", "You got 1 point!");
    }
    this.choices.firstChoice = null;
    this.choices.secondChoice = null;
  };
}
