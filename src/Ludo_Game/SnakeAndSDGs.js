import React, { useState } from "react";
import redCircle from "./Images/red_circle.png"; // player1
import yellowCircle from "./Images/yellow_circle.png"; // player2
import "./SnakeAndSDGs.css";

const SnakeAndSDGs = () => {
  const [player1Position, setplayer1Position] = useState(0);
  const [player2Position, setplayer2Position] = useState(0);
  const [message, setMessage] = useState("");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); 

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
    let currentNumber = 100; // Start from 100

    for (let row = 0; row < 10; row++) {
      const rowCells = [];

     
      if (row % 2 === 0) {
       
        for (let col = 0; col < 10; col++) {
          rowCells.push(
            <div key={currentNumber} className="board-cell">
              {currentNumber === player1Position && (
                <img src={redCircle} alt="Player" className="token" />
              )}
              {currentNumber === player2Position && (
                <img src={yellowCircle} alt="Bot" className="token" />
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
                <img src={redCircle} alt="Player" className="token" />
              )}
              {startNumber + col === player2Position && (
                <img src={yellowCircle} alt="Bot" className="token" />
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
    return Math.floor(Math.random() * 6) + 1;
  };

  const movePlayer = () => {
    if (player1Position === 100 || player2Position === 100) {
      return; 
    }

    const diceValue = rollDice();
    let newPosition;

    if (isPlayerTurn) {
      setMessage(`Player1 rolls: ${diceValue}`);
      newPosition = player1Position + diceValue;

      if (newPosition > 100) {
        setMessage(`Player1 stays at ${player1Position}`);
        return;
      }

      if (snakes[newPosition]) {
        setMessage(`Player1 bitten by snake at ${newPosition}`);
        newPosition = snakes[newPosition];
      } else if (ladders[newPosition]) {
        setMessage(`Player1 climbed ladder at ${newPosition}`);
        newPosition = ladders[newPosition];
      } else {
        setMessage(`Player moved to ${newPosition}`);
      }

      setplayer1Position(newPosition);
    } else {
      setMessage(`Player2 rolls: ${diceValue}`);
      newPosition = player2Position + diceValue;

      if (newPosition > 100) {
        setMessage(`Player2 stays at ${player2Position}`);
        return;
      }

      if (snakes[newPosition]) {
        setMessage(`Player2 bitten by snake at ${newPosition}`);
        newPosition = snakes[newPosition];
      } else if (ladders[newPosition]) {
        setMessage(`Player2 climbed ladder at ${newPosition}`);
        newPosition = ladders[newPosition];
      } else {
        setMessage(`Player2 moved to ${newPosition}`);
      }

      setplayer2Position(newPosition);
    }

    if (newPosition === 100) {
      setMessage(
        isPlayerTurn ? "Player1 has won the game!" : "Player2 has won the game!"
      );
      return;
    }

    setIsPlayerTurn(!isPlayerTurn);
  };

  return (
    <div className="game-container">
      <h1>Snake and Ladders</h1>
      <p>{message}</p>
      <p>Player1 Position: {player1Position}</p>
      <p> Position: {player2Position}</p>
      <button
        onClick={movePlayer}
        disabled={player1Position === 100 || player2Position === 100}
      >
        {isPlayerTurn ? "Player1 Roll Dice" : "Player2 Roll Dice"}
      </button>
      <div className="board">{renderBoard()}</div>
    </div>
  );
};

export default SnakeAndSDGs;
