import { People, SwapiEntity } from "@/models/entities"
import { setKey } from "@/utils/helpers"
import ItemsPages from "../../molecules/page/itemsPages"
import { Dispatch, SetStateAction } from "react"
import Loading from "@/components/atoms/page/Loading"

interface ItemsListProps {
    items: SwapiEntity[]
    availablePages: number[]
    setCurrentIndex: Dispatch<SetStateAction<number>>
}

export default function ItemsList({ items, availablePages, setCurrentIndex }: ItemsListProps) {

    return <div
            style={{
                width: '100vw',
                height: '80vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {items?.length ?
                items?.map((item: SwapiEntity, _idx: number) =>
                    <div key={setKey()}>
                        {JSON.stringify(item)}
                    </div>) :
                <Loading />}
                <ItemsPages
                    pages={availablePages}
                    setCurrentChunk={setCurrentIndex}
                />
            </div>
}