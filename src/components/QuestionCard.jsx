import React, { useMemo, useState } from "react";
import { useQuiz } from "../context/QuizContext";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const QuestionCard = ({ questionData, index, onSubmit }) => {
  const [selected, setSelected] = useState(null);
  const { flagged, setFlagged } = useQuiz();

  const options = useMemo(() => {
    return [...questionData.incorrect_answers, questionData.correct_answer]
      .sort(() => Math.random() - 0.5);
  }, [questionData]);

  const isFlagged = flagged?.includes(index);

  const toggleFlag = () => {
    if (isFlagged) {
      setFlagged(flagged.filter(i => i !== index));
    } else {
      setFlagged([...flagged, index]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">
          Q{index + 1}: {decodeHtml(questionData.question)}
        </h3>
        <button
          onClick={toggleFlag}
          className={`text-sm px-2 py-1 rounded-full transition ${
            isFlagged ? "bg-yellow-400 text-black" : "bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
          }`}
        >
          {isFlagged ? "🚩 Unflag" : "🚩 Flag"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-4">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-md border transition-all duration-200 
              ${
                selected === opt
                  ? "bg-green-500 text-white"
                  : "bg-purple-100 dark:bg-purple-700 text-black dark:text-white hover:bg-purple-200 dark:hover:bg-purple-600"
              }`}
          >
            {decodeHtml(opt)}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          onSubmit(selected);
          setSelected(null); // reset for next question
        }}
        disabled={!selected}
        className={`mt-2 px-6 py-2 rounded-md font-medium transition 
          ${
            selected
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionCard;
