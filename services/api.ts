import { PagesChunkResult } from "@/models/api";
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

async function getPagesChunk(url: URI, page?: number): Promise<PagesChunkResult> {
    let currentFetch = !page ? 1 : page;
    const fetchLimit = !page ? DEFAULT_FETCH_AMOUNT : page + DEFAULT_FETCH_AMOUNT;
    const dataChunks: SwapiEntity[][] = [];
    const fetchedPages: number[] = [];

    while (currentFetch <= fetchLimit) {
        try {
            let currentData = await getSinglePage(url, currentFetch);
            dataChunks.push(currentData?.results);
            fetchedPages.push(currentFetch);
            currentFetch++;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    return {
        data: dataChunks,
        pages: fetchedPages,
    };
}

export const api = {
    getPeople: (page?: number) => getPagesChunk(URI.PEOPLE, page),
    getStarships: (page?: number) => getPagesChunk(URI.STARSHIP, page),
    getPlanets: (page?: number) => getPagesChunk(URI.PLANET, page),
    getFilms: (page?: number) => getPagesChunk(URI.FILMS, page),
    getSpecies: (page?: number) => getPagesChunk(URI.SPECIES, page),
    getVehicles: (page?: number) => getPagesChunk(URI.VEHICLES, page),
};
