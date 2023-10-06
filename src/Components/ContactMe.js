// ContactMe.js

import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-me">
      <div className="contact-me-content">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to get in touch, feel free to reach out:</p>
        <ul className="contact-list">
          <li>
            <a href="mailto:adityajak02@gmail.com">
              <img src="email-icon.png" alt="Email" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adithya-jakkaraju-a145b884/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AdityaJak" target="_blank" rel="noopener noreferrer">
              <img src="/github-icon.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AdityaJak_" target="_blank" rel="noopener noreferrer">
              <img src="/twitter-icon.png" alt="Twitter" />
            </a>
          </li>
        </ul>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6005767865725!2d-71.10690338461012!3d42.35028957918661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x1d0e85dd8c006993!2sBoston%20University!5e0!3m2!1sen!2sus!4v1609978936727!5m2!1sen!2sus"
            title="Map"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
