import ItemsListContainer from "@/components/ItemsListContainer"
import { api } from "@/services/api"
import { Title } from "@/utils/constants"

export default async function People() {

    const { data, pages } = await api.getPeople()

    return (<div>
                <ItemsListContainer
                    items={data}
                    title={Title.PEOPLE}
                    pages={pages}
                />
            </div>)
}