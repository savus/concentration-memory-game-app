import { ANIMATION_DURATION, DATA_ANIMATION, POINTS_DELAY, } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";
class PointsDisplay {
    html;
    name;
    currentPoints = 0;
    isBusy = false;
    constructor(element, name) {
        this.html = element;
        this.name = name;
        this.overwritePointsDisplay(0);
    }
    overwritePointsDisplay = (points) => {
        this.currentPoints = points;
        this.html.innerText = `${this.currentPoints}`;
    };
    setAndAnimatePoints = async (pointsToAdd) => {
        this.currentPoints += pointsToAdd;
        await waitForAnimation(this.html, "animation", async () => {
            this.html.setAttribute(DATA_ANIMATION, "scale");
            await wait(ANIMATION_DURATION * POINTS_DELAY);
            this.overwritePointsDisplay(this.currentPoints);
        }, () => {
            this.html.removeAttribute(DATA_ANIMATION);
        });
    };
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.js.map