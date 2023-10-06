import { setKey } from "@/utils/helpers"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import PageButton from "../../atoms/page/PageButton"

interface ItemsPagesProps {
    setCurrentChunk: Dispatch<SetStateAction<number>>
    pages?: number[]
}

export default function ItemsPages({ pages, setCurrentChunk }: ItemsPagesProps) {

    const [pageButtons, setPageButtons] = useState<{pageNum: number, isSelected: boolean}[]>([])

    useEffect(() => {
        if(pages?.length){
            setPageButtons(() => {
                return pages?.map((i) => ({
                    pageNum: i,
                    isSelected: false
                }))
            })
        }
    } ,[pages])

    return (<div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    cursor: 'pointer',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '80%'
                }}>
                {pageButtons?.map((button: {pageNum: number, isSelected: boolean}) => 
                    <PageButton 
                        key={setKey()} 
                        number={button.pageNum}
                        isSelected={button.isSelected}
                        onClick={() => setCurrentChunk(button.pageNum)}
                        />)}
            </div>)
}