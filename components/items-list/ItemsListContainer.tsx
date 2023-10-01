"use client";

import { Suspense, useState } from "react";

import ItemsList from "./ItemsList";
import Loading from "../page/Loading";
import ItemsPages from "./itemsPages";
import { SwapiEntity } from "@/models/entities"
import { generateConsecutiveNumbers } from "@/utils/helpers";

interface ItemsListContainerProps<SwapiEntity> {
    title: string
    items: SwapiEntity[][]
    availablePages: number
}

export default function ItemsListContainer({ items, availablePages }: ItemsListContainerProps<SwapiEntity>) {
    const pages = generateConsecutiveNumbers(availablePages)
    const [currentChunk, setCurrentChunk] = useState<number>(0)

    return (<div>
        <Suspense fallback={<Loading />}>
            <ItemsList items={items[currentChunk]} />
            <ItemsPages
                pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                setCurrentChunk={setCurrentChunk}
            />
        </Suspense>
    </div>)
}