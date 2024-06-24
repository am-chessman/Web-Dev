import { useState } from 'react';
import './App.css';
import quotesList from './quotes';

function App() {
  const getRandomQuote = () => {
    return quotesList[Math.floor(Math.random() * quotesList.length)];
  };

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  const handleNextQuote = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <main className="body-container">
      <div className="quote-holder">
        <p className="quote">
          {currentQuote.quote}
        </p>
        <div className="author-and-btn">
          <p className="author">
            {currentQuote.author}
          </p>
          <button onClick={handleNextQuote}>
            Next quote
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
