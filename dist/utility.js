import { screenMessageContainer } from "./app.js";
import { Screen_Message_Container_Query } from "./constants.js";
export const wait = async (ms) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve("finished");
        }, ms);
    });
};
export const waitForAnimation = async (element, eventTargetMatch, transitionOrAnimation, beginAnimation = () => { }, endAnimation = () => { }) => {
    return new Promise((resolve) => {
        function handleTransitionEnd(event) {
            const target = event.target;
            if (target?.closest(eventTargetMatch)) {
                element.removeEventListener(`${transitionOrAnimation}end`, handleTransitionEnd);
                endAnimation();
                console.log("animation end");
                resolve();
            }
        }
        element.addEventListener(`${transitionOrAnimation}end`, handleTransitionEnd);
        beginAnimation();
    });
};
export const displayGameScreenMessage = async (topText, bottomText) => {
    const topMessage = screenMessageContainer?.querySelector(".top-message");
    const bottomMessage = screenMessageContainer?.querySelector(".bottom-message");
    const bottomContainer = screenMessageContainer?.querySelector(".bottom-container");
    topMessage.innerText = topText;
    bottomMessage.innerText = bottomText;
    await waitForAnimation(bottomContainer, Screen_Message_Container_Query, "animation", () => {
        screenMessageContainer?.setAttribute("data-animation", "scrollInOutFromLeft");
    });
    await wait(350);
    screenMessageContainer?.removeAttribute("data-animation");
};
//# sourceMappingURL=utility.js.map