

const QuoteCard = (quote) => {
return (
    <>
    <p>
    {quote[0].character}
    </p>
    <p>
    {quote[0].quote}
    </p>
    <p>
    <img src={quote[0].image} alt="Simpsons Character"></img>
    </p>
    
    </>
)
}

export default QuoteCard