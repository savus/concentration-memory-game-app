import { allCards, computer, computerPointsDisplay, gameConfig, user, userPointsDisplay, } from "../global.js";
import { displayGameScreenMessage, wait } from "../utility.js";
const state = {
    phase: "choose-card",
};
const handleUserChoice = async (choice) => {
    if (state.phase === "game-end")
        return;
    if (state.phase === "choose-card") {
        if (user.choices.firstChoice === null) {
            user.setFirstChoice(choice);
            return;
        }
        state.phase = "busy";
        await user.setSecondChoice(choice);
        state.phase = "choose-card";
        determineNextPhase();
    }
};
const handleComputerChoice = async () => {
    const getRandomCard = () => {
        const faceDownCards = allCards.filter((card) => card.state.facePosition === "down");
        let randomCard = faceDownCards[Math.floor(Math.random() * faceDownCards.length)];
        return randomCard;
    };
    await computer.setFirstChoice(getRandomCard());
    await wait(gameConfig.COMPUTER_CHOICE_PAUSE);
    await computer.setSecondChoice(getRandomCard());
    await determineNextPhase();
};
const areAllCardsUp = () => allCards.every((card) => card.state.facePosition === "up");
const shouldGameEnd = () => {
    if (areAllCardsUp()) {
        return true;
    }
    return false;
};
const determineNextPhase = async () => {
    if (shouldGameEnd()) {
        state.phase = "game-end";
        await determineGameWinner();
        return;
    }
    if (state.phase === "choose-card") {
        state.phase = "computer's-turn";
        await handleComputerChoice();
    }
    else if (state.phase === "computer's-turn") {
        state.phase = "choose-card";
    }
};
const determineGameWinner = async () => {
    const gameIsDraw = userPointsDisplay.currentPoints === computerPointsDisplay.currentPoints;
    const userWon = userPointsDisplay.currentPoints > computerPointsDisplay.currentPoints;
    if (gameIsDraw) {
        displayGameScreenMessage("Game", "Is a draw!");
        return;
    }
    if (userWon) {
        displayGameScreenMessage("You", "Won!");
        return;
    }
    else {
        displayGameScreenMessage("Computer", "Won!");
        return;
    }
};
const GameHandler = {
    state,
    handleUserChoice,
};
export default GameHandler;
//# sourceMappingURL=GameHandler.js.map