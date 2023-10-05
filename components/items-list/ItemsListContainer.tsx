"use client";

import { Suspense, useState } from "react";

import ItemsList from "./ItemsList";
import Loading from "../page/Loading";
import ItemsPages from "./itemsPages";
import { SwapiEntity } from "@/models/entities"

interface ItemsListContainerProps<SwapiEntity> {
    title: string
    items: SwapiEntity[][]
    availablePages: number[]
}

export default function ItemsListContainer({ items, availablePages }: ItemsListContainerProps<SwapiEntity>) {

    const [currentChunk, setCurrentChunk] = useState<number>(0)

    return (<div>
        <Suspense fallback={<Loading />}>
            <ItemsList items={items[currentChunk]} />
            <ItemsPages
                pages={availablePages}
                setCurrentChunk={setCurrentChunk}
            />
        </Suspense>
    </div>)
}