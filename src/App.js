import "./App.css";
import Ludo from "./Ludo_Game/SnakeAndSDGs";
import MemoryGame from "./memory card/memory_card";
import StonePaperScissors from "./Stone Paper Scissors/stone_paper_scissors";

function App() {
  return (
    <div className="App">
      {/* <Ludo /> */}
      <StonePaperScissors/>
      {/* <MemoryGame/> */}
    </div>
  );
}

export default App;
