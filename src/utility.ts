import API_REQUESTS from "./api.js";
import { DATA_ANIMATION, POKEMON_NAMES } from "./constants.js";
import {
  allCards,
  allPokemonData,
  cardFactory,
  gameConfig,
  gameScreenUI,
  root,
} from "./global.js";

export const wait = async (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve("finished");
    }, ms);
  });
};

export const waitForAnimation = async (
  element: HTMLElement,
  transitionOrAnimation: "transition" | "animation",
  beginAnimation: () => void = () => {},
  endAnimation: () => void = () => {},
): Promise<void> => {
  return new Promise((resolve) => {
    function handleTransitionEnd() {
      endAnimation();
      console.log("animation end");
      resolve();
    }

    beginAnimation();
    element.addEventListener(
      `${transitionOrAnimation}end`,
      handleTransitionEnd,
      { once: true },
    );
  });
};

export const displayGameScreenMessage = async (
  topText: string,
  bottomText: string,
) => {
  const topMessage = gameScreenUI.screenMessageContainer?.querySelector(
    ".top-message",
  )! as HTMLElement;
  const bottomMessage = gameScreenUI.screenMessageContainer?.querySelector(
    ".bottom-message",
  )! as HTMLElement;
  const bottomContainer = gameScreenUI.screenMessageContainer?.querySelector(
    ".bottom-container",
  )! as HTMLElement;

  topMessage.innerText = topText;
  bottomMessage.innerText = bottomText;

  await waitForAnimation(
    bottomContainer,
    "animation",
    () => {
      gameScreenUI.screenMessageContainer?.setAttribute(
        DATA_ANIMATION,
        "scrollInOut",
      );
    },
    () => {
      gameScreenUI.screenMessageContainer?.removeAttribute(DATA_ANIMATION);
    },
  );
};

export const initializeGlobalSettings = async () => {
  gameConfig.setGameSpeed("fast");

  await API_REQUESTS.fetchAndConvertAllPokemon(POKEMON_NAMES)
    .then((data) => {
      data.forEach((pokemon) => allPokemonData.push(pokemon));
    })
    .then(() => {
      cardFactory.createCardsAndAppend(
        allPokemonData,
        gameScreenUI.cardContainer,
      );
    })
    .finally(() => {
      console.log(allCards);
    });

  return;
};
