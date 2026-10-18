import type { TPokeAPI } from "../types.js";
import { waitForAnimation } from "../utility.js";
import GameHandler from "../singleton/GameHandler.js";
import { DATASET_FACE_POSITION } from "../constants.js";
import { cardOnClickHandler } from "../clickEvents.js";

type TState = {
  facePosition: "up" | "down";
  isClickable: boolean;
  isFlippable: boolean;
};

export class Card {
  id: number;
  html: HTMLElement;
  stats: TPokeAPI;
  state: TState = {
    facePosition: "up",
    isClickable: true,
    isFlippable: true,
  };

  constructor(cardHTML: HTMLElement, pokemonData: TPokeAPI, id: number) {
    this.html = cardHTML;
    this.html.addEventListener("click", () => {
      cardOnClickHandler(this);
    });
    this.flip(this.state.facePosition);
    this.stats = pokemonData;
    this.id = id;
  }

  flipUp = () => {
    this.state.facePosition = "up";
    this.html.setAttribute(DATASET_FACE_POSITION, "up");
  };

  flipDown = () => {
    this.state.facePosition = "down";
    this.html.setAttribute(DATASET_FACE_POSITION, "down");
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

  select = async () => {
    return await waitForAnimation(this.html, "transition", () => {
      this.state.isClickable = false;
      this.flipUp();
    });
  };

  deselect = async () => {
    return await waitForAnimation(
      this.html,
      "transition",
      () => {
        this.flipDown();
      },
      () => {
        this.state.isClickable = true;
      },
    );
  };
}
