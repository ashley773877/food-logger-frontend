import { useState} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import HistoryPage from './pages/historyPage.js';
import Navigation from './components/NavBar';
import LogPage from './pages/LogPage.js'; 


function App() {
  const [user, setUser]= useState(null);
  return (
  
     <div className="App">
      <AuthProvider>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Login" element={<LoginPage setUser={setUser} />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route path="/Logs" element={<LogPage user={user} />} />
        <Route path="logout" element={<HomePage />} />

      </Routes>
      </AuthProvider>
    </div> 
   
  );
}

export default App;
