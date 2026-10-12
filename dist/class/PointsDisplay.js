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
        await waitForAnimation(this.html, "animation", () => {
            this.html.setAttribute("data-animation", "scale");
            this.overwritePointsDisplay(this.currentPoints);
        }, () => {
            this.html.removeAttribute("data-animation");
        });
    };
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.js.map