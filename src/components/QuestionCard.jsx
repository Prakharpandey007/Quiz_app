import React, { useMemo, useState } from "react";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const QuestionCard = ({ questionData, index, onSubmit }) => {
  const [selected, setSelected] = useState(null);
  const options = useMemo(() => {
    return [...questionData.incorrect_answers, questionData.correct_answer]
      .sort(() => Math.random() - 0.5);
  }, [questionData]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">Q{index + 1}: {decodeHtml(questionData.question)}</h3>
      <div className="grid grid-cols-1 gap-3 mb-4">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(opt)}
            className={`px-4 py-2 rounded-md border transition-all duration-200 
              ${selected === opt ? 'bg-purple-600 text-white' : 'bg-purple-100 hover:bg-purple-200'}`}
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
          ${selected ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionCard;
