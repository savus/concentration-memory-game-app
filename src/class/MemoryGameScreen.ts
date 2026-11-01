import type { TPointsDisplayData } from "../types.js";
import PointsDisplay from "./PointsDisplay.js";
import Screen from "./Screen.js";

class MemoryGameScreen extends Screen {
  userPointsDisplay: PointsDisplay;
  computerPointsDisplay: PointsDisplay;

  constructor(
    screen: HTMLElement,
    userDisplayData: TPointsDisplayData,
    computerDisplayData: TPointsDisplayData,
  ) {
    super(screen);

    this.userPointsDisplay = new PointsDisplay(
      userDisplayData.element,
      userDisplayData.name,
    );
    this.computerPointsDisplay = new PointsDisplay(
      computerDisplayData.element,
      computerDisplayData.name,
    );
  }
}

export default MemoryGameScreen;
