import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Words from './pages/Words';
import Test from './pages/Test';
import Game from './pages/Game';
import MemoryGame from "./pages/MemoryGame";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/words" element={<Words />} />       
        <Route path="/test" element={<Test />} />
        <Route path="/game" element={<Game />} />
        <Route path="/memory" element={<MemoryGame />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
