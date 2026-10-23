export class UIMap {
    menu;
    ui = {};
    cachedDatasets = [];
    constructor(menu, onClick) {
        this.menu = menu;
        this.cacheDatasets();
        this.menu.addEventListener("click", (e) => {
            onClick(this.ui, e);
        });
    }
    cacheDatasets = () => {
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