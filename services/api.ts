import { PagesChunkResult } from "@/models/api";
import { DEFAULT_FETCH_AMOUNT, URI } from "@/utils/constants";
import CacheManager from "@/cache/cache-manager"

async function getSinglePage(url: URI, page?: number) {
    //if page is not provided base URI used to fetch
    const _url = !page ? url : `${url}?page=${page}`

    //promise try-catch block
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

    //if data is cached return without fetching
    if (cachedData) {
        return cachedData;
    }

    //if number param is not provided sets 1 for pages
    let currentFetch = !page ? 1 : page;
    const fetchLimit = !page ? DEFAULT_FETCH_AMOUNT : page + DEFAULT_FETCH_AMOUNT;
    const dataChunks: any[][] = [];

    //promise implementation
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = await response.json();

        // double check of number of pages
        if (responseData && responseData.count) {
            availablePages = responseData.count;
        } else {
            throw new Error('Invalid API response format');
        }

        //consecutive fetches until limit is reached
        while (currentFetch <= fetchLimit) {
            try {
                const { results } = await getSinglePage(url, currentFetch);

                if (results && results.length > 0) {
                    dataChunks.push(results);
                } else {
                    // avoiding to return empty chunks
                    break;
                }
                dataChunks.push(results);
                currentFetch++;
            } catch (e: any) {
                throw new Error(e.message);
            }
        }
        //returned model object
        const result: PagesChunkResult = {
            data: dataChunks,
            lastPageFetched: currentFetch,
            availablePages
        };


        //stored in cache
        CacheManager.setDataToCache(cacheKey, result, 3600);

        return result;

    } catch (error: any) {

        //promise rejection
        throw new Error(
            'Error fetching data from the API: ' +
            error?.message);
    }
}



export const api = {
    getPeople: (page?: number) => getPagesChunk(URI.PEOPLE, page),
    getStarships: (page?: number) => getPagesChunk(URI.STARSHIP, page),
    getPlanets: (page?: number) => getPagesChunk(URI.PLANET, page),
    getFilms: (page?: number) => getPagesChunk(URI.FILMS, page),
    getSpecies: (page?: number) => getPagesChunk(URI.SPECIES, page),
    getVehicles: (page?: number) => getPagesChunk(URI.VEHICLES, page),
};
