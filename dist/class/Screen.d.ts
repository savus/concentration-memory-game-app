import type { TCommandRegistry, TUIRegistry } from "../types.js";
declare class Screen {
    screenTag: HTMLElement;
    ui: TUIRegistry;
    constructor(screen: HTMLElement);
    init: (actionMap: TCommandRegistry) => void;
    cacheElements: (screenTag: HTMLElement, elementRegistry: TUIRegistry) => void;
}
export default Screen;
//# sourceMappingURL=Screen.d.ts.map