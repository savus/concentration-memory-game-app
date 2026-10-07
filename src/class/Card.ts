import { user } from "../app.js";
import { Dataset_Face_Position } from "../constants.js";
import GameHandler from "./GameHandler.js";

type TState = {
  facePosition: "up" | "down";
  isClickable: boolean;
  isFlippable: boolean;
};

export class Card {
  html: HTMLElement;
  state: TState = {
    facePosition: "up",
    isClickable: true,
    isFlippable: true,
  };

  constructor(cardHTML: HTMLElement) {
    this.html = cardHTML;
    this.html.addEventListener("click", this.onClick);
    this.flip(this.state.facePosition);
  }

  flipUp = () => {
    this.state.facePosition = "up";
    this.html.setAttribute(Dataset_Face_Position, "up");
  };

  flipDown = () => {
    this.state.facePosition = "down";
    this.html.setAttribute(Dataset_Face_Position, "down");
  };

  flip = (direction: "up" | "down" | "toggle") => {
    if (!this.state.isFlippable) return;
    switch (direction) {
      case "up":
        this.flipUp();
        break;
      case "down":
        this.flipDown();
        break;
      case "toggle":
        if (this.state.facePosition === "down") {
          this.flipUp();
        } else if (this.state.facePosition === "up") {
          this.flipDown();
        }
        break;
    }
  };

  onClick = () => {
    if (!this.state.isClickable) return;
    GameHandler.handlePlayerChoice(this, user);
  };
}
