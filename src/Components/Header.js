// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCursor from './AnimatedCursor';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <Link to="/about" className="header-logo-link">
            <span className="header-logo-initials" title="AJ">
              AJ
            </span>
            <span className="header-logo-fullname" title="Adithya Jakkaraju">
              Adithya Jakkaraju
            </span>
          </Link>
        </div>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">My Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="100, 255, 150"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
    </header>
  );
};

export default Header;
