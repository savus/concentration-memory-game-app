import { screenMessageContainer } from "./app.js";
import type { Player } from "./class/Player.js";
import type PointsDisplay from "./class/PointsDisplay.js";

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
      console.log("animation end");
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
  pointsDisplay: PointsDisplay | null = null,
  pointsToAdd: number = 0,
) => {
  const topMessage = screenMessageContainer?.querySelector(
    ".top-message",
  )! as HTMLElement;
  const bottomMessage = screenMessageContainer?.querySelector(
    ".bottom-message",
  )! as HTMLElement;
  const bottomContainer = screenMessageContainer?.querySelector(
    ".bottom-container",
  )! as HTMLElement;

  topMessage.innerText = topText;
  bottomMessage.innerText = bottomText;

  await waitForAnimation(
    bottomContainer,
    "animation",
    () => {
      screenMessageContainer?.setAttribute(
        "data-animation",
        "scrollInOutFromLeft",
      );
    },
    () => {
      screenMessageContainer?.removeAttribute("data-animation");
    },
  );
};
