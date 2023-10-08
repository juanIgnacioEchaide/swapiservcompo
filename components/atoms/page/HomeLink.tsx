"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HomeLinkProps {
  title: string;
  imageUrl: string;
  route: string;
}

export function HomeLink({ title, imageUrl, route }: HomeLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={route} passHref>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          textDecoration: 'none',
          marginLeft: '1vh',
          fontSize: '2vh',
          color: 'white',
          fontFamily: "'Mona-sans',system ui, sans-serif",
          position: 'relative',
          top: isHovered ? '-5%' : '0',
          transition: 'top 0.3s ease',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              height: '40vh',
              width: '15vw',
              padding: '5vh',
              textDecoration: 'none',
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image src={imageUrl} alt={title} width={300} height={300} />
          </div>
          <div
            style={{
              padding: '5vh',
              width: '15vw',
              textDecoration: 'none',
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h2 className="title">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
