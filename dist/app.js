import { ANIMATION_DURATION, GLOBAL_ANIMATION_DUR, pointsDisplayContainerClass, } from "./constants.js";
const root = document.documentElement;
const userPointsDisplayContainer = document.querySelector(`${pointsDisplayContainerClass}[data-anim-dir="left"]`);
const computerPointsDisplayContainer = document.querySelector(`${pointsDisplayContainerClass}[data-anim-dir="right"]`);
const setPointsDisplay = (points, parentContainer) => {
    const pointsDisplay = parentContainer.querySelector(".points-display");
    const player = parentContainer === userPointsDisplayContainer ? "You: " : "Computer: ";
    pointsDisplay.innerText = `${player} ${points} points!`;
};
const setScoreTicker = (points, parentContainer) => {
    const scoreTicker = parentContainer.querySelector(".score-ticker");
    scoreTicker.innerText = `+ ${points} points!`;
};
const setPointsAndTicker = (points, parentContainer) => {
    setPointsDisplay(points, parentContainer);
    setScoreTicker(points, parentContainer);
};
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
const tickPoints = async (receiver, previousPoints, newPoints) => {
    while (newPoints > 0) {
        previousPoints++;
        newPoints--;
        setPointsDisplay(previousPoints, receiver);
        setScoreTicker(newPoints, receiver);
        await wait(10);
    }
    return;
};
const initializeGlobalSettings = async () => {
    root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
};
initializeGlobalSettings();
let userPoints = 30;
let computerPoints = 100;
setPointsDisplay(userPoints, userPointsDisplayContainer);
setPointsDisplay(computerPoints, computerPointsDisplayContainer);
await wait(1000);
await waitForAnimationEnd(userPointsDisplayContainer, ".score-ticker", "transition", "show");
await tickPoints(userPointsDisplayContainer, userPoints, 500);
userPointsDisplayContainer.classList.remove("show");
await wait(1000);
await waitForAnimationEnd(computerPointsDisplayContainer, ".score-ticker", "transition", "show");
await tickPoints(computerPointsDisplayContainer, computerPoints, 1000);
computerPointsDisplayContainer.classList.remove("show");
//# sourceMappingURL=app.js.map