// ContactMe.js
import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-me">
      <div className="contact-me-content">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to get in touch, feel free to reach out:</p>
        <ul>
          <li>Email: <a href="mailto:adityajak02@gmail.com">Gmail</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/adithya-jakkaraju-a145b884/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          <li>GitHub: <a href="https://github.com/AdityaJak" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
          <li>Twitter: <a href="https://twitter.com/AdityaJak_" target="_blank" rel="noopener noreferrer">Twitter Profile</a></li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMe;
