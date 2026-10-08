import { computerPointsDisplay, userPointsDisplay } from "../app.js";
import { ANIMATION_DURATION } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";
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

  resetChoices = () => {
    if (!this.choicesMatched) {
      this.choices.firstChoice?.deselect();
      this.choices.secondChoice?.deselect();
    } else {
      if (this.type === "user") userPointsDisplay.displayAndTickDownPoints(1);
      else computerPointsDisplay.displayAndTickDownPoints(1);
    }
    this.choices.firstChoice = null;
    this.choices.secondChoice = null;
  };
}
