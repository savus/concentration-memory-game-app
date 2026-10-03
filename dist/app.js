import { ANIMATION_DURATION, GLOBAL_ANIMATION_DUR, pointsDisplayContainerClass, } from "./constants.js";
const root = document.documentElement;
const userPointsDisplay = document.querySelector(`${pointsDisplayContainerClass}[data-anim-dir="left"]`);
const setUserPointsDisplay = (points) => {
    userPointsDisplay.innerText = `You: ${points} points`;
};
const userScoreTicker = userPointsDisplay.querySelector(".score-ticker");
const setUserScoreTicker = (points) => (userScoreTicker.innerText = `+ ${points} points!`);
const computerPointsDisplay = document.querySelector(`${pointsDisplayContainerClass}[data-anim-dir="right"]`);
const setComputerPointsDisplay = (points) => {
    computerPointsDisplay.innerText = `Computer: ${points} points`;
};
const computerScoreTicker = computerPointsDisplay.querySelector(".score-ticker");
const setComputerScoreTicker = (points) => (userScoreTicker.innerText = `+ ${points} points!`);
const countDown = document.querySelector(".count-down");
console.log(countDown);
const wait = async (ms) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve("finished");
        }, ms);
    });
};
const animateElement = async (element) => {
    return new Promise((resolve) => {
        function handleTransitionEnd(event) {
            const target = event.target;
            if (target?.matches(".score-ticker")) {
                element.removeEventListener("transitionend", handleTransitionEnd);
                resolve();
            }
        }
        element.addEventListener("transitionend", handleTransitionEnd);
        element.classList.add("show");
    });
};
const tickPoints = (scoreTicker, scoreReceiver) => { };
const initializeGlobalSettings = async () => {
    root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
};
initializeGlobalSettings();
await wait(500);
countDown.innerText = "3";
await wait(1000);
countDown.innerText = "2";
await wait(1000);
countDown.innerText = "1";
await wait(1000);
await animateElement(userPointsDisplay);
userPointsDisplay.classList.remove("show");
//# sourceMappingURL=app.js.map