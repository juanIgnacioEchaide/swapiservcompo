import { PagesChunkResult } from "@/models/api";
import { DEFAULT_FETCH_AMOUNT, URI } from "@/utils/constants";
import NodeCache from "node-cache";

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
    const cache = new NodeCache();
    const cacheKey = !page ? `${url}`: `${url.split('?page=')[0]}`
    const cachedData = cache.get(cacheKey) as PagesChunkResult | undefined;

    if (cachedData) {
        return cachedData;
    }

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

    const result: PagesChunkResult = {
        data: dataChunks,
        pages: fetchedPages,
        lastPageFetched: currentFetch - 1, // Save the last fetched page number
    };

    // Store the fetched data along with the lastPageFetched value in the cache
    cache.set(cacheKey, result, /* TTL in seconds, for example: */ 3600);

    return result;
}

export const api = {
    getPeople: (page?: number) => getPagesChunk(URI.PEOPLE, page),
    getStarships: (page?: number) => getPagesChunk(URI.STARSHIP, page),
    getPlanets: (page?: number) => getPagesChunk(URI.PLANET, page),
    getFilms: (page?: number) => getPagesChunk(URI.FILMS, page),
    getSpecies: (page?: number) => getPagesChunk(URI.SPECIES, page),
    getVehicles: (page?: number) => getPagesChunk(URI.VEHICLES, page),
};
