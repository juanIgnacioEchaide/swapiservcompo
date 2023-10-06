"use client";

import { Suspense, useEffect, useState } from "react";

import Loading from "../atoms/page/Loading";
import { SwapiEntity } from "@/models/entities"
import ItemsList from "../organisms/items-list/ItemsList";
import PageTitle from "../atoms/page/pageTitle";

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
    const [currentIndex, setCurrentIndex] = useState<number>(1)
    const [chunks, setChunks] = useState<SwapiEntity[][]>([])
    const [currentChunk, setCurrentChunk] = useState<SwapiEntity[]>([])

    useEffect(() => {
        setChunks(items)        
    },[currentIndex, items])

    useEffect(() => {
        setCurrentChunk(chunks[currentIndex])
    }, [chunks, currentIndex])

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