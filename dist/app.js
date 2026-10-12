import API_REQUESTS from "./api.js";
import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { ANIMATION_DURATION, GLOBAL_ANIMATION_DUR, POINTS_DELAY, POINTS_DELAY_MODIFIER, POKEMON_NAMES, SCREEN_MESSAGE_CONTAINER, } from "./constants.js";
import { displayGameScreenMessage } from "./utility.js";
const root = document.documentElement;
let allPokemonData = [];
export const screenMessageContainer = document.querySelector(SCREEN_MESSAGE_CONTAINER);
const playerPoints = document.querySelector('[data-player="user"] .points');
const computerPoints = document.querySelector('[data-player="computer"] .points');
export const userPointsDisplay = new PointsDisplay(playerPoints, "you");
export const computerPointsDisplay = new PointsDisplay(computerPoints, "computer");
export const allCards = [];
const cardFactory = new CardFactory();
const cardContainer = document.querySelector(".card-container");
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
const initializeGlobalSettings = async () => {
    root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
    root.style.setProperty(POINTS_DELAY_MODIFIER, `${POINTS_DELAY}`);
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
//# sourceMappingURL=app.js.map