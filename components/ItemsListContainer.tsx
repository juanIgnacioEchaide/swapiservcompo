"use client";

import { Suspense } from "react";
import Loading from "./Loading";

interface ItemsListContainerProps<SwapiEntity> {
    title: string
    items: SwapiEntity[]
    pages: number[]
}

export default function ItemsListContainer({ title, items, pages }: ItemsListContainerProps<SwapiEntity>) {

    return (<div>
        <Suspense fallback={<Loading />}>
            <ItemsListContainer items={items} title={title} pages={pages} />
        </Suspense>
    </div>)
}