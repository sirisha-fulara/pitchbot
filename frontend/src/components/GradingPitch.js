// GradingPitch.js
import React from "react";

const GradingPitch = ({ grading }) => {
  const criteria = ["Clarity", "Emotional Impact", "Market Fit"];

  const parseGrading = (text) => {
    const lines = text.split("\n");
    return criteria.map((criterion) => {
      const line = lines.find((l) => l.toLowerCase().includes(criterion.toLowerCase()));
      const match = line?.match(/(\d+)\/10/);
      const score = match ? parseInt(match[1]) : 0;
      return { name: criterion, score };
    });
  };

  const parsed = parseGrading(grading);

  return (
    <div className="bg-gray p-4 rounded-lg shadow-md">
      {parsed.map((item) => (
        <div key={item.name} className="mb-3">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-sm">{item.score}/10</span>
          </div>
          <meter
            min="0"
            max="10"
            value={item.score}
            className="w-full h-3"
            style={{ accentColor: "#4f46e5" }}
          ></meter>
        </div>
      ))}
    </div>
  );
};

export default GradingPitch;
