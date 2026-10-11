import API_REQUESTS from "./api.js";
import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { ANIMATION_DURATION, Data_Anim_Dir_Left, Data_Anim_Dir_Right, GLOBAL_ANIMATION_DUR, Points_Display_Container_Class, POKEMON_NAMES, Screen_Message_Container_Query, } from "./constants.js";
import { displayGameScreenMessage, wait } from "./utility.js";
const root = document.documentElement;
let allPokemonData = [];
export const screenMessageContainer = document.querySelector(Screen_Message_Container_Query);
const userPointsDisplayContainer = document.querySelector(`${Points_Display_Container_Class}${Data_Anim_Dir_Left}`);
const computerPointsDisplayContainer = document.querySelector(`${Points_Display_Container_Class}${Data_Anim_Dir_Right}`);
export const userPointsDisplay = new PointsDisplay(userPointsDisplayContainer, "You");
export const computerPointsDisplay = new PointsDisplay(computerPointsDisplayContainer, "Computer");
const allCards = [];
const cardFactory = new CardFactory();
const cardContainer = document.querySelector(".card-container");
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
    // await userPointsDisplay.displayAndTickDownPoints(100);
    // await wait(1000);
    // await computerPointsDisplay.displayAndTickDownPoints(1000);
    await displayGameScreenMessage("This is", "the first message");
    await userPointsDisplay.displayAndTickDownPoints(1);
    await displayGameScreenMessage("This is the", "second message");
    await userPointsDisplay.displayAndTickDownPoints(10);
    // computerPointsDisplay.displayAndTickDownPoints(5);
    // await wait(1000);
    // await displayGameScreenMessage("And finally", "this is the third message");
    // userPointsDisplay.displayAndTickDownPoints(100);
    // computerPointsDisplay.displayAndTickDownPoints(100);
});
//# sourceMappingURL=app.js.map