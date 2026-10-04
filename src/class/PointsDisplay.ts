import { TICK_DOWN_PAUSE } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";

class PointsDisplay {
  html: HTMLElement;
  name: string;
  currentPoints: number = 0;
  tickerPoints: number = 0;
  scoreTickerQuery: string = ".score-ticker";

  constructor(element: HTMLElement, name: string) {
    this.html = element;
    this.name = name;
  }

  setPointsDisplay = (points: number) => {
    const pointsDisplay = this.html.querySelector(
      ".points-display",
    )! as HTMLElement;

    pointsDisplay.innerText = `${this.name}: ${points} points!`;
  };

  setScoreTicker = (points: number) => {
    const scoreTicker = this.html.querySelector(
      this.scoreTickerQuery,
    )! as HTMLElement;
    scoreTicker.innerText = `+ ${points} points!`;
  };

  showScoreTicker = () => this.html.classList.add("show");
  hideScoreTicker = () => this.html.classList.remove("show");

  flashScoreTicker = async () => {
    await waitForAnimation(
      this.html,
      this.scoreTickerQuery,
      "transition",
      () => {
        this.html.classList.add("show");
      },
      () => {
        this.html.classList.remove("show");
      },
    );
  };

  tickDownPoints = async () => {
    while (this.tickerPoints >= 0) {
      this.setPointsDisplay(this.currentPoints);
      this.setScoreTicker(this.tickerPoints);
      this.currentPoints++;
      this.tickerPoints--;
      await wait(TICK_DOWN_PAUSE);
    }
    return;
  };

  displayAndTickDownPoints = async (tickerPoints: number) => {
    this.tickerPoints = tickerPoints;
    await waitForAnimation(
      this.html,
      this.scoreTickerQuery,
      "transition",
      () => {
        this.showScoreTicker();
      },
    );
    await this.tickDownPoints();
    this.hideScoreTicker();
  };
}

export default PointsDisplay;
