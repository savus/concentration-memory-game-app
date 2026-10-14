import API_REQUESTS from "./api.js";
import { ANIM_DURATION, ANIM_DURATION_VALUE, ANIMATION_DURATION, DATA_ANIMATION, GLOBAL_ANIMATION_DUR, POINTS_DELAY, POINTS_DELAY_MODIFIER, POKEMON_NAMES, SCREEN_MESSAGE_DURATION, SCREEN_MESSAGE_PROP, } from "./constants.js";
import { allCards, allPokemonData, cardFactory, computer, gameScreenUI, root, user, } from "./global.js";
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
            console.log("animation end");
            resolve();
        }
        beginAnimation();
        element.addEventListener(`${transitionOrAnimation}end`, handleTransitionEnd, { once: true });
    });
};
export const displayGameScreenMessage = async (topText, bottomText) => {
    const topMessage = gameScreenUI.screenMessageContainer?.querySelector(".top-message");
    const bottomMessage = gameScreenUI.screenMessageContainer?.querySelector(".bottom-message");
    const bottomContainer = gameScreenUI.screenMessageContainer?.querySelector(".bottom-container");
    topMessage.innerText = topText;
    bottomMessage.innerText = bottomText;
    await waitForAnimation(bottomContainer, "animation", () => {
        gameScreenUI.screenMessageContainer?.setAttribute(DATA_ANIMATION, "scrollInOut");
    }, () => {
        gameScreenUI.screenMessageContainer?.removeAttribute(DATA_ANIMATION);
    });
};
export const initializeGlobalSettings = async () => {
    root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
    root.style.setProperty(POINTS_DELAY_MODIFIER, `${POINTS_DELAY}`);
    root.style.setProperty(SCREEN_MESSAGE_PROP, `${SCREEN_MESSAGE_DURATION}ms`);
    root.style.setProperty(ANIM_DURATION, `${ANIM_DURATION_VALUE}ms`);
    await API_REQUESTS.fetchAndConvertAllPokemon(POKEMON_NAMES)
        .then((data) => {
        data.forEach((pokemon) => allPokemonData.push(pokemon));
    })
        .then(() => {
        cardFactory.createCardsAndAppend(allPokemonData, gameScreenUI.cardContainer);
    })
        .finally(() => {
        console.log(allCards);
    });
    return;
};
//# sourceMappingURL=utility.js.map