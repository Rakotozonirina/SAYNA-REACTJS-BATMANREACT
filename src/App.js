import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Eshop from './pages/Eshop';
import Compte from './pages/Compte';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game' element={ <Game/> } />
        <Route path='/eshop' element={ <Eshop/> } />
        <Route path='/compte' element={ <Compte/> } />
      </Routes>
    </Router>
  );
}

export default App;
