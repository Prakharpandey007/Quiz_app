import React from "react";

const OverviewPanel = ({ total, visited, selected, onNavigate, current }) => {
  return (
    <div className="w-full lg:w-1/4 bg-gray-100 p-4 space-y-2 overflow-y-auto">
      <h3 className="text-lg font-bold text-center">📌 Questions</h3>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            className={`w-10 h-10 text-sm rounded-full font-bold 
              ${current === idx ? 'bg-blue-500 text-white' :
                selected[idx] ? 'bg-green-400 text-white' :
                visited.includes(idx) ? 'bg-yellow-300' : 'bg-gray-300'}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OverviewPanel;