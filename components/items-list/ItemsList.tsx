import { People, SwapiEntity } from "@/models/entities"
import { setKey } from "@/utils/helpers"
import ItemsPages from "./itemsPages"
import { Dispatch, SetStateAction } from "react"

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
            }}
            >{items?.map((item: SwapiEntity, _idx: number) =>
                <div key={setKey()}>
                    {'item.name'}
                </div>)}
                <ItemsPages
                    pages={availablePages}
                    setCurrentChunk={setCurrentIndex}
                />
            </div>
}