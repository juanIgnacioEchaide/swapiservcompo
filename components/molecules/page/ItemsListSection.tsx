import Loading from "@/app/loading";
import { ItemListSectionProps } from "@/models/props";
import { setKey, isPeople, isFilm } from "@/utils/helpers";

export function ItemListSection({ items, selectedItemIndex, setSelectedItemIndex }: ItemListSectionProps) {
    return (<div className="items-list-section">
        <div className="items-list-container-inner">
            {items ? items.map((item, index) => (
                <div className="item" key={setKey()} onClick={() => setSelectedItemIndex(index)}>
                    <p style={{ fontWeight: selectedItemIndex !== undefined && index === selectedItemIndex ? 1000 : 3000 }}>
                        {isPeople(item) && item.name}
                        {isFilm(item) && item.title}
                    </p>
                </div>
            )) : <Loading />}
        </div></div>)
}
