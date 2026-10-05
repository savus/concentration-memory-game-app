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
            if (target?.matches(eventTargetMatch)) {
                element.removeEventListener(`${transitionOrAnimation}end`, handleTransitionEnd);
                endAnimation();
                resolve();
            }
        }
        element.addEventListener(`${transitionOrAnimation}end`, handleTransitionEnd);
        beginAnimation();
    });
};
//# sourceMappingURL=utility.js.map