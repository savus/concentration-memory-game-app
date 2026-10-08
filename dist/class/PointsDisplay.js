import { TICK_DOWN_PAUSE } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";
class PointsDisplay {
    html;
    name;
    currentPoints = 0;
    tickerPoints = 0;
    scoreTickerQuery = ".score-ticker";
    isBusy = false;
    constructor(element, name) {
        this.html = element;
        this.name = name;
        this.overwritePointsDisplay(this.currentPoints);
        this.overwriteScoreTicker(this.tickerPoints);
    }
    overwritePointsDisplay = (points) => {
        const pointsDisplay = this.html.querySelector(".points-display");
        pointsDisplay.innerText = `${this.name}: ${points} points!`;
    };
    overwriteScoreTicker = (points) => {
        const scoreTicker = this.html.querySelector(this.scoreTickerQuery);
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
    displayAndTickDownPoints = async (tickerPoints) => {
        if (this.isBusy)
            return;
        this.isBusy = true;
        this.tickerPoints = tickerPoints;
        this.overwriteScoreTicker(tickerPoints);
        await waitForAnimation(this.html, this.scoreTickerQuery, "transition", () => {
            this.showScoreTicker();
        });
        await this.tickDownPoints();
        this.hideScoreTicker();
        await waitForAnimation(this.html, this.scoreTickerQuery, "transition", () => { }, () => {
            this.isBusy = false;
        });
    };
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.js.map