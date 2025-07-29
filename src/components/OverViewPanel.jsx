import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";

const OverviewPanel = ({ total, visited, selected, onNavigate, current }) => {
  const { flagged } = useQuiz();
  const [filter, setFilter] = useState("All");

  const getFilteredIndexes = () => {
    return Array.from({ length: total })
      .map((_, i) => i)
      .filter((idx) => {
        if (filter === "Attempted") return selected[idx];
        if (filter === "Unattempted") return !selected[idx];
        if (filter === "Flagged") return flagged.includes(idx);
        return true;
      });
  };

  return (
    <div className="w-full lg:w-1/4 bg-gray-100 p-4 space-y-2 overflow-y-auto">
      <h3 className="text-lg font-bold text-center">📌 Questions</h3>

      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {["All", "Attempted", "Unattempted", "Flagged"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-2 py-1 text-xs rounded-full transition ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-2">
        {getFilteredIndexes().map((idx) => (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            className={`w-10 h-10 text-sm rounded-full font-bold border-2 transition-all ${
              current === idx
                ? "bg-blue-500 text-white"
                : selected[idx]
                ? "bg-green-400 text-white"
                : visited.includes(idx)
                ? "bg-yellow-300"
                : "bg-gray-300"
            } ${flagged.includes(idx) ? "border-yellow-500" : "border-transparent"}`}
            title={flagged.includes(idx) ? "Flagged" : ""}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OverviewPanel;
