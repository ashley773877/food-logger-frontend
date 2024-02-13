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
        <div>
            <h1>Quotes List</h1>
            {/* {quotes && quotes.map((quote) => 
                 <Quotes quote={quote} key={quote.id} /> )
            }  */}
            {quotes && <Quotes quote={quotes[0]} />}
        </div>
    );
}


export default QuotesList;