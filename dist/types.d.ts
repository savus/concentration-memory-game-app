export type TPokeAPI = {
    name: string;
    type: string;
    img: string;
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    isDummyData: boolean;
};
export type TUIRegistry = Record<string, HTMLElement | null>;
export type TCommandRegistry = {
    [commandName: string]: (...args: any[]) => any;
};
export type TPointsDisplayData = {
    element: HTMLElement;
    name: string;
};
//# sourceMappingURL=types.d.ts.map