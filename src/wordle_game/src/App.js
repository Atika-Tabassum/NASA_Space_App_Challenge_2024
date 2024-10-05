import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import React, { createContext, useState,useEffect } from 'react' 
import { boardDefault, generateWordSet,generateLessonSet } from "./components/Words";
import GameOver from './components/GameOver';
import SdgLesson from './components/SdgLesson';


export const AppContext= createContext();

function App(keyVal) {
  const [board, setBoard]=useState(boardDefault);
  const [currAttempt, setCurrAttempt]=useState({attempt:0, letterPos:0});
  const [wordSet, setWordSet] = useState(new Set());
const [correctWord, setCorrectWord] = useState("");
  const [lessonContent, setLessonContent] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [sdgLesson,setSDGLesson] = useState({
   sdgLesson: false
  });

  // let correctWord="right";
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  useEffect(() => {
    generateLessonSet().then((lessons) => {
     setLessonContent(lessons.todaysLesson);
    
    });
  }, []);

  const resetGame = () => {

    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });

    generateLessonSet().then((lessons) => {
      setLessonContent(lessons.todaysLesson);
     
     });
    // Create a new board to reset state
    const newBoard = Array(6).fill(null).map(() => Array(5).fill("")); // Assuming a 6x5 board
    setBoard(newBoard);
    setCurrAttempt({ attempt: 0, letterPos: 0 });
    setDisabledLetters([]);
    setGameOver({ gameOver: false, guessedWord: false });
    setSDGLesson({sdgLesson:false})
    setSDGLesson(""); // Reset the lesson content
  };

  const viewLesson = () => {
    // Logic to load the next level or new lesson
   setSDGLesson({sdgLesson:true})
  };

  const loadNextLevel = () => { 
    console.log("Hi")
    setSDGLesson({sdgLesson:false})
    resetGame()
  };
  const onSelectLetter =(keyVal)=>
  {
    if(currAttempt.letterPos>4)return;
    const newBoard=[...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos]=keyVal
    setBoard(newBoard)
    setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos+1})
    
  }
  const onDelete=()=>
  {
    if(currAttempt.letterPos===0) return;
        const newBoard=[...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos-1]=""
        setBoard(newBoard)
        setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1})
  }
  const onEnter = () => {
    if (currAttempt.letterPos< 5) return; // Ensure a full word has been entered
  
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    let cur=currWord;
     currWord+="\r"
    // Check if the current word is in the set
    if (wordSet.has(currWord.toLowerCase())) {
      // Update currAttempt correctly
      setCurrAttempt(prevAttempt => ({
        attempt: prevAttempt.attempt + 1, // Increment attempt
        letterPos: 0 // Reset letter position
      }));
      if(currWord.toLowerCase()===correctWord.toLowerCase())
        {
          setGameOver({gameOver:true,guessedWord:true})
          return;
        }
        if(currAttempt.attempt===5&&correctWord!==currWord.toLowerCase())
        {
          setGameOver({gameOver:true,guessedWord:false})
        }
    } else {
      alert("Word not found");
    }
    
  };
  
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard,currAttempt,
        setCurrAttempt,onDelete,onEnter,
        onSelectLetter,correctWord
        ,disabledLetters,setDisabledLetters
        ,setGameOver,
         gameOver,
         resetGame,
         loadNextLevel,
         sdgLesson,
         setSDGLesson,
         viewLesson,
         lessonContent}}>
        <div className='game'>
        <Board/>
        {/* {gameOver.gameOver ? <GameOver/> : <Keyboard />} */}
        {/* {gameOver.gameOver && !sdgLesson ? sdgLesson.sdgLesson?<sdgLesson/>:<GameOver/> : <Keyboard />} */}
        {gameOver.gameOver ? (
  sdgLesson.sdgLesson ? (
    <SdgLesson />
  ) : (
    <GameOver />
  )
) : (
  <Keyboard />
)}

        </div>
        
      
      </AppContext.Provider>
  
     
    </div>
  );
}

export default App;
