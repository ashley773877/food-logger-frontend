//import {useEffect, useState} from 'react'
import './App.css';
import QuotesList from './components/QuotesList';


function App() {
  return (
    <div className="App">
      <h1> Fitness Food Logger</h1>
   <QuotesList /> {/* remember when you add your homepage component here to remove this quoteslist */}
    </div>
  );
}

export default App;
