import { wait, waitForAnimation } from "../utility.js";

class PointsDisplay {
  html: HTMLElement;
  name: string;
  currentPoints: number = 0;
  isBusy = false;

  constructor(element: HTMLElement, name: string) {
    this.html = element;
    this.name = name;
    this.overwritePointsDisplay(0);
  }

  overwritePointsDisplay = (points: number) => {
    this.currentPoints = points;
    this.html.innerText = `${this.currentPoints}`;
  };

  setAndAnimatePoints = async (pointsToAdd: number) => {
    this.currentPoints += pointsToAdd;
    await waitForAnimation(
      this.html,
      "animation",
      () => {
        this.html.setAttribute("data-animation", "scale");
        this.overwritePointsDisplay(this.currentPoints);
      },
      () => {
        this.html.removeAttribute("data-animation");
      },
    );
  };
}

export default PointsDisplay;
