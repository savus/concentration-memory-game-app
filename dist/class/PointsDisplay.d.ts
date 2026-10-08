declare class PointsDisplay {
    html: HTMLElement;
    name: string;
    currentPoints: number;
    tickerPoints: number;
    scoreTickerQuery: string;
    isBusy: boolean;
    constructor(element: HTMLElement, name: string);
    overwritePointsDisplay: (points: number) => void;
    overwriteScoreTicker: (points: number) => void;
    showScoreTicker: () => void;
    hideScoreTicker: () => void;
    tickDownPoints: () => Promise<void>;
    displayAndTickDownPoints: (tickerPoints: number) => Promise<void>;
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.d.ts.map