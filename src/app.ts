import { API_REQUESTS } from "./api.js";
import PointsDisplay from "./class/PointsDisplay.js";
import {
  ANIMATION_DURATION,
  Data_Anim_Dir_Left,
  Data_Anim_Dir_Right,
  GLOBAL_ANIMATION_DUR,
  Points_Display_Container_Class,
} from "./constants.js";
import { wait, waitForAnimation } from "./utility.js";

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

const countDown = document.querySelector(".count-down")! as HTMLElement;

countDown.innerText = "Count Down: 3";
await wait(1000);
countDown.innerText = "Count Down: 2";
await wait(1000);
countDown.innerText = "Count Down: 1";
await wait(1000);
countDown.innerText = "Count Down: 0";
await wait(50);
await userPointsDisplay.displayAndTickDownPoints(150);
await computerPointsDisplay.displayAndTickDownPoints(300);
await wait(500);
await userPointsDisplay.displayAndTickDownPoints(150);
await computerPointsDisplay.displayAndTickDownPoints(300);
