import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import OverviewPanel from "./OverviewPanel";

const QuizPage = () => {
  const { questions, answers, setAnswers, visited, setVisited, setTimeLeft, timeLeft } = useQuiz();
  const [currIndex, setCurrIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/result");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAnswer = (ans) => {
    setAnswers({ ...answers, [currIndex]: ans });
    if (!visited.includes(currIndex)) setVisited([...visited, currIndex]);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-3/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-purple-800">Time Left: {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,'0')}</h2>
          <button onClick={() => navigate("/review")} className="bg-red-500 text-white px-4 py-1 rounded-md">Review & Submit</button>
        </div>
        <QuestionCard
  questionData={questions[currIndex]}
  index={currIndex}
  onSubmit={(ans) => {
    handleAnswer(ans);
    if (currIndex + 1 < questions.length) {
      setCurrIndex(currIndex + 1);
    } else {
      navigate('/result');
    }
  }}
/>
      </div>
      <OverviewPanel
        total={questions.length}
        visited={visited}
        selected={answers}
        onNavigate={setCurrIndex}
        current={currIndex}
      />
    </div>
  );
};

export default QuizPage;