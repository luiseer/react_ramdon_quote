import React from "react";



const Quote = ({quote, author, changeQuote, color}) => {
    return (
        <div className="quote">
            <h2 style={{color}}><i style={{color}} className="fas fa-quote-left"></i>{quote}</h2>
            <p style={{color}}>{author}</p>
             <button onClick={changeQuote} style={{color}}><i className="fas fa-arrow-circle-right"></i></button>
        </div>
        
    )
}


export default Quote;
