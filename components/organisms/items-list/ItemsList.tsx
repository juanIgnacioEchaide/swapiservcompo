import './ItemList.css';
import { DetailsSection } from "@/components/molecules/page/DetailsSection";
import { ItemListSection } from "@/components/molecules/page/ItemsListSection";
import { PaginationSection } from "@/components/molecules/page/PaginationSection";
import { ItemsListProps } from "@/models/props";

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
                    setSelectedItemIndex={setSelectedItemIndex}
                /></div>
        </div>
    );
};

export default ItemsList;
