class Screen {
    screenTag;
    ui = {};
    constructor(screen, actionMap) {
        this.screenTag = screen;
        this.cacheElements(this.screenTag, this.ui);
        this.screenTag.addEventListener("click", (e) => {
            this.onclickMenuDelegation(e, this.ui, actionMap);
        });
    }
    onclickMenuDelegation = (e, elementRegistry, actionMap) => {
        const target = e.target;
        for (const key of Object.keys(elementRegistry)) {
            if (target && target === elementRegistry[key]) {
                if (actionMap[key])
                    actionMap[key]();
            }
        }
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