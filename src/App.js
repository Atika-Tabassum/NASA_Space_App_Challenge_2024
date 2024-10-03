import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ludo from "./Ludo_Game/SnakeAndSDGs";
import MemoryGame from "./memory card/memory_card";
import Home from "./Home/Home";
import { Fragment } from "react";
import Statistics from "./Stats/Statistics";
import GamePage from "./games/gamePage";
import FetchDataComponent from './apis/FetchDataComponent';
import Study from './study/Study';
function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/sustainify/home" element={<Home />} />
          <Route path="/sustainify/ludo" element={<Ludo />} />
          <Route path="/sustainify/memory" element={<MemoryGame />} />
          <Route path="/sustainify/stats" element={<Statistics />} />
          <Route path="/sustainify/games" element={<GamePage />} />
          <Route path="/sustainify/fetch" element={<FetchDataComponent />} />
          <Route path="/sustainify/study" element={<Study />} />
          <Route path="/sustainify/ludo" element={<Ludo />} />
          <Route path="/sustainify/memory" element={<MemoryGame />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
