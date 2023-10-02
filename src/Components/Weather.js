import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = '6e5b709dcbb79a3f741f83ec31953deb'; // Replace with your OpenWeatherMap API key

  // Define the cities array
  const cities = [
    { name: 'New York', id: 5128581, position: { top: '20%', left: '15%' } },
    { name: 'Los Angeles', id: 5368361, position: { top: '45%', left: '10%' } },
    { name: 'Chicago', id: 4887398, position: { top: '22%', left: '27%' } },
    { name: 'Houston', id: 4699066, position: { top: '50%', left: '27%' } },
    { name: 'Phoenix', id: 5308655, position: { top: '30%', left: '10%' } },
    { name: 'Philadelphia', id: 4560349, position: { top: '25%', left: '22%' } },
    { name: 'San Antonio', id: 4726206, position: { top: '52%', left: '32%' } },
    { name: 'San Diego', id: 5391811, position: { top: '42%', left: '12%' } },
    { name: 'Dallas', id: 4684888, position: { top: '38%', left: '35%' } },
    { name: 'San Jose', id: 5392171, position: { top: '44%', left: '15%' } },
  ];

  useEffect(() => {
    const requests = cities.map((cityInfo) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityInfo.id}&appid=${API_KEY}&units=metric`
      )
    );

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response, index) => ({
          ...response.data,
          position: cities[index].position,
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

    return weatherData.map((city) => (
      <div
        className="weather-card"
        key={city.id}
        style={{ top: city.position.top, left: city.position.left }}
      >
        <h3>{city.name}</h3>
        <p>Temperature: {city.main.temp}°C</p>
        <p>Condition: {city.weather[0].main}</p>
        <p className="weather-suggestion">
          {getWorkLocationSuggestion(city.weather[0].main)}
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
      <h2 className="weather-heading">Current Weather in the United States</h2>
      <div className="weather-map">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Blank_US_Map_%28states_only%29.svg"
          alt="United States Map"
          className="us-map"
        />
        {renderWeatherInfo()}
        {/* Placeholders */}
        {cities.map((cityInfo) => (
          <div
            className="weather-placeholder"
            key={cityInfo.id}
            style={{ top: cityInfo.position.top, left: cityInfo.position.left }}
          >
            {cityInfo.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Weather;
