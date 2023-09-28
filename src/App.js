import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Eshop from './pages/Eshop';
import Compte from './pages/Compte';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={ <Game/> }/>
        <Route path='/eshop' element={ <Eshop/> }/>
        <Route path='/compte' element={ <Compte/> }/>
        <Route path='/signup' element={ <Signup/> }/>
        <Route path='/login' element={ <Login/> }/>
      </Routes>
    </Router>
  );
}

export default App;
