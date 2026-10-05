import API_REQUESTS from "./api.js";
import { CardFactory } from "./class/CardFactory.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { ANIMATION_DURATION, Data_Anim_Dir_Left, Data_Anim_Dir_Right, GLOBAL_ANIMATION_DUR, Points_Display_Container_Class, POKEMON_NAMES, POKEMON_NAMES_WRONG, } from "./constants.js";
const root = document.documentElement;
let allPokemonData = [];
const userPointsDisplayContainer = document.querySelector(`${Points_Display_Container_Class}${Data_Anim_Dir_Left}`);
const computerPointsDisplayContainer = document.querySelector(`${Points_Display_Container_Class}${Data_Anim_Dir_Right}`);
const userPointsDisplay = new PointsDisplay(userPointsDisplayContainer, "You");
const computerPointsDisplay = new PointsDisplay(computerPointsDisplayContainer, "Computer");
const allCards = [];
const cardFactory = new CardFactory();
const cardContainer = document.querySelector(".card-container");
const initializeGlobalSettings = async () => {
    root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
    await API_REQUESTS.fetchAndConvertAllPokemon(POKEMON_NAMES)
        .then((data) => {
        data.forEach((pokemon) => allPokemonData.push(pokemon));
    })
        .finally(() => {
        allPokemonData.forEach((pokemon) => {
            cardFactory.createCard(pokemon, cardContainer, allCards);
        });
    });
    return;
};
await initializeGlobalSettings();
const countDown = document.querySelector(".count-down");
//# sourceMappingURL=app.js.map