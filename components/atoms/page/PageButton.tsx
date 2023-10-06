import React from 'react';

export default function PaginationButtons({ currentIndex, setCurrentIndex, availablePages }: any) {
  return (
    <div
      style={{
        width: '40vw',
        height: '20vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'monospace, sans-serif'
      }}>
      <div
        style={{
          cursor: 'pointer',
          paddingLeft: '20%'
        }}
        onClick={() => currentIndex && currentIndex > 1 &&
          setCurrentIndex(currentIndex - 1)}>
        <p>prev</p>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <p
          style={{
            fontSize: '5vh',
            fontWeight: 4000
          }}>
          {currentIndex}
        </p>
        <p
          style={{
            fontSize: '5vh',
            fontWeight: 1000
          }}>/</p>
        <p
          style={{
            fontSize: '5vh',
            fontWeight: 1000
          }}>{availablePages}</p>
      </div>
      <div
        style={{
          cursor: 'pointer',
          paddingRight: '20%'
        }}
        onClick={() => currentIndex && currentIndex < availablePages &&
          setCurrentIndex(currentIndex + 1)}>
        <p>next</p>
      </div>
    </div>
  );
}
