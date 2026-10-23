export class UIMap {
    menu;
    ui = {};
    cachedDatasets = [];
    constructor(menu, datasetsToCache, onClick) {
        this.menu = menu;
        this.cachedDatasets = datasetsToCache;
        this.cacheDatasets();
        this.menu.addEventListener("click", (e) => {
            onClick(this.ui, e);
        });
    }
    cacheDatasets = () => {
        this.cachedDatasets.forEach((datasetName) => {
            const propName = datasetName.replace(/-([a-z])/g, (g) => g[1]?.toUpperCase() ?? "");
            this.ui[propName] = document.querySelector(`[data-ui="${datasetName}"]`);
        });
    };
}
//# sourceMappingURL=UIMap.js.map