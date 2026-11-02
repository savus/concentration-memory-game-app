import type { TPokeAPI } from "./types.js";
declare const fetchData: (name: string) => Promise<TPokeAPI>;
declare const convertToTSObject: (data: any) => TPokeAPI;
declare const fetchAndConvertAllPokemon: (names: string[]) => Promise<TPokeAPI[]>;
declare const API_REQUESTS: {
    fetchData: typeof fetchData;
    convertToTSObject: typeof convertToTSObject;
    fetchAndConvertAllPokemon: typeof fetchAndConvertAllPokemon;
};
export default API_REQUESTS;
//# sourceMappingURL=api.d.ts.map