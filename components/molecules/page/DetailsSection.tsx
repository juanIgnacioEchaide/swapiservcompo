import EntityDetails from "@/components/atoms/page/EntityDetails";
import { DetailsSectionProps } from "@/models/props";
import { setKey } from "@/utils/helpers";

export function DetailsSection({ data }: DetailsSectionProps) {

    return (<div className="details-section" key={setKey()}>
        <div className="details-wrapper">
            <div className="details-left-wrapper"
                style={{
                    borderRadius: '30%',
                    padding: '20px',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                }}
            >
                <EntityDetails data={data} />
            </div>
            <div
                className="details-right-wrapper"
                style={{
                    backgroundColor: 'green'
                }}>image</div>
        </div>
    </div>)
}
