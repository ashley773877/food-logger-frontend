import {useEffect, useState} from 'react'
import Quotes from './Quotes'




function QuotesList() {
    const [quotes, setQuotes] = useState([])
  useEffect(() => {
    const fetchData = async() => {
  
     const res = await fetch('https://type.fit/api/quotes')
     const data = await res.json()
      console.log(data)
      setQuotes(data) 
     }
    
    fetchData()
  }, []);
    return (
        <footer>
          
          
            {quotes && <Quotes quote={quotes[13]} />}
        </footer>
    );
}


export default QuotesList;