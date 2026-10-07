import { waitForAnimation } from "../utility.js";
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
    await waitForAnimation(choice.html, ".card", "transition", () => {
      choice.flipUp();
    });
  };

  setSecondChoice = async (choice: Card) => {
    this.choices.secondChoice = choice;
  };
}
