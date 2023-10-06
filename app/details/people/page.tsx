
import PageTitle from "@/components/atoms/page/pageTitle"
import { api } from "@/services/api"
import { Title } from "@/utils/constants"
import { generateConsecutiveNumbers } from "@/utils/helpers"
import ItemsListTemplate from "@/components/template/ItemsListTemplate"

export default async function People({ params }: { params: { lastFetchedPage: number } }) {
    const { data, availablePages, lastPageFetched } = await api.getPeople(params?.lastFetchedPage)

    const pages = generateConsecutiveNumbers(lastPageFetched)

    return (<div>
                <p style={{ color: 'green' }}>{JSON.stringify(availablePages)}</p>
                <PageTitle title={Title.PEOPLE as string} />
                <ItemsListTemplate
                    items={data}
                    title={Title.PEOPLE}
                    availablePages={pages}
                    lastPageFetched={lastPageFetched} />
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