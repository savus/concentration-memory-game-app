const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const fetchData = async (name) => {
    try {
        const response = await fetch(`${BASE_URL}${name}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return convertToTSObject(data);
    }
    catch (error) {
        if (!navigator.onLine) {
            console.error("Offline: Please check your internet connection");
        }
        else {
            console.error("a network or parsing error has occurred");
        }
        return buildDummyData();
    }
};
const convertToTSObject = (data) => {
    return {
        name: data.name,
        type: data.types[0].type.name,
        img: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        isDummyData: false,
    };
};
const buildDummyData = () => {
    return {
        name: "mike",
        type: "mike",
        img: "mike",
        hp: 35,
        attack: 35,
        defense: 35,
        special_attack: 35,
        special_defense: 35,
        speed: 8,
        isDummyData: true,
    };
};
const fetchAndConvertAllPokemon = (names) => Promise.all(names.map((name) => fetchData(name)));
const API_REQUESTS = {
    fetchData,
    convertToTSObject,
    fetchAndConvertAllPokemon,
};
export default API_REQUESTS;
//# sourceMappingURL=api.js.map