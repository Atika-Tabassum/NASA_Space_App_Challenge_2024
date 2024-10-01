import React from "react";
import "./WinnerModal.css"; // Assuming you'll style it similarly to QuizModal.css

const WinnerModal = ({ winner, onRestart, show }) => {
  if (!show) {
    return null; // If `show` is false, don't render anything
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>{winner} has won the game!</p>
        <button onClick={onRestart}>Restart Game</button>
      </div>
    </div>
  );
};

export default WinnerModal;
