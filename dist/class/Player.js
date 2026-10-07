import { waitForAnimation } from "../utility.js";
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
        await waitForAnimation(choice.html, ".card", "transition", () => {
            choice.flipUp();
        });
    };
    setSecondChoice = async (choice) => {
        this.choices.secondChoice = choice;
    };
}
//# sourceMappingURL=Player.js.map