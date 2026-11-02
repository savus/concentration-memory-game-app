import { onclickMenuDelegation } from "../clickEvents.js";
import { cacheElements } from "../utility.js";
class Screen {
    screenTag;
    ui = {};
    constructor(screen) {
        this.screenTag = screen;
        cacheElements(this.screenTag, this.ui);
    }
    init = (actionMap) => {
        this.screenTag.addEventListener("click", (e) => {
            onclickMenuDelegation(e, this.ui, actionMap);
        });
    };
}
export default Screen;
//# sourceMappingURL=Screen.js.map