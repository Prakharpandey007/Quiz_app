import React, { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const { setEmail, setQuestions, setStartTime } = useQuiz();
  const navigate = useNavigate();

  const startQuiz = async () => {
    if (!emailInput.includes("@")) return alert("Enter valid email");
    const res = await fetch("https://opentdb.com/api.php?amount=15");
    const data = await res.json();
    setEmail(emailInput);
    setQuestions(data.results);
    setStartTime(Date.now());
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-400 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-white mb-4">🧠 Ultimate Quiz Challenge</h1>
      <input
        type="email"
        className="rounded-md px-4 py-2 text-lg text-gray-700"
        placeholder="Enter your email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <button
        className="mt-4 bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
      <div className="mt-6 bg-white/70 p-4 rounded-xl shadow-md max-w-md text-gray-800">
        <h2 className="text-xl font-semibold mb-2">📋 Rules:</h2>
        <ul className="text-left list-disc pl-5">
          <li>Total 15 questions</li>
          <li>Each question has multiple choices</li>
          <li>30-minute timer starts once you begin</li>
          <li>You can navigate between questions</li>
          <li>Result page shows correct/your answers</li>
        </ul>
      </div>
    </div>
  );
};
export default StartPage;
