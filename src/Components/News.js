// News.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Import the CSS file

function News() {
  const [articles, setArticles] = useState([]);
  const apiKey = 'c6aa97ae9a454434b60390de67cb102d'; // Replace with your News API key

  useEffect(() => {
    // Fetch tech news articles from the News API
    axios
      .get(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`)
      .then((response) => {
        const { articles } = response.data;
        setArticles(articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [apiKey]); // Include the API key in the dependency array

  return (
    <div className="news-container">
      <h2 className="news-heading">Tech News</h2>
      <ul className="news-list">
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
