import React, { useState } from 'react';
import './stone_paper_scissors.css';

import rockImage from './Images/rock.png';
import paperImage from './Images/paper.png';
import scissorsImage from './Images/scissors.png';

// New array of quiz questions
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which Sustainable Development Goal (SDG) focuses on industry, innovation, and infrastructure?",
    options: [
      "SDG 1: No Poverty",
      "SDG 9: Industry, Innovation, and Infrastructure",
      "SDG 13: Climate Action",
      "SDG 4: Quality Education",
    ],
    correctAnswer: "SDG 9: Industry, Innovation, and Infrastructure",
  },
  {
    question: "What is one of the main goals of SDG 9?",
    options: [
      "Reduce greenhouse gas emissions",
      "Promote inclusive and sustainable industrialization",
      "Ensure quality education for all",
      "Eradicate extreme poverty",
    ],
    correctAnswer: "Promote inclusive and sustainable industrialization",
  },
  {
    question: "Which of the following is essential for achieving SDG 9?",
    options: [
      "Developing resilient infrastructure",
      "Providing free healthcare",
      "Protecting marine ecosystems",
      "Eliminating hunger",
    ],
    correctAnswer: "Developing resilient infrastructure",
  },
  {
    question: "What is a key target of SDG 9?",
    options: [
      "Increase access to affordable and sustainable transport systems",
      "Improve agricultural productivity",
      "Ensure universal healthcare",
      "Protect forests and biodiversity",
    ],
    correctAnswer: "Increase access to affordable and sustainable transport systems",
  },
  {
    question: "Which SDG focuses on building sustainable cities and communities?",
    options: [
      "SDG 9: Industry, Innovation, and Infrastructure",
      "SDG 11: Sustainable Cities and Communities",
      "SDG 12: Responsible Consumption and Production",
      "SDG 6: Clean Water and Sanitation",
    ],
    correctAnswer: "SDG 11: Sustainable Cities and Communities",
  },
  {
    question: "Which technology is crucial for fostering innovation under SDG 9?",
    options: [
      "5G networks",
      "Blockchain",
      "Artificial Intelligence",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "What role does innovation play in achieving SDG 9?",
    options: [
      "It creates jobs and fosters sustainable economic growth.",
      "It reduces environmental pollution.",
      "It improves gender equality.",
      "It eliminates hunger worldwide.",
    ],
    correctAnswer: "It creates jobs and fosters sustainable economic growth.",
  },
  {
    question: "What is the main challenge for SDG 9 in developing countries?",
    options: [
      "Lack of funding for infrastructure",
      "High levels of education",
      "Overpopulation in rural areas",
      "Surplus of innovation",
    ],
    correctAnswer: "Lack of funding for infrastructure",
  },
  {
    question: "Which SDG aims to build resilient infrastructure?",
    options: ["SDG 9", "SDG 7", "SDG 5", "SDG 3"],
    correctAnswer: "SDG 9",
  },
];
const StonePaperScissors = () => {
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [message, setMessage] = useState("Choose your option!");
    const [showQuiz, setShowQuiz] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
    const genCompChoice = () => {
      const options = ["rock", "paper", "scissors"];
      const randIdx = Math.floor(Math.random() * 3);
      return options[randIdx];
    };
  
    const drawGame = () => {
      setMessage("Game was Draw. Answer the quiz!");
      setShowQuiz(true);
    };
  
    const handleQuizSubmit = () => {
      const currentQuestion = quizData[currentQuestionIndex];
      
      if (userAnswer === currentQuestion.correctAnswer) {
        setUserScore(prev => prev + 1);
        setMessage("Correct! You gain a point.");
      } else {
        setCompScore(prev => prev + 1);
        setMessage("Wrong! The computer gets a point.");
      }
  
      setUserAnswer(""); // Reset the answer for next time
      setShowQuiz(false); // Close the quiz after answering
      // Alternate to the next question (if current index is the last, reset to 0)
      setCurrentQuestionIndex(prev => (prev + 1) % quizData.length);
    };
  
    const showWinner = (userWin, userChoice, compChoice) => {
      if (userWin) {
        setUserScore(prev => prev + 1);
        setMessage(`You win! Your ${userChoice} beats ${compChoice}`);
      } else {
        setCompScore(prev => prev + 1);
        setMessage(`You lost. ${compChoice} beats your ${userChoice}`);
      }
    };
  
    const playGame = (userChoice) => {
      const compChoice = genCompChoice();
  
      if (userChoice === compChoice) {
        drawGame();
      } else {
        const userWin = (userChoice === "rock" && compChoice === "scissors") ||
                        (userChoice === "paper" && compChoice === "rock") ||
                        (userChoice === "scissors" && compChoice === "paper");
        showWinner(userWin, userChoice, compChoice);
      }
    };
  
    return (
      <div className="stone-game-container">
        <h1 className="stone-header">Rock Paper Scissors</h1>
        
        <div className="stone-choices">
          <div className="stone-choice" onClick={() => playGame("rock")}>
            <img className="stone-image" src={rockImage} alt="Rock" />
          </div>
          <div className="stone-choice" onClick={() => playGame("paper")}>
            <img className="stone-image" src={paperImage} alt="Paper" />
          </div>
          <div className="stone-choice" onClick={() => playGame("scissors")}>
            <img className="stone-image" src={scissorsImage} alt="Scissors" />
          </div>
        </div>
  
        {showQuiz && (
          <div className="stone-quiz-container">
            <h3>{quizData[currentQuestionIndex].question}</h3>
            {quizData[currentQuestionIndex].options.map(option => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={userAnswer === option}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                {option}
              </label>
            ))}
            <button className="stone-button" onClick={handleQuizSubmit}>Submit Answer</button>
          </div>
        )}
  
        <div className="stone-msg">
          {message}
        </div>
        <div>
          <h2 className="stone-score">Your Score: {userScore}</h2>
          <h2 className="stone-score">Computer Score: {compScore}</h2>
        </div>
      </div>
    );
  };
  
  export default StonePaperScissors;