import { API_REQUESTS } from "./api.js";
import PointsDisplay from "./class/PointsDisplay.js";
import {
  ANIMATION_DURATION,
  Data_Anim_Dir_Left,
  Data_Anim_Dir_Right,
  GLOBAL_ANIMATION_DUR,
  Points_Display_Container_Class,
} from "./constants.js";

const root = document.documentElement;

const userPointsDisplayContainer = document.querySelector(
  `${Points_Display_Container_Class}${Data_Anim_Dir_Left}`,
)! as HTMLElement;

const computerPointsDisplayContainer = document.querySelector(
  `${Points_Display_Container_Class}${Data_Anim_Dir_Right}`,
)! as HTMLElement;

const userPointsDisplay = new PointsDisplay(userPointsDisplayContainer, "You");
const computerPointsDisplay = new PointsDisplay(
  computerPointsDisplayContainer,
  "Computer",
);

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

// const tickPoints = async (
//   receiver: HTMLElement,
//   previousPoints: number,
//   newPoints: number,
// ) => {
//   while (newPoints > 0) {
//     previousPoints++;
//     newPoints--;
//     setPointsDisplay(previousPoints, receiver);
//     setScoreTicker(newPoints, receiver);
//     await wait(10);
//   }
//   return;
// };

type scoreTracker = {
  element: HTMLElement;
  points: number;
};

const initializeGlobalSettings = async () => {
  root.style.setProperty(GLOBAL_ANIMATION_DUR, `${ANIMATION_DURATION}ms`);
};

initializeGlobalSettings();
API_REQUESTS.fetchData("pikachu").then((data) => {
  console.log(data);
});
