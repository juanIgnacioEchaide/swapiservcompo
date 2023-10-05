import ItemsListContainer from "@/components/items-list/ItemsListContainer"
import PageTitle from "@/components/page/pageTitle"
import { api } from "@/services/api"
import { Title, URI } from "@/utils/constants"
import CacheManager from "@/lib/cache-manager"
import { generateConsecutiveNumbers } from "@/utils/helpers"

export default async function People({ params }: { params: { lastFetchedPage: number } }) {
    const cachedData = CacheManager.getDataFromCache(URI.PEOPLE);
    const { data, availablePages, lastPageFetched } = await api.getPeople(params?.lastFetchedPage)

    const pages = generateConsecutiveNumbers(10)

    return (<div>
                <p style={{ color: 'green'}}>{JSON.stringify(availablePages)}</p>
                <PageTitle title={Title.PEOPLE as string} />
                <ItemsListContainer
                    items={data}
                    title={Title.PEOPLE}
                    availablePages={pages}
                />
                <p>last {lastPageFetched}</p>
            </div>)
}

/* TODO:
    -re-render RSC
    -not render non-items page
    -render suspense & loading
    -cache of all chunks
    -abstraction or dynamic pages
    -style of pages
    -"name" property for all except films with "title"
    -unit testing
*/