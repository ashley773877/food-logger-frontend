





function Quotes({quote}) {
    console.log(quote)
    return (
        <footer>
          
            <h2>{quote?.text}</h2>
            <h3>{quote?.author}</h3>
         
        </footer>
    );
}


export default Quotes