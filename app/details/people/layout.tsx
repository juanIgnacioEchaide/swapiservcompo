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
        <div>
            <header>
                <nav
                    style={{
                        backgroundColor: 'black',
                        width:'100vw',
                        height: '7vh',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '5%',
                    }}>
                    <h1>People</h1>
                </nav>
            </header>
            <main
             style={{
                backgroundColor: 'blue',
                width:'100vw',
                height: '70vh',
                color: 'white',
            }}>
                {children}
            </main>
        </div>
    );
}
