import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { BaseWrapperProps } from '@/models/props';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Swapi People',
    description: 'Example using server component Star Wars API',
}

export default function Layout({ children }: BaseWrapperProps) {
    return (
        <div>
            <nav
                style={{
                    width: '100vw',
                    height: '7vh',
                    color: 'blue',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '5%',
                }}>
                <h1 style={{
                    fontSize: '4.75em'
                }}>People</h1>
            </nav>
            <main
                style={{
                    backgroundColor: 'blue',
                    width: '100vw',
                    height: '70vh',
                    color: 'white',
                }}>
                {children}
            </main>
        </div>
    );
}
