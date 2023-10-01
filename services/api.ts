import { PagesChunkResult } from "@/models/api";
import { DEFAULT_FETCH_AMOUNT, URI } from "@/utils/constants";
import CacheManager from "@/lib/cache-manager"

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
    const cacheKey = CacheManager.getCacheKey(url, page);
    const cachedData = CacheManager.getDataFromCache(cacheKey);
    let availablePages: number = 0;

    if (cachedData) {
        return cachedData;
    }

    let currentFetch = !page ? 1 : page;
    const fetchLimit = !page ? DEFAULT_FETCH_AMOUNT : page + DEFAULT_FETCH_AMOUNT;
    const dataChunks: any[][] = [];

    while (currentFetch <= fetchLimit) {
        try {
            const currentData = await getSinglePage(url, currentFetch);
            availablePages = currentData?.count
            dataChunks.push(currentData?.results);
            currentFetch++;
            
        } catch (e: any) {
            throw new Error(e.message);
        }
    }

    const result: PagesChunkResult = {
        data: dataChunks,
        lastPageFetched: currentFetch - 1,
        availablePages: availablePages
    };

    CacheManager.setDataToCache(cacheKey, result, 3600);

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
