import { DATA_ANIMATION } from "../constants.js";
import { wait, waitForAnimation } from "../utility.js";
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
    displayGameScreenMessage = async (topText, bottomText) => {
        const topMessage = this.ui.topMessage;
        const bottomMessage = this.ui.bottomMessage;
        const bottomContainer = this.ui.bottomContainer;
        const screenMessageContainer = this.ui
            .screenMessageContainer;
        topMessage.innerText = topText;
        bottomMessage.innerText = bottomText;
        await waitForAnimation(bottomContainer, "animation", () => {
            screenMessageContainer?.setAttribute(DATA_ANIMATION, "scrollInOut");
        }, async () => {
            screenMessageContainer?.removeAttribute(DATA_ANIMATION);
            await wait(500);
        });
    };
}
export default MemoryGameScreen;
//# sourceMappingURL=MemoryGameScreen.js.map