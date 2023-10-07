import { PaginationSectionProps } from "@/models/props"
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

export function PaginationSection({
    currentIndex,
    setCurrentIndex,
    availablePages,
    setSelectedItemIndex
}: PaginationSectionProps) {
    return (<div className="pagination">
        <div className="pagination-button"
            onClick={() => {
                currentIndex !== undefined &&
                currentIndex > 1 &&
                setCurrentIndex(currentIndex - 1)
                setSelectedItemIndex(0)
            }}>
            <p><LeftCircleOutlined /></p>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div className="page-number">Page</div>
            <div className="page-number">{currentIndex}</div>
            <div className="page-number">/</div>
            <div className="page-number">{availablePages}</div>
        </div>
        <div className="pagination-button"
            onClick={() => {
                currentIndex !== undefined &&
                    currentIndex < availablePages &&
                    setCurrentIndex(currentIndex + 1)
                setSelectedItemIndex(0)
            }}>
            <p><RightCircleOutlined /></p>
        </div>
    </div>)
}
