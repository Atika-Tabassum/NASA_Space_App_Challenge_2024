import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
  
    currAttempt,
    gameOver,
  correctWord,
  resetGame,
  viewLesson
   
  } = useContext(AppContext);
  const handleTryAgain = () => {
    resetGame(); // Call the reset game function to restart
  };

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord ? (
        <>
          <h3>You guessed in {currAttempt.attempt} attempts</h3>
          <button className="button" onClick={viewLesson}>
           View SDG Lesson
          </button>
        </>
      ) : (
        <>
          <button className="button" onClick={handleTryAgain}>
            Try Again
          </button>
        </>
      )}
    </div>
  );
 
}

export default GameOver;