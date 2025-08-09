const CompetitorsDisplay = ({ competitors }) => {
  if (!competitors || competitors.length === 0) return <p>No competitors found.</p>;

  return (
    <div className="competitors-grid">
      {competitors.map((comp, idx) => {
        // Try to extract name and desc using regex or simple split by ":"
        const [namePart, ...descParts] = comp.split(":");
        const name = namePart.replace(/^\d+\.\s*/, "").trim(); // remove numbering like "1. "
        const description = descParts.join(":").trim();

        return (
          <div key={idx} className="competitor-card">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
 

export default CompetitorsDisplay