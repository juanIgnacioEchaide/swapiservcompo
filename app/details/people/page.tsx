import ItemsListContainer from "@/components/ItemsListContainer"
import { api } from "@/services/api"

export default async function People() {

    const data = await api.getPeople()

    return (<div>
        <ItemsListContainer items={data} title={'People'} pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </div>)
}