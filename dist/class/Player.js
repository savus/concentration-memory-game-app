import { computerPointsDisplay, userPointsDisplay } from "../app.js";
import { ANIMATION_DURATION } from "../constants.js";
import { displayGameScreenMessage, wait, waitForAnimation, } from "../utility.js";
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
            const player = this.type === "user" ? userPointsDisplay : computerPointsDisplay;
            await displayGameScreenMessage("Yay!", "You got a match!", player, 1);
        }
        this.choices.firstChoice = null;
        this.choices.secondChoice = null;
    };
}
//# sourceMappingURL=Player.js.map