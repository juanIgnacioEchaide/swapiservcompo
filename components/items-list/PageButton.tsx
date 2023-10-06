import React from 'react';

export default function PageButton({ number, isSelected, onClick }: any) {
  return (
    <button
      onClick={() => onClick(number)}
      style={{
            fontWeight: isSelected ? 5000 : 1000
        }}
    >
      {number}
    </button>
  );
}
