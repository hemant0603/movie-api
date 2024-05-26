import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import './index.css';
const App = () => (
  
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Movies/>} />
        <Route path="/favorites" element = {<Favorites/>} />
      </Routes>
    </div>

);

export default App;
