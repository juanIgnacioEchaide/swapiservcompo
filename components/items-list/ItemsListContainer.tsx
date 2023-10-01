"use client";

import { Suspense, useState } from "react";

import ItemsList from "./ItemsList";
import Loading from "../page/Loading";
import ItemsPages from "./itemsPages";

interface ItemsListContainerProps<SwapiEntity> {
    title: string
    items: SwapiEntity[][]
    pages: number[]
}

export default function ItemsListContainer({ items, pages }: ItemsListContainerProps<SwapiEntity>) {

    const [currentChunk, setCurrentChunk] = useState<number>(0)

    return (<div>
                <Suspense fallback={<Loading />}>
                    <ItemsList items={items[currentChunk]} />
                    <ItemsPages
                        pages={pages}
                        setCurrentChunk={setCurrentChunk}
                    />
                </Suspense>
            </div>)
}