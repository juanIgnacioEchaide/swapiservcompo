
export default function Item({ item, isSelected, setSelectedItemIndex }: any){
  return (
    <div
      style={{
        cursor: 'pointer',
      }}
      onClick={() => setSelectedItemIndex(item.index)}
    >
      <p
        style={{
          fontWeight: isSelected ? 1000 : 3000,
        }}
      >
        {item.name || item.title}
      </p>
    </div>
  );
};
