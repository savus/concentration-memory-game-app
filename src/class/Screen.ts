import type { TCommandRegistry, TUIRegistry } from "../types.js";

class Screen {
  screenTag: HTMLElement;
  ui: TUIRegistry = {};

  constructor(screen: HTMLElement, actionMap: TCommandRegistry) {
    this.screenTag = screen;
    this.cacheElements(this.screenTag, this.ui);
    this.screenTag.addEventListener("click", (e: MouseEvent) => {
      this.onclickMenuDelegation(e, this.ui, actionMap);
    });
  }

  onclickMenuDelegation = (
    e: MouseEvent,
    elementRegistry: TUIRegistry,
    actionMap: TCommandRegistry,
  ) => {
    const target = e.target as HTMLElement;
    for (const key of Object.keys(elementRegistry)) {
      if (target && target === elementRegistry[key]) {
        if (actionMap[key]) actionMap[key]();
      }
    }
  };

  cacheElements = (screenTag: HTMLElement, elementRegistry: TUIRegistry) => {
    const uiElements: NodeListOf<HTMLElement> =
      screenTag.querySelectorAll("[data-ui]");
    uiElements.forEach((element) => {
      const uiDataset = element.dataset.ui;
      const camelCase = uiDataset?.replace(
        /-([a-z])/g,
        (g) => g[1]?.toUpperCase() ?? "",
      );
      if (camelCase) elementRegistry[camelCase] = element;
    });
  };
}

export default Screen;
