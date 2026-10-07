import type { TPokeAPI } from "./types.js";
declare const API_REQUESTS: {
    fetchData: (name: string) => Promise<TPokeAPI>;
    convertToTSObject: (data: any) => TPokeAPI;
    fetchAndConvertAllPokemon: (names: string[]) => Promise<TPokeAPI[]>;
};
export default API_REQUESTS;
//# sourceMappingURL=api.d.ts.map