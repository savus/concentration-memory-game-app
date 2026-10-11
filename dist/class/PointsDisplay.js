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
        await waitForAnimation(this.html, "transition", () => {
            this.html.classList.add("scale-up");
        }, () => {
            this.overwritePointsDisplay(this.currentPoints);
            this.html.classList.remove("scale-up");
        });
    };
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.js.map