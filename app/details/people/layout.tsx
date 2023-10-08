import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { BaseWrapperProps } from '@/models/props';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';

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
                    justifyContent: 'space-around'
                }}>
                <h1 style={{
                    fontSize: '4.75em'
                }}>People</h1>
                <Link href={'/'}>
                    <HomeOutlined
                        style={{
                            fontSize: '4vh',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }} />
                </Link>
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
