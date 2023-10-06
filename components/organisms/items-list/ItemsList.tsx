import Loading from "@/components/atoms/page/Loading"
import { SwapiEntity } from "@/models/entities"
import { isPeople, isFilm, setKey } from "@/utils/helpers"
import { Dispatch, SetStateAction } from "react"

interface ItemsListProps {
    items: SwapiEntity[]
    selectedItem: SwapiEntity | undefined
    availablePages: number
    currentIndex: number | undefined
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
                <div
                    style={{
                        width: '50vw',
                        height: '50vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}>
                    <p>{JSON.stringify(selectedItem, null, 2)}</p>
                </div>

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
                    paddingTop: '2%',
                    textAlign: 'justify'
                }}>
                {
                    items ?
                        items?.map((item, index) =>
                            <div key={setKey()}
                                style={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => setSelectedItemIndex(index)}>
                                <p key={setKey()}
                                    style={{
                                        fontWeight: selectedItemIndex && (index === selectedItemIndex) ? 1000 : 3000,
                                    }}
                                >
                                    {isPeople(item) && item.name}
                                    {isFilm(item) && item.title} </p>
                            </div>) :
                        <Loading />
                }
            </div>
            <div
                style={{
                    width: '40vw',
                    height: '20vh',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: 'monospace, sans-serif'
                }}>
                <div
                    style={{
                        cursor: 'pointer',
                        paddingLeft: '20%'
                    }}
                    onClick={() => currentIndex && currentIndex > 1 &&
                        setCurrentIndex(currentIndex - 1)}>
                    <p>prev</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <p
                        style={{
                            fontSize: '5vh',
                            fontWeight: 4000
                        }}>
                        {currentIndex}
                    </p>
                    <p
                        style={{
                            fontSize: '5vh',
                            fontWeight: 1000
                        }}>/</p>
                    <p
                        style={{
                            fontSize: '5vh',
                            fontWeight: 1000
                        }}>{availablePages}</p>
                </div>
                <div
                    style={{
                        cursor: 'pointer',
                        paddingRight: '20%'
                    }}
                    onClick={() => currentIndex && currentIndex < availablePages &&
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