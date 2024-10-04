import React, { useState } from "react";
import "../general/general.css";
// import redCircle from "./Images/red_circle.jpg";
// import yellowCircle from "./Images/yellow_circle.jpg";
// import Header from "../general/Header";
import "../general/general.css";
import { Fragment } from "react";
import dice1 from "./Images/dice1.png";
import dice2 from "./Images/dice2.png";
import dice3 from "./Images/dice3.png";
import dice4 from "./Images/dice4.png";
import dice5 from "./Images/dice5.png";
import dice6 from "./Images/dice6.png";
import QuizModal from "./QuizModal";
import WinnerModal from "./WinnerModal";
import "./SnakeAndSDGs.css";
import quizzes from "./Quiz";
import logo from "../Home/image/logo8-removebg-preview.png";
import Header from "../general/Header";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const SnakeAndSDGs = () => {
  const [player1Position, setPlayer1Position] = useState(0);
  const [player2Position, setPlayer2Position] = useState(0);
  const [message, setMessage] = useState("");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentSnakePosition, setCurrentSnakePosition] = useState(null);
  const [diceValue, setDiceValue] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [winner, setWinner] = useState(null);
  const [diceImage, setDiceImage] = useState(dice1); // Initial dice image

  const snakes = {
    17: 7,
    54: 34,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 79,
  };

  const ladders = {
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    51: 67,
    71: 91,
    80: 100,
  };

  const renderBoard = () => {
    const board = [];
    let currentNumber = 100;

    for (let row = 0; row < 10; row++) {
      const rowCells = [];

      if (row % 2 === 0) {
        for (let col = 0; col < 10; col++) {
          rowCells.push(
            <div key={currentNumber} className="board-cell">
              {currentNumber === player1Position && (
                <div className="token player1-token" />
              )}
              {currentNumber === player2Position && (
                <div className="token player2-token" />
              )}
              <span className="cell-number">{currentNumber}</span>
            </div>
          );
          currentNumber--;
        }
      } else {
        const startNumber = currentNumber - 9;
        for (let col = 0; col < 10; col++) {
          rowCells.push(
            <div key={startNumber + col} className="board-cell">
              {startNumber + col === player1Position && (
                <div className="token player1-token" />
              )}
              {startNumber + col === player2Position && (
                <div className="token player2-token" />
              )}
              <span className="cell-number">{startNumber + col}</span>
            </div>
          );
        }
        currentNumber -= 10;
      }

      board.push(
        <div key={row} className="board-row">
          {rowCells}
        </div>
      );
    }

    return board;
  };

  const rollDice = () => {
    setMessage("");

    let flickerCount = 0;
    const flickerInterval = setInterval(() => {
      const randomDiceValue = Math.floor(Math.random() * 6);
      setDiceImage(diceImages[randomDiceValue]); // Set random dice image
      flickerCount++;

      if (flickerCount > 6) {
        clearInterval(flickerInterval);

        const finalValue = Math.floor(Math.random() * 6) + 1;
        setDiceImage(diceImages[finalValue - 1]);
        setDiceValue(finalValue);
        movePlayer(finalValue);
      }
    }, 150);
  };

  const movePlayer = (dice) => {
    if (player1Position === 100 || player2Position === 100) {
      return;
    }

    let newPosition;

    if (isPlayerTurn) {
      setMessage(`Player1 rolls: ${dice}`);
      newPosition = player1Position + dice;

      if (newPosition > 100) {
        setMessage(`Player1 stays at ${player1Position}`);
        setIsPlayerTurn(false);
        return;
      }

      if (snakes[newPosition]) {
        setCurrentSnakePosition(newPosition);
        const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
        setCurrentQuiz(randomQuiz);
        setShowQuiz(true);
        return;
      } else if (ladders[newPosition]) {
        setMessage(`Player1 climbed ladder at ${newPosition}`);
        newPosition = ladders[newPosition];
      } else {
        setMessage(`Player1 moved to ${newPosition}`);
      }

      setPlayer1Position(newPosition);
    } else {
      setMessage(`Player2 rolls: ${dice}`);
      newPosition = player2Position + dice;

      if (newPosition > 100) {
        setMessage(`Player2 stays at ${player2Position}`);
        setIsPlayerTurn(true);
        return;
      }

      if (snakes[newPosition]) {
        setCurrentSnakePosition(newPosition);
        const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
        setCurrentQuiz(randomQuiz);
        setShowQuiz(true);
        return;
      } else if (ladders[newPosition]) {
        setMessage(`Player2 climbed ladder at ${newPosition}`);
        newPosition = ladders[newPosition];
      } else {
        setMessage(`Player2 moved to ${newPosition}`);
      }

      setPlayer2Position(newPosition);
    }

    if (newPosition === 100) {
      setWinner(isPlayerTurn ? "Player1" : "Player2"); // Declare the winner
      return;
    }

    setIsPlayerTurn(!isPlayerTurn);
  };

  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) {
      setMessage("Correct answer! No punishment.");
    } else {
      setMessage(
        `Wrong answer! Player bitten by snake at ${currentSnakePosition}`
      );
      if (isPlayerTurn) {
        setPlayer1Position(snakes[currentSnakePosition]);
      } else {
        setPlayer2Position(snakes[currentSnakePosition]);
      }
    }
    setShowQuiz(false);
    setCurrentSnakePosition(null);
    setIsPlayerTurn(!isPlayerTurn);
  };

  const restartGame = () => {
    setPlayer1Position(0);
    setPlayer2Position(0);
    setMessage("");
    setIsPlayerTurn(true);
    setDiceValue(null);
    setWinner(null);
  };

  return <Fragment>
    {/* <Header/> */}
    <div className="game-container">
      {/* <Header /> */}

      <h1 style={{fontFamily:'Play'}}>Snake and Ladders</h1>
      <div className="players-info">
      </div>
      <div
        className={`dice-section ${isPlayerTurn ? "player1-turn" : "player2-turn"
          }`}
        onClick={rollDice}
      >
        <img
          src={diceImage}
          alt="Dice"
          className="dice"
          style={{ backgroundColor: "while", margin: "-2px" }}
        />
      </div>
      <div className="board">{renderBoard()}</div>
      <p className="message" style={{ color: "white" }}>
        {message}
      </p>

      <QuizModal
        show={showQuiz}
        onClose={() => setShowQuiz(false)}
        quiz={currentQuiz}
        onAnswer={handleQuizAnswer}
      />
      <WinnerModal winner={winner} onRestart={restartGame} show={!!winner} />
    </div>
  </Fragment>
};

export default SnakeAndSDGs;
