//import {useEffect, useState} from 'react'
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1> EverDiet</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
   
    </div>
  );
}

export default App;
