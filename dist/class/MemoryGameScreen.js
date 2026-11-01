import PointsDisplay from "./PointsDisplay.js";
import Screen from "./Screen.js";
class MemoryGameScreen extends Screen {
    userPointsDisplay;
    computerPointsDisplay;
    constructor(screen, userDisplayData, computerDisplayData) {
        super(screen);
        this.userPointsDisplay = new PointsDisplay(userDisplayData.element, userDisplayData.name);
        this.computerPointsDisplay = new PointsDisplay(computerDisplayData.element, computerDisplayData.name);
    }
}
export default MemoryGameScreen;
//# sourceMappingURL=MemoryGameScreen.js.map