"use client";

import { Suspense, useCallback, useEffect, useState } from "react";

import Loading from "../atoms/page/Loading";
import { SwapiEntity } from "@/models/entities"
import ItemsList from "../organisms/items-list/ItemsList";

interface ItemsListContainerProps<SwapiEntity> {
    items: SwapiEntity[][]
    availablePages: number
}

export default function ItemsListTemplate({
    items,
    availablePages,
}: ItemsListContainerProps<SwapiEntity>) {
    const [currentIndex, setCurrentIndex] = useState<number>(1)
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1)
    const [chunks, setChunks] = useState<SwapiEntity[][]>([])
    const [currentChunk, setCurrentChunk] = useState<SwapiEntity[]>([])
    const [selectedItem, setSelectedItem] = useState<SwapiEntity>()

    const handleChunks = useCallback(() => {
        items && setChunks(items)
    }, [items])

    const handleCurrentPage = useCallback(() => {
        chunks && setCurrentChunk(chunks[currentIndex])
    }, [chunks, currentIndex])

    const handleSelectedItem = useCallback(() => {
        currentChunk && setSelectedItem(currentChunk[selectedItemIndex]);
    }, [currentChunk, selectedItemIndex])

    useEffect(() => {
        handleChunks()
    }, [handleChunks])

    useEffect(() => {
        handleCurrentPage()
    }, [handleCurrentPage])

    useEffect(() => {
        handleSelectedItem()
    }, [handleSelectedItem])

    return (<div>
                <Suspense fallback={<Loading />}>
                    <ItemsList
                        items={currentChunk}
                        selectedItem={selectedItem}
                        availablePages={availablePages}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                        selectedItemIndex={selectedItemIndex}
                        setSelectedItemIndex={setSelectedItemIndex} />
                </Suspense>
            </div>)
}