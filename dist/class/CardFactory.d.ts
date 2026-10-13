import type { TPokeAPI } from "../types.js";
import { Card } from "./Card.js";
export declare class CardFactory {
    buildCardHTML: (data: TPokeAPI) => HTMLDivElement;
    createCard: (apiData: TPokeAPI, id: number) => Card;
    createCardsAndAppend: (dataList: TPokeAPI[], parentToAppend: HTMLElement) => void;
}
//# sourceMappingURL=CardFactory.d.ts.map