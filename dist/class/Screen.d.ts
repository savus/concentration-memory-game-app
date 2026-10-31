import type { TCommandRegistry, TUIRegistry } from "../types.js";
declare class Screen {
    screenTag: HTMLElement;
    ui: TUIRegistry;
    constructor(screen: HTMLElement, actionMap: TCommandRegistry);
    onclickMenuDelegation: (e: MouseEvent, elementRegistry: TUIRegistry, actionMap: TCommandRegistry) => void;
    cacheElements: (screenTag: HTMLElement, elementRegistry: TUIRegistry) => void;
}
export default Screen;
//# sourceMappingURL=Screen.d.ts.map