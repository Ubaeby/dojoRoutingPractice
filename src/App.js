import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/:word/:text/:backGround" element={ <Word />}/>
        <Route path="/:word" element={ <Word />}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
