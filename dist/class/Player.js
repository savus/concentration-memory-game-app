import { userPointsDisplay } from "../app.js";
import { ANIMATION_DURATION } from "../constants.js";
import { displayGameScreenMessage, wait } from "../utility.js";
export class Player {
    choices = {
        firstChoice: null,
        secondChoice: null,
    };
    name;
    type;
    choicesMatched = false;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    setFirstChoice = async (choice) => {
        this.choices.firstChoice = choice;
        choice.select();
    };
    setSecondChoice = async (choice) => {
        this.choices.secondChoice = choice;
        choice.select();
        this.choicesMatched = this.doChoicesMatch();
        await wait(ANIMATION_DURATION);
        this.resetChoices();
    };
    doChoicesMatch = () => {
        const { name: firstName } = this.choices.firstChoice?.stats;
        const { name: secondName } = this.choices.secondChoice?.stats;
        return firstName === secondName;
    };
    resetChoices = async () => {
        if (!this.choicesMatched) {
            await displayGameScreenMessage("Oops!", "These two did not match!");
            this.choices.firstChoice?.deselect();
            this.choices.secondChoice?.deselect();
        }
        else {
            userPointsDisplay.setAndAnimatePoints(1);
            await displayGameScreenMessage("Match!", "You got 1 point!");
        }
        this.choices.firstChoice = null;
        this.choices.secondChoice = null;
    };
}
//# sourceMappingURL=Player.js.map