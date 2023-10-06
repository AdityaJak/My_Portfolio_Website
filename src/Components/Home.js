import React from 'react';
import Weather from './Weather';
import ImageGallery from './ImageGallery';
import GitHub from './GitHub';
import Quotes from './Quotes';
import News from './News';
import AnimatedCursor from './AnimatedCursor'; // Import AnimatedCursor

const Home = () => {
  return (
    <div className="home">
      {<AnimatedCursor
  color="100, 255, 150" // RGB color values
  outerAlpha={0.4} // Outer cursor alpha transparency
  innerSize={15} // Inner cursor size in pixels
  innerScale={0.7} // Inner cursor scale amount
  outerSize={15} // Outer cursor size in pixels
  outerScale={5} // Outer cursor scale amount
  trailingSpeed={8} // Trailing speed (adjust as needed)
  clickables={['a', 'button']} // Array of clickable selectors
/>
}
      <AnimatedCursor />

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
