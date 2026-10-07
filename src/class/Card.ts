import { Dataset_Face_Position } from "../constants.js";

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
    console.log(this.state.facePosition);
    switch (direction) {
      case "up":
        this.flipUp();
        console.log(this.state.facePosition);
        break;
      case "down":
        this.flipDown();
        console.log(this.state.facePosition);
        break;
      case "toggle":
        if (this.state.facePosition === "down") {
          this.flipUp();
          console.log(this.state.facePosition);
        } else if (this.state.facePosition === "up") {
          this.flipDown();
          console.log(this.state.facePosition);
        }
        break;
    }
  };

  onClick = () => {
    if (!this.state.isClickable) return;
    this.flip("toggle");
  };
}
