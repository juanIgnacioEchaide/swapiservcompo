import ItemsListTemplate from "@/components/items-list/ItemsListTemplate"
import { api } from "@/services/api"
import { Title, URI } from "@/utils/constants"
import CacheManager from "@/lib/cache-manager"
import { generateConsecutiveNumbers } from "@/utils/helpers"

export default async function People({ params }: { params: { lastFetchedPage: number } }) {
    const cachedData = CacheManager.getDataFromCache(URI.PEOPLE);
    const { data, availablePages, lastPageFetched } = await api.getPeople(params?.lastFetchedPage)

    const pages = generateConsecutiveNumbers(availablePages)

    return (<div>
                <ItemsListTemplate
                    items={data}
                    title={Title.PEOPLE}
                    availablePages={pages}
                    lastPageFetched={lastPageFetched}
                />
            </div>)
}