import { useState } from "react";
import "./SearchQuote.css"; // Import the CSS file for styling

function SearchQuote() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchForTerms = (term) => {
    if (term.trim() === "") {
      setSearchResults([]);
    } else {
      fetch(
        `https://delniaalipour-quote-server.glitch.me/quotes/search?term=${term}`
      )
        .then((response) => response.json())
        .then((data) => setSearchResults(data));
    }
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    searchForTerms(term);
  };

  return (
    <div className="search-quote-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter a search term"
      />
      {searchResults.length > 0 && searchTerm.trim() !== "" && (
        <div className="search-results">
          <h3>Search Results:</h3>
          {searchResults.map((quote, index) => (
            <div className="quote-item" key={index}>
              <p>"{quote.quote}"</p>
              <p>- {quote.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchQuote;
