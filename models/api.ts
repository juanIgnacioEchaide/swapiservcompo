import { SwapiEntity } from "./entities";

export interface PagesChunkResult {
    data: SwapiEntity[][];
    lastPageFetched: number
    availablePages: number
}