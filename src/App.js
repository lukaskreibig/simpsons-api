import './App.css';
import QuoteCard from './components/QuoteCard'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [Quote, setQuote] = useState({"quote":"In theory, Communism works! In theory.","character":"Homer Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939","characterDirection":"Right"});

  

  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setQuote(data)
      })
    }

    useEffect(getQuote, [])
    // console.log(Quote[0].quote)
    // console.log(Quote[0].character)

  return (
    
    <div className="App">
      <QuoteCard {...Quote[0]} />
      <button type="button" onClick={getQuote}>New Quote</button>
    </div>
  );
}

export default App;
