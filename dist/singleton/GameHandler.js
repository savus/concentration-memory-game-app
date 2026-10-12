import { allCards, computer } from "../app.js";
import { Player } from "../class/Player.js";
import { wait } from "../utility.js";
const state = {
    phase: "choose-card",
};
const handleUserChoice = async (choice, user, computer, cardsArray) => {
    if (state.phase !== "choose-card")
        return;
    if (user.choices.firstChoice === null) {
        user.setFirstChoice(choice);
    }
    else if (user.choices.secondChoice === null) {
        state.phase = "busy";
        await user.setSecondChoice(choice);
        await wait(1000);
        await handleComputerChoice(cardsArray, computer);
        if (shouldGameEnd(cardsArray)) {
            console.log("game end");
            state.phase = "game-end";
        }
        else {
            state.phase = "choose-card";
        }
    }
};
const handleComputerChoice = async (cardsArray, computer) => {
    state.phase = "computer's-turn";
    const getRandomCard = () => {
        let randomCard = null;
        while (randomCard === null) {
            let random = cardsArray[Math.floor(Math.random() * cardsArray.length)];
            if (random && random?.state.facePosition !== "up")
                randomCard = random;
        }
        return randomCard;
    };
    await computer.setFirstChoice(getRandomCard());
    await wait(3000);
    await computer.setSecondChoice(getRandomCard());
};
const areAllCardsUp = (cardsArray) => cardsArray.every((card) => card.state.facePosition === "up");
const shouldGameEnd = (cardsArray) => areAllCardsUp(cardsArray);
const GameHandler = {
    handleUserChoice,
};
export default GameHandler;
//# sourceMappingURL=GameHandler.js.map