import { URI } from "@/utils/constants";

async function getData(url: URI) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Failed to fetch data from ${url}`);
        }
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export const api = {
    getPeople: () => getData(URI.PEOPLE),
    getStarships: () => getData(URI.STARSHIP),
    getPlanets: () => getData(URI.PLANET),
    getFilms: () => getData(URI.FILMS),
    getSpecies: () => getData(URI.SPECIES),
    getVehicles: () => getData(URI.VEHICLES),
};
