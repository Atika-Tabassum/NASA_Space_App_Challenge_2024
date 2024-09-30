import React from "react";
import "./QuizModal.css";

const QuizModal = ({ show, onClose, quiz, onAnswer }) => {
  if (!show) {
    return null; 
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Quiz Time!</h2>
        <p>{quiz.question}</p>
        <div className="quiz-options">
          {quiz.options.map((option, index) => (
            <button key={index} onClick={() => onAnswer(option === quiz.correctAnswer)}>
              {option}
            </button>
          ))}
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default QuizModal;
