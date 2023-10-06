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

            <div className="details-section">
                <div className="details-wrapper">
                    <EntityDetails key={generateKey()} data={selectedItem as unknown as { [key: string]: string; }} />
                </div>
            </div>

            <div className="items-list-section">

                <div className="items-list-container-inner">
                    {items ? items.map((item, index) => (
                        <div className="item" key={generateKey()} onClick={() => setSelectedItemIndex(index)}>
                            <p style={{ fontWeight: selectedItemIndex !== undefined && index === selectedItemIndex ? 1000 : 3000 }}>
                                {isPeople(item) && item.name}
                                {isFilm(item) && item.title}
                            </p>
                        </div>
                    )) : <Loading />}
                </div>
                <div className="pagination">
                    <div className="pagination-button" onClick={() => currentIndex !== undefined && currentIndex > 1 && setCurrentIndex(currentIndex - 1)}>
                        <p>prev</p>
                    </div>
                    <div className="page-number">{currentIndex}</div>
                    <div className="page-number">/</div>
                    <div className="page-number">{availablePages}</div>
                    <div className="pagination-button" onClick={() => currentIndex !== undefined && currentIndex < availablePages && setCurrentIndex(currentIndex + 1)}>
                        <p>next</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ItemsList;
