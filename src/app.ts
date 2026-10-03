import {
  ANIMATION_DURATION,
  GLOBAL_ANIMATION_DUR,
  pointsDisplayContainerClass,
} from "./constants.js";

const root = document.documentElement;

const userPointsDisplay = document.querySelector(
  `${pointsDisplayContainerClass}[data-anim-dir="left"]`,
)! as HTMLElement;

const setUserPointsDisplay = (points: number) => {
  userPointsDisplay.innerText = `You: ${points} points`;
};

const userScoreTicker = userPointsDisplay.querySelector(
  ".score-ticker",
)! as HTMLElement;
const setUserScoreTicker = (points: number) =>
  (userScoreTicker.innerText = `+ ${points} points!`);

const computerPointsDisplay = document.querySelector(
  `${pointsDisplayContainerClass}[data-anim-dir="right"]`,
)! as HTMLElement;

const setComputerPointsDisplay = (points: number) => {
  computerPointsDisplay.innerText = `Computer: ${points} points`;
};

const computerScoreTicker =
  computerPointsDisplay.querySelector(".score-ticker")!;
const setComputerScoreTicker = (points: number) =>
  (userScoreTicker.innerText = `+ ${points} points!`);

const wait = async (ms: number) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve("finished");
    }, ms);
  });
};

const animateElement = async (element: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    function handleTransitionEnd(event: Event) {
      const target = event.target as HTMLElement | null;
      if (target?.matches(".score-ticker")) {
        element.removeEventListener("transitionend", handleTransitionEnd);
        resolve();
      }
    }

    element.addEventListener("transitionend", handleTransitionEnd);
    element.classList.add("show");
  });
};

type scoreTracker = {
  element: HTMLElement;
  points: number;
};

const tickPoints = (
  scoreTicker: scoreTracker,
  scoreReceiver: scoreTracker,
) => {};

const initializeGlobalSettings = async () => {
  root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
};

initializeGlobalSettings();

await wait(5000);
setUserPointsDisplay(50);
setUserScoreTicker(100);
setComputerPointsDisplay(200);
setComputerScoreTicker(300);
await animateElement(userPointsDisplay);
