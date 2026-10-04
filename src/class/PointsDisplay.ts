class PointsDisplay {
  html: HTMLElement;
  name: string;
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
      ".score-ticker",
    )! as HTMLElement;
    scoreTicker.innerText = `+ ${points} points!`;
  };
}

export default PointsDisplay;
