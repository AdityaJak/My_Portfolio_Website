import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';
import MapChart from './MapChart';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = '6e5b709dcbb79a3f741f83ec31953deb'; // Replace with your OpenWeatherMap API key
  const isMobile = window.innerWidth <= 767; // Check if the screen width is less than or equal to 767px

  // Define the cities array with the best states for software engineers
  const cities = [
    { name: 'California', id: 'CA' },
    { name: 'Washington', id: 'WA' },
    { name: 'Texas', id: 'TX' },
    { name: 'New York', id: 'NY' },
    { name: 'Massachusetts', id: 'MA' },
    { name: 'North Carolina', id: 'NC' },
    { name: 'Colorado', id: 'CO' },
    { name: 'Utah', id: 'UT' },
    { name: 'Virginia', id: 'VA' },
    { name: 'Georgia', id: 'GA' },
    { name: 'Oregon', id: 'OR' },
    { name: 'Michigan', id: 'MI' },
  ];

  useEffect(() => {
    const requests = cities.map((cityInfo) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInfo.name}&appid=${API_KEY}&units=metric`
      )
    );

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response, index) => ({
          ...response.data,
          id: cities[index].id,
        }));
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [API_KEY]);

  const renderWeatherInfo = () => {
    if (weatherData.length === 0) {
      return null;
    }

    return weatherData.map((stateWeather) => (
      <div className="weather-card" key={stateWeather.id}>
        <h3>{stateWeather.name}</h3>
        <p>Temperature: {stateWeather.main.temp}°C</p>
        <p>Condition: {stateWeather.weather[0].main}</p>
        <p className="weather-suggestion">
          {getWorkLocationSuggestion(stateWeather.weather[0].main)}
        </p>
      </div>
    ));
  };

  const getWorkLocationSuggestion = (weatherCondition) => {
    // Define humorous work location suggestions based on weather
    const suggestions = {
      Clear: 'Looks like a perfect day to work in the open air!',
      Rain: 'Stay productive indoors and avoid getting wet!',
      Snow: 'Work from a cozy cabin and enjoy the snow!',
      Clouds: 'Stay comfortable indoors and focus on your tasks!',
      Thunderstorm: 'Work from home to avoid the thunder and lightning!',
      Default: 'Enjoy the weather while being productive!',
    };

    return suggestions[weatherCondition] || suggestions.Default;
  };

  return (
    <section className="weather-container">
      <h2 className="weather-heading">Workplace Preference According To Weather Conditions</h2>
      <div className="weather-map">
        {/* Replace the map here */}
        <MapChart />
        {renderWeatherInfo()}
      </div>
    </section>
  );
};

export default Weather;
