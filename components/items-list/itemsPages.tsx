import { setKey } from "@/utils/helpers"
import { Dispatch, SetStateAction } from "react"

interface ItemsPagesProps {
    setCurrentChunk: Dispatch<SetStateAction<number>>
    pages?: number[]
}

export default function ItemsPages({ pages, setCurrentChunk }: ItemsPagesProps) {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer'
    }}>
        {pages?.map((pageNum: number) => <div
            key={setKey()}
            onClick={(e) => setCurrentChunk(pageNum)}>
            {pageNum}
        </div>)}
    </div>
}