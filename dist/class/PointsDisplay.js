class PointsDisplay {
    html;
    name;
    constructor(element, name) {
        this.html = element;
        this.name = name;
    }
    setPointsDisplay = (points) => {
        const pointsDisplay = this.html.querySelector(".points-display");
        pointsDisplay.innerText = `${this.name}: ${points} points!`;
    };
    setScoreTicker = (points) => {
        const scoreTicker = this.html.querySelector(".score-ticker");
        scoreTicker.innerText = `+ ${points} points!`;
    };
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.js.map