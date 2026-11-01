import API_REQUESTS from "./api.js";
import {
  allCards,
  allPokemonData,
  cardFactory,
  mainMenuScreen,
  memoryGameScreen,
  settingsScreen,
} from "./app.js";
import {
  mainMenuActions,
  memoryGameActions,
  settingScreenActions,
} from "./commandRegistries.js";
import { ACTIVE, DATA_ANIMATION, POKEMON_NAMES } from "./constants.js";

import ScreenSwapper from "./singleton/ScreenSwapper.js";

export const wait = async (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve("finished");
    }, ms);
  });
};

export const waitForAnimation = async (
  element: HTMLElement | null,
  transitionOrAnimation: "transition" | "animation",
  beginAnimation: () => void = () => {},
  endAnimation: () => void = () => {},
): Promise<void> => {
  return new Promise((resolve) => {
    function handleTransitionEnd() {
      endAnimation();
      resolve();
    }

    beginAnimation();
    if (element)
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
  const topMessage = memoryGameScreen.ui.screenMessageContainer?.querySelector(
    ".top-message",
  )! as HTMLElement;
  const bottomMessage =
    memoryGameScreen.ui.screenMessageContainer?.querySelector(
      ".bottom-message",
    )! as HTMLElement;
  const bottomContainer =
    memoryGameScreen.ui.screenMessageContainer?.querySelector(
      ".bottom-container",
    )! as HTMLElement;

  topMessage.innerText = topText;
  bottomMessage.innerText = bottomText;

  await waitForAnimation(
    bottomContainer,
    "animation",
    () => {
      memoryGameScreen.ui.screenMessageContainer?.setAttribute(
        DATA_ANIMATION,
        "scrollInOut",
      );
    },
    async () => {
      memoryGameScreen.ui.screenMessageContainer?.removeAttribute(
        DATA_ANIMATION,
      );
      await wait(500);
    },
  );
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
      cardFactory.createCardsAndAppend(
        allPokemonData,
        memoryGameScreen.ui.cardContainer!,
      );
    })
    .finally(() => {
      console.log(allCards);
    });

  return;
};

export const fisherYatesShuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const setActive = (newElem: HTMLElement, selector: string) => {
  const activeElement = document.querySelector(`${selector}.${ACTIVE}`);
  if (activeElement) activeElement.classList.remove(`${ACTIVE}`);
  newElem.classList.add(ACTIVE);
};
