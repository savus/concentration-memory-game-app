import type { TPokeAPI } from "../types.js";
import { Card } from "./Card.js";
export declare class CardFactory {
    buildCardHTML: (data: TPokeAPI) => HTMLTemplateElement;
    createCard: (apiData: TPokeAPI, parentContainer: HTMLElement, cardArray: Card[]) => void;
}
//# sourceMappingURL=CardFactory.d.ts.map