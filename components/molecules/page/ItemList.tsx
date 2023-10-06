import Item from "@/components/atoms/page/Item";
import Loading from "@/components/atoms/page/Loading";
import { SwapiEntity } from "@/models/entities";

export default function ItemList({ items, selectedItemIndex, setSelectedItemIndex }: any){
  return (
    <div>
      {items ? (
        items.map((item: SwapiEntity, index: number) => (
          <Item
            key={index}
            item={item}
            isSelected={index === selectedItemIndex}
            setSelectedItemIndex={setSelectedItemIndex}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};
