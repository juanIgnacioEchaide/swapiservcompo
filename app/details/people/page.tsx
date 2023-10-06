import { api } from "@/services/api"
import { Title } from "@/utils/constants"
import { generateConsecutiveNumbers } from "@/utils/helpers"
import ItemsListTemplate from "@/components/template/ItemsListTemplate"

export default async function People({ params }: { params: { lastFetchedPage: number } }) {
    const { data, lastPageFetched } = await api.getPeople(params?.lastFetchedPage)

    const pages = generateConsecutiveNumbers(lastPageFetched)

    return (<div>
                <ItemsListTemplate
                    items={data}
                    title={Title.PEOPLE}
                    availablePages={pages}
                    lastPageFetched={lastPageFetched} />
            </div>)
}