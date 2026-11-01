import { onclickMenuDelegation } from "../clickEvents.js";
import type { TCommandRegistry, TUIRegistry } from "../types.js";

class Screen {
  screenTag: HTMLElement;
  ui: TUIRegistry = {};

  constructor(screen: HTMLElement) {
    this.screenTag = screen;
    this.cacheElements(this.screenTag, this.ui);
  }

  init = (actionMap: TCommandRegistry) => {
    this.screenTag.addEventListener("click", (e: MouseEvent) => {
      onclickMenuDelegation(e, this.ui, actionMap);
    });
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
