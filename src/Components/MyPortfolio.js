// MyPortfolio.js
import React from 'react';
import './MyPortfolio.css';

const MyPortfolio = () => {
  return (
    <section className="my-portfolio">
      <div className="portfolio-content">
        <h2>My Portfolio</h2>
        <div className="portfolio-item">
          <h3>Low Birth Weight Prediction</h3>
          <p>
          Low birth weight in newborns is a critical health concern, and this project aims to create a predictive model to help identify babies at risk. By analyzing data related to the parents, we can provide valuable insights and early warning indicators to healthcare professionals.
          </p>
          <a href="https://github.com/AdityaJak/Low_Birth_Weight_Prediction">View Project</a>
        </div>
        <div className="portfolio-item">
          <h3>Dr.Strange App</h3>
          <p>
          Dr. Strange is a Windows/MacOS platform Modern C++ application, it is an application for doctors/nurses to keep their patients' information and share that information with other doctors. It can share patient information and possibly save lives in emergency cases. Moreover, it helps improve patient management in big hospital networks by minimizing new patient registration efforts.
          </p>
          <a href="https://github.com/AdityaJak/Dr.Strange_App">View Project</a>
        </div>
        <div className="portfolio-item">
          <h3>Bike Sharing Research</h3>
          <p>
          Bike sharing has become a popular mode of transportation in many cities around the world. In London, bike sharing is also gaining popularity, and this research aims to understand the factors that impact the demand for bike sharing in the city. This research will use a dataset of bike sharing records in London to identify the key factors that influence bike sharing demand.
          </p>
          <a href="https://github.com/AdityaJak/Bike_Sharing#bike_sharing">View Project</a>
        </div>
        <div className="portfolio-item">
          <h3>Heart Failure Prediction</h3>
          <p>
          A project focused on predicting heart failure in patients based on clinical features using various linear models and their variants. We will explore the relationship between key clinical features and the likelihood of heart failure in patients.
          </p>
          <a href="https://github.com/AdityaJak/Heartfailure_Prediction">View Project</a>
        </div>
        <div className="portfolio-item">
          <h3>Chinese Zodiac Webpage</h3>
          <p>
          The Chinese Zodiac Webpage is a simple web application that allows users to find the corresponding Chinese zodiac animal symbol based on a four-digit numerical year input. It also provides information about each zodiac animal.
          </p>
          <a href="https://github.com/AdityaJak/Chinese_Zodiac">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
