import { GameMode } from "../class/GameMode.js";
import { GLOBAL_ANIMATION_DUR, SCREEN_MESSAGE_PROP } from "../constants.js";
import { root } from "../global.js";
const buildCustomCSSProperties = () => {
    const array = [
        {
            propName: GLOBAL_ANIMATION_DUR,
            propValue: `${ANIMATION_DURATION}ms`,
        },
        {
            propName: SCREEN_MESSAGE_PROP,
            propValue: `${SCREEN_MESSAGE_DURATION}ms`,
        },
    ];
    return array;
};
export const setGameSpeed = (speed) => {
    const modeActions = {
        slow: () => {
            ANIMATION_DURATION = 3600;
            SCREEN_MESSAGE_DURATION = 2000;
            COMPUTER_CHOICE_PAUSE = 1000;
            cssProps = buildCustomCSSProperties();
        },
        medium: () => {
            ANIMATION_DURATION = 2900;
            SCREEN_MESSAGE_DURATION = 1500;
            COMPUTER_CHOICE_PAUSE = 500;
            cssProps = buildCustomCSSProperties();
        },
        fast: () => {
            ANIMATION_DURATION = 500;
            SCREEN_MESSAGE_DURATION = 800;
            COMPUTER_CHOICE_PAUSE = 300;
            cssProps = buildCustomCSSProperties();
        },
    };
    if (modeActions[speed])
        modeActions[speed]();
    cssProps.forEach((property) => {
        const { propName, propValue } = property;
        root.style.setProperty(propName, propValue);
    });
};
const setGameDifficulty = (difficulty) => {
    const modeActions = {
        easy: () => {
            console.log("game is now easy");
        },
        medium: () => {
            console.log("game is now medium");
        },
        hard: () => {
            console.log("game is now Hard");
        },
        cheating: () => {
            console.log("you filthy cheater");
        },
    };
    if (modeActions[difficulty])
        modeActions[difficulty]();
};
let ANIMATION_DURATION = 2900;
let SCREEN_MESSAGE_DURATION = 1500;
let COMPUTER_CHOICE_PAUSE = 500;
let TICK_DOWN_PAUSE = 10;
let cssProps = buildCustomCSSProperties();
const speedModes = ["slow", "medium", "fast"];
const speed = new GameMode(speedModes, 1, "speed", document.querySelector(".speed-slider .setting-name"), setGameSpeed);
const difficultyModes = ["easy", "medium", "hard", "cheating"];
const difficulty = new GameMode(difficultyModes, 1, "difficulty", document.querySelector(".difficulty-slider .setting-name"), setGameDifficulty);
export const GameConfig = {
    ANIMATION_DURATION,
    SCREEN_MESSAGE_DURATION,
    COMPUTER_CHOICE_PAUSE,
    TICK_DOWN_PAUSE,
    speed,
    difficulty,
};
//# sourceMappingURL=GameConfig.js.map