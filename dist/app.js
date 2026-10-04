import { API_REQUESTS } from "./api.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { ANIMATION_DURATION, Data_Anim_Dir_Left, Data_Anim_Dir_Right, GLOBAL_ANIMATION_DUR, Points_Display_Container_Class, } from "./constants.js";
const root = document.documentElement;
const userPointsDisplayContainer = document.querySelector(`${Points_Display_Container_Class}${Data_Anim_Dir_Left}`);
const computerPointsDisplayContainer = document.querySelector(`${Points_Display_Container_Class}${Data_Anim_Dir_Right}`);
const userPointsDisplay = new PointsDisplay(userPointsDisplayContainer, "You");
const computerPointsDisplay = new PointsDisplay(computerPointsDisplayContainer, "Computer");
const wait = async (ms) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve("finished");
        }, ms);
    });
};
const waitForAnimationEnd = async (element, eventTargetMatch, transitionOrAnimation, classToAdd) => {
    return new Promise((resolve) => {
        function handleTransitionEnd(event) {
            const target = event.target;
            if (target?.matches(eventTargetMatch)) {
                element.removeEventListener(`${transitionOrAnimation}end`, handleTransitionEnd);
                resolve();
            }
        }
        element.addEventListener(`${transitionOrAnimation}end`, handleTransitionEnd);
        element.classList.add(classToAdd);
    });
};
const initializeGlobalSettings = async () => {
    root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
};
initializeGlobalSettings();
API_REQUESTS.fetchData("pikachu").then((data) => {
    console.log(data);
});
//# sourceMappingURL=app.js.map