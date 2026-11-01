import API_REQUESTS from "./api.js";
import { allCards, allPokemonData, cardFactory, mainMenuScreen, memoryGameScreen, settingsScreen, } from "./app.js";
import { mainMenuActions, memoryGameActions, settingScreenActions, } from "./commandRegistries.js";
import { ACTIVE, DATA_ANIMATION, POKEMON_NAMES } from "./constants.js";
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
        if (element)
            element.addEventListener(`${transitionOrAnimation}end`, handleTransitionEnd, { once: true });
    });
};
export const displayGameScreenMessage = async (topText, bottomText) => {
    const topMessage = memoryGameScreen.ui.screenMessageContainer?.querySelector(".top-message");
    const bottomMessage = memoryGameScreen.ui.screenMessageContainer?.querySelector(".bottom-message");
    const bottomContainer = memoryGameScreen.ui.screenMessageContainer?.querySelector(".bottom-container");
    topMessage.innerText = topText;
    bottomMessage.innerText = bottomText;
    await waitForAnimation(bottomContainer, "animation", () => {
        memoryGameScreen.ui.screenMessageContainer?.setAttribute(DATA_ANIMATION, "scrollInOut");
    }, async () => {
        memoryGameScreen.ui.screenMessageContainer?.removeAttribute(DATA_ANIMATION);
        await wait(500);
    });
};
export const initializeGlobalSettings = async () => {
    ScreenSwapper.init(mainMenuScreen.screenTag);
    mainMenuScreen.init(mainMenuActions);
    memoryGameScreen.init(memoryGameActions);
    settingsScreen.init(settingScreenActions);
    await API_REQUESTS.fetchAndConvertAllPokemon(POKEMON_NAMES)
        .then((data) => {
        data.forEach((pokemon) => allPokemonData.push(pokemon));
    })
        .then(() => {
        cardFactory.createCardsAndAppend(allPokemonData, memoryGameScreen.ui.cardContainer);
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