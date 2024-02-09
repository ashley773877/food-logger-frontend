





function Quotes({quote}) {
    console.log(quote)
    return (
        <div>
            <h1> Quotes</h1>
            <h2>{quote.text}</h2>
            <h3>{quote.author}</h3>
         
        </div>
    );
}


export default Quotes