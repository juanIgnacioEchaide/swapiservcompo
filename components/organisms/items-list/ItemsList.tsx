import { SwapiEntity } from "@/models/entities"
import { setKey } from "@/utils/helpers"
import { Dispatch, SetStateAction } from "react"

interface ItemsListProps {
    items: SwapiEntity[]
    selectedItem: SwapiEntity | undefined
    availablePages: number
    currentIndex: number  | undefined
    setCurrentIndex: Dispatch<SetStateAction<number>>
    selectedItemIndex: number | undefined
    setSelectedItemIndex: Dispatch<SetStateAction<number>>
}

export default function ItemsList({ 
    items, 
    availablePages, 
    selectedItem,
    currentIndex, 
    setCurrentIndex,
    selectedItemIndex, 
    setSelectedItemIndex,
}: ItemsListProps) {
    
    return <div
        style={{
            width: '100vw',
            height: '80vh',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden'
        }}>
        <div
            style={{
                width: '60vw',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div
                style={{
                    width: '60vw',
                    height: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}>
                <p>{JSON.stringify(selectedItem)}</p>
            </div>
        </div>
        <div
            style={{
                width: '40vw',
                height: '80vh',
                background: 'red',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <div
                style={{
                    width: '40vw',
                    height: '50vh',
                    background: 'red',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '2%'
                }}>
                {items?.map(i => <p key={setKey()}>{setKey()}</p>)}
            </div>
            <div
                style={{
                    width: '40vw',
                    height: '20vh',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                    <div
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={() => currentIndex && currentIndex > 1 && 
                        setCurrentIndex(currentIndex - 1)}>
                        <p>prev</p>
                    </div>
                    <div>{currentIndex}/{availablePages}</div>
                    <div
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={() => currentIndex  && currentIndex < availablePages && 
                        setCurrentIndex(currentIndex + 1)}>
                        <p>next</p>
                    </div>
            </div>

        </div>
    </div>
}

/*   {items?.length ?
                items?.map((item: SwapiEntity, _idx: number) =>
                    <div key={setKey()}>
                        {JSON.stringify(item)}
                    </div>) :
                <Loading />}
                <ItemsPages
                    pages={availablePages}
                    setCurrentChunk={setCurrentIndex}
                />*/