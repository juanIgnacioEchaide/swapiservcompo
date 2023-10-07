import React, { useMemo } from 'react';
import { filterAndFormatData, formatSnakeCase } from '@/utils/helpers';
import './EntityDetails.css';

interface EntityDetailsProps {
  data: Record<string, string>;
}

const EntityDetails: React.FC<EntityDetailsProps> = ({ data }: EntityDetailsProps) => {
  const formattedData = useMemo(() => {
    if (data) {
      return filterAndFormatData(data);
    }
  }, [data]);

  return (
    <div className="entity-details">
      {formattedData?.map(({ formattedKey, value }) => (
        <div key={formattedKey}>
          <strong>{formattedKey}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default EntityDetails;
