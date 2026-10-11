import { user } from "../app.js";
import { waitForAnimation } from "../utility.js";
import GameHandler from "../singleton/GameHandler.js";
import { DATASET_FACE_POSITION } from "../constants.js";
export class Card {
    id;
    html;
    stats;
    state = {
        facePosition: "down",
        isClickable: true,
        isFlippable: true,
    };
    constructor(cardHTML, pokemonData, id) {
        this.html = cardHTML;
        this.html.addEventListener("click", this.onClick);
        this.flip(this.state.facePosition);
        this.stats = pokemonData;
        this.id = id;
    }
    flipUp = () => {
        this.state.facePosition = "up";
        this.html.setAttribute(DATASET_FACE_POSITION, "up");
    };
    flipDown = () => {
        this.state.facePosition = "down";
        this.html.setAttribute(DATASET_FACE_POSITION, "down");
    };
    flip = (direction) => {
        if (!this.state.isFlippable)
            return;
        switch (direction) {
            case "up":
                this.flipUp();
                break;
            case "down":
                this.flipDown();
                break;
            case "toggle":
                if (this.state.facePosition === "down") {
                    this.flipUp();
                }
                else if (this.state.facePosition === "up") {
                    this.flipDown();
                }
                break;
        }
    };
    select = async () => {
        return await waitForAnimation(this.html, "transition", () => {
            this.state.isClickable = false;
            this.flipUp();
        });
    };
    deselect = async () => {
        return await waitForAnimation(this.html, "transition", () => {
            this.flipDown();
        }, () => {
            this.state.isClickable = true;
        });
    };
    onClick = () => {
        if (!this.state.isClickable) {
            console.log("you may not click at this time");
            return;
        }
        GameHandler.handlePlayerChoice(this, user);
    };
}
//# sourceMappingURL=Card.js.map