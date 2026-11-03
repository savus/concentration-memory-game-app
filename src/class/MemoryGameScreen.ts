import { DATA_ANIMATION } from "../constants.js";
import type { TPointsDisplayData } from "../types.js";
import { wait, waitForAnimation } from "../utility.js";
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

  displayGameScreenMessage = async (topText: string, bottomText: string) => {
    const topMessage = this.ui.topMessage! as HTMLElement;
    const bottomMessage = this.ui.bottomMessage! as HTMLElement;
    const bottomContainer = this.ui.bottomContainer! as HTMLElement;
    const screenMessageContainer = this.ui
      .screenMessageContainer! as HTMLElement;

    topMessage.innerText = topText;
    bottomMessage.innerText = bottomText;

    await waitForAnimation(
      bottomContainer,
      "animation",
      () => {
        screenMessageContainer?.setAttribute(DATA_ANIMATION, "scrollInOut");
      },
      async () => {
        screenMessageContainer?.removeAttribute(DATA_ANIMATION);
        await wait(500);
      },
    );
  };
}

export default MemoryGameScreen;
