import type { TMenuUI } from "../types.js";

export class UIMap {
  menu: HTMLElement;
  ui: TMenuUI = {};
  cachedDatasets: string[] = [];

  constructor(
    menu: HTMLElement,
    onClick: (ui: TMenuUI, e: MouseEvent) => void,
  ) {
    this.menu = menu;
    this.cacheDatasets();
    this.menu.addEventListener("click", (e: MouseEvent) => {
      onClick(this.ui, e);
    });
  }

  cacheDatasets = () => {
    const elements: NodeListOf<HTMLElement> =
      this.menu.querySelectorAll(`[data-ui]`);
    elements.forEach((element) => {
      const datasetName = element.dataset.ui;
      if (datasetName) {
        const propName = datasetName.replace(
          /-([a-z])/g,
          (g) => g[1]?.toUpperCase() ?? "",
        );
        this.ui[propName] = document.querySelector(
          `[data-ui="${datasetName}"]`,
        );
      }
    });
  };
}
