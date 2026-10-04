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
//# sourceMappingURL=api.js.map