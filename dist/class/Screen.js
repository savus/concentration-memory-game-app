import { onclickMenuDelegation } from "../clickEvents.js";
class Screen {
    screenTag;
    ui = {};
    constructor(screen) {
        this.screenTag = screen;
        this.cacheElements(this.screenTag, this.ui);
    }
    init = (actionMap) => {
        this.screenTag.addEventListener("click", (e) => {
            onclickMenuDelegation(e, this.ui, actionMap);
        });
    };
    cacheElements = (screenTag, elementRegistry) => {
        const uiElements = screenTag.querySelectorAll("[data-ui]");
        uiElements.forEach((element) => {
            const uiDataset = element.dataset.ui;
            const camelCase = uiDataset?.replace(/-([a-z])/g, (g) => g[1]?.toUpperCase() ?? "");
            if (camelCase)
                elementRegistry[camelCase] = element;
        });
    };
}
export default Screen;
//# sourceMappingURL=Screen.js.map