import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from './store';

import SlideGame from './games/SlideGame';
import MineGame from './games/MineGame';
import VideoPoker from "./games/VideoPoker";
import Layout from './layout';
import CrashGame from './games/CrashGame';
import BaccaratGame from './games/BaccaratGame';
import HiloGame from './games/HiloGame';
import GoalGame from './games/GoalGame';
import RouletteGame from './games/RouletteGame';
import BlackjackGame from './games/BlackjackGame';
import BaccaraStGame from './games/BaccaratSGame';
import HiloMGame from './games/HiloMGame';
import FlowerPoker from './games/FlowerPoker';
import AviatorGame from './games/Aviator';

function App() {
  return (<div className="flex-grow bg-[#10100f]">
    <ToastContainer />
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<MineGame />} />
            <Route path="/mine" element={<MineGame />} />
            <Route path="/slide" element={<SlideGame />} />
            <Route path="/video-poker" element={<VideoPoker />} />
            <Route path="/crashx" element={<CrashGame />} />
            <Route path="/baccarat" element={<BaccaratGame />} />
            <Route path="/hilo" element={<HiloGame />} />
            <Route path="/goal" element={<GoalGame />} />
            <Route path="/roulette" element={<RouletteGame />} />
            <Route path="/blackjack" element={<BlackjackGame />} />
            <Route path="/baccarat-single" element={<BaccaraStGame />} />
            <Route path="/hilo-multiplayer" element={<HiloMGame />} />
            <Route path="/flower-poker" element={<FlowerPoker />} />
            <Route path="/aviator" element={<AviatorGame />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </div>
  );
}

export default App;
