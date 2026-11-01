import GameHandler from "./singleton/GameHandler.js";
export function cardOnClickHandler(card) {
    if (!card.state.isClickable || GameHandler.state.phase !== "choose-card") {
        console.log("you may not click at this time");
        return;
    }
    GameHandler.handleUserChoice(card);
}
export function onclickMenuDelegation(e, elementRegistry, actionMap) {
    const target = e.target;
    for (const key of Object.keys(elementRegistry)) {
        if (target && target === elementRegistry[key]) {
            if (actionMap[key])
                actionMap[key]();
        }
    }
}
//# sourceMappingURL=clickEvents.js.map