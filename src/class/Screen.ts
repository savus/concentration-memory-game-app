import { onclickMenuDelegation } from "../clickEvents.js";
import type { TCommandRegistry, TUIRegistry } from "../types.js";
import { cacheElements } from "../utility.js";

class Screen {
  screenTag: HTMLElement;
  ui: TUIRegistry = {};

  constructor(screen: HTMLElement) {
    this.screenTag = screen;
    cacheElements(this.screenTag, this.ui);
  }

  init = (actionMap: TCommandRegistry) => {
    this.screenTag.addEventListener("click", (e: MouseEvent) => {
      onclickMenuDelegation(e, this.ui, actionMap);
    });
  };
}

export default Screen;
