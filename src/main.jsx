import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QuizProvider } from "./context/QuizContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizProvider>
    <App />
  </QuizProvider>
);