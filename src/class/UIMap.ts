import type { TMenuUI } from "../types.js";

export class UIMap {
  menu: HTMLElement;
  ui: TMenuUI = {};
  cachedDatasets: string[] = [];

  constructor(
    menu: HTMLElement,
    datasetsToCache: string[],
    onClick: (ui: TMenuUI, e: MouseEvent) => void,
  ) {
    this.menu = menu;
    this.cachedDatasets = datasetsToCache;
    this.cacheDatasets();
    this.menu.addEventListener("click", (e: MouseEvent) => {
      onClick(this.ui, e);
    });
  }

  cacheDatasets = () => {
    this.cachedDatasets.forEach((datasetName) => {
      const propName = datasetName.replace(
        /-([a-z])/g,
        (g) => g[1]?.toUpperCase() ?? "",
      );
      this.ui[propName] = document.querySelector(`[data-ui="${datasetName}"]`);
    });
  };
}
