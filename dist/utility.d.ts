export declare const wait: (ms: number) => Promise<unknown>;
export declare const waitForAnimation: (element: HTMLElement, transitionOrAnimation: "transition" | "animation", beginAnimation?: () => void, endAnimation?: () => void) => Promise<void>;
export declare const displayGameScreenMessage: (topText: string, bottomText: string) => Promise<void>;
export declare const initializeGlobalSettings: () => Promise<void>;
export declare const fisherYatesShuffle: (array: any[]) => any[];
//# sourceMappingURL=utility.d.ts.map