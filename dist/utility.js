import { screenMessageContainer } from "./app.js";
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
export const displayGameScreenMessage = async (topText, bottomText, pointsDisplay = null, pointsToAdd = 0) => {
    const topMessage = screenMessageContainer?.querySelector(".top-message");
    const bottomMessage = screenMessageContainer?.querySelector(".bottom-message");
    const bottomContainer = screenMessageContainer?.querySelector(".bottom-container");
    topMessage.innerText = topText;
    bottomMessage.innerText = bottomText;
    await waitForAnimation(bottomContainer, "animation", () => {
        screenMessageContainer?.setAttribute("data-animation", "scrollInOutFromLeft");
    }, () => {
        screenMessageContainer?.removeAttribute("data-animation");
    });
};
//# sourceMappingURL=utility.js.map