// Home.js
import React from 'react';
import Weather from './Weather';
import ImageGallery from './ImageGallery';
import GitHub from './GitHub';
import Quotes from './Quotes';
import News from './News';

const Home = () => {
  return (
    <div className="home">
      <section className="section">
        <Weather />
      </section>

      <section className="section">
        <ImageGallery />
      </section>

      <section className="section">
        <GitHub />
      </section>

      <section className="section">
        <Quotes />
      </section>

      <section className="section">
        <News />
      </section>
    </div>
  );
};

export default Home;
