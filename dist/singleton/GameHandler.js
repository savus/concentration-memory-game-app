import { COMPUTER_CHOICE_PAUSE } from "../constants.js";
import { allCards, computer, computerCheatMode, computerPointsDisplay, user, userPointsDisplay, } from "../global.js";
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
        let randomCard = null;
        if (computerCheatMode) {
            randomCard = allCards.find((card) => card.state.facePosition === "down");
        }
        else {
            while (randomCard === null) {
                let random = allCards[Math.floor(Math.random() * allCards.length)];
                if (random && random?.state.facePosition !== "up")
                    randomCard = random;
            }
        }
        return randomCard;
    };
    await computer.setFirstChoice(getRandomCard());
    await wait(COMPUTER_CHOICE_PAUSE);
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