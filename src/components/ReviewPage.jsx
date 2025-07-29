import React from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const ReviewPage = () => {
  const { questions, answers, flagged } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-red-500">📝 Review Your Answers</h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {questions.map((q, idx) => (
          <div key={idx} className="border rounded-md p-4 bg-white ">
            <p className="font-semibold">Q{idx + 1}: {decodeHtml(q.question)} {flagged.includes(idx) && <span className="text-yellow-400">🚩</span>}</p>
            <p className="mt-1">Your Answer: <span className="font-medium">{answers[idx] ? decodeHtml(answers[idx]) : 'Not Attempted'}</span></p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/result")}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;