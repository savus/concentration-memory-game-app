import type { TCommandRegistry, TUIRegistry } from "../types.js";

class Screen {
  screenTag: HTMLElement;
  elementRegistry: TUIRegistry = {};
  actionMap: TCommandRegistry;

  constructor(screen: HTMLElement, actionMap: TCommandRegistry) {
    this.screenTag = screen;
    this.actionMap = actionMap;
    this.cacheElements();
    this.screenTag.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      for (const key of Object.keys(this.elementRegistry)) {
        if (target && target === this.elementRegistry[key]) {
          if (this.actionMap[key]) this.actionMap[key]();
        }
      }
    });
  }

  cacheElements = () => {
    const uiElements: NodeListOf<HTMLElement> =
      this.screenTag.querySelectorAll("[data-ui]");
    uiElements.forEach((element) => {
      const uiDataset = element.dataset.ui;
      const camelCase = uiDataset?.replace(
        /-([a-z])/g,
        (g) => g[1]?.toUpperCase() ?? "",
      );
      if (camelCase) this.elementRegistry[camelCase] = element;
    });
  };
}

export default Screen;
