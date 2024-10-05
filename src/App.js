import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ludo from "./Ludo_Game/SnakeAndSDGs";
import MemoryGame from "./memory card/memory_card";
import Home from "./Home/Home";
import { Fragment } from "react";
import Statistics from "./Stats/Statistics";
import GamePage from "./games/gamePage";
import FetchDataComponent from './apis/FetchDataComponent';
import Study from './study/Study';
import DailyGoal from './dailygoal/DailyGoal';
import Awareness from './awareness/Awareness';
import FrontPage from './main/FrontPage';
import Chat from "./chatComponent/Chat";
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
          <Route path="/sustainify/dailygoal" element={<DailyGoal />} />
          <Route path="/sustainify/awareness" element={<Awareness />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/sustainify/chat" element={<Chat />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
