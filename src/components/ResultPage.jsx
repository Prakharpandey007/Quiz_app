import React from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const ResultPage = () => {
  const { questions, answers, email } = useQuiz();
  const navigate = useNavigate();

  const score = questions.reduce((acc, q, idx) => {
    return answers[idx] === q.correct_answer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-green-600">🎉 Quiz Completed!</h2>
        <p className="text-center text-lg mb-6">Email: <strong>{email}</strong></p>
        <h3 className="text-xl text-center mb-4">Your Score: <span className="text-purple-700 font-bold">{score} / {questions.length}</span></h3>

        {questions.map((q, idx) => (
          <div key={idx} className="mb-4 p-4 border rounded-md">
            <p className="font-semibold">Q{idx + 1}: {decodeHtml(q.question)}</p>
            <p>Your Answer: <span className={`${answers[idx] === q.correct_answer ? 'text-green-600' : 'text-red-600'}`}>{decodeHtml(answers[idx] || 'Not Attempted')}</span></p>
            <p>Correct Answer: <span className="text-green-700 font-semibold">{decodeHtml(q.correct_answer)}</span></p>
          </div>
        ))}

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;