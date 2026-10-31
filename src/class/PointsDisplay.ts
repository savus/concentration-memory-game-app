import { DATA_ANIMATION } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";

class PointsDisplay {
  html: HTMLElement | null;
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
    if (this.html) this.html.innerText = `${this.currentPoints}`;
  };

  setAndAnimatePoints = async (pointsToAdd: number) => {
    this.currentPoints += pointsToAdd;
    await waitForAnimation(
      this.html || null,
      "animation",
      async () => {
        if (this.html) this.html.setAttribute(DATA_ANIMATION, "scale");
        await wait(600);
        this.overwritePointsDisplay(this.currentPoints);
      },
      () => {
        if (this.html) this.html.removeAttribute(DATA_ANIMATION);
      },
    );
  };
}

export default PointsDisplay;
