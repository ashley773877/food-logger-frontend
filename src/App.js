//import {useEffect, useState} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import historyPage from './pages/historyPage';
import logPage from './pages/LogPage';

function App() {
  return (
  
     <div className="App">
   
      <h1> EverDiet</h1>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/History" element={<historyPage />} />
      <Route path="/logs" element={<logPage />} />
     
    </Routes>
    
     
    </div>
  );
}

export default App;
