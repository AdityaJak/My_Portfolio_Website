// GitHub.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitHub.css'; // Import the CSS file

function GitHub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub repositories using the GitHub REST API
    axios
      .get('https://api.github.com/users/saimihirj/repos')
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array to fetch data once on component mount

  if (loading) {
    return <div>Loading GitHub data...</div>;
  }

  return (
    <div className="github-container">
      <h2 className="github-heading">GitHub Repositories</h2>
      <ul className="github-list">
        {repos.map((repo) => (
          <li key={repo.id} className="github-item">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHub;
