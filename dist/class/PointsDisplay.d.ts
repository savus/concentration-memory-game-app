declare class PointsDisplay {
    html: HTMLElement;
    name: string;
    currentPoints: number;
    isBusy: boolean;
    constructor(element: HTMLElement, name: string);
    overwritePointsDisplay: (points: number) => void;
    setAndAnimatePoints: (pointsToAdd: number) => Promise<void>;
}
export default PointsDisplay;
//# sourceMappingURL=PointsDisplay.d.ts.map