import ItemsListContainer from "@/components/items-list/ItemsListContainer"
import PageTitle from "@/components/page/pageTitle"
import { api } from "@/services/api"
import { Title } from "@/utils/constants"

export default async function People({ params }: { params: { lastFetchedPage: number } }) {

    const { data, availablePages, lastPageFetched } = await api.getPeople(params?.lastFetchedPage)

    return (<div>
        {JSON.stringify(availablePages)}
        <PageTitle title={Title.PEOPLE as string} />
        <ItemsListContainer
            items={data}
            title={Title.PEOPLE}
            availablePages={availablePages}
        />
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