import './/global.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react"; 
import { wording } from '@/utils/constants';
import { BaseWrapperProps } from '@/models/props';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swapi Server Component',
  description: 'Example using server component Star Wars API',
}

export default function Layout({ children }: BaseWrapperProps) {
  return (
    <div className="layout">
      <header className="layout__header">
        <nav>
          <h1 className="layout__header__title">{wording.title}</h1>
        </nav>
      </header>
      <main className="layout__main">
        <section>{children}</section>
      </main>
      <footer className="layout__footer">
        <p>{wording.footer}</p>
      </footer>
    </div>
  );
}
