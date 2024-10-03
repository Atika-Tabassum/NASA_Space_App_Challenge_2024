import React from "react";
import "./WinnerModal.css"; 

const WinnerModal = ({ winner, onRestart, show }) => {
  if (!show) {
    return null; 
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
