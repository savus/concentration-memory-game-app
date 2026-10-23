BUG: when using the waitForAnimation function, the "animationend" addEventListener doesn't wait for the full animation to end before the element.removeAttribute() takes away the data-animation attribute with the animation name in it, causing the animation to be clipped off toward the end unless a 400ms pause is implemented before removing the attribute

(SOLUTION "kind of" ): refactor animation so that the tail end starts much earlier, so that the animation has appeared to be finished before getting clipped off

BUG: typescript refused to register that there was an overlap in comparisons between the GameHandler objects game states until I gave it a sloppy spaghetti code answer like
`if (shouldGameEnd(cardsArray)) {
    state.phase = "game-end";
    return;
  }
  if (state.phase === "computer's-turn") {
    state.phase = "choose-card";
    return;
  }
  state.phase = "choose-card";`

(SOLUTION): Typescript was smarter than I was in organizing this phase process and carelessness had prevented me from seeing that I was inevitably programming myself into a loop wherein there were choices that would lead to no definite returns

TASK(COMPLETED): find a way to clean up this block of code to make it both functional and satisfy typescript

TASK: (COMPLETED) Fix bug that results in the incorrect message "You got 1 point!" instead of "Computer got 1 point!" when the computer guesses a correct matching pair

TASK: go through all the singleton Menu based objects and refactor the click event listeners for the UI elements to be delegated by the menu parent instead.
