// MyPortfolio.js
import React from 'react';
import './MyPortfolio.css';

const MyPortfolio = () => {
  return (
    <section className="my-portfolio">
      <div className="portfolio-content">
        <h2>My Portfolio</h2>
        <div className="portfolio-item">
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam
            vel metus dignissim faucibus.
          </p>
          <a href="#">View Project</a>
        </div>
        <div className="portfolio-item">
          <h3>Project 2</h3>
          <p>
            Proin ac bibendum purus. Fusce et mi eu sapien tincidunt bibendum. Aenean
            vel est nec sem bibendum hendrerit a sit amet turpis.
          </p>
          <a href="#">View Project</a>
        </div>
        <div className="portfolio-item">
          <h3>Project 3</h3>
          <p>
            Sed id neque non est tincidunt vulputate in non ligula. Sed eu viverra
            ligula. Fusce congue massa ac est luctus, non eleifend mi efficitur.
          </p>
          <a href="#">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
