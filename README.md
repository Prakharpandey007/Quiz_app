# 🧠 React Quiz App 

A modern and interactive quiz application built using **React + Vite**, styled with **Tailwind CSS**, and enhanced with features like question navigation, flagging, review mode, and a real-time countdown timer.

---

## 🚀 Live Preview

🌐 [Deployed Link :- ](#) *https://quiz-app-swg7.vercel.app/*

---

## 📌 Features

- ✅ Email-based start screen with quiz instructions
- ✅ 15 random questions from [Open Trivia DB](https://opentdb.com/api.php?amount=15)
- ✅ 30-minute countdown timer with auto-submit
- ✅ Real-time answer selection and progress tracking
- ✅ Navigation panel to jump between questions
- ✅ Flag/unflag questions for review
- ✅ Filter by All / Attempted / Unattempted / Flagged
- ✅ Review screen before final submission
- ✅ Responsive UI.
- ✅ Clean result page showing correct vs your answers

---

## 🧩 Components Overview

| Component        | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| `StartPage`       | Captures email input and shows quiz rules                              |
| `QuizPage`        | Displays questions, timer, submit logic, navigation                     |
| `QuestionCard`    | Shows question, options, and flag/unflag button                        |
| `OverviewPanel`   | Displays all questions with filter & navigation                        |
| `ReviewPage`      | Lets user review all answers before submitting                         |
| `ResultPage`      | Shows correct and submitted answers side by side                       |                              
| `QuizContext`     | Global state for answers, flags, email, timer                          |

---

## 📁 Folder Structure
```
quiz-app/
├── src/
│   ├── components/
│   │   ├── StartPage.jsx
│   │   ├── QuizPage.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── OverviewPanel.jsx
│   │   ├── ReviewPage.jsx
│   │   ├── ResultPage.jsx
│   │  
│   ├── context/
│   │   └── QuizContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.cjs
├── index.html
└── README.md

```

---

## 🛠 Tech Stack
- Frontend: React.js (via Vite)

- Styling: Tailwind CSS

- State Management: Context API

- API: Open Trivia DB


## ⚙️ Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
```
### 2. Install Dependencies
```
npm install
```
### 3. Start the Development Server
```
npm run dev
```
---
## 💡 Assumptions Made
- Users will complete the quiz in one session (no persistent saving).

- Open Trivia DB provides valid and well-structured quiz questions.

- No login system; only email is captured on start for context.

---
## 📜 License
MIT License. Free for personal or commercial use.
  
