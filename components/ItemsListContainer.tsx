"use client";

import { Suspense, useState } from "react";
import Loading from "./Loading";
import ItemsList from "./ItemsList";
import { setKey } from "@/utils/helpers";

interface ItemsListContainerProps<SwapiEntity> {
    title: string
    items: SwapiEntity[][]
    pages: number[]
}

export default function ItemsListContainer({ title, items, pages }: ItemsListContainerProps<SwapiEntity>) {

    const [currentChunk, setCurrentChunk] = useState<number>(0)

    return (<div>
            <Suspense fallback={<Loading />}>
                <p>{title}</p>
                <ItemsList items={items[currentChunk]} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    cursor: 'pointer'    
                    }}>
                    {pages?.map(pageNum => <div
                        key={setKey()}
                        onClick={(e) => setCurrentChunk(pageNum)}>
                        {pageNum}
                    </div>)}
                </div>
            </Suspense>
        </div>)
}