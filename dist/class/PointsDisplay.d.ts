declare class PointsDisplay {
    html: HTMLElement;
    name: string;
    currentPoints: number;
    tickerPoints: number;
    scoreTickerQuery: string;
    constructor(element: HTMLElement, name: string);
    setPointsDisplay: (points: number) => void;
    setScoreTicker: (points: number) => void;
    showScoreTicker: () => void;
    hideScoreTicker: () => void;
    flashScoreTicker: () => Promise<void>;
    tickDownPoints: () => Promise<void>;
    displayAndTickDownPoints: (tickerPoints: number) => Promise<void>;
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.d.ts.map