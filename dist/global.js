import { CardFactory } from "./class/CardFactory.js";
import { Player } from "./class/Player.js";
import PointsDisplay from "./class/PointsDisplay.js";
import { CARD_CONTAINER, SCREEN_MESSAGE_CONTAINER } from "./constants.js";
export const root = document.documentElement;
class GameScreenUI {
    screenMessageContainer;
    playerPoints;
    computerPoints;
    cardContainer;
    constructor() {
        this.screenMessageContainer = document.querySelector(SCREEN_MESSAGE_CONTAINER);
        this.playerPoints = document.querySelector('[data-player="user"] .points');
        this.computerPoints = document.querySelector('[data-player="computer"] .points');
        this.cardContainer = document.querySelector(CARD_CONTAINER);
    }
}
export let allPokemonData = [];
export const allCards = [];
export const gameScreenUI = new GameScreenUI();
export const userPointsDisplay = new PointsDisplay(gameScreenUI.playerPoints, "you");
export const computerPointsDisplay = new PointsDisplay(gameScreenUI.computerPoints, "computer");
export const cardFactory = new CardFactory();
export const user = new Player("you", "user");
export const computer = new Player("computer", "computer");
//# sourceMappingURL=global.js.map