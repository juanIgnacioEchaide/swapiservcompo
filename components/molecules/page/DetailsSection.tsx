import EntityDetails from "@/components/atoms/page/EntityDetails";
import { DetailsSectionProps } from "@/models/props";
import { setKey } from "@/utils/helpers";

export function DetailsSection({ data }: DetailsSectionProps) {

    return (<div className="details-section">
        <div className="details-wrapper">
            <div
                style={{
                    borderRadius: '30%',
                    padding: '20px',
                    margin: '10px',
                }}
            >
                {data && Object?.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}:</strong> {value}
                    </div>
                ))}
            </div>
            <div
                className="details-wrapper"
                style={{
                    backgroundColor: 'green'
                }}>p</div>
        </div>
    </div>)
}
