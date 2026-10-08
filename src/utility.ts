export const wait = async (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve("finished");
    }, ms);
  });
};

export const waitForAnimation = async (
  element: HTMLElement,
  eventTargetMatch: string,
  transitionOrAnimation: "transition" | "animation",
  beginAnimation: () => void = () => {},
  endAnimation: () => void = () => {},
): Promise<void> => {
  return new Promise((resolve) => {
    function handleTransitionEnd(event: Event) {
      const target = event.target as HTMLElement | null;
      if (target?.closest(eventTargetMatch)) {
        element.removeEventListener(
          `${transitionOrAnimation}end`,
          handleTransitionEnd,
        );
        endAnimation();
        console.log("animation end");
        resolve();
      }
    }

    element.addEventListener(
      `${transitionOrAnimation}end`,
      handleTransitionEnd,
    );
    beginAnimation();
  });
};
