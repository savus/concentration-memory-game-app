import API_REQUESTS from "./api.js";
import { allCards, allPokemonData, cardFactory, mainMenuScreen, memoryGameScreen, root, settingsScreen, } from "./app.js";
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
export const cacheElements = (screenTag, elementRegistry) => {
    const uiElements = screenTag.querySelectorAll("[data-ui]");
    uiElements.forEach((element) => {
        const uiDataset = element.dataset.ui;
        const camelCase = uiDataset?.replace(/-([a-z])/g, (g) => g[1]?.toUpperCase() ?? "");
        if (camelCase)
            elementRegistry[camelCase] = element;
    });
};
export const camelToKebab = (str) => str.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
export const quitApplication = () => {
    document.body.innerText = "";
};
export const changeTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    console.log(root.dataset.theme);
};
// export const getAllCustomProperties = () => {
//   const customProps = [];
//   // Loop through all stylesheets on the page
//   Array.from(document.styleSheets).forEach((sheet) => {
//     try {
//       // Loop through all CSS rules within the stylesheet
//       Array.from(sheet.cssRules || sheet.rules).forEach((rule) => {
//         // Ensure the rule contains style declarations (rule type 1 / CSSStyleRule)
//         if (rule.style) {
//           Array.from(rule.style).forEach((prop) => {
//             // Check if the property starts with '--' and avoid duplicates
//             if (prop.startsWith("--") && !customProps.includes(prop)) {
//               customProps.push(prop);
//             }
//           });
//         }
//       });
//     } catch (e) {
//       console.warn(
//         `Could not read stylesheet from ${sheet.href}: Security restrictions (CORS) may apply.`,
//       );
//     }
//   });
//   return customProps;
// };
// export const getComputedValues = () => {
//   const element = document.documentElement; // or your specific element
//   const computedStyles = window.getComputedStyle(element);
//   const variablesWithValues = getAllCustomProperties().reduce((acc, prop) => {
//     acc[prop] = computedStyles.getPropertyValue(prop).trim();
//     return acc;
//   }, {});
//   console.log(variablesWithValues);
// };
//# sourceMappingURL=utility.js.map