import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCursor from './AnimatedCursor'; // Import the AnimatedCursor component
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="100, 255, 150" // Use the color you want
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">My Portfolio</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
