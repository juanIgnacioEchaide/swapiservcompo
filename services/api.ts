import { URI } from "@/utils/constants";

async function getData(url: URI, page?: number) {

    const _url = !page ? url : `${url}?page=${page}`

    try {
        const response = await fetch(_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.json()

    } catch (e: any) {
        throw new Error(e.message);
    }
}

export const api = {
    getPeople: (page?: number) => getData(URI.PEOPLE, page),
    getStarships: () => getData(URI.STARSHIP),
    getPlanets: () => getData(URI.PLANET),
    getFilms: () => getData(URI.FILMS),
    getSpecies: () => getData(URI.SPECIES),
    getVehicles: () => getData(URI.VEHICLES),
};
