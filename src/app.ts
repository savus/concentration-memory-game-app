import API_REQUESTS from "./api.js";
import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import {
  ANIMATION_DURATION,
  GLOBAL_ANIMATION_DUR,
  POKEMON_NAMES,
  SCREEN_MESSAGE_CONTAINER,
} from "./constants.js";
import type { TPokeAPI } from "./types.js";
import { displayGameScreenMessage } from "./utility.js";

const root = document.documentElement;

let allPokemonData: TPokeAPI[] = [];

export const screenMessageContainer = document.querySelector(
  SCREEN_MESSAGE_CONTAINER,
);

const playerPoints = document.querySelector(
  '[data-player="user"] .points',
)! as HTMLElement;

const computerPoints = document.querySelector(
  '[data-player="computer"] .points',
)! as HTMLElement;

export const userPointsDisplay = new PointsDisplay(playerPoints, "you");
export const computerPointsDisplay = new PointsDisplay(
  computerPoints,
  "computer",
);

console.log(userPointsDisplay, computerPointsDisplay);
const allCards: Card[] = [];

const cardFactory = new CardFactory();

const cardContainer = document.querySelector(".card-container")! as HTMLElement;

export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");

const initializeGlobalSettings = async () => {
  root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);

  await API_REQUESTS.fetchAndConvertAllPokemon(POKEMON_NAMES)
    .then((data) => {
      data.forEach((pokemon) => allPokemonData.push(pokemon));
    })
    .then(() => {
      cardFactory.createCardsAndAppend(allPokemonData, cardContainer, allCards);
    })
    .finally(() => {
      console.log(allCards);
    });

  return;
};

await initializeGlobalSettings();

document.addEventListener("keyup", async (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    await displayGameScreenMessage("test", "testing");
    console.log("pressed");
  }
});
