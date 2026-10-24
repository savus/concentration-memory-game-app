import { menuOnClickDelegation } from "../clickEvents.js";
export class UIMap {
    menu;
    ui = {};
    actionMap;
    constructor(menu, actionMap) {
        this.menu = menu;
        this.cacheElements();
        this.actionMap = actionMap;
        this.menu.addEventListener("click", (e) => {
            menuOnClickDelegation(this.ui, e, this.actionMap);
        });
    }
    cacheElements = () => {
        const elements = this.menu.querySelectorAll(`[data-ui]`);
        elements.forEach((element) => {
            const datasetName = element.dataset.ui;
            if (datasetName) {
                const propName = datasetName.replace(/-([a-z])/g, (g) => g[1]?.toUpperCase() ?? "");
                this.ui[propName] = document.querySelector(`[data-ui="${datasetName}"]`);
            }
        });
    };
}
//# sourceMappingURL=UIMap.js.map