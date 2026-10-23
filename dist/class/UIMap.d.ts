import type { TMenuUI } from "../types.js";
export declare class UIMap {
    menu: HTMLElement;
    ui: TMenuUI;
    cachedDatasets: string[];
    constructor(menu: HTMLElement, onClick: (ui: TMenuUI, e: MouseEvent) => void);
    cacheDatasets: () => void;
}
//# sourceMappingURL=UIMap.d.ts.map