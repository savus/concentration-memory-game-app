import type { TPointsDisplayData } from "../types.js";
import PointsDisplay from "./PointsDisplay.js";
import Screen from "./Screen.js";
declare class MemoryGameScreen extends Screen {
    userPointsDisplay: PointsDisplay;
    computerPointsDisplay: PointsDisplay;
    constructor(screen: HTMLElement, userDisplayData: TPointsDisplayData, computerDisplayData: TPointsDisplayData);
    displayGameScreenMessage: (topText: string, bottomText: string) => Promise<void>;
}
export default MemoryGameScreen;
//# sourceMappingURL=MemoryGameScreen.d.ts.map