import React from "react";
import EntityDetails from "@/components/atoms/page/EntityDetails";
import Loading from "@/components/atoms/page/Loading";
import { SwapiEntity } from "@/models/entities";
import { isPeople, isFilm, setKey } from "@/utils/helpers";
import { Dispatch, SetStateAction } from "react";
import './ItemList.css';

interface ItemsListProps {
    items: SwapiEntity[];
    selectedItem: SwapiEntity | undefined;
    availablePages: number;
    currentIndex: number | undefined;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    selectedItemIndex: number | undefined;
    setSelectedItemIndex: Dispatch<SetStateAction<number>>;
}

const generateKey = () => {
    return Math.random().toString(36).substr(2, 9);
};

interface DetailsSectionProps {
    data: { [key: string]: string; }
}

interface ItemListSectionProps {
    items: SwapiEntity[]
    selectedItemIndex: number | undefined
    setSelectedItemIndex: React.Dispatch<React.SetStateAction<number>>
}

interface PaginationSectionProps {
    currentIndex: number | undefined
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
    availablePages: number
}

export function DetailsSection({ data }: DetailsSectionProps) {

    return (<div className="details-section">
        <div className="details-wrapper">
            <EntityDetails key={generateKey()} data={data} />
        </div>
    </div>)
}

export function ItemListSection({ items, selectedItemIndex, setSelectedItemIndex }: ItemListSectionProps) {
    return (<div className="items-list-section">
        <div className="items-list-container-inner">
            {items ? items.map((item, index) => (
                <div className="item" key={generateKey()} onClick={() => setSelectedItemIndex(index)}>
                    <p style={{ fontWeight: selectedItemIndex !== undefined && index === selectedItemIndex ? 1000 : 3000 }}>
                        {isPeople(item) && item.name}
                        {isFilm(item) && item.title}
                    </p>
                </div>
            )) : <Loading />}
        </div></div>)
}

export function PaginationSection({ currentIndex, setCurrentIndex, availablePages }: PaginationSectionProps) {
    return (<div className="pagination">
        <div className="pagination-button"
            onClick={() => currentIndex !== undefined &&
                currentIndex > 1 &&
                setCurrentIndex(currentIndex - 1)}>
            <p>prev</p>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div className="page-number-light">{currentIndex}</div>
            <div className="page-number-bold">/</div>
            <div className="page-number-bold">{availablePages}</div>
        </div>
        <div className="pagination-button"
            onClick={() => currentIndex !== undefined &&
                currentIndex < availablePages &&
                setCurrentIndex(currentIndex + 1)}>
            <p>next</p>
        </div>
    </div>)
}

const ItemsList: React.FC<ItemsListProps> = ({
    items,
    availablePages,
    selectedItem,
    currentIndex,
    setCurrentIndex,
    selectedItemIndex,
    setSelectedItemIndex,
}: ItemsListProps) => {


    return (
        <div className="items-list-container">
            <DetailsSection data={selectedItem as unknown as { [key: string]: string; }} />
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <ItemListSection
                    items={items}
                    selectedItemIndex={selectedItemIndex}
                    setSelectedItemIndex={setSelectedItemIndex}
                />
                <PaginationSection
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    availablePages={availablePages}
                /></div>
        </div>
    );
};

export default ItemsList;
