interface EntityDetailsProps {
  data: {
    [key: string]: string;
  };
}

export default function EntityDetails({ data }:EntityDetailsProps){
  return (
    <div
      style={{
        borderRadius: '30%',
        border: '2px solid #ccc',
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
  );
};
