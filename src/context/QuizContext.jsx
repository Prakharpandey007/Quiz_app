import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
   const [flagged, setFlagged] = useState([]);
  return (
    <QuizContext.Provider
      value={{
        email,
        setEmail,
        questions,
        setQuestions,
        answers,
        setAnswers,
        visited,
        setVisited,
        startTime,
        setStartTime,
        timeLeft,
        setTimeLeft,
        flagged,
        setFlagged
        
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};