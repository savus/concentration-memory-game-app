import API_REQUESTS from "./api.js";
import { ACTIVE, DATA_ANIMATION, POKEMON_NAMES } from "./constants.js";
import { allCards, allPokemonData, cardFactory, mainMenuUI } from "./global.js";
import GameScreenUI from "./singleton/GameScreenUI.js";
import ScreenSwapper from "./singleton/ScreenSwapper.js";

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
  const topMessage = GameScreenUI.screenMessageContainer?.querySelector(
    ".top-message",
  )! as HTMLElement;
  const bottomMessage = GameScreenUI.screenMessageContainer?.querySelector(
    ".bottom-message",
  )! as HTMLElement;
  const bottomContainer = GameScreenUI.screenMessageContainer?.querySelector(
    ".bottom-container",
  )! as HTMLElement;

  topMessage.innerText = topText;
  bottomMessage.innerText = bottomText;

  await waitForAnimation(
    bottomContainer,
    "animation",
    () => {
      GameScreenUI.screenMessageContainer?.setAttribute(
        DATA_ANIMATION,
        "scrollInOut",
      );
    },
    async () => {
      GameScreenUI.screenMessageContainer?.removeAttribute(DATA_ANIMATION);
      await wait(500);
    },
  );
};

export const initializeGlobalSettings = async () => {
  // SettingsMenuUI.init();
  ScreenSwapper.init(mainMenuUI.menu);
  await API_REQUESTS.fetchAndConvertAllPokemon(POKEMON_NAMES)
    .then((data) => {
      data.forEach((pokemon) => allPokemonData.push(pokemon));
    })
    .then(() => {
      cardFactory.createCardsAndAppend(
        allPokemonData,
        GameScreenUI.cardContainer,
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
