import { api } from "@/services/api"
import ItemsListTemplate from "@/components/template/ItemsListTemplate"

export default async function People({ params }: { params: { lastFetchedPage: number } }) {
    const { data, lastPageFetched } = await api.getPeople(params?.lastFetchedPage)

    return (<ItemsListTemplate items={data} availablePages={lastPageFetched} />)
}