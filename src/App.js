import "./App.css";
import Quote from './components/QuoteBox'
import quotes from './quotes.json'
import { useState } from "react";



 function App() {

  const colors = [
    '#35C2E5',
    '#C174D4',
    '#5EBBD3',
    '#D48C4A',
    '#A0D455'
  ]

  const [quote, setQuote] = useState(quotes[getNumber(quotes.length)]);
  const [background, setBackground] = useState(colors[getNumber(colors.length)])

  const handelQuote = () => {
    const index = getNumber(quotes.length)
    setQuote(quotes[index])
    setBackground(colors[getNumber(colors.length)])
  }

   return(
     <>
      <div className="card" style={{background}}>
        <Quote
          quote={quote.quote}
          author={quote.author}
          changeQuote={handelQuote}
          color={background}
        /> 
      </div>        
     </>
   )
 };

 const getNumber = max => Math.floor(Math.random() * max);

export default App;
