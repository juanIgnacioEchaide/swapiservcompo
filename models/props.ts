import { Dispatch, ReactNode, SetStateAction } from "react";
import { SwapiEntity } from "./entities";

export interface BaseWrapperProps {
    children: ReactNode
}

export interface ItemsListProps {
    items: SwapiEntity[];
    selectedItem: SwapiEntity | undefined;
    availablePages: number;
    currentIndex: number | undefined;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    selectedItemIndex: number | undefined;
    setSelectedItemIndex: Dispatch<SetStateAction<number>>;
}

export interface DetailsSectionProps {
    data: { [key: string]: string; }
}

export interface ItemListSectionProps {
    items: SwapiEntity[]
    selectedItemIndex: number | undefined
    setSelectedItemIndex: React.Dispatch<React.SetStateAction<number>>
}

export interface PaginationSectionProps {
    currentIndex: number | undefined
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
    availablePages: number
    setSelectedItemIndex: React.Dispatch<React.SetStateAction<number>>
}