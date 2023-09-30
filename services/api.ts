import { DEFAULT_FETCH_AMOUNT, URI } from "@/utils/constants";

async function getSinglePage(url: URI, page?: number) {

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

async function getPagesChunk(url: URI, page?: number) {
    let currentFetch = !page ? 0 : page;
    const fetchLimit = !page ? DEFAULT_FETCH_AMOUNT : page + DEFAULT_FETCH_AMOUNT;
    const dataChunks: SwapiEntity[][] = [];

    while (currentFetch <= fetchLimit) {
        try {
            let currentData = await getSinglePage(url, currentFetch); // Wait for the asynchronous call to complete
            dataChunks.push(currentData); // Add currentData to dataChunks array
            currentFetch++; // Increment currentFetch for the next iteration
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    return dataChunks;
}

export const api = {
    getPeople: (page?: number) => getPagesChunk(URI.PEOPLE, page),
    getStarships: () => getPagesChunk(URI.STARSHIP),
    getPlanets: () => getPagesChunk(URI.PLANET),
    getFilms: () => getPagesChunk(URI.FILMS),
    getSpecies: () => getPagesChunk(URI.SPECIES),
    getVehicles: () => getPagesChunk(URI.VEHICLES),
};
