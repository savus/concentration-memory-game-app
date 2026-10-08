import type { TPokeAPI } from "../types.js";
import { Card } from "./Card.js";
export declare class CardFactory {
    buildCardHTML: (data: TPokeAPI) => HTMLDivElement;
    createCard: (apiData: TPokeAPI, id: number) => Card;
    createCardsAndAppend: (dataList: TPokeAPI[], parentToAppend: HTMLElement, arrayToPush: Card[]) => void;
}
//# sourceMappingURL=CardFactory.d.ts.map