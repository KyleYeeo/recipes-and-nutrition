import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Nutrition from './componentsBtnTwo/Nutrition';
import Recipes from './componentsBtnOne/Recipes';
import video from './food.mp4';

function App() {
  return (
    <Router>

      <header className='logo'>
        <video autoPlay muted loop playsInline>
          <source src={ video } type='video/mp4'/>
        </video>
          <Link to='/' className='brand'>Yummy&Healthy</Link>
      </header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipes' element={<Recipes />}></Route>
        <Route path='/nutrition' element={<Nutrition />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
