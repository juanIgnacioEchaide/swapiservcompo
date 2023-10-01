import { PagesChunkResult } from "@/models/api";
import { URI } from "../utils/constants";
import NodeCache from "node-cache"

class CacheManager {
    private static instance: CacheManager;
    private cache: any;

    private constructor() {
        this.cache = new NodeCache();
    }

    public static getInstance(): CacheManager {
        if (!CacheManager.instance) {
            CacheManager.instance = new CacheManager();
        }
        return CacheManager.instance;
    }

    public getCacheKey(url: URI, page?: number): string {
        return !page ? `${url}` : `${url.split('?page=')[0]}`;
    }

    public getDataFromCache(cacheKey: string): PagesChunkResult | undefined {
        return this.cache.get(cacheKey) as PagesChunkResult | undefined;
    }

    public setDataToCache(cacheKey: string, data: PagesChunkResult, ttlSeconds: number): void {
        this.cache.set(cacheKey, data, ttlSeconds);
    }
}

export default CacheManager.getInstance();
