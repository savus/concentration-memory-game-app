import { menuOnClickDelegation } from "../clickEvents.js";
import type { TCommandRegistry, TMenuUI } from "../types.js";

export class UIMap {
  menu: HTMLElement;
  ui: TMenuUI = {};
  actionMap: TCommandRegistry;

  constructor(menu: HTMLElement, actionMap: TCommandRegistry) {
    this.menu = menu;
    this.cacheElements();
    this.actionMap = actionMap;
    this.menu.addEventListener("click", (e: MouseEvent) => {
      menuOnClickDelegation(this.ui, e, this.actionMap);
    });
  }

  cacheElements = () => {
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
