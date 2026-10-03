import {
  ANIMATION_DURATION,
  GLOBAL_ANIMATION_DUR,
  pointsDisplayContainerClass,
} from "./constants.js";

const root = document.documentElement;

const userPointsDisplayContainer = document.querySelector(
  `${pointsDisplayContainerClass}[data-anim-dir="left"]`,
)! as HTMLElement;

const computerPointsDisplayContainer = document.querySelector(
  `${pointsDisplayContainerClass}[data-anim-dir="right"]`,
)! as HTMLElement;

const setPointsDisplay = (points: number, parentContainer: HTMLElement) => {
  const pointsDisplay = parentContainer.querySelector(
    ".points-display",
  )! as HTMLElement;
  const player =
    parentContainer === userPointsDisplayContainer ? "You: " : "Computer: ";
  pointsDisplay.innerText = `${player} ${points} points!`;
};

const setScoreTicker = (points: number, parentContainer: HTMLElement) => {
  const scoreTicker = parentContainer.querySelector(
    ".score-ticker",
  )! as HTMLElement;
  scoreTicker.innerText = `+ ${points} points!`;
};

const setPointsAndTicker = (points: number, parentContainer: HTMLElement) => {
  setPointsDisplay(points, parentContainer);
  setScoreTicker(points, parentContainer);
};

const wait = async (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve("finished");
    }, ms);
  });
};

const waitForAnimationEnd = async (
  element: HTMLElement,
  eventTargetMatch: string,
  transitionOrAnimation: "transition" | "animation",
  classToAdd: string,
): Promise<void> => {
  return new Promise((resolve) => {
    function handleTransitionEnd(event: Event) {
      const target = event.target as HTMLElement | null;
      if (target?.matches(eventTargetMatch)) {
        element.removeEventListener(
          `${transitionOrAnimation}end`,
          handleTransitionEnd,
        );
        resolve();
      }
    }

    element.addEventListener(
      `${transitionOrAnimation}end`,
      handleTransitionEnd,
    );
    element.classList.add(classToAdd);
  });
};

const tickPoints = async (
  receiver: HTMLElement,
  previousPoints: number,
  newPoints: number,
) => {
  while (newPoints > 0) {
    previousPoints++;
    newPoints--;
    setPointsDisplay(previousPoints, receiver);
    setScoreTicker(newPoints, receiver);
    await wait(10);
  }
  return;
};

type scoreTracker = {
  element: HTMLElement;
  points: number;
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
await waitForAnimationEnd(
  userPointsDisplayContainer,
  ".score-ticker",
  "transition",
  "show",
);
await tickPoints(userPointsDisplayContainer, userPoints, 500);
userPointsDisplayContainer.classList.remove("show");
await wait(1000);
await waitForAnimationEnd(
  computerPointsDisplayContainer,
  ".score-ticker",
  "transition",
  "show",
);
await tickPoints(computerPointsDisplayContainer, computerPoints, 1000);
computerPointsDisplayContainer.classList.remove("show");
