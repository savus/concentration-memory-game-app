import API_REQUESTS from "./api.js";
import { ACTIVE, DATA_ANIMATION, POKEMON_NAMES } from "./constants.js";
import { allCards, allPokemonData, cardFactory } from "./global.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";
export const wait = async (ms) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve("finished");
        }, ms);
    });
};
export const waitForAnimation = async (element, transitionOrAnimation, beginAnimation = () => { }, endAnimation = () => { }) => {
    return new Promise((resolve) => {
        function handleTransitionEnd() {
            endAnimation();
            resolve();
        }
        beginAnimation();
        element.addEventListener(`${transitionOrAnimation}end`, handleTransitionEnd, { once: true });
    });
};
export const displayGameScreenMessage = async (topText, bottomText) => {
    const topMessage = GameScreenUI.screenMessageContainer?.querySelector(".top-message");
    const bottomMessage = GameScreenUI.screenMessageContainer?.querySelector(".bottom-message");
    const bottomContainer = GameScreenUI.screenMessageContainer?.querySelector(".bottom-container");
    topMessage.innerText = topText;
    bottomMessage.innerText = bottomText;
    await waitForAnimation(bottomContainer, "animation", () => {
        GameScreenUI.screenMessageContainer?.setAttribute(DATA_ANIMATION, "scrollInOut");
    }, async () => {
        GameScreenUI.screenMessageContainer?.removeAttribute(DATA_ANIMATION);
        await wait(500);
    });
};
export const initializeGlobalSettings = async () => {
    ScreenSwapper.init(document.querySelector(".screen.main-menu"));
    await API_REQUESTS.fetchAndConvertAllPokemon(POKEMON_NAMES)
        .then((data) => {
        data.forEach((pokemon) => allPokemonData.push(pokemon));
    })
        .then(() => {
        cardFactory.createCardsAndAppend(allPokemonData, GameScreenUI.cardContainer);
    })
        .finally(() => {
        console.log(allCards);
    });
    return;
};
export const fisherYatesShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
export const setActive = (newElem, selector) => {
    const activeElement = document.querySelector(`${selector}.${ACTIVE}`);
    if (activeElement)
        activeElement.classList.remove(`${ACTIVE}`);
    newElem.classList.add(ACTIVE);
};
//# sourceMappingURL=utility.js.map