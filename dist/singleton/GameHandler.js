import { Player } from "../class/Player.js";
import { allCards, computer } from "../global.js";
import { wait } from "../utility.js";
const state = {
    phase: "choose-card",
};
const handleUserChoice = async (choice, user) => {
    if (state.phase === "choose-card") {
        if (user.choices.firstChoice === null) {
            user.setFirstChoice(choice);
            return;
        }
        state.phase = "busy";
        await user.setSecondChoice(choice);
        await wait(1000);
    }
    else if (state.phase === "computer's-turn") {
        await handleComputerChoice();
    }
    if (shouldGameEnd()) {
        state.phase = "game-end";
        return;
    }
    if (state.phase === "computer's-turn") {
        state.phase = "choose-card";
        return;
    }
    state.phase = "choose-card";
};
const handleComputerChoice = async () => {
    const getRandomCard = () => {
        let randomCard = null;
        while (randomCard === null) {
            let random = allCards[Math.floor(Math.random() * allCards.length)];
            if (random && random?.state.facePosition !== "up")
                randomCard = random;
        }
        return randomCard;
    };
    await computer.setFirstChoice(getRandomCard());
    await wait(3000);
    await computer.setSecondChoice(getRandomCard());
};
const areAllCardsUp = () => allCards.every((card) => card.state.facePosition === "up");
const shouldGameEnd = () => areAllCardsUp();
const GameHandler = {
    handleUserChoice,
};
export default GameHandler;
//# sourceMappingURL=GameHandler.js.map