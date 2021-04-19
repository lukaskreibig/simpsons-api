const QuoteCard = ({ character, quote, image }) => {
  return (
    <>
      <p>{character}</p>

      <p>{quote}</p>

      <p>
        <img src={image} alt="Simpsons Character"></img>
      </p>
    </>
  );
};

export default QuoteCard;
