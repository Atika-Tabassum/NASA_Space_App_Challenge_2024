import React, { useState, useEffect, useCallback } from 'react';
import './memory_card.css'; // Import the CSS

const cardArray = [
  { name: 'star', img: '/images/3.png' },
  { name: 'star', img: '/images/3.png' },
  { name: 'moon', img: '/images/4.png' },
  { name: 'moon', img: '/images/4.png' },
  { name: 'planet', img: '/images/5.png' },
  { name: 'planet', img: '/images/5.png' },
  { name: 'rocket', img: '/images/6.png' },
  { name: 'rocket', img: '/images/6.png' },
  { name: 'astronaut', img: '/images/7.png' },
  { name: 'astronaut', img: '/images/7.png' },
  { name: 'alien', img: '/images/8.png' },
  { name: 'alien', img: '/images/8.png' }
];

cardArray.sort(() => 0.5 - Math.random());

const MemoryGame = () => {
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsChosenId, setCardsChosenId] = useState([]);
  const [cardsWon, setCardsWon] = useState([]); // Store cards that are correctly matched
  const [flippedCards, setFlippedCards] = useState(Array(cardArray.length).fill(false));
  const [time, setTime] = useState(0); // Timer state
  const [isActive, setIsActive] = useState(true); // To control the timer

  // Memoized version of checkForMatch to avoid recreating the function
  const checkForMatch = useCallback(() => {
    const [optionOneId, optionTwoId] = cardsChosenId;

    if (cardsChosen[0] === cardsChosen[1]) {
      console.log('done'); // Debugging log for match
      setCardsWon((prevWon) => [...prevWon, cardsChosen[0]]); // Add the matched card name to the cardsWon array
    } else {
      // Flip the cards back over if they don't match
      setFlippedCards((prevFlipped) => {
        const newFlippedCards = [...prevFlipped];
        newFlippedCards[optionOneId] = false;
        newFlippedCards[optionTwoId] = false;
        return newFlippedCards;
      });
    }

    // Reset the chosen cards and IDs
    setCardsChosen([]);
    setCardsChosenId([]);
  }, [cardsChosen, cardsChosenId]);

  useEffect(() => {
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500); // Check for a match after two cards are chosen
    }
  }, [cardsChosen, checkForMatch]); // Added checkForMatch as a dependency

  const flipCard = (id) => {
    // Don't allow flipping the same card twice or flipping a matched card
    if (flippedCards[id] || cardsChosenId.includes(id) || cardsWon.includes(cardArray[id].name)) return;

    const newCardsChosen = [...cardsChosen, cardArray[id].name];
    const newCardsChosenId = [...cardsChosenId, id];
    const newFlippedCards = [...flippedCards];
    newFlippedCards[id] = true;
    setFlippedCards(newFlippedCards);

    setCardsChosen(newCardsChosen);
    setCardsChosenId(newCardsChosenId);
  };

  const createBoard = () => {
    return cardArray.map((card, index) => (
      <div
        key={index}
        className={`card ${flippedCards[index] ? 'flipped' : ''}`}
        onClick={() => flipCard(index)}
      >
        {/* Show the card's front if it's flipped or won */}
        {flippedCards[index] || cardsWon.includes(card.name) ? (
          <img
            src={card.img}
            alt={card.name}
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
        ) : (
          <img
            src="/images/card1.jpg"
            alt="back"
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
        )}
      </div>
    ));
  };
  const restartGame = () => {
    setCardsChosen([]);
    setCardsChosenId([]);
    setCardsWon([]);
    setFlippedCards(Array(cardArray.length).fill(false));
    cardArray.sort(() => 0.5 - Math.random()); // Reshuffle the cards
    setTime(0); // Reset timer
    setIsActive(true); // Restart the timer
  };
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Increment the timer every second
    } else if (!isActive && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, time]);
  // Stop the timer when all cards are matched
  useEffect(() => {
    if (cardsWon.length === cardArray.length / 2) {
      setIsActive(false);
    }
  }, [cardsWon]);

  // Format the time in minutes:seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


  return (
    <div>
    <div className="timer">
  🕒 Time: {formatTime(time)} 
     </div>
    <div className="container">
      {createBoard()}
      </div>
      {cardsWon.length === cardArray.length / 2 && (
        <div className="congratulations">
          <h2>Congratulations! You've matched all cards!</h2>
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
   
    </div>
  );
};

export default MemoryGame;
