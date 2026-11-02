import type { TUIRegistry } from "./types.js";
export declare const wait: (ms: number) => Promise<unknown>;
export declare const waitForAnimation: (element: HTMLElement | null, transitionOrAnimation: "transition" | "animation", beginAnimation?: () => void, endAnimation?: () => void) => Promise<void>;
export declare const displayGameScreenMessage: (topText: string, bottomText: string) => Promise<void>;
export declare const initializeGlobalSettings: () => Promise<void>;
export declare const fisherYatesShuffle: (array: any[]) => any[];
export declare const setActive: (newElem: HTMLElement, selector: string) => void;
export declare const cacheElements: (screenTag: HTMLElement, elementRegistry: TUIRegistry) => void;
export declare const camelToKebab: (str: string) => string;
export declare const getAllCustomProperties: () => any[];
export declare const getComputedValues: () => void;
//# sourceMappingURL=utility.d.ts.map