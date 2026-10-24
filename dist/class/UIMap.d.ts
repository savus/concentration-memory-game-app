import type { TCommandRegistry, TMenuUI } from "../types.js";
export declare class UIMap {
    menu: HTMLElement;
    ui: TMenuUI;
    actionMap: TCommandRegistry;
    constructor(menu: HTMLElement, actionMap: TCommandRegistry);
    cacheElements: () => void;
}
//# sourceMappingURL=UIMap.d.ts.map