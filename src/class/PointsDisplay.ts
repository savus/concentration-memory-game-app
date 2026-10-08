import { TICK_DOWN_PAUSE } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";

class PointsDisplay {
  html: HTMLElement;
  name: string;
  currentPoints: number = 0;
  tickerPoints: number = 0;
  scoreTickerQuery: string = ".score-ticker";
  isBusy = false;

  constructor(element: HTMLElement, name: string) {
    this.html = element;
    this.name = name;
    this.overwritePointsDisplay(this.currentPoints);
    this.overwriteScoreTicker(this.tickerPoints);
  }

  overwritePointsDisplay = (points: number) => {
    const pointsDisplay = this.html.querySelector(
      ".points-display",
    )! as HTMLElement;

    pointsDisplay.innerText = `${this.name}: ${points} points!`;
  };

  overwriteScoreTicker = (points: number) => {
    const scoreTicker = this.html.querySelector(
      this.scoreTickerQuery,
    )! as HTMLElement;
    scoreTicker.innerText = `+ ${points} points!`;
  };

  showScoreTicker = () => this.html.classList.add("show");
  hideScoreTicker = () => this.html.classList.remove("show");

  tickDownPoints = async () => {
    while (this.tickerPoints > 0) {
      this.currentPoints += 1;
      this.tickerPoints -= 1;
      this.overwritePointsDisplay(this.currentPoints);
      this.overwriteScoreTicker(this.tickerPoints);
      await wait(TICK_DOWN_PAUSE);
    }
    return;
  };

  displayAndTickDownPoints = async (tickerPoints: number) => {
    if (this.isBusy) return;
    this.isBusy = true;
    this.tickerPoints = tickerPoints;
    this.overwriteScoreTicker(tickerPoints);
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
    await waitForAnimation(
      this.html,
      this.scoreTickerQuery,
      "transition",
      () => {},
      () => {
        this.isBusy = false;
      },
    );
  };
}

export default PointsDisplay;
