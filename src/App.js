//import {useEffect, useState} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import HistoryPage from './pages/historyPage.js';
import Navigation from './components/NavBar';
import LogPage from './pages/LogPage.js'; 

function App() {
  return (
  
     <div className="App">

    
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route path="/Logs" element={<LogPage />} />

      </Routes>

    </div> 
   
  );
}

export default App;
