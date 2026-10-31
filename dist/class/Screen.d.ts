import type { TCommandRegistry, TUIRegistry } from "../types.js";
declare class Screen {
    screenTag: HTMLElement;
    elementRegistry: TUIRegistry;
    actionMap: TCommandRegistry;
    constructor(screen: HTMLElement, actionMap: TCommandRegistry);
    cacheElements: () => void;
}
export default Screen;
//# sourceMappingURL=Screen.d.ts.map