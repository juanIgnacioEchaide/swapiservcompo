"use client";

import { Suspense, useEffect, useState } from "react";

import Loading from "../page/Loading";
import ItemsPages from "./itemsPages";
import { SwapiEntity } from "@/models/entities"
import ItemsList from "./ItemsList";
import { Title } from "@/utils/constants";
import PageTitle from "../page/pageTitle";

interface ItemsListContainerProps<SwapiEntity> {
    title: string
    items: SwapiEntity[][]
    availablePages: number[]
    lastPageFetched: number
}

export default function ItemsListTemplate({ 
    title, 
    items, 
    availablePages, 
    lastPageFetched 
}: ItemsListContainerProps<SwapiEntity>) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [chunks, setChunks] = useState<SwapiEntity[][]>([])
    const [currentChunk, setCurrentChunk] = useState<SwapiEntity[]>([])

    useEffect(() => {
        setChunks(items)        
    },[currentIndex, items])

    return (<div>
                <Suspense fallback={<Loading />}>
                    <PageTitle title={title} />
                    <ItemsList 
                        items={currentChunk} 
                        availablePages={availablePages} 
                        setCurrentIndex={setCurrentIndex}/>
                </Suspense>
            </div>)
}