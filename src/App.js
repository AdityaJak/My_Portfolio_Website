// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Header from './Components/Header'; 
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import MyPortfolio from './Components/MyPortfolio';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Wrap Home component with Route */}
            <Route path="/about" element={<AboutMe />} /> {/* Wrap AboutMe component with Route */}
            <Route path="/portfolio" element={<MyPortfolio />} /> {/* Wrap MyPortfolio component with Route */}
            <Route path="/contact" element={<ContactMe />} /> {/* Wrap ContactMe component with Route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
