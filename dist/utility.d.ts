import type PointsDisplay from "./class/PointsDisplay.js";
export declare const wait: (ms: number) => Promise<unknown>;
export declare const waitForAnimation: (element: HTMLElement, transitionOrAnimation: "transition" | "animation", beginAnimation?: () => void, endAnimation?: () => void) => Promise<void>;
export declare const displayGameScreenMessage: (topText: string, bottomText: string, pointsDisplay?: PointsDisplay | null, pointsToDisplay?: number) => Promise<void>;
//# sourceMappingURL=utility.d.ts.map