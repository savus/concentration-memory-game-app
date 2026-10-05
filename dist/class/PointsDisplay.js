import { TICK_DOWN_PAUSE } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";
class PointsDisplay {
    html;
    name;
    currentPoints = 0;
    tickerPoints = 0;
    scoreTickerQuery = ".score-ticker";
    constructor(element, name) {
        this.html = element;
        this.name = name;
    }
    setPointsDisplay = (points) => {
        const pointsDisplay = this.html.querySelector(".points-display");
        pointsDisplay.innerText = `${this.name}: ${points} points!`;
    };
    setScoreTicker = (points) => {
        const scoreTicker = this.html.querySelector(this.scoreTickerQuery);
        scoreTicker.innerText = `+ ${points} points!`;
    };
    showScoreTicker = () => this.html.classList.add("show");
    hideScoreTicker = () => this.html.classList.remove("show");
    flashScoreTicker = async () => {
        await waitForAnimation(this.html, this.scoreTickerQuery, "transition", () => {
            this.html.classList.add("show");
        }, () => {
            this.html.classList.remove("show");
        });
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
    displayAndTickDownPoints = async (tickerPoints) => {
        this.tickerPoints = tickerPoints;
        await waitForAnimation(this.html, this.scoreTickerQuery, "transition", () => {
            this.showScoreTicker();
        });
        await this.tickDownPoints();
        this.hideScoreTicker();
    };
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.js.map