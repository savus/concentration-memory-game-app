import { Dataset_Face_Position } from "../constants.js";
import GameHandler from "./GameHandler.js";
export class Card {
    html;
    state = {
        facePosition: "up",
        isClickable: true,
        isFlippable: true,
    };
    constructor(cardHTML) {
        this.html = cardHTML;
        this.flip(this.state.facePosition);
    }
    flipUp = () => {
        this.state.facePosition = "up";
        this.html.setAttribute(Dataset_Face_Position, "up");
    };
    flipDown = () => {
        this.state.facePosition = "down";
        this.html.setAttribute(Dataset_Face_Position, "down");
    };
    flip = (direction) => {
        if (!this.state.isFlippable)
            return;
        console.log(this.state.facePosition);
        switch (direction) {
            case "up":
                this.flipUp();
                console.log(this.state.facePosition);
                break;
            case "down":
                this.flipDown();
                console.log(this.state.facePosition);
                break;
            case "toggle":
                if (this.state.facePosition === "down") {
                    this.flipUp();
                    console.log(this.state.facePosition);
                }
                else if (this.state.facePosition === "up") {
                    this.flipDown();
                    console.log(this.state.facePosition);
                }
                break;
        }
    };
}
//# sourceMappingURL=Card.js.map