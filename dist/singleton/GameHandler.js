import { allCards, computer } from "../app.js";
import { Player } from "../class/Player.js";
import { wait } from "../utility.js";
const state = {
    phase: "choose-card",
};
const handleUserChoice = async (choice, user, computer) => {
    if (user.choices.firstChoice === null) {
        user.setFirstChoice(choice);
    }
    else if (user.choices.secondChoice === null) {
        await user.setSecondChoice(choice);
        // handleComputerChoice(allCards, computer);
    }
};
const handleComputerChoice = async (cardsArray, computer) => {
    const getRandomCard = () => {
        let randomCard = null;
        while (randomCard === null) {
            let random = cardsArray[Math.floor(Math.random() * cardsArray.length)];
            if (random && random?.state.facePosition !== "up")
                randomCard = random;
        }
        return randomCard;
    };
    computer.setFirstChoice(getRandomCard());
    await wait(3000);
    computer.setSecondChoice(getRandomCard());
};
const GameHandler = {
    handleUserChoice,
};
export default GameHandler;
//# sourceMappingURL=GameHandler.js.map