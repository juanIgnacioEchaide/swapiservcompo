import EntityDetails from "@/components/atoms/page/EntityDetails";
import { DetailsSectionProps } from "@/models/props";
import { setKey } from "@/utils/helpers";

export function DetailsSection({ data }: DetailsSectionProps) {

    return (<div className="details-section">
        <div className="details-wrapper">
            <EntityDetails key={setKey()} data={data} />
        </div>
    </div>)
}
