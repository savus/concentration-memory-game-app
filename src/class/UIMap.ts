import type { TCommandRegistry, TUIRegistry } from "../types.js";

class UIMap {
  elementRegistry: TUIRegistry;
  actionMap: TCommandRegistry;

  constructor(ui: TUIRegistry, command: TCommandRegistry) {
    this.elementRegistry = ui;
    this.actionMap = command;
  }
}

export default UIMap;
