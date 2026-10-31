class Screen {
    screenTag;
    elementRegistry = {};
    actionMap;
    constructor(screen, actionMap) {
        this.screenTag = screen;
        this.actionMap = actionMap;
        this.cacheElements();
        this.screenTag.addEventListener("click", (e) => {
            const target = e.target;
            for (const key of Object.keys(this.elementRegistry)) {
                if (target && target === this.elementRegistry[key]) {
                    if (this.actionMap[key])
                        this.actionMap[key]();
                }
            }
        });
    }
    cacheElements = () => {
        const uiElements = this.screenTag.querySelectorAll("[data-ui]");
        uiElements.forEach((element) => {
            const uiDataset = element.dataset.ui;
            const camelCase = uiDataset?.replace(/-([a-z])/g, (g) => g[1]?.toUpperCase() ?? "");
            if (camelCase)
                this.elementRegistry[camelCase] = element;
        });
    };
}
export default Screen;
//# sourceMappingURL=Screen.js.map