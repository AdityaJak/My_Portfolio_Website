// Quotes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotes.css'; // Import the CSS file

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // Fetch a random quote from the Quotable API
    axios
      .get('https://api.quotable.io/random')
      .then((response) => {
        const { content, author } = response.data;
        setQuote(content);
        setAuthor(author);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  }, []); // Empty dependency array to fetch the quote once on component mount

  return (
    <div className="quotes-container">
      <h2>Random Quote</h2>
      <blockquote>
        <p className="quote-text">{quote}</p>
        <footer className="author-text">{author}</footer>
      </blockquote>
    </div>
  );
}

export default Quotes;
