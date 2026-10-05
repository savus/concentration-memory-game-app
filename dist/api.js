const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const API_REQUESTS = {
    fetchData: async (name) => {
        try {
            const response = await fetch(`${BASE_URL}${name}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            if (!navigator.onLine) {
                console.error("Offline: Please check your internet connection");
            }
            else {
                console.error("a network or parsing error has occurred");
            }
        }
    },
};
const convertToTSObject = (data) => {
    return {
        name: data.name,
        type: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
    };
};
//# sourceMappingURL=api.js.map