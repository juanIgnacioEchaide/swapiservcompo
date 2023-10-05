import { SwapiEntity } from "@/models/entities"
import { setKey } from "@/utils/helpers"

interface ItemsListProps {
    items: SwapiEntity[]
}

export default function ItemsList({ items }: ItemsListProps) {
    return <div>{items?.map((item: SwapiEntity, _idx: number) =>
        <div key={setKey()}>
            {JSON.stringify(item)}
        </div>)}
    </div>
}