import API_REQUESTS from "./api.js";
import type { Card } from "./class/Card.js";
import { CardFactory } from "./class/CardFactory.js";
import PointsDisplay from "./class/PointsDisplay.js";
import {
  ANIMATION_DURATION,
  Data_Anim_Dir_Left,
  Data_Anim_Dir_Right,
  GLOBAL_ANIMATION_DUR,
  Points_Display_Container_Class,
  POKEMON_NAMES,
  POKEMON_NAMES_WRONG,
} from "./constants.js";
import type { TPokeAPI } from "./types.js";

const root = document.documentElement;

let allPokemonData: TPokeAPI[] = [];

const userPointsDisplayContainer = document.querySelector(
  `${Points_Display_Container_Class}${Data_Anim_Dir_Left}`,
)! as HTMLElement;

const computerPointsDisplayContainer = document.querySelector(
  `${Points_Display_Container_Class}${Data_Anim_Dir_Right}`,
)! as HTMLElement;

const userPointsDisplay = new PointsDisplay(userPointsDisplayContainer, "You");
const computerPointsDisplay = new PointsDisplay(
  computerPointsDisplayContainer,
  "Computer",
);

const allCards: Card[] = [];

const cardFactory = new CardFactory();

const cardContainer = document.querySelector(".card-container")! as HTMLElement;

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
