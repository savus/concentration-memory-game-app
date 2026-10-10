import { screenMessageContainer } from "./app.js";
import { Screen_Message_Container_Query } from "./constants.js";

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

export const displayGameScreenMessage = async (
  topText: string,
  bottomText: string,
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
    Screen_Message_Container_Query,
    "animation",
    () => {
      screenMessageContainer?.setAttribute(
        "data-animation",
        "scrollInOutFromLeft",
      );
    },
  );

  await wait(350);
  screenMessageContainer?.removeAttribute("data-animation");
};
