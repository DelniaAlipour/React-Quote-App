import React, { useEffect, useState } from "react";
import "./Quote.css"; // Import the CSS file for styling

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    fetch("https://delniaalipour-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  return (
    <div className="quote-container">
      {quote && (
        <div className="quote-item">
          <p>"{quote.quote}"</p>
          <p>- {quote.author}</p>
        </div>
      )}
      <button className="quote-button" onClick={fetchRandomQuote}>
        Get new quote
      </button>
    </div>
  );
}

export default Quote;
